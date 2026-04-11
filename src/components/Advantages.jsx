import React from 'react';

const advantages = [
  { id: 1, title: 'Официально, работа по договору и в срок', desc: 'Лицензия, СРО, ответственность', icon: './images/watch.svg' },
  { id: 2, title: 'Опыт 10+ лет на рынке кадастровых услуг Севастополя', desc: 'Кадастровые инженеры с практикой', icon: './images/calendar.svg' },
  { id: 3, title: 'Проверяем участки на наличие ограничений/охранных зон/арестов', desc: 'Договор с гарантиями', icon: './images/lupa.svg' },
  { id: 4, title: 'Гибкая ценовая политика - особые условия участникам СВО', desc: 'Фиксированная смета без скрытых платежей', icon: './images/discount.svg' },
];

export default function Advantages() {
  return (
    <section id="advantages">
      <div className="container">
        <h2>Почему выбирают нас</h2>
        <div className="advantages-grid">
          {advantages.map(a => (
            <div key={a.id} className="card">
              <img src={a.icon} alt={a.title} className="icon" />
              <h3>{a.title}</h3>
              <p>{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}