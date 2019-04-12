import React from "react";

import "./Footer.scss";

const Footer = props => {
  return (
    <div className="footer clearfix">
      <div className="col-3 float-left display6 text-center">
        <a className="footer__social-media-icons">
          <ion-icon name="logo-facebook" />
        </a>
        <a className="footer__social-media-icons">
          <ion-icon name="logo-instagram" />
        </a>
        <hr className="float-left footer__break-line" />
        <div className="display6 font-weight-light text-left">talkItOut!</div>
      </div>

      <div className="col-3 float-left">
        <div className="display7 font-weight-light text-left">Join Us ?</div>
        <ul>
          <li className="display9 font-weight-light text-left">
            Become a listener
          </li>
          <li className="display9 font-weight-light text-left">
            Register as specialist
          </li>
        </ul>
      </div>

      <div className="col-3 float-left">
        <div className="display7 font-weight-light text-left">Services</div>
        <ul>
          <li className="display10 font-weight-light text-left">
            Take the test
          </li>
          <li className="display10 font-weight-light text-left">Events</li>

          <li className="display10 font-weight-light text-left">
            talkItOut for buisness
          </li>
          <li className="display10 font-weight-light text-left">Gift Cards</li>
        </ul>
      </div>
      <div className="col-3 float-left">
        <div className="display7 font-weight-light text-left">
          Usefull links
        </div>
        <ul>
          <li className="display10 font-weight-light text-left">
            Customer Support
          </li>
          <li className="display10 font-weight-light text-left">
            What is online therapy
          </li>

          <li className="display10 font-weight-light text-left">Veterans</li>
          <li className="display10 font-weight-light text-left">
            Emergecy Resources
          </li>
        </ul>
      </div>
      <div className="display8 text-center font-weight-light footer__alert col-12">
        If you are in a life threatening situation - don’t use this site. <br/>Call
        <a href='tel:02227546669'> +91 022 2754 6669 </a> to get immediate help.
      </div>
    </div>
  );
};

export default Footer;
