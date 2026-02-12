"use client";

import { useEffect } from 'react';

export default function SubscriptionSheet() {
  useEffect(() => {
    // Add haptic feedback on button click
    const handleButtonClick = () => {
      if (window.navigator.vibrate) {
        navigator.vibrate(10);
      }
    };

    const button = document.querySelector('.ios-primary-button');
    if (button) {
      button.addEventListener('click', handleButtonClick);
    }

    return () => {
      if (button) {
        button.removeEventListener('click', handleButtonClick);
      }
    };
  }, []);

  return (
    <div className="sheet-overlay">
      <div className="sheet">
        <div className="sheet-handle" />

        <div className="sheet-header">
          <img src="/logo.png" className="sheet-avatar" alt="Profile" />
          <h2>Italo Santos</h2>
          <p>Assinatura Premium</p>
        </div>

        <div className="sheet-plan">
          <div className="sheet-price">
            R$ 666,00 <span>/ mês</span>
          </div>
          <p>Acesso completo aos conteúdos</p>
        </div>

        <button className="ios-primary-button">
          Confirmar com Face ID
        </button>

        <p className="sheet-footnote">
          Cancelar a qualquer momento em Ajustes.
        </p>
      </div>
    </div>
  );
}
