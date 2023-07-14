import { Atom } from "../components/Element/Element"

const diatoms: string[] = ['H', 'N', 'O', 'F', 'Cl', 'I', 'Br']
enum State { SOLID = '₍ₛ₎', LIQUID = '₍ₗ₎', GAS = '₍₉₎' }

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
                    evaluation.push(`${(matches > 2) ? (matches / 2) : ''}${symbol}₂`)
                } else {
                    evaluation.push(`${symbol}${(matches > 1) ? ` + ${(matches > 3) ? (matches - 1 / 2) : ''}${symbol}₂` : ''}`)
                }
            } else {
                evaluation.push(`${(matches > 1) ? matches : ''}${symbol}`)
            }
            matches = 1
        }
    })

    return evaluation.join(' + ')
}

export const displayPreview = (atoms: Atom[], showState: boolean|((value: boolean) => void), showSubstrate: boolean|((value: boolean) => void)) => {
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
                    evaluation.push(`${matches > 2 ? matches / 2 : ''}${symbol}₂${getSymbolState(atoms, symbol, showState)}`)
                } else {
                    evaluation.push(`${symbol}${getSymbolState(atoms, symbol, showState)}${(matches > 1) ? ` + ${(matches > 3) ? ((matches - 1) / 2) : ''}${symbol}₂${getSymbolState(atoms, symbol, showState)}` : ''}`)
                }
            } else {
                evaluation.push(`${(matches > 1) ? matches : ''}${symbol}${getSymbolState(atoms, symbol, showState)}`)
            }
            matches = 1
        }
    })

    return (
        <p>{evaluation.join(' + ')}{showSubstrate ? ` → ${evaluation.join('')}` : ''}</p>
    )
}

const getSymbolState = (atoms:Atom[], symbol: string, show: boolean|((value: boolean) => void)): State|string => {
    let state: State|string = ''

    if (show) {
            atoms.forEach(atom => {
            if (atom.symbol === symbol) {
                switch (atom.phase) {
                    case 'Solid':
                        state = State.SOLID
                        break;
                    case 'Liquid':
                        state = State.LIQUID
                        break;
                    case 'Gas':
                        state = State.GAS
                        break;
                
                    default:
                        break;
                }
            }
        })
    }

    return state
}