import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p >© {new Date().getFullYear()} Гео-Гарант Севастополь — Кадастровые работы в Севастополе и Крыму</p>
      </div>
    </footer>
  );
}