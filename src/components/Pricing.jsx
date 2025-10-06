import React,{ useState } from 'react';
import '../styles/Pricing.css';
import PurchaseOverlay from './PurchaseOverlay';



const pricingPlans = [
  {
    title: 'Basic',
    price: '$199',
    frequency: 'one-time',
    features: [
      'Custom Website Design',
      'Mobile Responsive',
      'SEO Optimization',
      '1 Revision',
    ],
    button: 'Choose Plan',
  },
  {
    title: 'Pro',
    price: '$599',
    frequency: 'one-time',
    features: [
      'Custom Website Design',
      'Mobile Responsive',
      'SEO Optimization',
      'E-commerce Integration',
      '3 Revisions',
    ],
    button: 'Choose Plan',
  },
  {
    title: 'Enterprise',
    price: 'Custom',
    frequency: 'quote',
    features: [
      'Custom Website Design',
      'Mobile Responsive',
      'SEO Optimization',
      'E-commerce Integration',
      'Unlimited Revisions',
      'Priority Support',
    ],
    button: 'Get Quote',
  },
];

const Pricing = () => {
   
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [flippedIndex, setFlippedIndex] = useState(null);
  return (
    <section className="pricing-section">
      <h2 className="pricing-heading">Our Pricing Plans</h2>
      <div className="pricing-container">
        {pricingPlans.map((plan, index) => (
  <div key={index} className="pricing-card">
    <div className={`card-inner ${flippedIndex === index ? 'flipped' : ''}`}>
  <div className="card-front">
    <h3 className="plan-title">{plan.title}</h3>
    <p className="plan-price">{plan.price}</p>
    <p className="plan-frequency">({plan.frequency})</p>
    <ul className="plan-features">
      {plan.features.map((feature, i) => (
        <li key={i}>{feature}</li>
      ))}
    </ul>
    <button className="plan-button" onClick={() => setFlippedIndex(index)}>
      {plan.button}
    </button>
  </div>

  <div className="card-back">
    <PurchaseOverlay
      plan={plan}
      onClose={() => setFlippedIndex(null)}
    />
  </div>
</div>

  </div>
))}
      </div>
    </section>
  );
};

export default Pricing;
