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
        Email: lewisyoung1306(at)yahoo.de <br />
        <a href="mailto:lewisyoung1306@yahoo.de">Send Feedback</a>
      </div>
      <SocialLinks />
    </div>
  );
}

export default Contact;
