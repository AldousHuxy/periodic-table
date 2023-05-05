import { log } from "console";
import { NextFunction, Request, Response } from "express";
import moment from 'moment';

// logger e.g. http://localhost:1359/ptable: 2023-05-04T02:11:27-06:00
export const logger = (req: Request, res: Response, next: NextFunction) => {
    log(`${req.protocol}://${req.get('host')}${req.originalUrl}: ${moment().format()}`)
    next()
}