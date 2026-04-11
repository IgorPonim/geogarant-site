import React from 'react';
import { Link } from 'react-router-dom';
import './MezhevoyPlan.css';

export default function MezhevoyPlan() {
    const prices = [
        { service: 'Уточнение границ и (или) площади земельного участка (до 5000 кв.м.)', price: '12 000 р.' },
        { service: 'Раздел земельного участка', price: '12 000 р. + 3500 р/за каждый образуемый участок, начиная с 3-го' },
        { service: 'Перераспределение земельных участков', price: '12 000 р. + 3500 р/за каждый образуемый участок, начиная с 3-го' },
        { service: 'Объединение любых земельных участков', price: '10 000 р.' },
        { service: 'Исправление реестровой ошибки в местоположении границ земельного участка (до 5000 кв.м.)', price: '12 000 р.' },
        { service: 'Подача заявления о государственном кадастровом учете и регистрации права в МФЦ', price: '5 000 р.' }
    ];

    return (
        <div className="service-page">
            <div className="container">
                <Link to="/" className="back-link">← На главную</Link>
                <h1>Межевание земельного участка в Севастополе</h1>

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
                    <h2 style={{marginBottom: 0}}>Что входит в услугу</h2>
                    <div className="service-info-content">
                        <div className="service-info-text">
                            <ul>
                                <li>Выезд кадастрового инженера на участок</li>
                                <li>Сбор и анализ документов</li>
                                <li>Согласование границ с соседями</li>
                                <li>Подготовка межевого плана в электронном и бумажном виде</li>
                                <li>Подача документов в Росреестр (при заказе полного пакета)</li>
                            </ul>
                        </div>
                        <div className="service-info-image">
                            <img src="../images/mej.jpg" alt="Межевание земельного участка" />
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
}