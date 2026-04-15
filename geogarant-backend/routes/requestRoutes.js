const express = require('express');
const router = express.Router();
const Request = require('../models/Request');
const nodemailer = require('nodemailer');

// Настройка отправки писем
const transporter = nodemailer.createTransport({
  service: 'mail.ru',  // или yandex, gmail
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// POST /api/submit-request — новая заявка
router.post('/submit-request', async (req, res) => {
  try {
    const { name, phone, cadastralNumber, message } = req.body;

    // Валидация
    if (!name || !phone) {
      return res.status(400).json({ error: 'Имя и телефон обязательны' });
    }

    // Сохраняем в MongoDB
    const request = new Request({
      name,
      phone,
      cadastralNumber: cadastralNumber || '',
      message: message || ''
    });
    await request.save();

    // Отправляем письмо вам
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: 'Новая заявка с сайта Гео-Гарант',
      html: `
        <h2>Новая заявка</h2>
        <p><strong>Имя:</strong> ${name}</p>
        <p><strong>Телефон:</strong> ${phone}</p>
        <p><strong>Кадастровый номер / Адрес:</strong> ${cadastralNumber || 'не указан'}</p>
        <p><strong>Комментарий:</strong> ${message || 'нет'}</p>
        <p><strong>Дата:</strong> ${new Date().toLocaleString()}</p>
      `
    });

    res.json({ success: true, message: 'Заявка отправлена' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Ошибка сервера' });
  }
});

// GET /api/requests — получить все заявки (для админки, потом добавим авторизацию)
router.get('/requests', async (req, res) => {
  try {
    const requests = await Request.find().sort({ createdAt: -1 });
    res.json(requests);
  } catch (error) {
    res.status(500).json({ error: 'Ошибка сервера' });
  }
});

module.exports = router;