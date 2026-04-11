import React from 'react';

export default function Contacts() {
  // Координаты офиса для ссылки на картах
  const officeAddress = "г. Севастополь, ул. Соловьева, д. 10, 2-й этаж, оф. 6";
  const mapLink = "https://yandex.ru/maps/-/CPrRvWY8";

  return (
    <section id="contacts">
      <div className="container">
        <h2>Контакты</h2>
        <div className="contacts-wrapper">
          {/* Левая колонка с информацией */}
          <div className="contacts-info">
            <p>📞 <strong>Телефон:</strong> +7 (978) 007-82-62</p>
            <p>✉️ <strong>Email:</strong> geogarant@sev.ru</p>
            <p>📍 <strong>Адрес:</strong> {officeAddress}</p>
            <p>🕒 <strong>Режим работы:</strong> Пн–Пт, 9:00–18:00</p>
            <a href={mapLink} target="_blank" rel="noopener noreferrer" className="btn map-btn">
              Построить маршрут на Яндекс.Картах
            </a>
          </div>

          {/* Правая колонка с картой */}
          <div className="contacts-map">
            <iframe
              src="https://yandex.ru/map-widget/v1/?ll=33.510173%2C44.582812&z=18&pt=33.510173,44.582812,flag"
              title="Офис Гео-Гарант на карте Севастополя"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}