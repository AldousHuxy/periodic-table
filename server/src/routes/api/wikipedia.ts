import axios from 'axios';
import express, { Request, Response, NextFunction } from 'express';
import { AnyNode, load } from 'cheerio';

export const router = express.Router()

// [GET] - wikipedia
type html = string|AnyNode|AnyNode[]|Buffer
router.get('/', (req: Request, res: Response, next: NextFunction) => {
    axios('https://en.wikipedia.org/w/api.php?action=parse&page=Carbon_dioxide&format=json')
        .then(response => {
            const title: string = response.data.parse.title as string
            const html: html = Object.values(response.data.parse.text)[0] as html
            const $ = load(html)

            res.send($.html())
        })
})