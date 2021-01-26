import React from "react";
import SocialLinks from "../../components/SocialLinks";
import "./Contact.sass";

function Contact() {
  return (
    <div className="contact">
      <div className="pageHeader">Kontakt</div>
      <div className="infos">
        <p>
          Lewis Young <br />
        </p>
        <p>
          Erkelenz - Deutschland <br />
        </p>
        <p>
          lewisyoung1306(at)yahoo.de <br /> <br />
        </p>
        <a href="mailto:lewisyoung1306@yahoo.de">Mail me!</a>
      </div>
      <SocialLinks />
    </div>
  );
}

export default Contact;
