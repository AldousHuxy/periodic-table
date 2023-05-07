import { Atom, Element } from '../../components/Element/Element';
import { Button, Container, Form, InputGroup } from 'react-bootstrap';
import { reorderAtoms } from '../../utilities/reorderAtoms';
import './periodicTable.scss';
import { useRef } from 'react';

type PeriodicTableProps = {
    atoms: Atom[]
}

export const PeriodicTable = ({ atoms }: PeriodicTableProps) => {
    const phaseRef = useRef<boolean>(false)

    return (
        <Container className="mt-2 py-2 bg-light">
            <div className="periodic-table-container">
                {!atoms ? 'Loading...' : reorderAtoms(atoms).map((atom: Atom) => {
                    return (
                        <Element key={atom.number} atom={atom} />
                    )
                })}
            </div>
            <InputGroup className="mt-3">
                <Button variant="outline-secondary" id="button-addon1">Evaluate</Button>
                <Form.Control type="text" />
                <InputGroup.Text>State:</InputGroup.Text>
                <InputGroup.Checkbox id="state" ref={phaseRef} />
            </InputGroup>
        </Container>
    )
}