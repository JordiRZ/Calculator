import { performOperation } from '../controllers/operationController.js';

export const calculateOperationHandler = (req, res) => {
    return performOperation(req, res);
};