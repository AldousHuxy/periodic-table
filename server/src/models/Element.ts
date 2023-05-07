import { Schema, model } from 'mongoose';

interface IShell {
    shell: number
}

interface IIonizationEnergies {
    ionizationEnergy: number
}

interface IImage {
    title: string
    url: string
    attribution: string
}

interface IElement {
    name: string
    appearance: string
    atomicMass: number
    boil: number
    category: string
    density: number
    discoveredBy: string
    melt: number
    molarHeat: number
    namedBy: string
    number: number
    period: number
    group: number
    phase: string
    source: string
    bohrModelImage: string
    bohrModel3d: string
    spectralImg: string
    summary: string
    symbol: string
    xPos: number
    yPos: number
    wxPos: number
    wyPos: number
    shells: IShell[]
    electronConfiguration: string
    electronConfigurationSemantic: string
    electronAffinity: number
    electronegativityPauling: number
    ionizationEnergies: IIonizationEnergies[]
    cpkHex: string
    image: IImage
    block: string
}

// create element schema
const elementSchema = new Schema<IElement>({
    name: { type: String, required: false},
    appearance: { type: String, required: false},
    atomicMass: { type: Number, required: false},
    boil: { type: Number, required: false},
    category: { type: String, required: false},
    density: { type: Number, required: false},
    discoveredBy: { type: String, required: false},
    melt: { type: Number, required: false},
    molarHeat: { type: Number, required: false},
    namedBy: { type: String, required: false},
    number: { type: Number, required: false},
    period: { type: Number, required: false},
    group: { type: Number, required: false},
    phase: { type: String, required: false},
    source: { type: String, required: false},
    bohrModelImage: { type: String, required: false},
    bohrModel3d: { type: String, required: false},
    spectralImg: { type: String, required: false},
    summary: { type: String, required: false},
    symbol: { type: String, required: false},
    xPos: { type: Number, required: false},
    yPos: { type: Number, required: false},
    wxPos: { type: Number, required: false},
    wyPos: { type: Number, required: false},
    shells: [{ type: Number, required: false }],
    electronConfiguration: { type: String, required: false},
    electronConfigurationSemantic: { type: String, required: false},
    electronAffinity: { type: Number, required: false},
    electronegativityPauling: { type: Number, required: false},
    ionizationEnergies: [{ type: String, required: false}],
    cpkHex: { type: String, required: false},
    image: {
        title: { type: String, required: false},
        url: { type: String, required: false},
        attribution: { type: String, required: false}
    },
    block: { type: String, required: false},
})

// export element model
export const Element = model<IElement>('Element', elementSchema)