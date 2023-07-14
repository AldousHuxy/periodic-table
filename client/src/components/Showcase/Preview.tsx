import { Card } from "react-bootstrap"
import { displayPreview } from "../../utilities/writeEvaluation"
import { Atom } from "../Element/Element"
import { useEffect } from "react"

type PreviewProps = {
    display: Atom[]
    phase: boolean|((value: boolean) => void)
    substrate: boolean
}

export const Preview = ({ display, phase, substrate }: PreviewProps) => {
    return (
        <Card className="mt-3 text-center bg-light" style={{ height: '40px' }}>
            {(display.length === 0) ? '' :  <h3>{displayPreview(display, phase, substrate)}</h3>}
        </Card>
    )
}
