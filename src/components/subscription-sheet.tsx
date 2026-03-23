"use client";

import { useEffect, useRef } from 'react';

export default function SubscriptionSheet() {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // Add haptic feedback on button click
    const handleButtonClick = () => {
      if (typeof window !== 'undefined' && 'vibrate' in navigator) {
        navigator.vibrate(10);
      }
    };

    const button = buttonRef.current;
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
          <img src="/logo.png" className="sheet-avatar" alt="Italo Santos profile picture" />
          <h2>Italo Santos</h2>
          <p>Assinatura Premium</p>
        </div>

        <div className="sheet-plan">
          <div className="sheet-price">
            R$ 666,00 <span>/ mês</span>
          </div>
          <p>Acesso completo aos conteúdos</p>
        </div>

        <button ref={buttonRef} className="ios-primary-button">
          Confirmar com Face ID
        </button>

        <p className="sheet-footnote">
          Cancelar a qualquer momento em Ajustes.
        </p>
      </div>
    </div>
  );
}
