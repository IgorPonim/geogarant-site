import React, { useState } from 'react';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', phone: '', service: 'межевание', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    // пока только имитация отправки
    setTimeout(() => {
      console.log('Заявка:', form);
      setStatus('success');
      setForm({ name: '', phone: '', service: 'межевание', message: '' });
      setTimeout(() => setStatus(''), 3000);
    }, 500);
  };

  return (
    <section id="order" className="form-section">
      <div className="container">
        <h2>Оставьте заявку</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input type="text" name="name" placeholder="Ваше имя" value={form.name} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <input type="tel" name="phone" placeholder="Телефон" value={form.phone} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <input type="tel" name="" placeholder="Кадастровый номер/адрес" value={form.phone} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <textarea name="message" placeholder="Что нужно сделать?" rows="3" value={form.message} onChange={handleChange} />
          </div>
          <button type="submit" className="btn" disabled={status === 'sending'}>
            {status === 'sending' ? 'Отправляем...' : 'Отправить заявку'}
          </button>
          {status === 'success' && <p style={{ color: 'green', marginTop: '10px' }}>✅ Спасибо! Мы свяжемся с вами.</p>}
        </form>
      </div>
    </section>
  );
}