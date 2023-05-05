import { NextFunction, Request, Response, Router } from 'express';
import { Molecule } from '../../models/Molecule';

// setup express router
export const router: Router = Router()

// [GET] all molecules
router.get('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const molecule = await Molecule.find()
        res.json(molecule)
    } catch (error: any) {
        res.status(500).json({ message: error.message })
    }
})

// [GET] single molecule
router.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
    let molecule
    try {
        molecule = await Molecule.findById(req.params.id)
        if (molecule == null) {
            return res.status(404).json({ message: 'Cannot find molecule' })
        }
        res.json(molecule)
    } catch (error: any) {
        return res.status(500).json({ message: error.message })
    }
})

// [POST] new molecule
router.post('/', async (req: Request, res: Response, next: NextFunction) => {
    const molecule = new Molecule({
        casNumber: req.body.casNumber,
        name: req.body.name,
        formula: req.body.formula,
        molarMass: req.body.molarMass
    })
    try {
        const newMolecule = await molecule.save()
        res.status(201).json(newMolecule)
    } catch (error: any) {
        res.status(400).json({ message: error.message })
    }
})

// [PATCH] single molecule
router.patch('/:id', async (req: Request, res: Response, next: NextFunction) => {
    let molecule
    try {
        molecule = await Molecule.findById(req.params.id)

        if (molecule == null) {
            return res.status(404).json({ message: 'Cannot find molecule' })
        }

        if (req.body.casNumber != null) molecule.casNumber = req.body.casNumber
        if (req.body.name != null) molecule.name = req.body.name
        if (req.body.formula != null) molecule.formula = req.body.formula
        if (req.body.molarMass != null) molecule.molarMass = req.body.molarMass

        const updatedMolecule = await molecule.save()
        res.json(updatedMolecule)
    } catch (error: any) {
        return res.status(500).json({ message: error.message })
    }
})

// [DELETE] single molecule
router.delete('/:id', async (req: Request, res: Response, next: NextFunction) => {
    let molecule
    try {
        molecule = await Molecule.findById(req.params.id)
        if (molecule == null) {
            return res.status(404).json({ message: 'Cannot find molecule' })
        }
        await molecule.deleteOne()
        res.json({ message: 'Deleted Subscriber' })
    } catch (error: any) {
        return res.status(500).json({ message: error.message })
    }
})

