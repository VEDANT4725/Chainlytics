import React from "react";
import "./styles.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Footer() {
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (
    <div className="footer">
      <div className="brand-wrap" onClick={() => topFunction()}>
        <h2 className="logo">
          <span className="brand-icon" aria-hidden="true" dangerouslySetInnerHTML={{__html: `
            <svg viewBox="0 0 32 32" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="16" r="16" fill="#f7931a"/>
              <path d="M20.6 14.9c.5-3.3-2-5-4.9-6.2l1-4-2.4-.6-1 4c-.6-.1-1.3-.2-2-.4l.99-3.9-2.4-.6-1 4c-.5-.1-1-.2-1.5-.3l.01.01-3.6-.9v1.6s1 .2 1 .3l2.4 0 1 4-2.4.6-1 4 2.4.6-1 4 2.4.6 1-4c.7.2 1.4.3 2.1.4l-1 4 2.4.6 1-4c3 .7 5.3.4 6.3-2.4.9-2.5-.1-3.9-1.9-4.6 1.4-.3 2.5-1 2-2.7z" fill="#fff"/>
            </svg>
          `}} />
          Chainlytics<span>.</span>
        </h2>
        <p className="dev-credit">Developed by Vedant Kolhe❤️</p>
      </div>
      <div className="social-links">
        <a href="https://github.com/VEDANT4725" target="_blank" rel="noopener noreferrer">
          <GitHubIcon className="social-link" />
        </a>
        <a href="mailto:vedantkolhe2005@gmail.com">
          <EmailIcon className="social-link" />
        </a>
        <a href="https://twitter.com/vedantkolhe2005" target="_blank" rel="noopener noreferrer">
          <TwitterIcon className="social-link" />
        </a>
        <a href="https://www.instagram.com/vedant_4725?igsh=NHgzbWQ1MmN2OWtr" target="_blank" rel="noopener noreferrer">
          <InstagramIcon className="social-link" />
        </a>
        <a href="https://www.linkedin.com/in/vedant-kolhe" target="_blank" rel="noopener noreferrer">
          <LinkedInIcon className="social-link" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
