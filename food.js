import { Schema, model } from 'mongoose';

const FoodSchema = newSchema({
    name: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true
    },
    location: {
        type: Schema.Types.ObjectId,
        ref: 'Location'
    }
});

const Food = model('food', FoodSchema);

export default Food;