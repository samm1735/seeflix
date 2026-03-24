import "./contactForm.css";

const ContactForm = () => {
  return (
    <form className="contact-form">
      <input type="text" placeholder="Enter your name" />
      <input type="email" placeholder="Email" />
      <textarea placeholder="Message"></textarea>

      <button type="submit">Send message</button>
    </form>
  );
};

export default ContactForm;