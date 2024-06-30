import React, {useState, useEffect, useRef} from 'react'
import Layout from '../components/layouts/layout'
import MyMap from './Map.js';

function Contact() {
  const [selectedheadquarter, setselectedheadquarter] = useState("Kolkata");
  const [isclicked, setisclicked] = useState(false);
  const [isformsubmitted, setisformsubmitted]=useState(false);
  const formRef = useRef(null);

  useEffect(() => {
  'use strict'
  const forms = document.querySelectorAll('.needs-validation')
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
  }, [])

  const handlecontactformsubmit = (e) => {
    if (formRef.current.checkValidity()) {
      setisformsubmitted(true);
      formRef.current.submit();
    } else {
      setisformsubmitted(false);
    }
  };

  return (
    <Layout>
      {isformsubmitted && (
        <div className="alert alert-success alert-dismissible fade show text-center alert-contact-form-submission" role="alert"><strong>Thanks for your message!! We will reach out to you soon!!</strong>
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={(e)=>{
          setisformsubmitted(false)
        }}></button>
        </div>
      )}
      
      <div className="grid-container contact bg-light">

      <div className="contact-form">
        <h2 style={{textAlign:"center"}}>Contact Us</h2>
        <form ref={formRef}className="needs-validation" noValidate>
          <div className="mb-2">
            <label for="contact-form-name" className="form-label">Full name</label>
            <input type="text" className="form-control" id="contact-form-name" required />
            <div className="invalid-feedback">
              Please provide full name
            </div>
          </div>
          <div className="mb-2">
            <label for="contact-form-email" className="form-label">Email Address</label>
            <input type="email" className="form-control" id="contact-form-email" required />
            <div className="invalid-feedback">
              Please provide valid email-address
            </div>
          </div>
          <div className="mb-2">
            <label for="contactform-subject" className="form-label">Subject</label>
            <input type="text" className="form-control" id="contact-form-subject" required />
            <div className="invalid-feedback">
              Please provide a subject
            </div>
          </div>
          <div className="mb-2">
            <label for="contact-form-message" className="form-label">Message</label>
            <input type="text" className="form-control" id="contact-form-message"  required />
            <div className="invalid-feedback">
              Please provide a feedback message
            </div>
          </div>
          <div className="mb-2">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required />
              <label className="form-check-label" for="invalidCheck" >
              Agree to terms and conditions
              </label>
              <div className="invalid-feedback">
              You must agree before submitting.
              </div>
            </div>
          </div>
          <div className="submit-contactform">
          <button className="btn btn-primary" type="submit" onClick={handlecontactformsubmit}>Submit</button>
          </div>
        </form>
      </div>


      <div className="headquarters-and-maps">
      <h2 style={{textAlign:"center"}}>Our HeadQuarters</h2>
      <div className="input-group" id="headquarter">
      <select className="form-select" id="inputGroupSelect04" aria-label="Example select with button addon" onChange={(e)=>{setselectedheadquarter(e.target.value)}}>
        <option value="Kolkata">Kolkata, India</option>
        <option value="Mumbai">Mumbai, India</option>
        <option value="Delhi">Delhi, India</option>
        <option value="Hyderabad">Hyderabad, India</option>
      </select>
      <button className="btn btn-outline-secondary" type="button" onClick={(e)=>{setisclicked(true);console.log(selectedheadquarter)}}>Show HQs</button>
      </div>
      <MyMap selectedheadquarter={selectedheadquarter} isclicked={isclicked}/>
      </div>

      </div>
      

    </Layout>
  )
}

export default Contact