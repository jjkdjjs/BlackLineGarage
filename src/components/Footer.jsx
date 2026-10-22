import styles from './Footer.module.css'
import logoImg from '../assets/logo-em.png'
import carrosImg from '../assets/carros-final.png'

function Footer({ isHome = false }) {
  const sectionHref = (section) => `${isHome ? '' : '/'}#${section}`

  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.footerTop}>
          <a className={styles.footerBrand} href={sectionHref('inicio')} aria-label="BlackLine Garage — início">
            <img src={logoImg} alt="" />
            <span>Seu carro. Do seu jeito.</span>
          </a>

          <div className={styles.footerCta}>
            <p>Pronto para dar o próximo passo?</p>
            <a href={isHome ? '/contato' : '#contato'} className={styles.footerCtaLink}>
              Fale com a gente <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <div className={styles.footerColumns}>
          <div className={styles.footerDescription}>
            <p>
              Cuidado, personalidade e performance para acompanhar você em cada
              caminho.
            </p>
          </div>

          <div className={styles.footerImage}>
            <img src={carrosImg} alt="Carros personalizados na BlackLine Garage" />
          </div>

          <nav className={styles.footerNav} aria-label="Links do rodapé">
            <h2>Explore</h2>
            <a href={sectionHref('inicio')}>Início</a>
            <a href={sectionHref('projetos')}>Projetos</a>
            <a href={sectionHref('servicos')}>Serviços</a>
            <a href={sectionHref('sobre')}>Sobre nós</a>
          </nav>
        </div>

        <div className={styles.footerBottom}>
          <span>© {new Date().getFullYear()} BlackLine Garage. Todos os direitos reservados.</span>
          <a href={sectionHref('inicio')}>Voltar ao topo ↑</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
