import React from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    emailjs.send(
      'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
      'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
      data,
      'YOUR_USER_ID' // Replace with your EmailJS user ID
    )
    .then(() => {
      alert('Message sent successfully!');
      reset();
    })
    .catch((error) => {
      alert('Failed to send message: ' + error.text);
    });
  };

  return (
    <section className="section contact-form">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('name', { required: true })} placeholder="Your Name" />
        <input {...register('email', { required: true })} placeholder="Your Email" type="email" />
        <textarea {...register('message', { required: true })} placeholder="Your Message" />
        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default ContactForm;