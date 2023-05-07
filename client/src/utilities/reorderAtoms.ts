import { Atom } from "../components/Element/Element"

export const reorderAtoms = (atoms: Atom[]): Atom[] => {  
    const lanthanides: Atom[] = atoms.filter(atom => atom.category == 'lanthanide')
    const actinides: Atom[] = atoms.filter(atom => atom.category === 'actinide')
    const everythingElse: Atom[] = atoms.filter(atom => {
        return (atom.category !== 'lanthanide' && atom.category !== 'actinide')
    })

    let orderedAtoms: Atom[] = [...everythingElse, ...lanthanides, ...actinides]

    return orderedAtoms
}