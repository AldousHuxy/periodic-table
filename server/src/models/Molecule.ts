import { Schema, model } from 'mongoose';

// setup molecule interface
interface IMolecule {
    casNumber: string
    name: string
    formula: string
    molarMass: number
}

// create molecule schema
const moleculeSchema = new Schema<IMolecule>({
    casNumber: { type: String, required: true },
    name: { type: String, required: true },
    formula: { type: String, required: true },
    molarMass: { type: Number, required: true }
})

// export molecule model
export const Molecule = model<IMolecule>('Molecule', moleculeSchema)