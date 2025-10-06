import React, { useState, useEffect } from 'react';
import '../styles/PurchaseOverlay.css';

const PurchaseOverlay = ({ plan, onClose }) => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const sendToWhatsApp = () => {
    const message = `Plan: ${plan.title}\nPrice: ${plan.price}\nFrequency: ${plan.frequency}\nDuration: ${plan.title === 'Basic' ? '72hrs' : plan.title === 'Pro' ? '5 days' : 'Custom'}\nEmail: ${email}\nPhone: ${phone}`;
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/254746881441?text=${encoded}`, '_blank');
  };

  const handleMpesaPay = () => {
    const priceValue = parseInt(plan.price.replace(/\D/g, '')) || 0;
    const totalKES = priceValue * 130;
    // Replace with actual Mpesa API call
    alert(`Prompting Mpesa payment of KES ${totalKES}...`);
  };

  useEffect(() => {
  document.body.classList.add('modal-open');
  return () => document.body.classList.remove('modal-open');
}, []);


  return (
    <div className="purchase-overlay">
      <div className="purchase-modal">
        <button className="close-btn" onClick={onClose}>×</button>
        <h2>{plan.title} Plan</h2>
        <p><strong>Price:</strong> {plan.price}</p>
        <p><strong>Frequency:</strong> {plan.frequency}</p>
        <p><strong>Duration:</strong> {plan.title === 'Basic' ? '72hrs' : plan.title === 'Pro' ? '5 days' : 'Custom quote'}</p>
        <input type="email" placeholder="Your Email" value={email} onChange={e => setEmail(e.target.value)} />
        <input type="tel" placeholder="Your Phone Number" value={phone} onChange={e => setPhone(e.target.value)} />
        <button className="send-btn" onClick={sendToWhatsApp}>Send Request via WhatsApp</button>
        <button className="mpesa-btn" onClick={handleMpesaPay}>Pay Now with Mpesa</button>
      </div>
    </div>
  );
};

export default PurchaseOverlay;
