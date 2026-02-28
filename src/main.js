import './style.css'

document.querySelector('#app').innerHTML = `
  <header>
    <nav class="container">
      <div class="logo">GenieWebsites</div>
      <button class="mobile-menu-toggle" aria-label="Menü öffnen">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <ul class="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">Über mich</a></li>
        <li><a href="#services">Leistungen</a></li>
        <li><a href="#portfolio">Referenzen</a></li>
        <li><a href="#pricing">Preise</a></li>
        <li><a href="#contact">Kontakt</a></li>
      </ul>
    </nav>
  </header>

  <section id="home" class="hero">
    <div class="container">
      <!--<div class="hero-badge">✅ Bereits 25+ Websites gebaut</div>-->
      <h1>Moderne Websites für lokale Unternehmen in München — ab €300</h1>
      <p>Geniewebsites baut schnelle, professionelle Websites - powered by AI - in wenigen Tagen statt Wochen.</p>
      <a href="#contact" class="btn">Kontaktier Mich</a>
    </div>
  </section>
 

  <section id="about" class="about">
    <div class="container">
      <h2 class="section-title">Über mich</h2>
      <div class="about-content">
        <div class="about-text">
          <p>
            Ich bin <strong>Marc Frenzel</strong>, Gründer von <strong>GenieWebsites</strong> und leidenschaftlicher Webdesigner aus München.
            Durch eigene Projekte, Online-Kurse und eine technische Ausbildung auf A-Level-Niveau 
            habe ich früh gelernt, wie man digitale Lösungen baut, die wirklich funktionieren.
          </p>
        <p>
          Heute nutze ich modernste KI-Tools, um professionelle Websites schneller und effizienter 
          zu bauen als traditionelle Agenturen — ohne Abstriche bei Qualität oder Design.
          Bei <strong>GenieWebsites</strong> arbeite ich direkt mit lokalen Unternehmen zusammen, 
          nehme mir Zeit für ihre individuellen Bedürfnisse und liefere Websites, die nicht nur 
          gut aussehen — sondern auch Kunden bringen.
        </p>
        </div>
        <div class="about-image">
         <img src="/IMG_3046.jpeg" alt="Dein Foto" style="width: 100%; max-width: 350px; aspect-ratio: 1; object-fit: cover; border-radius: 1rem; box-shadow: var(--shadow-lg); border: 1px solid var(--glass-border);" />
        </div>
      </div>
    </div>
  </section>

  <section id="services" class="services">
    <div class="container">
      <h2 class="section-title">Leistungen</h2>
      <div class="services-grid">
        <div class="service-card">
          <div class="service-icon">🌐</div>
          <h3>Website Design & Entwicklung</h3>
          <p>Professionelle, mobile-optimierte Website in 3–5 Tagen.</p>
          <div class="service-price">ab €300</div>
        </div>

        <div class="service-card">
          <div class="service-icon">🔧</div>
          <h3>Monatliche Wartung</h3>
          <p>Ich halte Ihre Website aktuell und funktionsfähig.</p>
          <div class="service-price">ab €50/mo</div>
        </div>
      </div>
    </div>
  </section>

  <section id="portfolio" class="portfolio">
    <div class="container">
      <h2 class="section-title">Referenzen</h2>
      <div class="portfolio-grid">
        <div class="portfolio-card">
          <div class="portfolio-image">
            <img src="/Bildschirmfoto 2026-02-27 um 15.39.30.png" alt="minimalist" style="width: 100%; height: 250px; object-fit: contain;" />
           </div> 
          <div class="portfolio-content">
            <h3>Kreativ</h3>
            <p>Mutiges, farbenfrohes Design für kreative Branchen und junge Unternehmen.</p>
            <div class="portfolio-tags">
              <span class="tag">Demo</span>
              <span class="tag">Kreativ</span>
            </div>
            <a href="https://demo-reposity-lovat.vercel.app/" target="_blank" rel="noopener noreferrer" class="btn btn-primary">Demo ansehen</a>
          </div>
        </div>

        <div class="portfolio-card">
          <div class="portfolio-image">
            <img src="/Bildschirmfoto 2026-02-27 um 15.39.49.png" alt="minimalist" style="width: 100%; height: 250px; object-fit: contain;" />
           </div> 
          <div class="portfolio-content">
            <h3>Minimalistisch</h3>
            <p>Klares, modernes Design mit Fokus auf Übersichtlichkeit und schneller Navigation.</p>
            <div class="portfolio-tags">
              <span class="tag">Demo</span>
              <span class="tag">Minimalist</span>
            </div>
            <a href="https://mock-website-handwerker.vercel.app/" target="_blank" rel="noopener noreferrer" class="btn btn-primary">Demo ansehen</a>
          </div>
        </div>

        <div class="portfolio-card">
          <div class="portfolio-image">
            <img src="/Bildschirmfoto 2026-02-27 um 15.40.09.png" alt="minimalist" style="width: 100%; height: 250px; object-fit: contain;" />
           </div> 
          <div class="portfolio-content">
            <h3>Klassisch</h3>
            <p>Traditionelles Design mit professionellem Look für etablierte Unternehmen.</p>
            <div class="portfolio-tags">
              <span class="tag">Demo</span>
              <span class="tag">Klassisch</span>
            </div>
            <a href="https://demowebsite-classic-reposity.vercel.app/" target="_blank" rel="noopener noreferrer" class="btn btn-primary">Demo ansehen</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="pricing" class="pricing">
    <div class="container">
      <h2 class="section-title">Preise</h2>
      <div class="pricing-grid">
        <div class="pricing-card">
          <h3>Basic</h3>
          <div class="pricing-price">€300</div>
          <p class="pricing-maintenance">Einmalig</p>
          <ul class="pricing-features">
            <li>4 Seiten (Home, Über uns, Leistungen, Kontakt)</li>
            <li>Mobile-optimiert</li>
            <li>Kontaktformular</li>
            <li>Fertig in 3 Tagen</li>
          </ul>
          <a href="#contact" class="btn btn-primary">Jetzt anfragen</a>
        </div>

        <div class="pricing-card featured">
          <div class="pricing-badge">Beliebt</div>
          <h3>Standard</h3>
          <div class="pricing-price">€400</div>
          <p class="pricing-maintenance">Einmalig</p>
          <ul class="pricing-features">
            <li>6 Seiten inkl. Referenzen & Preise</li>
            <li>SEO Grundoptimierung</li>
            <li>Google Maps Einbindung</li>
            <li>Fertig in 5 Tagen</li>
          </ul>
          <a href="#contact" class="btn btn-primary">Jetzt anfragen</a>
        </div>

        <div class="pricing-card">
          <h3>Premium</h3>
          <div class="pricing-price">€500</div>
          <p class="pricing-maintenance">+ €50/mo Wartung & Updates</p>
          <ul class="pricing-features">
            <li>Alles aus Standard</li>
            <li>Monatliche Wartung & Updates</li>
            <li>Sonderanfragen</li>
            <li>Priority Support</li>
          </ul>
          <a href="#contact" class="btn btn-primary">Jetzt anfragen</a>
        </div>
      </div>
    </div>
  </section>

  <section id="contact" class="contact">
    <div class="container">
      <h2 class="section-title">Kontakt</h2>
      <form class="contact-form" id="contactForm" action="https://formspree.io/f/meeldazw" method="POST">
        <div class="success-message" id="successMessage">
          Vielen Dank für Ihre Nachricht! Ich melde mich in Kürze bei Ihnen.
        </div>

        <div class="form-group">
          <label for="name">Name *</label>
          <input type="text" id="name" name="name" required>
        </div>

        <div class="form-group">
          <label for="phone">Telefonnummer</label>
          <input type="tel" id="phone" name="phone">
        </div>

        <div class="form-group">
          <label for="email">E-Mail *</label>
          <input type="email" id="email" name="email" required>
        </div>

        <div class="form-group">
          <label for="message">Nachricht *</label>
          <textarea id="message" name="message" required></textarea>
        </div>

        <button type="submit" class="btn btn-primary btn-submit">Anfrage senden</button>
        <p class="form-note">Ich antworte in der Regel innerhalb von 24 Stunden.</p>
      </form>
    </div>
  </section>

  <footer>
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <h3>Marc Frenzel</h3>
          <p>Webdesigner<br>München</p>
          <p style="margin-top: 1rem; font-size: 0.875rem;">Gemäß §19 UStG wird keine Umsatzsteuer berechnet</p>
        </div>

        <div class="footer-section">
          <h3>Links</h3>
          <ul class="footer-links">
            <li><a href="/impressum.html">Impressum</a></li>
            <li><a href="/datenschutz.html">Datenschutz</a></li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; ${new Date().getFullYear()} Marc Frenzel. Alle Rechte vorbehalten.</p>
      </div>
    </div>
  </footer>

  <button id="scrollToTop" class="scroll-to-top" aria-label="Nach oben scrollen">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M18 15l-6-6-6 6"/>
    </svg>
  </button>
`

