import { ReactNode, createContext, useContext, useState } from "react"

type EvaluationProviderProps = {
    children: ReactNode
}

type Reactant = {
    id: number
    quantity: number
}

type EvaluationContext = {
    getAtomQuantity: (id: number) => number
    incrementAtom: (id: number) => void
    decrementAtom: (id: number) => void
}

const EvaluationContext = createContext({} as EvaluationContext)

export const useEvaluation = () => {
    return useContext(EvaluationContext)
}

export const EvaluationProvider = ({ children }: EvaluationProviderProps) => {
    const [reactants, setReactants] = useState<Reactant[]>([])

    const getAtomQuantity = (id: number): number => {
        return reactants.find(reactant => reactant.id === id)?.quantity || 0
    }

    const incrementAtom = (id: number): void => {
        setReactants(curr => {
            if (curr.find(reactant => reactant.id == id) == null) {
                return [...curr, { id, quantity: 1 }]
            } else {
                return curr.map(reactant => {
                    if (reactant.id === id) {
                        return { ...reactant, quantity: reactant.quantity + 1 }
                    } else {
                        return reactant
                    }
                })
            }
        })
    }

    const decrementAtom = (id: number): void => {
        setReactants(curr => {
            if (curr.find(reactant => reactant.id == id)?.quantity == 1) {
                return curr.filter(reactant => reactant.id !== id)
            } else {
                return curr.map(reactant => {
                    if (reactant.id === id) {
                        return { ...reactant, quantity: reactant.quantity - 1 }
                    } else {
                        return reactant
                    }
                })
            }
        })
    }

    return (
        <EvaluationContext.Provider 
            value={{
                getAtomQuantity,
                incrementAtom,
                decrementAtom,
            }}
        >
            {children}
        </EvaluationContext.Provider>
    )
}