import React, { useRef, useState } from "react";
import { SyncOutlined } from "@ant-design/icons";
import emailjs from "@emailjs/browser";
import "./contact.css";
const Contact = ({ setShowAlert, setMsg }) => {
  const form = useRef();
  const [sending, setSending] = useState(false);
  const [contact, setContact] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

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
      setMsg("success");
    } catch (error) {
      console.log(error);
      setMsg("error");
    }
    setSending(false);
    setContact({ from_email: "", from_name: "", message: "" });
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
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
                <input
                  type="text"
                  placeholder="Your Name"
                  name="from_name"
                  onChange={handleChange}
                  value={contact.from_name}
                  required
                />
                <input
                  onChange={handleChange}
                  type="email"
                  placeholder="Your Email"
                  name="from_email"
                  value={contact.from_email}
                  required
                />
                <textarea
                  onChange={handleChange}
                  name="message"
                  id=""
                  placeholder="Your Message"
                  value={contact.message}
                  required
                ></textarea>
                <button
                  type="submit"
                  className="btn btn-danger"
                  disabled={
                    sending ||
                    !contact.from_email ||
                    !contact.from_name ||
                    !contact.message
                  }
                >
                  {sending ? <SyncOutlined spin /> : "Submit"}
                </button>
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
