import React from 'react';
import { Link } from 'react-router-dom';
import './AktObsledovaniya.css';

export default function AktObsledovaniya() {
  const prices = [
    { service: 'Один объект', price: '6 000 р.' },
    { service: 'Два объекта', price: '4 000 р. (за каждый)' },
    { service: 'От трёх объектов', price: '3 000 р. (за каждый)' }
  ];

  return (
    <div className="service-page">
      <div className="container">
        <Link to="/" className="back-link">← На главную</Link>
        <h1>Акт обследования в Севастополе</h1>
        
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
                <li>Осмотр и фотофиксация объекта</li>
                <li>Подготовка акта обследования в электронном и бумажном виде</li>
                <li>Подача документов в Росреестр (при заказе полного пакета)</li>
              </ul>
            </div>
            <div className="service-info-image">
              <img src="/images/act.jfif" alt="Акт обследования" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}