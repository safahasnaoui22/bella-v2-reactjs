"use client";
import "./Contact.scss";
import Map from "./Map";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaComment, FaEnvelope, FaMapMarkerAlt, FaPhone, FaUser } from "react-icons/fa";

function Contact() {
  const [showForm, setShowForm] = useState(true);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false)
  const form = useRef();

  const toggleForm = () => {
    setShowForm(!showForm);
  };
  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    emailjs
      .sendForm(
        'service_x1xdenh', // Your service ID
        'template_n6n84y8', // Your template ID
        form.current,
        '48vA9EAU1JR_m874t'// Replace with your user ID
      )
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
        },
        (error) => {
          console.error('Error:', error);
          setError(true);
        }
      );
  };


  return (
    <div className="contact-container">
      <div className="cardContact">
        <div className={`cardContact-innerContact ${showForm ? '' : 'flipped'}`}>
          <div className="cardContact-frontContact">
            <div className="buttonsContactt">


              <button className="messagebtn" onClick={toggleForm}> <span>Message</span></button>
              <button className="messagebtn" onClick={toggleForm}> <span>Information</span> </button>
           
           
           </div>
            {showForm ? (
              <div className="contact-form">
                <h2 className=" sendmessage titleHotel font-primary  ">Send Message</h2>
                <form 
                
                
          onSubmit={sendEmail}
          ref={form}

                
                >
                  <div className="input-box">
                    <label className="namecontact" htmlFor="name"><FaUser className="iconromm" /> Name:</label>
                    <input className="inputname" type="text" id="name" name="name" required />
                  </div>
                  <div className="input-box">
                    <label className="namecontact" htmlFor="email"><FaEnvelope className="iconromm" /> Email:</label>
                    <input className="inputname" type="email" id="email" name="email" required />
                  </div>
                  <div className="input-box">
                    <label className="namecontact" htmlFor="message"><FaComment className="iconromm" /> Message:</label>
                    <textarea className="textcontact" id="message" name="message" required />
                  </div>
                  
{/**fff 
                  <div className="wrapperbtntry ctn">
  <div className="linkwrapperbtn">
    <button  type="submit" className="ctnbtn"> envoyer ! </button>
    <div className="iconbtn">
      <svg  className="svgbtn"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 268.832 268.832">
        <path d="M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z"/>
      </svg>
    </div>
  </div>
  
</div> */}

                  {success && (
            <span className="text-green-600 font-semibold">
              Your message has been sent successfully!
            </span>
          )}
          {error && (
            <span className="text-red-600 font-semibold">
              Something went wrong!
            </span>
          )}
                            

                  <div className="wrapperbtntry">
  <div className="linkwrapperbtn">
    <button  type="submit" className="ctnbtn"> envoyer ! </button>
    <div className="iconbtn">
      <svg  className="svgbtn"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 268.832 268.832">
        <path d="M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z"/>
      </svg>
    </div>
  </div>
  
</div>


  

                </form>
              </div>
            ) : (
          <div className="contactContact-infoContact">
           
                <p> Address: Tunis, Monastir</p>
                <p>Phone: +216 73 520 555</p>
                <p>Email: booking.bv@lesoleil-hotels.com</p>
              </div> 
            )}
          </div>
          <div className="cardContact-backContact">
            <div className="buttonsContactt">
              <button className="messagebtn" onClick={toggleForm}><span>Message</span></button>
              <button className="messagebtn" onClick={toggleForm}> <span>Information</span></button>
            </div>
            <div className="contactContact-infoContact">
              <h2 className="  titleHotel font-primary  "> Contact</h2>
              <div className="contactinformation">
                <div className="infoitem">
                  <p><FaMapMarkerAlt className="iconromm" /> Address: <span className="spaninformation">Le Soleil Bella Vista Skanes , Monastir, Tunisia</span></p>
                </div>
                <div className="infoitem">
                  <p><FaPhone className="iconromm" /> Phone: <span className="spaninformation">+216 73 520 555</span></p>
                </div>
                <div className="infoitem">
                  <p><FaEnvelope className="iconromm" /> Email: <span className="spaninformation">booking.bv@lesoleil-hotels.com</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Map className="namemap"/>
    </div>
  );
}

export default Contact;
