import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import { Button, SendIcon } from "@mui/material";
import Image from "mui-image";
import { links } from "../components/ButtonLinks";
import "../assets/css/App.css";
import "../assets/css/contact.css"
import contactImg from "../components/images/ranchWeddingImages/lakeside.jpg"
import emailjs, { send } from '@emailjs/browser'
import Form from "react-bootstrap/Form";
import { useState, useRef } from 'react'

export default function Contact() {
  
  const refForm = useRef()

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [validated, setValidated] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();  // Prevent default form submission behavior
    setFormSubmitted(true);
    
    const form = refForm.current;
  
    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      emailjs.sendForm('service_mmvgfbk', 'template_qkubv6h', refForm.current, '2nzVernw8bscnVgID')
        .then(() => {
          alert('Message successfully sent!');
          form.reset();
          setValidated(true); // Set validated to true only after successful send
        }, () => {
          alert('Failed to send message, please try again');
        });
    }
    setValidated(true); // Consider moving this inside the then() block after successful email send
  };
  
  
  return (
    <>
      <div>
        <h1 className="contactH1">Contact Us</h1>
      </div>

      <Container>
        <Box
          className="contact-form-container"
          sx={{
            width: 1,
            p: 2,
            boxShadow: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          noValidate
          autoComplete="off"
        >
          <Image
            src={contactImg}
            height="100"
            width="100%"
            fit="fill"
            showLoading={false}
            errorIcon={true}
            shift={null}
            distance="100px"
            shiftDuration={900}
            bgColor="inherit"
          ></Image>
          {/* <div className="contact-first">
           */}
          <Box
            sx={{
              m: 2,
              width: "70%",
              p: 2,
              boxShadow: 2,
              textAlign: "center",
            }}
          >
            <Form className="contactForm" ref={refForm} onSubmit={sendEmail} noValidate validated={validated} 
              // target="_blank"
              // action="https://formsubmit.co/mwjones2186@gmail.com"
              // method="POST"
            >
              {/* <input
                type="hidden"
                name="_next"
                value="https://yourdomain.co/thanks.html"
              /> */}
              <TextField
                className={`standard-basic px-3 py-3 ${formSubmitted && !refForm.current['fullName'].value ? 'invalid-field' : ''}`}
                sx={{
                  width: 1 / 2,
                  boxShadow: 2,
                }}
                id="fullName"
                label={<span className="required-field">Full Name</span>}
                variant="standard"
                name="fullName"
                required
              />
              <span className={`error-message ${formSubmitted && !refForm.current['fullName'].value ? 'show-error' : ''}`}>Please enter your name</span>

              {/* </div>
        <div className="contact-last"> */}
              <TextField
                className={`standard-basic px-3 py-3 ${formSubmitted && !refForm.current['email'].value ? 'invalid-field' : ''}`}
                sx={{
                  m: 1,
                  width: 1 / 2,
                  p: 1,
                  boxShadow: 2,
                }}
                id="email"
                label={<span className="required-field">Email Address</span>}
                variant="standard"
                name="email"
                required
              />
              <span className={`error-message ${formSubmitted && !refForm.current['email'].value ? 'show-error' : ''}`}>Please enter a valid email address</span>
              {/* </div>
        <div className="contact-subject"> */}
              <TextField
                className={`standard-basic px-3 py-3 ${formSubmitted && !refForm.current['phoneNumber'].value ? 'invalid-field' : ''}`}
                sx={{
                  m: 1,
                  width: 3 / 4,
                  p: 1,
                  boxShadow: 2,
                }}
                id="phoneNumber"
                label={<span className="required-field">Phone Number</span>}
                variant="standard"
                name="Phone Number"
                required
              />
              <span className={`error-message ${formSubmitted && !refForm.current['phoneNumber'].value ? 'show-error' : ''}`}>Please enter a good contact number</span>
              {/* </div>
        <div className=""> */}
              <TextField
                 className={`standard-basic px-3 py-3 ${formSubmitted && !refForm.current['message'].value ? 'invalid-field' : ''}`}
                id="message"
                sx={{
                  m: 1,
                  width: 3 / 4,
                  height: 200,
                  p: 1,
                  boxShadow: 2,
                }}
                multiline
                label={<span className="required-field">Tell us about your event!</span>}
                rows={6}
                defaultValue=""
                variant="standard"
                name="message"
                required
              />
              <span className={`error-message ${formSubmitted && !refForm.current['message'].value ? 'show-error' : ''}`}>Please tell us about your event</span>
              {/* </div>
        <div> */}
              <Button
              id="contactBtnSubmit"
              
                type="submit"
                className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full width: 100%"
                sx={{
                  m: 1,
                  width: 1 / 4,
                  height: 1 / 2,
                  p: 1,
                  boxShadow: 2,
                }}
                variant="outlined"
              >
                Send
              </Button>
            </Form>
          </Box>
        </Box>

        {/* <Box>
          <a className="gitHub-btn" href={links[0].github}>
            <i class="fa-brands fa-github"></i>
          </a>
          <a className="linkedIn-btn" href={links[0].linkedIn}>
            <i class="fab fa-facebook-square"></i>
          </a>
          <a className="facebook-btn" href={links[0].facebook}>
            <i className="fab fa-facebook"></i>
          </a>
        </Box> */}
      </Container>
    </>
  );
}
