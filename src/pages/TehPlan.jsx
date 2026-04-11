import React from 'react';
import { Link } from 'react-router-dom';
import './TehPlan.css';

export default function TehPlan() {
  const prices = [
    { service: 'Жилой дом площадью до 150 кв. м.', price: '13 000 р.' },
    { service: 'Жилой дом площадью от 150 кв. м. до 300 кв. м.', price: '17 000 р.' },
    { service: 'Жилой дом от 300 кв. м. до 500 кв. м.', price: '20 000 р.' },
    { service: 'Баня, гараж, сарай и т.п. площадью до 50 кв.м.', price: '10 000 р.' },
    { service: 'Подача заявления о государственном кадастровом учете и регистрации права в МФЦ', price: '5 000 р.' }
  ];

  return (
    <div className="service-page">
      <div className="container">
        <Link to="/" className="back-link">← На главную</Link>
        <h1>Подготовка технического плана помещения, сооружения, здания в Севастополе</h1>
        
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

        <div className="service-info">
          <h2>Что входит в услугу</h2>
          <div className="service-info-content">
            <div className="service-info-text">
              <ul>
                <li>Выезд кадастрового инженера на объект</li>
                <li>Обмеры и фотофиксация объекта</li>
                <li>Подготовка технического плана в электронном и бумажном виде</li>
                <li>Подача документов в Росреестр (при заказе полного пакета)</li>
              </ul>
            </div>
            <div className="service-info-image">
              <img src="../images/texPlan.jpg" alt="Технический план" />
            </div>
          </div>
        </div>

      
      </div>
    </div>
  );
}