import styles from './Header.module.css'
import logoImg from '../assets/logo-em.png'

function Header() {
  return (
    <header className={styles.header}>
      <a className={styles.logo} href="/" aria-label="BlackLine Garage — início">
        <img src={logoImg} alt="Logo da BlackLine Garage" />
      </a>

      <nav className={styles.nav} aria-label="Navegação principal">
        <a href="/">Início</a>
        <a href="/projetos">Projetos</a>
        <a href="/servicos">Serviços</a>
        <a href="/sobre">Sobre</a>
        <a href="/contato">Contato</a>
      </nav>

      <a className={styles.ctaButton} href="/contato">
        Agendar
      </a>
    </header>
  )
}

export default Header
