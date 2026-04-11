import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    const [openMenu, setOpenMenu] = useState(null);
    const phone1 = '+79780078262';
    const mapLink = "https://yandex.ru/maps/-/CPrRvWY8";

    const menuItems = [
        {
            title: 'Кадастровые работы',
            items: [
                { name: 'Межевой план', link: '/services/mejevoi-plan' },
                { name: 'Технический план', link: '/services/teh-plan' },
                { name: 'Акт обследования', link: '/services/akt-obsledovaniya' },
                { name: 'Схема расположения земельного участка на КПТ', link: '/services/sxema-kpt' },
                // 'Схема размещения НТО',
                { name: 'Проект межевания территории', link: '/services/proekt-mezhevaniya' },
                { name: 'Перевод садового дома в жилой', link: '/services/perivod-sadovogo' },
                { name: 'Выписки из ЕГРН', link: '/services/vipiski-egrn' },
            ]
        },
        {
            title: 'Геодезия',
            items: [
                { name: 'Топографическая съемка', link: '/services/topograficheskaya-semka' },
                'Разбивка объекта строительства',
                'Вынос границ земельных участков в натуре'
            ]
        },
        {
            title: 'Юридические услуги',
            items: [
                'Присвоение адреса (идентификатора)',
                'Уведомление о строительстве',
                'Подача заявления о государственном кадастровом учете',
                'Анализ участков на наличие ограничений'
            ]
        },
        // {
        //   title: 'Цены',
        //   items: '',
        //   isLink: true
        // }
    ];

    return (
        <header className="header">
            <div className="container">
                <div className="logo"> <Link className='link-no-underline' to="/">
                    <img src="..//images/logo.jpg" alt="Гео-Гарант Севастополь" className="logo-img" /></Link>
                    <div className="logo-text">
                        <Link className="link-no-underline" to="/">   <h1 >Гео-Гарант Севастополь</h1></Link>
                        <div className="subtitle-wrapper">
                            <div
                                className="dropdown-triggers"
                            >
                                {menuItems.map((item, idx) => (
                                    <div
                                        key={idx}
                                        className="menu-item-wrapper"
                                        onMouseEnter={() => setOpenMenu(idx)}
                                        onMouseLeave={() => setOpenMenu(null)}
                                    >
                                        <p className="menu-trigger">
                                            {item.title}
                                        </p>
                                        {item.items && openMenu === idx && (
                                            <div className="dropdown-menu">
                                                {item.items.map((subItem, subIdx) => (
                                                    <Link key={subIdx} to={subItem.link || '#'} className="dropdown-item">
                                                        {subItem.name || subItem}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                        {item.isLink && (
                                            <a href="#" className="menu-link">
                                                {item.title}
                                            </a>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-info">
                    <a href={mapLink} target="_blank" rel="noopener noreferrer" className="header-address-link">
                        <div className="header-address">
                            <img src="/images/Yandex_Maps_icon.svg" alt="Яндекс.Карты" className="address-icon" />
                            г. Севастополь, ул. Соловьева, д. 10, 2-й этаж, оф. 6
                        </div>
                    </a>
                    <div className="header-contacts">
                        <div className="header-phones">
                            <a href={`tel:${phone1}`} className="phone-link">{phone1}</a>
                            <a href={`https://t.me/${phone1.slice(1)}`} target="_blank" rel="noopener noreferrer" className="messenger-link" title="Telegram">
                                <img src="/images/Telegram.svg" alt="Telegram" className="messenger-icon" />
                            </a>
                            <a href={`https://max.ru/${phone1.slice(1)}`} target="_blank" rel="noopener noreferrer" className="messenger-link" title="WhatsApp">
                                <img src="/images/max.svg" alt="WhatsApp" className="messenger-icon" />
                            </a>
                        </div>
                        <div className="header-messengers">

                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}