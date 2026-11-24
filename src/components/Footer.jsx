import styles from './Footer.module.css'
import logoImg from '../assets/logo-em.png'
import carrosImg from '../assets/carros-final.png'

const currentYear = new Date().getFullYear()

function Footer() {
  function handleScrollTop(event) {
    event.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.watermark} aria-hidden="true">
        BLACKLINE
      </div>

      <div className={styles.footerInner}>
        {/* PALCO DE DESTAQUE DO SHOWROOM */}
        <div className={styles.showroomStage}>
          <div className={styles.stageText}>
            <h2>
              Seu carro. <span>Do seu jeito.</span>
            </h2>
            <p>
              Da estética ao acerto dinâmico, tiramos seu projeto do papel em
              Blumenau com acabamento técnico e acompanhamento real.
            </p>

            <div className={styles.stageActions}>
              <a href="/contato" className={styles.primaryCta}>
                Agendar avaliação <span aria-hidden="true">↗</span>
              </a>
              <span className={styles.locationBadge}>
                <i aria-hidden="true" />
                Blumenau · SC
              </span>
            </div>
          </div>

          <div className={styles.stageCar}>
            <div className={styles.spotlight} aria-hidden="true" />
            <img src={carrosImg} alt="Carros personalizados na BlackLine Garage" />
            <div className={styles.floorLine} aria-hidden="true" />
          </div>
        </div>

        {/* COLUNAS ARQUITETÔNICAS */}
        <div className={styles.footerGrid}>
          <div className={styles.brandCol}>
            <a className={styles.footerBrand} href="/" aria-label="BlackLine Garage — início">
              <img src={logoImg} alt="BlackLine Garage" />
            </a>
            <p>
              Estética automotiva, personalização completa e performance para
              quem exige precisão em cada detalhe.
            </p>
          </div>

          <nav className={styles.navCol} aria-label="Navegação principal">
            <h3>Navegação</h3>
            <a href="/">Início</a>
            <a href="/projetos">Projetos</a>
            <a href="/servicos">Serviços</a>
            <a href="/sobre">Sobre nós</a>
            <a href="/contato">Contato</a>
          </nav>

          <nav className={styles.navCol} aria-label="Orçamento por especialidade">
            <h3>Especialidades</h3>
            <a href="/contato?servico=personalizacao">Personalização</a>
            <a href="/contato?servico=detalhamento">Detalhamento</a>
            <a href="/contato?servico=rodas">Rodas e pneus</a>
            <a href="/contato?servico=performance">Performance</a>
            <a href="/contato?servico=pintura">Pintura automotiva</a>
          </nav>

          <div className={styles.studioCol}>
            <h3>Estúdio & Horários</h3>
            <p className={styles.address}>
              Parque Ramiro Ruediger
              <span>Rua Alberto Stein, 416 · Velha, Blumenau - SC</span>
            </p>
            <div className={styles.hours}>
              <div>
                <span>Seg — Sex</span>
                <strong>08h às 18h</strong>
              </div>
              <div>
                <span>Sábado</span>
                <strong>08h às 12h</strong>
              </div>
            </div>
          </div>
        </div>

        {/* BARRA FINAL */}
        <div className={styles.footerBottom}>
          <span>© {currentYear} BlackLine Garage. Todos os direitos reservados.</span>
          <a href="#topo" onClick={handleScrollTop}>
            Voltar ao topo <span aria-hidden="true">↑</span>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer