import React from "react";
import LinkButtons from "../../assets/LinkButtons";
import "./Contact.sass";

function Contact() {
  return (
    <div className="contact">
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
        <LinkButtons
              value="Schreiben Sie mir!"
              href="mailto:lewisyoung1306@yahoo.de"
              rel=""
              target=""
              filled={true}
            />
      </div>
    </div>
  );
}

export default Contact;
