import React from 'react';

const services = [
    {
        id: 1,
        title: 'Межевание участков',
        desc: 'Уточнение границ, вынос в натуру, акты согласования',
        icon: '📐',
        image: '/images/meja.jpg'
    },
    {
        id: 2,
        title: 'Технические планы',
        desc: 'Дома, квартиры, гаражи, постройки    (дачная, гаражная амнистия)',
        icon: '🏠',
        image: '/images/тех.jpg'
    },
    {
        id: 3,
        title: 'Схемы участков',
        desc: 'Подготовка схемы расположения на КПТ (приватизация, выкуп земли)',
        icon: '🗺️',
        image: '/images/sxema.jpg'
    },
    {
        id: 4,
        title: 'Вынос границ земельных участков в натуре',
        desc: 'Закрепление границ на местности с выездом',
        icon: '📍',
        image: '/images/vinos.jpg'
    },
];

export default function Services() {
    return (
        <section id="services">
            <div className="container">
                <h2>Наши услуги</h2>
                <div className="services-grid">
                    {services.map(s => (
                        <div
                            key={s.id}
                            className="card service-card"
                            style={{ backgroundImage: `url(${s.image})` }}
                        >
                            <div className="card-overlay">
                                <span className="icon">{s.icon}</span>
                                <h3>{s.title}</h3>
                                <p>{s.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}