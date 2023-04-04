import { Response } from 'express';
import { handleHttp } from '../utils/error.handle';
import { RequestExt } from '../interfaces/req-ext';

const getItems = (req: RequestExt, res: Response) => {
    try {
        res.send({
            'message': 'getOrders, solo lo ven los usuarios autenticados con JWT válido',
            'user': req?.user
        })
    } catch(error) {
        handleHttp(res, "ERROR_GET_ORDERS");
    }
}

export { getItems };