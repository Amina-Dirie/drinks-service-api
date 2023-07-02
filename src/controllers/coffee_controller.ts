
import { Request, Response } from 'express';
// ❗ altered import
import * as coffeeService from '../services/coffee_service';

export const getCoffee = async (req: Request<object, object, object, { coffeeName: string  | undefined }>, res: Response ) => {
    const coffeeName = req.query.coffeeName;
    const coffee = coffeeService.getCoffee();
    res.json(coffee).status(200);
    };

    
export const getCoffeeByName = async (req: Request, res: Response) => {
    const coffee = coffeeService.getCoffeeByName(req.params.name);
    res.json(coffee).status(200);
    };