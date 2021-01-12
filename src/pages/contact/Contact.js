import React from "react";
import SocialLinks from "../../components/SocialLinks";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div className="pageHeader">Kontakt</div>
      <div className="infos">
        Lewis Young <br />
        Erkelenz - Deutschland <br />
        lewisyoung1306(at)yahoo.de <br /> <br/>
        <a href="mailto:lewisyoung1306@yahoo.de">Mail me!</a>
      </div>
      <SocialLinks />
    </div>
  );
}

export default Contact;
