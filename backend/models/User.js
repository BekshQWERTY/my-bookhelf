const mongoose = require('mongoose');
const bcrypt = require('bcryptjs'); // Для хеширования паролей

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true, 
        trim: true,
        minlength: 3
    },
    email: {
        type: String,
        required: true,
        unique: true, 
        trim: true,
        lowercase: true, // Сохраняет email в нижнем регистре
        match: [/.+@.+\..+/, 'Please fill a valid email address'] 
    },
    password: {
        type: String,
        required: true,
        minlength: 6 // Минимальная длина пароля
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

UserSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        return next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt); 
    next();
});

UserSchema.methods.comparePassword = async function (candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model('User', UserSchema);