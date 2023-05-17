import { Atom } from "../components/Element/Element"

const diatoms: string[] = ['H', 'N', 'O', 'F', 'Cl', 'I', 'Br']

export const writeEvaluation = (atoms: Atom[]): string => {
    const symbols: string[] = atoms.map(atom => atom.symbol)
    let evaluation: string[] = []
    let matches: number = 1
    
    // ['H', 'H', 'H', 'B', 'B', 'H', 'H', 'H', 'H', 'O']
    // H + H2  + 2B + 2H2 + O
    symbols.forEach((symbol, index) => {
        // CONDITION: matches found
        if (symbols[index + 1] === symbol) {
            matches++

        // CONDITION: no matches found
        } else {
            // CONDITION: diatom found
            if (diatoms.includes(symbol) && matches > 1) {
                if (matches % 2 === 0) {
                    evaluation.push(`${matches > 2 ? matches / 2 : ''}${symbol}2`)
                } else {
                    evaluation.push(`${symbol}${(matches > 1) ? ` + ${(matches > 3) ? ((matches - 1) / 2) : ''}${symbol}2` : ''}`)
                }
            } else {
                evaluation.push(`${(matches > 1) ? matches : ''}${symbol}`)
            }
            matches = 1
        }
    })

    return evaluation.join(' + ')
}

export const displayPreview = (atoms: Atom[], showState: boolean): string => {
    const symbols: string[] = atoms.map(atom => atom.symbol)
    let evaluation: string[] = []
    let matches: number = 1
    
    // ['H', 'H', 'H', 'B', 'B', 'H', 'H', 'H', 'H', 'O']
    // H + H2  + 2B + 2H2 + O
    symbols.forEach((symbol, index) => {
        // CONDITION: matches found
        if (symbols[index + 1] === symbol) {
            matches++

        // CONDITION: no matches found
        } else {
            // CONDITION: diatom found
            if (diatoms.includes(symbol) && matches > 1) {
                if (matches % 2 === 0) {
                    evaluation.push(`${matches > 2 ? matches / 2 : ''}${symbol}2`)
                } else {
                    evaluation.push(`${symbol}${(matches > 1) ? ` + ${(matches > 3) ? ((matches - 1) / 2) : ''}${symbol}2` : ''}`)
                }
            } else {
                evaluation.push(`${(matches > 1) ? matches : ''}${symbol}`)
            }
            matches = 1
        }
    })

    return evaluation.join(' + ')
}