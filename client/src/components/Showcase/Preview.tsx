import { Card } from "react-bootstrap"
import { displayPreview } from "../../utilities/writeEvaluation"
import { Atom } from "../Element/Element"

type PreviewProps = {
    display: Atom[]
    showState: boolean
}

export const Preview = ({ display, showState }: PreviewProps) => {
    return (
        <Card className="mt-3 text-center bg-light" style={{ height: '40px' }}>
            {(display.length === 0) ? '' :  <h3>{`${displayPreview(display, showState)}`}</h3>}
        </Card>
    )
}
