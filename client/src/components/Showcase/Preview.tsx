import { Card } from "react-bootstrap"
import { displayPreview } from "../../utilities/writeEvaluation"

type PreviewProps = {
    display: string[]
    showState: boolean
}

export const Preview = ({ display, showState }: PreviewProps) => {
    return (
        <Card className="mt-3 text-center">{(display.length === 0) ?  'Preview' : displayPreview(display, showState)}</Card>
    )
}
