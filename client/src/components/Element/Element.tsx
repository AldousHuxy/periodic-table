import './element.scss';

export type Atom = {
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
    shells: number[]
    electronConfiguration: string
    electronConfigurationSemantic: string
    electronAffinity: number
    electronegativityPauling: number
    ionizationEnergies: number[]
    cpkHex: string
    image: { title: string, url: string, attribution: string }
    block: string
}

type ElementProps = {
    atom: Atom
}

export const Element = ({ atom }: ElementProps) => {
    return (
        <div
            className={`atom ${atom.name.toLowerCase()} ${atom.category.replace(' ', '-').toLowerCase()} ${atom.block}`}
        >
            <div className="atomic-num">{atom.number}</div>
            <div className="symbol">{atom.symbol}</div>
            <div className="name">{atom.name}</div>
            <div className="atomic-mass">{atom.atomicMass.toFixed(2)}</div>
        </div>
    )
}
