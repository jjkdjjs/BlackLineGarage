import styles from './Footer.module.css'
import logoImg from '../assets/logo-em.png'
import carrosImg from '../assets/carros-final.png'

const currentYear = new Date().getFullYear()

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.footerTop}>
          <a className={styles.footerBrand} href="/" aria-label="BlackLine Garage — início">
            <img src={logoImg} alt="" />
            <span>Seu carro. Do seu jeito.</span>
          </a>

          <div className={styles.footerCta}>
            <div>
              <span className={styles.footerLabel}>Vamos começar?</span>
              <p>Pronto para dar o próximo passo?</p>
            </div>
            <a href="/contato" className={styles.footerCtaLink}>
              Fale com a gente <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <div className={styles.footerColumns}>
          <div className={styles.footerAbout}>
            <h2>Sobre a BlackLine</h2>
            <p>
              Cuidado, personalidade e performance para acompanhar você em cada
              caminho.
            </p>
          </div>

          <nav className={styles.footerNav} aria-label="Links do rodapé">
            <h2>Explore</h2>
            <a href="/">Início</a>
            <a href="/projetos">Projetos</a>
            <a href="/servicos">Serviços</a>
            <a href="/sobre">Sobre nós</a>
          </nav>

          <nav className={styles.footerNav} aria-label="Links de atendimento">
            <h2>Atendimento</h2>
            <a href="/contato">Solicitar orçamento</a>
            <a href="/servicos">Conhecer serviços</a>
          </nav>

          <div className={styles.footerImage}>
            <img src={carrosImg} alt="Carros personalizados na BlackLine Garage" />
          </div>
        </div>

        <div className={styles.footerBottom}>
          <span>© {currentYear} BlackLine Garage. Todos os direitos reservados.</span>
          <a href="#">Voltar ao topo ↑</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
