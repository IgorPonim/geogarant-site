import React from 'react';

export default function About() {
  return (
    <section 
      id="about" 
      className="about-dark"
      style={{
        backgroundImage: "url('/images/unnamed.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container">
        <h2>О компании</h2>
        <p>
          «Гео-Гарант Севастополь» — команда аттестованных кадастровых инженеров.
          Работаем по всему Крыму и Севастополю. Подготовим документы для Росреестра,
          поможем с границами, учётом и регистрацией прав. Доверяйте профессионалам.
        </p>
      </div>
    </section>
  );
}