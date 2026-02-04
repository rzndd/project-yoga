import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Serenity Yoga</h3>
          <p>Studio de yoga com foco em bem-estar e harmonia.</p>
        </div>
        <div className="footer-section">
          <h3>Contato</h3>
          <p>Email: contato@serenityyoga.com</p>
          <p>Telefone: (11) 9999-9999</p>
        </div>
        <div className="footer-section">
          <h3>Redes Sociais</h3>
          <div className="social-links">
            <a href="#facebook">Facebook</a>
            <a href="#instagram">Instagram</a>
            <a href="#whatsapp">WhatsApp</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 Serenity Yoga. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}
