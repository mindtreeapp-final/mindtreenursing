'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import './nav.css';

export default function Nav() {
  const pathname = usePathname();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [drawerServices, setDrawerServices] = useState(false);
  const [drawerCourses, setDrawerCourses] = useState(false);

  /* close everything on route change */
  useEffect(() => {
    setDrawerOpen(false);
    setServicesOpen(false);
    setCoursesOpen(false);
    setDrawerServices(false);
    setDrawerCourses(false);
  }, [pathname]);

  /* lock body scroll when drawer is open */
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [drawerOpen]);

  const isActive = href =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  const closeAll = () => {
    setDrawerOpen(false);
    setServicesOpen(false);
    setCoursesOpen(false);
    setDrawerServices(false);
    setDrawerCourses(false);
  };

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {/* ── TOP BAR ── */}
      <div className="topbar">
        <div className="topbar-left">
          <a className="topbar-item" href="tel:+919778286707">
            <svg
              className="topbar-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
            </svg>
            +91 9778 286 707
          </a>
          <div className="topbar-sep" />
          <a className="topbar-item" href="tel:+64221230023">
            <svg
              className="topbar-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
            </svg>
            +64 22 123 0023
          </a>
          <div className="topbar-sep" />
          <a
            className="topbar-item"
            href="https://maps.google.com/?q=Olivet+MC+Road+Panavely+Kottarakkara+Kollam+Kerala"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="topbar-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            Olivet, M.C. Road, Panavely
          </a>
          <div className="topbar-sep" />
          <a
            className="topbar-item"
            href="https://maps.google.com/?q=30/167+Whitney+Street+Blockhouse+Bay+Auckland"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="topbar-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            30/167 Whitney St, Blockhouse
          </a>
        </div>

        <div className="topbar-right">
          <a
            className="social-btn"
      href="https://www.instagram.com/mindtreenursingsolutions/"
  target="_blank"
  rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <svg viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
          <a
            className="social-btn"
            href="https://www.facebook.com/MindtreeNursingSolutions"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <svg viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>
          <a
            className="social-btn"
            href="https://youtube.com/@mindtreenursingsolutions5958?si=kopEIDqFHiT3jcW4"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
          >
            <svg viewBox="0 0 24 24">
              <path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
            </svg>
          </a>
        </div>
      </div>

      {/* ── MAIN NAVBAR ── */}
      <nav className="navbar">
        <Link href="/" className="logo-wrap">
          <img
            className="logo-img"
            src="/logo1.png"
            alt="MindTree Nursing Solutions"
          />
        </Link>

        <div className="nav-right">
          <ul className="menu">
            <li onClick={goToTop}>
              <Link href="/" className={isActive('/') ? 'active' : ''}>
                Home
              </Link>
            </li>

            {/* ── COURSES DROPDOWN ── */}
            <li
              onClick={goToTop}
              className="dropdown"
              onMouseEnter={() => {
                setCoursesOpen(true);
                setServicesOpen(false);
              }}
              onMouseLeave={() => setCoursesOpen(false)}
            >
              <Link
                href="/courses"
                className={`dropdown-trigger${isActive('/courses') ? ' active' : ''}`}
              >
                Courses
                <svg
                  className={`chevron${coursesOpen ? ' chevron-open' : ''}`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </Link>

              {coursesOpen && <div className="dropdown-bridge" />}
              {coursesOpen && (
                <ul className="dropdown-menu">
                  <li onClick={goToTop}>
                    <Link
                      href="/courses/best-oet-coaching-centre-in-kerala"
                      onClick={closeAll}
                      className={
                        isActive('/courses/best-oet-coaching-centre-in-kerala')
                          ? 'active'
                          : ''
                      }
                    >
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M12 2L2 7l10 5 10-5-10-5z" />
                        <polyline points="2 17 12 22 22 17" />
                        <polyline points="2 12 12 17 22 12" />
                      </svg>
                      OET
                      <span className="menu-tag">Online</span>
                    </Link>
                  </li>

                  <li onClick={goToTop}>
                    <Link
                      href="/courses/best-iqn-coaching"
                      onClick={closeAll}
                      className={
                        isActive('/courses/best-iqn-coaching') ? 'active' : ''
                      }
                    >
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M12 2L2 7l10 5 10-5-10-5z" />
                        <polyline points="2 17 12 22 22 17" />
                        <polyline points="2 12 12 17 22 12" />
                      </svg>
                      IQN
                       <span className="menu-tag">Online</span>
                    </Link>
                  </li>
                  <li onClick={goToTop}>
                    <Link
                      href="/courses/best-osce-training"
                      onClick={closeAll}
                      className={
                        isActive('/courses/best-osce-training')
                          ? 'active'
                          : ''
                      }
                    >
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M12 2L2 7l10 5 10-5-10-5z" />
                        <polyline points="2 17 12 22 22 17" />
                        <polyline points="2 12 12 17 22 12" />
                      </svg>
                      OSCE 
  <span className="menu-tag">India, NZ, AU</span>
                    </Link>
                    
                  </li>
                
                 
                </ul>
              )}
            </li>

            {/* ── SERVICES DROPDOWN ── */}
            <li
              onClick={goToTop}
              className="dropdown"
              onMouseEnter={() => {
                setServicesOpen(true);
                setCoursesOpen(false);
              }}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <Link
                href="/services"
                className={`dropdown-trigger${isActive('/services') ? ' active' : ''}`}
              >
                Services
                <svg
                  className={`chevron${servicesOpen ? ' chevron-open' : ''}`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </Link>

              {servicesOpen && <div className="dropdown-bridge" />}
              {servicesOpen && (
                <ul className="dropdown-menu">
                  

                  <li onClick={goToTop}>
                    <Link
                      href="/services/nursing-registration-in-new-zealand"
                      onClick={closeAll}
                      className={isActive('/services/nursing-registration-in-new-zealand') ? 'active' : ''}
                    >
                     <svg
  width="15"
  height="15"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
>
  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
  <path d="M14 2v6h6" />
  <path d="M9 14l2 2 4-4" />
</svg>
                      Nursing Registration in New Zealand
                    </Link>
                  </li>


<li onClick={goToTop}>
                    <Link
                    
                      href="/services/pathway-for-registered-nurses-from-the-uk-and-ireland-to-new-zealand"
                      onClick={closeAll}
                      className={isActive('/services/pathway-for-registered-nurses-from-the-uk-and-ireland-to-new-zealand') ? 'active' : ''}
                    >
                     <svg
  width="15"
  height="15"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
>
  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
  <path d="M14 2v6h6" />
  <path d="M9 14l2 2 4-4" />
</svg>
                    Pathway for Registered Nurses from the UK and Ireland to New-Zealand
                    </Link>
                  </li>


<li onClick={goToTop}>
                    <Link
                    
                      href="/services/cgfns"
                      onClick={closeAll}
                      className={isActive('/services/cgfns') ? 'active' : ''}
                    >
                     <svg
  width="15"
  height="15"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
>
  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
  <path d="M14 2v6h6" />
  <path d="M9 14l2 2 4-4" />
</svg>
                   CGFNS
                    </Link>
                  </li>                  

                           
                  <li onClick={goToTop}>
                    <Link
                      href="/services/flight-ticketing"
                      onClick={closeAll}
                      className={
                        isActive('/services/flight-ticketing') ? 'active' : ''
                      }
                    >
                    <svg
  width="15"
  height="15"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
>
  <path d="M22 2L11 13" />
  <path d="M22 2L15 22L11 13L2 9L22 2Z" />
</svg>
                      Flight Ticketing
                    </Link>
                  </li>


                  <li onClick={goToTop}>
                    <Link
                      href="/services/cv-preparation"
                      onClick={closeAll}
                      className={
                        isActive('/services/cv-preparation') ? 'active' : ''
                      }
                    >
                      <svg
  width="15"
  height="15"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
>
  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
  <path d="M14 2v6h6" />
  <path d="M8 13h8" />
  <path d="M8 17h6" />
  <path d="M8 9h3" />
</svg>
                      CV Preparation
                  
                    </Link>
                  </li>


                  <li onClick={goToTop}>
                    <Link
                      href="/services/visa"
                      onClick={closeAll}
                      className={isActive('/services/visa') ? 'active' : ''}
                    >
                      <svg
  width="15"
  height="15"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
>
  <rect x="6" y="2" width="12" height="20" rx="2" />
  <path d="M12 6v12" />
  <path d="M9 9h6" />
  <path d="M9 15h6" />
</svg>
                      VISA
                    </Link>
                  </li>


                  
                  <li className="dropdown-sep-li">
                    <div className="dropdown-sep" />
                  </li>
                  <li onClick={goToTop}>
                    <Link
                      href="/services/accommodation-and-transportation"
                      onClick={closeAll}
                      className={
                        isActive('/services/accommodation-and-transportation')
                          ? 'active'
                          : ''
                      }
                    >
                    <svg
  width="15"
  height="15"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
>
  <path d="M3 10L12 3l9 7" />
  <path d="M5 10v10h14V10" />
  <path d="M9 20v-6h6v6" />
</svg>
                      Accommodation and Transportation
                    
                    </Link>
                  </li>
                  <li onClick={goToTop}>
                    <Link
                      href="/services/ahpra"
                      onClick={closeAll}
                      className={
                        isActive('/services/ahpra') ? 'active' : ''
                      }
                    >


                      
                    <svg
  width="15"
  height="15"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
>
  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
  <path d="M14 2v6h6" />
  <path d="M9 14l2 2 4-4" />
</svg>
                      Ahpra Registration Support
                    </Link>
                  </li>
                  
                </ul>
              )}
            </li>

            <li onClick={goToTop}>
              <Link
                href="/about"
                className={isActive('/about') ? 'active' : ''}
              >
                About Us
              </Link>
            </li>
            <li onClick={goToTop}>
              <Link
                href="/career"
                className={isActive('/career') ? 'active' : ''}
              >
                Career
              </Link>
            </li>

            <li onClick={goToTop}>
              <Link href="/blog" className={isActive('/blog') ? 'active' : ''}>
                Blog
              </Link>
            </li>

             <li onClick={goToTop}>
              <Link href="/contact" className={isActive('/contact') ? 'active' : ''}>
                Contact Us 
              </Link>
            </li>
          </ul>

          <a
            href="https://forms.zohopublic.in/mindtreenursingsolutions/form/ClientDetails1/formperma/76KIBTp9LCYH_lA6B0jGSwAH8FJ4nmjU8ovh7b6l-tQ"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-btn"
          >
            Join Today
          </a>

          <button
            className={`hamburger${drawerOpen ? ' hamburger--open' : ''}`}
            onClick={() => setDrawerOpen(!drawerOpen)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* ── MOBILE DRAWER ── */}
      {drawerOpen && <div className="drawer-backdrop" onClick={closeAll} />}

      <div className={`drawer-panel${drawerOpen ? ' drawer-panel--open' : ''}`}>
        <button
          className="drawer-close"
          onClick={closeAll}
          aria-label="Close menu"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            width="20"
            height="20"
          >
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        <img className="drawer-logo" src="/logo1.png" alt="MindTree" />

        <ul className="drawer-menu">
          <li>
            <Link href="/" className={isActive('/') ? 'active' : ''}>
              Home
            </Link>
          </li>

          {/* ── Courses accordion ── */}
          <li>
            <button
              className={`drawer-services-btn${isActive('/courses') ? ' active' : ''}`}
              onClick={() => setDrawerCourses(!drawerCourses)}
            >
              Courses
              <svg
                className={`chevron${drawerCourses ? ' chevron-open' : ''}`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                width="14"
                height="14"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
            {drawerCourses && (
              <ul className="drawer-submenu">
                <li>
                  <Link href="/courses/best-oet-coaching-centre-in-kerala">
                    OET
                  </Link>
                </li>
                <li>
                  <Link href="/courses/best-iqn-coaching">IQN</Link>
                </li>
                <li>
                  <Link href="/courses/best-osce-training">OSCE</Link>
                </li>
              
              </ul>
            )}
          </li>

          {/* ── Services accordion ── */}
          <li>
            <button
              className={`drawer-services-btn${isActive('/services') ? ' active' : ''}`}
              onClick={() => setDrawerServices(!drawerServices)}
            >
              Services
              <svg
                className={`chevron${drawerServices ? ' chevron-open' : ''}`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                width="14"
                height="14"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
            {drawerServices && (
              <ul className="drawer-submenu">
                   <li>
                  <Link href="/services/nursing-registration-in-new-zealand">Nursing Registration in New Zealand</Link>
                </li>
                 
                   <li>
                  <Link href="/services/pathway-for-registered-nurses-from-the-uk-and-ireland-to-new-zealand">Pathway for Registered Nurses from the UK & Ireland to New Zealand</Link>
                </li>
                
                <li>
                  <Link href="/services/cgfns">CGFNS</Link>
                </li>
                <li>
                  <Link href="/services/flight-ticketing">
                    Flight Ticketing
                  </Link>
                </li>
                <li>
                  <Link href="/services/cv-preparation">CV Preparation</Link>
                </li>
                <li>
                  <Link href="/services/visa">VISA</Link>
                </li>
                <li>
                  <Link href="/services/accommodation-and-transportation">
                    Accommodation and Transportation
                  </Link>
                </li>
                <li>
                  <Link href="/services/ahpra">AHPRA Registration Support</Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link href="/about" className={isActive('/about') ? 'active' : ''}>
              About Us
            </Link>
          </li>

          <li>
            <Link
              href="/career"
              className={isActive('/career') ? 'active' : ''}
            >
              Career
            </Link>
          </li>

          <li>
            <Link href="/blog" className={isActive('/blog') ? 'active' : ''}>
              Blog
            </Link>
          </li>

          <li>
            <Link
              href="/contact"
              className={isActive('/contact') ? 'active' : ''}
            >
              Contact Us
            </Link>
          </li>
        </ul>

        <a
          href="https://forms.zohopublic.in/mindtreenursingsolutions/form/ClientDetails1/formperma/76KIBTp9LCYH_lA6B0jGSwAH8FJ4nmjU8ovh7b6l-tQ"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-btn drawer-cta-btn"
        >
          Join Today
        </a>
      </div>
    </>
  );
}
