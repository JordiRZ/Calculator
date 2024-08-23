import { Operation } from '../models/Operation.js';

export const performOperation = async (req, res) => {
    const { username, operand1, operand2, operand3 } = req.body;

    if (!operand1 || !operand2) {
        return res.status(400).json({ error: 'Operand 1 y Operand 2 son obligatorios.' });
    }

    let calcResult;

    if (!isNaN(operand1) && !isNaN(operand2) && (operand3 === '' || !isNaN(operand3))) {
        const num1 = parseFloat(operand1);
        const num2 = parseFloat(operand2);
        const num3 = operand3 !== '' ? parseFloat(operand3) : 0;
        calcResult = (num1 + num2 + num3).toString();
    } else {
        calcResult = operand1 + operand2 + operand3;
    }

    try {
        const previousOperation = await Operation.findOne({ operand1, operand2, operand3 });

        if (previousOperation) {
            return res.json({ 
                result: `${calcResult} (ya realizado por: ${previousOperation.username})`,
                previousUser: previousOperation.username
            });
        }

        const newOperation = new Operation({
            username,
            operand1,
            operand2,
            operand3,
            result: calcResult
        });

        await newOperation.save();
        res.json({ result: calcResult });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};