import React, { useRef, useState } from "react";

import emailjs from "@emailjs/browser";
import "./contact.css";
const Contact = ({ setShowAlert }) => {
  const form = useRef();
  const [sending, setSending] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      const res = await emailjs.sendForm(
        "service_aq3npzs",
        "template_5cikp8s",
        form.current,
        "Qs6w4BPUqg7oDDv-f"
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
    setSending(false);

    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };
  return (
    <div id="contact" className="container-fluid">
      <div className="row">
        <div className="col-lg-6 section-heading-wrapper">
          <h1 className="section-heading">Contact</h1>
        </div>
        <div className="col-lg-6 contact-container">
          <div className="contact-wrapper">
            <div className="contact-details">
              <div className="phone">
                <i className="fas fa-mobile-alt"></i>
                <h3>Phone</h3>
                <p>0705 685 6368</p>
              </div>
              <div className="email">
                <i className="far fa-envelope"></i>
                <h3>Email</h3>
                <p>cmgbeokwere6@gmail.com</p>
              </div>
            </div>
            <div className="inTouch">
              <h1>Get in Touch</h1>

              <form ref={form} className="contact-form" onSubmit={sendEmail}>
                <input type="text" placeholder="Your Name" name="from_name" />
                <input
                  type="email"
                  placeholder="Your Email"
                  name="from_email"
                />
                <textarea
                  name="message"
                  id=""
                  placeholder="Your Message"
                ></textarea>
                <input
                  type="submit"
                  value={sending ? "sending...." : "Send Message"}
                  disabled={sending}
                  style={{ opacity: sending ? 0.3 : "" }}
                />
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="section-heading-line"></div> */}
    </div>
  );
};

export default Contact;
