import { Atom, Element } from '../../components/Element/Element';
import { Button, Container, Form, InputGroup } from 'react-bootstrap';
import { Showcase } from '../../components/Showcase/Showcase';
import { reorderAtoms } from '../../utilities/reorderAtoms';
import './periodicTable.scss';
import { FormEvent, useRef, useState } from 'react';
import { writeEvaluation } from '../../utilities/writeEvaluation';
import { identifyAtomText } from '../../utilities/identifyAtomText';
import { Preview } from '../../components/Showcase/Preview';
import { MoleculeModal } from '../Species/MoleculeModal';

type PeriodicTableProps = {
    atoms: Atom[]
}

export const PeriodicTable = ({ atoms }: PeriodicTableProps) => {
    const evaluationRef = useRef<HTMLInputElement>(null)
    const [selectedAtom, setSelectedAtom] = useState<Atom|undefined>()
    const [orderedAtoms, setOrderedAtoms] = useState<Atom[]>([])
    const [showState, setShowState] = useState<boolean>(false)
    const [modalOpen, setModalOpen] = useState<boolean>(false)

    const handleTextChange = (e: FormEvent): void => {
        e.preventDefault()
        setSelectedAtom(identifyAtomText(atoms, evaluationRef.current?.value))
    }

    const handleAtomSelect = (atom: Atom): void => {
        setSelectedAtom(atom)
    }

    const handleReset = (): void => {
        setOrderedAtoms([])
        setSelectedAtom(undefined)
    }

    const updateEvaluation = (atom: Atom): void => {
        setOrderedAtoms(curr => [...curr, atom])
    }

    const toggleState = (): void => {
        setShowState(prev => !prev)
    }

    return (
        <Container className="mt-2 py-2">
            <div className="periodic-table-container">
                <Showcase atom={selectedAtom}/>
                {!atoms ? 'Loading...' : reorderAtoms(atoms).map((atom: Atom) => {
                    return (
                        <Element key={atom.number} atom={atom} handleAtomSelect={handleAtomSelect} updateEvaluation={updateEvaluation}/>
                    )
                })}
            </div>
            <Preview display={orderedAtoms} showState={showState} />
            <InputGroup className="mt-3">
                <Button variant="success" onClick={() => setModalOpen(true)}>Evaluate</Button>
                <Form.Control
                    id='evaluationInput'
                    as={'input'}
                    ref={evaluationRef}
                    // value={orderedAtoms ? writeEvaluation(orderedAtoms) : ""}
                    onChange={handleTextChange}
                />
                <InputGroup.Text>State:</InputGroup.Text>
                <InputGroup.Checkbox id="state" onChange={toggleState} />
                <Button variant="outline-danger" onClick={handleReset}>Reset</Button>
            </InputGroup>
            <MoleculeModal show={modalOpen} handleClose={() => setModalOpen(false)} atoms={orderedAtoms} />
        </Container>
    )
}