import ContactForm from "../components/ContactForm/ContactForm";
import "./contact.css";

import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="contact-page">
     
      <section className="contact-hero">
        <h1>Contact</h1>
      </section>

      
      <section className="contact-main">
        <h2>Get in touch</h2>

        <div className="contact-container">
         
          <div className="contact-image">
            <img src="/undraw_mail_sent.svg" alt="" />
          </div>

          
          <ContactForm />
        </div>

        
        <div className="contact-info">
            <div className="info-item">
                <Mail size={20} />
                <span>(+509) 3242-4951</span>
            </div>

            <div className="info-item">
                <Phone size={20} />
                <span>contact@seeflix.com</span>
            </div>

            <div className="info-item">
                <MapPin size={20} />
                <span>23, rue de la Vérité, Pétion-Ville, Ouest, Haïti</span>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;