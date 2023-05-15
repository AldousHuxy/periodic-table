import { Card, Col, Row } from "react-bootstrap"
import { Atom } from "../Element/Element"

type ShowcaseProps = {
    atom: Atom|undefined
}

export const Showcase = ({ atom }: ShowcaseProps) => {
    return (
        <Card className="showcase p-2">
            <Card.Title>{!atom ? 'Showcase' : atom.number}</Card.Title>
            <Card.Subtitle>{!atom ? 'Element Name' : atom.name} - [{!atom ? '' : atom.symbol}]</Card.Subtitle>
            <Card.Text>
                <Row>
                    <Col>
                        <div>Atomic Weight: {!atom ? 0 : atom.atomicMass} amu</div>
                        <div>Melting Point: {!atom ? 0 : atom.melt}&deg;C</div>
                        <div>Boiling Point: {!atom ? 0 : atom.boil}&deg;C</div>
                    </Col>
                    <Col>
                        <div>Configuration: {!atom ? '' : atom.electronConfiguration}</div>
                        <div>Electron Affinity: {!atom ? 0 : atom.electronAffinity} kJ/mol</div>
                        <div>Molar Heat: {!atom ? 0 : atom.molarHeat} J/kgK</div>
                    </Col>
                    <Col xs="auto">
                        <div>Block: {!atom ? '' : atom.block}</div>
                        <div>Group: {!atom ? '' : atom.group}</div>
                        <div>Period: {!atom ? '' : atom.period}</div>
                    </Col>
                </Row>
            </Card.Text>
        </Card>
    )
}
