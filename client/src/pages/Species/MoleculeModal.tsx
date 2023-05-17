import { Button, Form, Modal } from "react-bootstrap"
import { Atom } from "../../components/Element/Element"

type MoleculeProps = {
    show: boolean
    handleClose: () => void
    atoms: Atom[]
}

export const MoleculeModal = ({ show, handleClose, atoms }: MoleculeProps) => {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add Molecule</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="casNumber">
                        <Form.Control type="text" placeholder="Enter CAS Number..." />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="name">
                        <Form.Control type="text" placeholder="Enter Molecule Name..." />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formula">
                        <Form.Control type="text" placeholder="Enter Formula..." />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="molarMass">
                        <Form.Control type="text" placeholder="Enter Molar Mass..." />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Close</Button>
                <Button variant="primary" onClick={handleClose}>Save Changes</Button>
            </Modal.Footer>
        </Modal>
    )
}
