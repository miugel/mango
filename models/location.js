import { Schema, model } from 'mongoose';

const LocationSchema = newSchema({
    name: {
        type: String,
        required: true,
    }
});

const Location = model('location', LocationSchema);

export default Location;