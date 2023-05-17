import { ReactNode, createContext, useContext, useState } from "react"

type EvaluationProviderProps = {
    children: ReactNode
}

type EvaluationContext = {}

const EvaluationContext = createContext({} as EvaluationContext)

export const useEvaluation = () => {
    return useContext(EvaluationContext)
}

export const EvaluationProvider = ({ children }: EvaluationProviderProps) => {


    return (
        <EvaluationContext.Provider value={{}}>
            {children}
        </EvaluationContext.Provider>
    )
}