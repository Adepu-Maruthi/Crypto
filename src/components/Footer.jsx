import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      
<footer className="text-center text-lg-start bg-body-tertiary text-muted">
  <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom bg-light">
    <div className="me-5 d-none d-lg-block">
      <span className='fs-4 text-dark'>Get connected with us on social networks:</span>
    </div>

    <div>
      <a href="" className="me-4 text-reset fs-3">
        <FaFacebook/>
      </a>
      <a href="" className="me-4 text-reset fs-3">
        <FaInstagram/>
      </a>
      <a href="" className="me-4 text-reset fs-3">
        <FaXTwitter/>
      </a>
      <a href="" className="me-4 text-reset fs-3">
        <FaLinkedin/>
      </a>
      <a href="" className="me-4 text-reset fs-3">
        <FaGoogle/>
      </a>
      <a href="" className="me-4 text-reset fs-3">
        <FaLinkedin/>
      </a>
      <a href="" className="me-4 text-reset fs-3">
        <FaGithub/>
      </a>
    </div>
  </section>

  <section className="">
    <div className="container text-center text-md-start mt-5">
      <div className="row mt-3">
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 className="text-capitalize text-primary fs-4 fw-bold mb-4">
            Product
          </h6>
          <p>
            <a href="#!" className="text-reset text-decoration-none fw-bold">Overview</a>
          </p>
          <p>
            <a href="#!" className="text-reset text-decoration-none fw-bold">Features</a>
          </p>
          <p>
            <a href="#!" className="text-reset text-decoration-none fw-bold">Solutions</a>
          </p>
          <p>
            <a href="#!" className="text-reset text-decoration-none fw-bold">Tutorials</a>
          </p>
          <p>
            <a href="#!" className="text-reset text-decoration-none fw-bold">Pricing</a>
          </p>
          <p>
            <a href="#!" className="text-reset text-decoration-none fw-bold">Releases</a>
          </p>
        </div>

        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 className="text-capitalize text-primary fs-4 fw-bold mb-4">
            Resources
          </h6>
          <p>
            <a href="#!" className="text-reset text-decoration-none fw-bold">Blog</a>
          </p>
          <p>
            <a href="#!" className="text-reset text-decoration-none fw-bold">Newsletter</a>
          </p>
          <p>
            <a href="#!" className="text-reset text-decoration-none fw-bold">Events</a>
          </p>
          <p>
            <a href="#!" className="text-reset text-decoration-none fw-bold">Help Center</a>
          </p>
          <p>
            <a href="#!" className="text-reset text-decoration-none fw-bold">Tutorials</a>
          </p>
          <p>
            <a href="#!" className="text-reset text-decoration-none fw-bold">Support</a>
          </p>
        </div>

        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 className="text-capitalize text-primary fs-4 fw-bold mb-4">
            Company
          </h6>
          <p>
            <a href="#!" className="text-reset text-decoration-none fw-bold">About Us</a>
          </p>
          <p>
            <a href="#!" className="text-reset text-decoration-none fw-bold">Careers</a>
          </p>
          <p>
            <a href="#!" className="text-reset text-decoration-none fw-bold">Press</a>
          </p>
          <p>
            <a href="#!" className="text-reset text-decoration-none fw-bold">News</a>
          </p>
          <p>
            <a href="#!" className="text-reset text-decoration-none fw-bold">Media Kit</a>
          </p>
          <p>
            <a href="#!" className="text-reset text-decoration-none fw-bold">Contact</a>
          </p>
        </div>

       
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 className="text-capitalize text-primary fs-4 fw-bold mb-4">
            Social
          </h6>
          <p>
            <a href="#!" className="text-reset text-decoration-none fw-bold">Twitter</a>
          </p>
          <p>
            <a href="#!" className="text-reset text-decoration-none fw-bold">LinkedIn</a>
          </p>
          <p>
            <a href="#!" className="text-reset text-decoration-none fw-bold">Facebook</a>
          </p>
          <p>
            <a href="#!" className="text-reset text-decoration-none fw-bold">Github</a>
          </p>
          <p>
            <a href="#!" className="text-reset text-decoration-none fw-bold">AngelList</a>
          </p>
          <p>
            <a href="#!" className="text-reset text-decoration-none fw-bold">Dribble</a>
          </p>
        </div>
      </div>
    </div>
  </section>

  <div className="text-center bg-primary text-white p-4" style={{'background-color': 'rgba(0, 0, 0, 0.05)'}}>
    &copy; Adepu_Maruthi
  </div>
</footer>

    </div>
  )
}

export default Footer
