import { Container } from 'react-bootstrap';
import { Atom, Element } from '../../components/Element/Element';
import './periodicTable.scss';

type PeriodicTableProps = {
    atoms: Atom[]
}

export const PeriodicTable = ({ atoms }: PeriodicTableProps) => {
    return (
        <Container className="mt-2">
            <div className="periodic-table-container">
                {!atoms ? 'Loading...' : atoms.map((atom: Atom) => {
                    return (
                        <Element key={atom.number} atom={atom} />
                    )
                })}
            </div>
        </Container>
    )
}
