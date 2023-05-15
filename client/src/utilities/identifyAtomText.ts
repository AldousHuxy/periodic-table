import { Atom } from "../components/Element/Element"

export const identifyAtomText = (atoms: Atom[], text: string|undefined): Atom|undefined => {
    let identifiedAtom: Atom|undefined = undefined

    if (text != undefined) {
        atoms.forEach(atom => {
            const symbol: string = atom.symbol.toLowerCase()
            if (symbol === text) {
                identifiedAtom = atom
            }
        })
    }

    return identifiedAtom
}
