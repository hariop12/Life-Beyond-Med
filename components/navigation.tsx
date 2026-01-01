"use client"

import { useState } from "react"
import Link from "next/link"

interface NavigationProps {
  currentPage?: string
}

export function Navigation({ currentPage }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const toggleDropdown = (dropdown: string) => {
    if (typeof window !== "undefined" && window.innerWidth <= 768) {
      setOpenDropdown(openDropdown === dropdown ? null : dropdown)
    }
  }

  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-brand">
          <Link href="/">Life Beyond Medicine</Link>
        </div>
        <button
          className="nav-toggle"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          <span style={{ transform: isMenuOpen ? "rotate(45deg) translate(5px, 5px)" : "" }}></span>
          <span style={{ opacity: isMenuOpen ? "0" : "1" }}></span>
          <span style={{ transform: isMenuOpen ? "rotate(-45deg) translate(7px, -6px)" : "" }}></span>
        </button>
        <ul className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
          <li>
            <Link href="/" className={currentPage === "home" ? "active" : ""}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className={currentPage === "about" ? "active" : ""}>
              About
            </Link>
          </li>
          <li className={`dropdown ${openDropdown === "professional" ? "active" : ""}`}>
            <button
              className="dropdown-toggle"
              onClick={(e) => {
                e.preventDefault()
                toggleDropdown("professional")
              }}
              aria-expanded={openDropdown === "professional"}
            >
              Professional Services <i className="fas fa-chevron-down"></i>
            </button>
            <ul className="dropdown-menu">
              <li>
                <Link href="/naturopath">Naturopath</Link>
              </li>
              <li>
                <Link href="/yoga">Yoga Therapist</Link>
              </li>
              <li>
                <Link href="/nutritionist">Nutritionist</Link>
              </li>
              <li>
                <Link href="/sujok">Sujok Smile Healer</Link>
              </li>
              <li>
                <Link href="/meditation">Smile Meditation</Link>
              </li>
              <li>
                <Link href="/holistic">Holistic Healer</Link>
              </li>
              <li>
                <Link href="/counselor">CPA Counselor</Link>
              </li>
            </ul>
          </li>
          <li className={`dropdown ${openDropdown === "social" ? "active" : ""}`}>
            <button
              className="dropdown-toggle"
              onClick={(e) => {
                e.preventDefault()
                toggleDropdown("social")
              }}
              aria-expanded={openDropdown === "social"}
            >
              Social Services <i className="fas fa-chevron-down"></i>
            </button>
            <ul className="dropdown-menu">
              <li>
                <Link href="/social/sparsh">Sparsh Ek Ehsaas</Link>
              </li>
              <li>
                <Link href="/social/jito">JITO Diagnostic Center</Link>
              </li>
              <li>
                <Link href="/social/rajasthani">Rajasthani Ekta Women Organization</Link>
              </li>
              <li>
                <Link href="/social/sthanakwasi">Sthanakwasi Sadri Women Organization</Link>
              </li>
              <li>
                <Link href="/social/sskg">SSKG</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/contact" className={currentPage === "contact" ? "active" : ""}>
              Contact
            </Link>
          </li>
          <li>
            <Link href="/faq" className={currentPage === "faq" ? "active" : ""}>
              FAQ&apos;s
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