document.getElementById('contactForm').addEventListener('submit', async (e) => {
  e.preventDefault()

  const form = e.target
  const formData = new FormData(form)

  try {
    const response = await fetch(form.action, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })

    if (response.ok) {
      document.getElementById('successMessage').classList.add('show')
      form.reset()

      setTimeout(() => {
        document.getElementById('successMessage').classList.remove('show')
      }, 5000)
    } else {
      alert('Es gab ein Problem beim Senden Ihrer Nachricht. Bitte versuchen Sie es erneut.')
    }
  } catch (error) {
    alert('Es gab ein Problem beim Senden Ihrer Nachricht. Bitte versuchen Sie es erneut.')
  }
})

const mobileMenuToggle = document.querySelector('.mobile-menu-toggle')
const navLinks = document.querySelector('.nav-links')

mobileMenuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active')
  mobileMenuToggle.classList.toggle('active')
})

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute('href'))
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
      navLinks.classList.remove('active')
      mobileMenuToggle.classList.remove('active')
    }
  })
})

const scrollToTopBtn = document.getElementById('scrollToTop')

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    scrollToTopBtn.classList.add('visible')
  } else {
    scrollToTopBtn.classList.remove('visible')
  }

  updateActiveNavLink()
})

scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
})

function updateActiveNavLink() {
  const sections = document.querySelectorAll('section[id]')
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"]')

  let current = ''

  sections.forEach(section => {
    const sectionTop = section.offsetTop
    const sectionHeight = section.clientHeight
    if (window.pageYOffset >= sectionTop - 200) {
      current = section.getAttribute('id')
    }
  })

  navLinks.forEach(link => {
    link.classList.remove('active')
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active')
    }
  })
}
