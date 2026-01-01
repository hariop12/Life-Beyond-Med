"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1600&h=900&fit=crop",
      alt: "Ayurvedic Herbs",
      title: "Welcome to Life Beyond Medicine",
      description: "Discover Natural Healing & Holistic Wellness",
      buttonText: "Book Consultation",
      buttonLink: "/contact",
    },
    {
      image: "https://images.unsplash.com/photo-1545389336-cf090694435e?w=1600&h=900&fit=crop",
      alt: "Yoga and Meditation",
      title: "Embrace Holistic Living",
      description: "Transform Your Life Through Ancient Wisdom",
      buttonText: "Learn More",
      buttonLink: "/about",
    },
    {
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1600&h=900&fit=crop",
      alt: "Natural Wellness",
      title: "Heal Naturally",
      description: "Your Journey to Complete Wellness Starts Here",
      buttonText: "Explore Services",
      buttonLink: "#services",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)

  return (
    <>
      <Navigation currentPage="home" />

      {/* Hero Carousel */}
      <section className="hero-carousel">
        <div className="carousel-container">
          {slides.map((slide, index) => (
            <div key={index} className={`carousel-slide ${index === currentSlide ? "active" : ""}`}>
              <img src={slide.image || "/placeholder.svg"} alt={slide.alt} className="carousel-image" />
              <div className="carousel-content">
                <h1>{slide.title}</h1>
                <p>{slide.description}</p>
                <Link href={slide.buttonLink} className="btn btn-primary">
                  {slide.buttonText}
                </Link>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-btn prev" onClick={prevSlide}>
          <i className="fas fa-chevron-left"></i>
        </button>
        <button className="carousel-btn next" onClick={nextSlide}>
          <i className="fas fa-chevron-right"></i>
        </button>
        <div className="carousel-indicators">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`indicator ${index === currentSlide ? "active" : ""}`}
              onClick={() => setCurrentSlide(index)}
            ></span>
          ))}
        </div>
      </section>

      {/* Introduction Section */}
      <section className="intro-section">
        <div className="container">
          <div className="intro-content">
            <h2>Life Beyond Medicine</h2>
            <p>
              In our modern world, we often seek quick fixes for our ailments. But true healing goes beyond conventional
              medicine. Life Beyond Medicine is about embracing a holistic approach to wellness - nurturing your body,
              mind, and spirit through ancient wisdom and natural healing practices.
            </p>
            <p>
              Through Ayurveda, Yoga, Naturopathy, and various holistic therapies, we invite you to discover a path to
              complete wellness that addresses the root causes, not just the symptoms.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Cards */}
      <section className="philosophy-section" id="services">
        <div className="container">
          <h2 className="section-title">Our Philosophy</h2>
          <div className="cards-grid">
            <div className="philosophy-card">
              <div className="card-icon">
                <i className="fas fa-leaf"></i>
              </div>
              <h3>Natural Healing</h3>
              <p>
                Harness the power of nature's remedies. From herbs to whole foods, we believe in using natural elements
                to restore balance and vitality to your body.
              </p>
            </div>
            <div className="philosophy-card">
              <div className="card-icon">
                <i className="fas fa-om"></i>
              </div>
              <h3>Mind-Body Connection</h3>
              <p>
                True wellness comes from harmony between mind and body. Through meditation, yoga, and mindfulness
                practices, we help you achieve inner peace.
              </p>
            </div>
            <div className="philosophy-card">
              <div className="card-icon">
                <i className="fas fa-heart"></i>
              </div>
              <h3>Holistic Approach</h3>
              <p>
                We don't just treat symptoms - we address the whole person. Our integrated approach considers your
                physical, emotional, and spiritual well-being.
              </p>
            </div>
            <div className="philosophy-card">
              <div className="card-icon">
                <i className="fas fa-balance-scale"></i>
              </div>
              <h3>Balance & Harmony</h3>
              <p>
                Health is about balance. We help you find equilibrium in all aspects of life through personalized
                therapies and lifestyle guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="services-overview">
        <div className="container">
          <h2 className="section-title">Professional Services</h2>
          <p className="section-subtitle">Explore our range of holistic healing therapies</p>
          <div className="services-grid">
            {[
              {
                image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&h=300&fit=crop",
                title: "Naturopath",
                description: "Natural healing through the power of nature's remedies and lifestyle modifications.",
                link: "/naturopath",
              },
              {
                image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=400&h=300&fit=crop",
                title: "Yoga Therapist",
                description: "Therapeutic yoga practices tailored to your individual health needs and goals.",
                link: "/yoga",
              },
              {
                image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=300&fit=crop",
                title: "Nutritionist",
                description: "Personalized nutrition plans based on Ayurvedic principles and modern science.",
                link: "/nutritionist",
              },
              {
                image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop",
                title: "Sujok Smile Healer",
                description: "Ancient Korean hand therapy for pain relief and healing with a smile.",
                link: "/sujok",
              },
              {
                image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=300&fit=crop",
                title: "Smile Meditation",
                description: "Transform your life through the power of inner smile and mindful meditation.",
                link: "/meditation",
              },
              {
                image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=400&h=300&fit=crop",
                title: "Holistic Healer",
                description: "Comprehensive healing addressing body, mind, and spirit as an integrated whole.",
                link: "/holistic",
              },
              {
                image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=300&fit=crop",
                title: "CPA Counselor",
                description: "Compassionate counseling for mental wellness and emotional healing.",
                link: "/counselor",
              },
            ].map((service, index) => (
              <div key={index} className="service-card">
                <img src={service.image || "/placeholder.svg"} alt={service.title} className="service-image" />
                <div className="service-content">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <Link href={service.link} className="btn btn-secondary">
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Begin Your Healing Journey?</h2>
          <p>Take the first step towards holistic wellness and natural healing</p>
          <Link href="/contact" className="btn btn-primary btn-large">
            Book Your Consultation
          </Link>
        </div>
      </section>

      <Footer />
    </>
  )
}
