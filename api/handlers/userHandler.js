import { createUser } from '../controllers/userController.js';

export const registerUserHandler = (req, res) => {
    return createUser(req, res);
};