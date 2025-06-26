require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); 
const authRoutes = require('./routes/auth');
const authMiddleware = require('./middleware/auth');

const app = express();
const PORT = process.env.PORT || 5501; 
const MONGODB_URI = process.env.MONGODB_URI;
const JWT_SECRET = process.env.JWT_SECRET; 

// Middleware
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5501',
    credentials: true
}));

// Подключение к базе данных
mongoose.connect(MONGODB_URI)
    .then(() => console.log('MongoDB connected!'))
    .catch(err => console.error('MongoDB connection error:', err));

// Маршруты
app.get('/', (req, res) => {
    res.send('Backend for your book website is running!');
});

app.use('/api/auth', authRoutes); 

app.get('/api/protected', authMiddleware, (req, res) => {
    res.json({ message: `Welcome, ${req.user.username}! You accessed a protected route.` });
});

// Запускаем сервер
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Visit: http://localhost:${PORT}`);
});
