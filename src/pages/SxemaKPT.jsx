import React from 'react';
import { Link } from 'react-router-dom';
import './SxemaKPT.css';

export default function SxemaKPT() {
    const prices = [
        { service: 'СХЕМА НА КПТ, НТО (ИЖС/садоводство) с геодезией', price: '10 000 р.' },
        { service: 'СХЕМА НА КПТ, НТО (ИЖС/садоводство) без геодезии', price: '6 000 р.' },
        { service: 'СХЕМА БЛАГОУСТРОЙСТВА + ТЭП с геодезией', price: '13 000 р.' },
        { service: 'СХЕМА БЛАГОУСТРОЙСТВА + ТЭП без геодезии', price: '9 000 р.' }
    ];

    return (
        <div className="service-page">
            <div className="container">
                <Link to="/" className="back-link">← На главную</Link>
                <h1>Схема расположения земельного участка на кадастровом плане территории в Севастополе</h1>

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
                                <li>Анализ документов и исходных данных</li>
                                <li>Выезд на местность для замеров</li>
                                <li>Запрос архивных данных и сведений ЕГРН</li>
                                <li>Подготовка схемы расположения на КПТ</li>
                                <li>Согласование с уполномоченными органами</li>
                                <li>Выдача готовой схемы в электронном виде (при необходимости)</li>
                            </ul>
                        </div>
                        <div className="service-info-image">
                            <img src="/images/nakpt.jpg" alt="Схема расположения на КПТ" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}