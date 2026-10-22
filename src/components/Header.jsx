import styles from './Header.module.css'
import logoImg from '../assets/logo-em.png'

function Header({ isHome = false }) {
  const sectionHref = (section) => `${isHome ? '' : '/'}#${section}`

  return (
    <header className={styles.header}>
      <a className={styles.logo} href={sectionHref('inicio')} aria-label="BlackLine Garage — início">
        <img src={logoImg} alt="Logo da BlackLine Garage" />
      </a>

      <nav className={styles.nav} aria-label="Navegação principal">
        <a href={sectionHref('inicio')}>Início</a>
        <a href={sectionHref('projetos')}>Projetos</a>
        <a href={sectionHref('servicos')}>Serviços</a>
        <a href={sectionHref('sobre')}>Sobre</a>
        <a href={isHome ? '/contato' : '#contato'}>Contato</a>
      </nav>

      <a className={styles.ctaButton} href={isHome ? '/contato' : '#contato'}>
        Agendar
      </a>
    </header>
  )
}

export default Header
