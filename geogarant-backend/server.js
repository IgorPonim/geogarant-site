const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Подключение к MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB подключена'))
  .catch(err => console.error('Ошибка подключения MongoDB:', err));

// Маршруты
const requestRoutes = require('./routes/requestRoutes');
app.use('/api', requestRoutes);

// Тестовый маршрут
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Сервер работает' });
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});