import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    // empid: {
    //     type: Object,
    //     default: ''
    // },
    name: {
        type: String,
        default: ''
    },
    email: {
        type: String,
        default: ''
    },
    // aadhaar: {
    //     type: Number,
    //     default: ''
    // },
    Phone:{
        type : Number,
        default: ''
    },
    avatar: {
        type: String,
        default: ''
    }
});

const User = mongoose.model('User', userSchema);

export default User;
