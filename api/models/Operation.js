import mongoose from 'mongoose'

const { Schema, model } = mongoose

const operation = new Schema({
    username: { 
        type: String,
        required: true 
        },
    operand1: { 
        type: String,
        required: true 
        },
    operand2: { 
        type: String, 
        required: true 
    },
    operand3: { 
        type: String 
    },
    result: { 
        type: String,
        required: true 
    },
    createdAt: { 
        type: Date,
        default: Date.now 
    }
})

const Operation = model('Operation', operation)

export { Operation }