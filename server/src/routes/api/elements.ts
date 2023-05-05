import { NextFunction, Request, Response, Router } from 'express';
import { Element } from '../../models/Element';
import periodicTable from '../../periodic-table.json';

// setup express router
export const router: Router = Router()

// [GET] all elements
router.get('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        res.json(periodicTable)
    } catch (error: any) {
        res.status(500).json({ message: error.message })
    }
})

// [GET] single element
router.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
    let element
    try {
        element = await Element.findById(req.params.id)
        if (element == null) {
            return res.status(404).json({ message: 'Cannot find element' })
        }
        res.json(element)
    } catch (error: any) {
        return res.status(500).json({ message: error.message })
    }
})