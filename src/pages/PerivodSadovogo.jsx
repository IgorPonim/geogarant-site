import React from 'react';
import { Link } from 'react-router-dom';
import './PerivodSadovogo.css';

export default function PerivodSadovogo() {
  const prices = [
    { service: 'Выдача заключения о соответствии садового дома требованиям безопасности. Перевод садового дома в жилой дом.', price: '35 000 р.' },
    { service: 'Подача заявления в ДАиГ о переводе садового дома в жилой дом', price: '8 000 р.' }
  ];

  return (
    <div className="service-page">
      <div className="container">
        <Link to="/" className="back-link">← На главную</Link>
        <h1>Перевод садового дома в жилой дом в Севастополе</h1>
        
        <div className="price-table">
          <table>
            <thead>
              <tr>
                <th>Услуга</th>
                <th>Стоимость</th>
              </tr>
            </thead>
            <tbody>
              {prices.map((item, index) => (
                <tr key={index}>
                  <td>{item.service}</td>
                  <td className="price">{item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="service-info-content">
          <div className="service-info-text">
            <h2>Законодательное регулирование</h2>
            <p>
              Процедура перевода садового дома в жилой регулируется следующими нормативными актами:
            </p>
            <ul>
              <li>
                <strong>Федеральный закон № 217-ФЗ «О ведении гражданами садоводства и огородничества»</strong> 
                — ст. 23, 54
              </li>
              <li>
                <strong>Постановление Правительства РФ № 47</strong> — критерии признания помещения жилым
              </li>
              <li>
                <strong>Градостроительный кодекс РФ</strong> — требования к застройке земельных участков
              </li>
              <li>
                <strong>Приказ Минстроя РФ № 883/пр</strong> — форма заключения о соответствии дома требованиям
              </li>
            </ul>

            <h2>Условия для перевода садового дома в жилой</h2>
            <ul className="conditions-list">
              <li>Отступы от границ земельного участка <strong>не менее 3 метров</strong></li>
              <li>Отступы от соседних жилых домов:
                <ul>
                  <li><strong>15 метров</strong> если дома деревянные</li>
                  <li><strong>8 метров</strong> если дома деревянные и каменные</li>
                  <li><strong>6 метров</strong> если дома каменные</li>
                </ul>
              </li>
              <li>Не более <strong>3-х надземных этажей</strong> и высотой <strong>не более 20 метров</strong></li>
              <li>Высота потолков в кухне и жилых помещениях <strong>не менее 2.5 метров</strong></li>
              <li>Пожарный проезд к дому шириной <strong>не менее 4.2 метра</strong></li>
              <li>Наличие <strong>инженерных коммуникаций</strong></li>
            </ul>
          </div>
          
          <div className="service-info-image">
            <img src="/images/reconst.jpg" alt="Перевод садового дома в жилой" />
            <img src="/images/reconst2.jpg" alt="Перевод садового дома в жилой" />
          </div>
        </div>
      </div>
    </div>
  );
}