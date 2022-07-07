import React, { useRef } from 'react'
import { BsWhatsapp } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'
import emailjs, { sendForm } from '@emailjs/browser'
import './contact.scss'

function Contact() {
  const Form = useRef()
  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_uwh7gvn',
        'template_byumkg8',
        Form.current,
        'DfneZcKKIAZOKCNyI'
      )
      .then(
        () => {
          alert('Message is successfully sent')
          window.location.reload(false)
        },
        () => {
          alert('Message failed, please try again ')
        }
      )
  }
  return (
    <section id="contact" className="padspace">
      <div className="s-header">
        <h2 className="flex-np">Get in touch</h2>
      </div>
      <div className="s-sp">
        <div className="cr-flex">
          <div className="conn-social">
            <div className="social">
              <a
                href="https://wa.me/255762361374"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="sicon">
                  <BsWhatsapp />
                </div>
                <p>Whatsapp</p>
                <p style={{ marginTop: '10px' }}>+255 762 361 374</p>
                <p className="unique-text">Send a message</p>
              </a>
            </div>
            <div className="social">
              <a
                href="mailto:marickomary7@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="sicon">
                  <AiOutlineMail />
                </div>
                <p>Email</p>
                <p style={{ marginTop: '10px' }}>marickomary7@gmail.com</p>
                <p className="unique-text">Send a message</p>
              </a>
            </div>
          </div>
          <div className="email-form">
            <form ref={Form} onSubmit={sendEmail}>
              <input
                type="text"
                name="name"
                placeholder="Your Fullname"
                required
              />
              <input type="text" name="email" placeholder="Email" required />
              <textarea
                name="message"
                placeholder="Type your message here..."
                id=""
                cols="30"
                rows="10"
                required
              ></textarea>
              <input type="submit" value="Send Message" name="submit" />
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
