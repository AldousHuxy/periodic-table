import { Atom } from "../components/Element/Element";
import { v4 as uuidV4 } from 'uuid';

type AtomId = string
type AtomWithId = {
    id: AtomId
} & Atom

enum BondType {
    PolarColavent = 'Polar Covalent',
    Covalent      = 'Covalent',
    Ionic         = 'Ionic'
}

enum BondCount {
    None   = 'None',
    Single = 'Single',
    Double = 'Double',
    Triple = 'Triple'
}
type Bond = {
    atom: AtomId
    attached: AtomId
    bondType: BondType
    bondCount: BondCount
    bonds: Bond[]
}

type CenterAtom = {
    atom: AtomId
    bonds: Bond[]
}

export const findMolecule = (atoms: Atom[]) => {
    let isOrganic: boolean = false, molecule: CenterAtom|null = null
    const atomsWithIds: AtomWithId[] = atoms.map(atom => { return { id: uuidV4(), ...atom } })

    // Identify any carbon atoms
    atoms.forEach(atom => { if (atom.name === 'Carbon') isOrganic = true })

    molecule = isOrganic ? findOrganicMolecule(atomsWithIds) : findInorganicMolecule(atomsWithIds)
    
    // if (molecule !== null) console.log(molecule)
}

const findOrganicMolecule = (atoms: AtomWithId[]): CenterAtom|null => {
    // Chiral Center: any tetrahedral carbon atom that has four different substituents is a chiral center
    let chiralCenter: CenterAtom|null = null
    const chiralCenters: AtomWithId[] = atoms.filter((atom) => {
        return (atom.electronegativityPauling === Math.max(...atoms.map(atom => {
            return atom.electronegativityPauling
        })))
    })
    
    if (chiralCenters.length) {
        chiralCenter = { 
            atom: chiralCenters[0].id, 
            bonds: getBonds(chiralCenters[0], atoms.filter((atom) => atom.id !== chiralCenters[0].id))
        }
    }

    return chiralCenter
}

const findInorganicMolecule = (atoms: AtomWithId[]): CenterAtom|null => {
    let mostElectronegativeAtom: CenterAtom|null = null
    const mostElectronegativeAtoms: AtomWithId[] = atoms.filter((atom) => {
        return (atom.electronegativityPauling === Math.max(...atoms.map(atom => {
            return atom.electronegativityPauling
        })))
    })
    
    if (mostElectronegativeAtoms.length) {
        mostElectronegativeAtom = { 
            atom: mostElectronegativeAtoms[0].id, 
            bonds: getBonds(mostElectronegativeAtoms[0], atoms.filter((atom) => atom.id !== mostElectronegativeAtoms[0].id))
        }
    }

    return mostElectronegativeAtom
}

const getBonds = (centerAtom: AtomWithId, otherAtoms: AtomWithId[]): Bond[] => {
    let bonds: Bond[] = []
    const charge: number|null = getCharge(centerAtom.group)
    let bondCount: number = 0
    let otherCount: number = 0

    if (charge !== null) {
        bondCount = charge * -1

        for (let i = 0; i < bondCount; i++) {
            const electrostaticDiff: number = centerAtom.electronegativityPauling - otherAtoms[i].electronegativityPauling
            let bondType: BondType = BondType.Ionic
            const otherCharge: number|null = getCharge(otherAtoms[i].group)
            
            if (otherCharge !== null) {
                otherCount = otherCharge

                // Electronegativity Difference: {<0.2} = polar covalent, {0.2-1.8} = covalent, {>1.8} = ionic
                if (electrostaticDiff < 0.2) {
                    bondType = BondType.PolarColavent
                } else if (electrostaticDiff < 1.8) {
                    bondType = BondType.Covalent
                }

                bonds.push({
                    atom: centerAtom.id,
                    attached: otherAtoms[i].id,
                    bondType,
                    bondCount: getBondCount(otherCount),
                    bonds: getBonds(otherAtoms[i], otherAtoms)
                })
            }
        }
    }
    
    return bonds
}

const getCharge = (group: number): number|null => {
switch (group) {
        case 1:
            return 1
        case 2:
            return 2
        case 13:
            return 3
        case 14:
            return -4
        case 15:
            return -3
        case 16:
            return -2
        case 17:
            return -1
        case 18:
            return 0
        default:
            return null
    }
}

const getBondCount = (count: number): BondCount => {
    switch (count) {
        case 1:
            return BondCount.Single
        case 2:
            return BondCount.Double
        case 3:
            return BondCount.Triple
        default:
            return BondCount.None
    }
}