import { Card, Col, Row } from "react-bootstrap"
import { Atom } from "../Element/Element"

type ShowcaseProps = {
    atom: Atom|undefined
}

export const Showcase = ({ atom }: ShowcaseProps) => {
    return (
        <Card className="showcase bg-light">
            <Card.Header>
                <Card.Title>{!atom ? '' : atom.name}</Card.Title>
            </Card.Header>
            <Card.Body>
                <Card.Subtitle>{!atom ? '' : `${atom.number} -`} {!atom ? '' : atom.name}{!atom ? '' : ` [${atom.symbol}]`}</Card.Subtitle>
                <Row className="mt-2">
                    <Col><small>{!atom ? '' : `Atomic Weight: ${atom.atomicMass} amu`}</small></Col>
                    <Col><small>{!atom ? '' : `Melting Point: ${atom.melt} °C`}</small></Col>
                    <Col><small>{!atom ? '' : `Block: ${atom.block}`}</small></Col>
                </Row>
                <Row>
                    <Col><small>{!atom ? '' : `Electron Affinity: ${atom.electronAffinity} kJ/mol`}</small></Col>
                    <Col><small>{!atom ? '' : `Boiling Point: ${atom.boil} °C`}</small></Col>
                    <Col><small>{!atom ? '' : `Group: ${atom.group}`}</small></Col>
                </Row>
                <Row>
                    <Col><small>{!atom ? '' : `Molar Heat: ${atom.molarHeat} J/kgK`}</small></Col>
                    <Col><small>{!atom ? '' : `Configuration: ${atom.electronConfiguration}`}</small></Col>
                    <Col><small>{!atom ? '' : `Period: ${atom.period}`}</small></Col>
                </Row>
            </Card.Body>
        </Card>
    )
}
