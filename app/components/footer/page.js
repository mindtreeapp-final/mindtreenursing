
import Link from "next/link";
import "./footer.css"
import { FaPhone,FaInstagram, FaFacebook, FaYoutube, FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

// Google "Preferred sources" link for mindtreenursing.com.
const GOOGLE_PREFERRED_SOURCE_URL =
  "https://www.google.com/preferences/source?q=mindtreenursing.com";


export default function Footer(){
    return(
      
<div>
    <footer className="footer">

      {/* Shimmer top line */}
      <div className="footer-shimmer"></div>

      <div className="footer-inner">

        {/* ── Brand ── */}
        <div className="footer-brand">
          <div className="footer-logo">
            <span className="footer-logo-star">✦</span>
            <span className="footer-logo-text">
              Mindtree<span className="footer-logo-accent"> Nursing Solutions</span>
            </span>
          </div>
          <p className="footer-tagline">
            Mindtree Nursing is your all-in-one premium consultant for OET, CGFNS, IQN & OSCE, plus visa, ticket, and accommodation in NZ.
          </p>
          <div className="footer-contact-item">
            <MdEmail className="footer-contact-icon" />
            <a href="mailto:wilonpedbin@gmail.com">info@mindtreenursing.com</a>
          </div>
          <div className="footer-socials">
            <a href="https://www.instagram.com/mindtreenursingsolutions?igsh=MWtibTF5YXN5dGR6MQ%3D%3D" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="footer-social-btn">
              <FaInstagram />
            </a>
            <a href="https://www.facebook.com/MindtreeNursingSolutions" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="footer-social-btn">
              <FaFacebook />
            </a>
            <a href="https://youtube.com/@mindtreenursingsolutions5958?si=kopEIDqFHiT3jcW4" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="footer-social-btn">
              <FaYoutube />
            </a>
          </div>

          {/* ── Add as preferred source on Google ── */}
          <a
            href={GOOGLE_PREFERRED_SOURCE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-gsource"
          >
            <span className="footer-gsource-logo" aria-hidden="true">
              <svg viewBox="0 0 48 48" width="20" height="20">
                <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
                <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
                <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
                <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
              </svg>
            </span>
            <span className="footer-gsource-text">
              Add us as a preferred source on Google
              <span className="footer-gsource-arrow" aria-hidden="true"> »</span>
            </span>
          </a>
        </div>

        {/* ── Divider ── */}
        <div className="footer-vr"></div>

        {/* ── Quick Links + Programs ── */}
        <div className="footer-links-wrap">
          <div className="footer-col">
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-link-list">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/services">Service</Link></li>
              <li><Link href="/gallery">Gallery</Link></li>
              <li><Link href="/testimonials">Testimonials</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              
              <li><Link href="/career">Career</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Courses</h4>
            <ul className="footer-link-list">
              <li><Link href="/courses/best-iqn-coaching">IQN</Link></li>
              <li><Link href="/courses/best-oet-coaching-centre-in-kerala">OET</Link></li>
              <li><Link href="/courses/best-osce-training">OSCE</Link></li>
  
            
            </ul>
          </div>
        </div>

        {/* ── Divider ── */}
        <div className="footer-vr"></div>

        {/* ── Contact ── */}
        <div className="footer-contact">
          <h4 className="footer-col-title">Get In Touch</h4>

          <div className="footer-contact-item">
            <FaPhone className="footer-contact-icon" />
            <div>
              <a href="tel:+64212178770">+64 21 217 8770</a>
              <a href="tel:+919778286707">+91 9778 286 707</a>
            </div>
          </div>

          

          <div className="footer-contact-item">
            <FaLocationDot className="footer-contact-icon" />
            <p>Olivet, M.C. Road, Panavely,<br />Kottarakkara, Kollam, Kerala 691532</p>
          </div>

          <div className="footer-contact-item">
            <FaLocationDot className="footer-contact-icon" />
            <p>110 Sir John McKenzie Avenue,<br />Christchurch</p>
          </div>

          <div className="footer-contact-item">
            <FaLocationDot className="footer-contact-icon" />
            <p>30/167 Whitney Street,<br />Blockhouse Bay, Auckland, 0600</p>
          </div>
        </div>
        

      </div>

      {/* ── Bottom bar ── */}
      <div className="footer-bottom">
        <p>© 2026 Mindtree Nursing Solutions. All rights reserved.</p>
        <div className="footer-bottom-links">
          <Link href="#">Privacy Policy</Link>
          <span>·</span>
          <Link href="#">Terms of Service</Link>
        </div>
      </div>

    </footer>
    </div>
    )
}