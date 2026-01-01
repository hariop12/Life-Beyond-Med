import Link from "next/link"

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Life Beyond Medicine</h3>
            <p>Holistic healing for body, mind, and spirit through ancient wisdom and natural therapies.</p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
              <li>
                <Link href="/faq">FAQ&apos;s</Link>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Services</h3>
            <ul>
              <li>
                <Link href="/naturopath">Naturopathy</Link>
              </li>
              <li>
                <Link href="/yoga">Yoga Therapy</Link>
              </li>
              <li>
                <Link href="/nutritionist">Nutrition</Link>
              </li>
              <li>
                <Link href="/holistic">Holistic Healing</Link>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Connect With Us</h3>
            <div className="social-links">
              <a href="#" aria-label="Facebook">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" aria-label="LinkedIn">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Life Beyond Medicine. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
