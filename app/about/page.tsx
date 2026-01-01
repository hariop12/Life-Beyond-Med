import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"
import Image from "next/image"

export default function About() {
  return (
    <>
      <Navigation currentPage="about" />

      {/* About Hero */}
      <section className="about-hero">
        <div className="container">
          <h1>About Life Beyond Medicine</h1>
          <p>Embracing Ancient Wisdom for Modern Wellness</p>
        </div>
      </section>

      {/* About Content */}
      <section className="about-content">
        <div className="container">
          <div className="about-intro">
            <h2>Our Mission</h2>
            <p>
              Life Beyond Medicine is dedicated to helping individuals discover the path to complete wellness through
              holistic healing practices. We believe that true health encompasses not just the absence of disease, but a
              state of complete physical, mental, and spiritual well-being.
            </p>
            <p>
              Our approach integrates ancient wisdom with modern understanding, offering a comprehensive range of
              natural healing modalities that address the root causes of imbalance rather than merely treating symptoms.
            </p>
          </div>

          <div className="about-vision">
            <div className="vision-content">
              <h2>Our Vision</h2>
              <p>
                We envision a world where holistic wellness is accessible to all, where individuals are empowered to
                take charge of their health through natural means, and where the healing wisdom of ancient traditions is
                valued alongside modern medical advances.
              </p>
              <p>
                Through education, compassionate care, and personalized healing protocols, we strive to create a
                community of individuals who live in harmony with nature and experience optimal vitality in all aspects
                of life.
              </p>
            </div>
            <div className="vision-image">
              <Image
                src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&h=400&fit=crop"
                alt="Holistic wellness"
                width={600}
                height={400}
                unoptimized
              />
            </div>
          </div>

          <div className="about-values">
            <h2>Our Core Values</h2>
            <div className="values-grid">
              {[
                {
                  icon: "seedling",
                  title: "Natural Healing",
                  description:
                    "We believe in the inherent healing power of nature and use natural remedies, herbs, and therapies to support the body's innate ability to heal itself.",
                },
                {
                  icon: "hands-helping",
                  title: "Compassionate Care",
                  description:
                    "Every individual is unique, and we provide personalized, compassionate care that honors each person's journey to wellness.",
                },
                {
                  icon: "book-open",
                  title: "Ancient Wisdom",
                  description:
                    "We draw upon thousands of years of healing traditions from Ayurveda, Yoga, Traditional Chinese Medicine, and other time-tested practices.",
                },
                {
                  icon: "users",
                  title: "Community",
                  description:
                    "We foster a supportive community where individuals can learn, grow, and heal together on their wellness journeys.",
                },
                {
                  icon: "graduation-cap",
                  title: "Education",
                  description:
                    "We empower individuals through education, teaching them to understand their bodies and make informed choices about their health.",
                },
                {
                  icon: "yin-yang",
                  title: "Balance",
                  description:
                    "We promote balance and harmony in all aspects of life - physical, mental, emotional, and spiritual.",
                },
              ].map((value, index) => (
                <div key={index} className="value-card">
                  <div className="value-icon">
                    <i className={`fas fa-${value.icon}`}></i>
                  </div>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="about-approach">
            <h2>Our Holistic Approach</h2>
            <p>
              At Life Beyond Medicine, we understand that health is multifaceted. Our integrated approach addresses all
              dimensions of wellness:
            </p>
            <div className="approach-grid">
              <div className="approach-item">
                <h3>
                  <i className="fas fa-heartbeat"></i> Physical Wellness
                </h3>
                <p>
                  Through naturopathy, nutrition, yoga therapy, and bodywork, we support optimal physical health and
                  vitality.
                </p>
              </div>
              <div className="approach-item">
                <h3>
                  <i className="fas fa-brain"></i> Mental Clarity
                </h3>
                <p>
                  Meditation, counseling, and mindfulness practices help clear mental fog and enhance cognitive
                  function.
                </p>
              </div>
              <div className="approach-item">
                <h3>
                  <i className="fas fa-smile"></i> Emotional Balance
                </h3>
                <p>Our therapies address emotional well-being, helping you process emotions and find inner peace.</p>
              </div>
              <div className="approach-item">
                <h3>
                  <i className="fas fa-dove"></i> Spiritual Growth
                </h3>
                <p>
                  We support your spiritual journey through practices that connect you with your higher self and life
                  purpose.
                </p>
              </div>
            </div>
          </div>

          <div className="about-cta">
            <h2>Begin Your Wellness Journey Today</h2>
            <p>Experience the transformative power of holistic healing</p>
            <Link href="/contact" className="btn btn-primary btn-large">
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
