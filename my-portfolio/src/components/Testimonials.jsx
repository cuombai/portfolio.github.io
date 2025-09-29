import React from 'react';

const Testimonials = () => {
  const testimonials = [
    { name: 'Client A', quote: 'Amazing work! Delivered on time.' },
    { name: 'Client B', quote: 'Highly recommend for React projects.' },
  ];

  return (
    <section className="section testimonials">
      <h2>Testimonials</h2>
      {testimonials.map((testimonial, index) => (
        <div key={index} className="testimonial">
          <p>"{testimonial.quote}"</p>
          <p>- {testimonial.name}</p>
        </div>
      ))}
    </section>
  );
};

export default Testimonials;