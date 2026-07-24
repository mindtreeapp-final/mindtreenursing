
import Link from "next/link";
import "./footer.css"
import { FaPhone,FaInstagram, FaFacebook, FaYoutube, FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";


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