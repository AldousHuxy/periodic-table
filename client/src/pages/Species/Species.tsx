import { Card, Container, Form, Stack } from 'react-bootstrap';
import molecules from '../../data/molecules.json';

export const Species = () => {
    return (
        <Container>
            <h1 className="text-center">Species</h1>
            <Form>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Control type="text" placeholder="Search By Name..." />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formula">
                    <Form.Control type="text" placeholder="Search By Formula..." />
                </Form.Group>
            </Form>
            <Stack direction="horizontal" gap={5}>
                {molecules.map(molecule => {
                    return (
                        <Card style={{ width: '18rem' }}>
                            <Card.Header>
                                <Card.Title>{molecule.name}</Card.Title>
                                <Card.Subtitle>{molecule.formula}</Card.Subtitle>
                            </Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    <div>CAS Number: {molecule.casNumber}</div>
                                    <div>Molar Mass: {molecule.molarMass}</div>
                                    <div>Shape: {molecule.shape}</div>
                                    <div>Appearance: {molecule.appearance}</div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    )
                })}
            </Stack>
        </Container>
    )
}
