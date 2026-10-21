import styles from './Home.module.css'
import logoImg from '../assets/logo-em.png'
import carroImg from '../assets/carro-prin.png'
import pinturaImg from '../assets/servico-pintura.png'
import rodaImg from '../assets/servico-roda.png'
import freioImg from '../assets/servico-freio.png'
import detalhamentoImg from '../assets/servico-detalhamento.png'
import performanceImg from '../assets/servico-performance.png'
import carImg from '../assets/car-service.png'
import carrosImg from '../assets/carros-final.png'

const stats = [
  { value: '12+', label: 'anos de experiência' },
  { value: '2.4k', label: 'veículos atendidos' },
  { value: '4.9/5', label: 'avaliação média' },
]

const services = [
  {
    title: 'Personalização completa',
    text: 'Transforme o visual do seu carro com um projeto único.',
    image: freioImg,
  },
  {
    title: 'Detalhamento automotivo',
    text: 'Cuidado minucioso para recuperar e proteger cada detalhe.',
    image: detalhamentoImg,
  },
  {
    title: 'Rodas e pneus',
    text: 'Personalização de rodas para deixar seu carro ainda mais marcante.',
    image: rodaImg,
  },
  {
    title: 'Performance',
    text: 'Modificações pensadas para melhorar desempenho e dirigibilidade.',
    image: performanceImg,
  },
  {
    title: 'Pintura automotiva',
    text: 'Pintura e acabamento com qualidade profissional.',
    image: pinturaImg,
  },
]

const gallery = [
  {
    title: 'Estética com personalidade',
    category: '01 / Acabamento',
    text: 'Um visual renovado, com atenção aos detalhes que fazem o seu carro se destacar.',
  },
  {
    title: 'Performance com propósito',
    category: '02 / Desempenho',
    text: 'Soluções pensadas para entregar uma experiência melhor ao volante.',
  },
  {
    title: 'Cuidado em cada detalhe',
    category: '03 / Cuidado',
    text: 'Serviços feitos com critério para valorizar e preservar o seu veículo.',
  },
  {
    title: 'Confiança do início ao fim',
    category: '04 / Transparência',
    text: 'Atendimento próximo, orientação clara e atenção em cada etapa do serviço.',
  },
]

function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <img src={logoImg} alt="Logo da BlackLine Garage" />
        </div>

        <nav className={styles.nav} aria-label="Navegação principal">
          <a href="#inicio">Início</a>
          <a href="#projetos">Projetos</a>
          <a href="#servicos">Serviços</a>
          <a href="#sobre">Sobre</a>
          <a href="#contato">Contato</a>
        </nav>

        <button type="button" className={styles.primaryButton}>
          Agendar
        </button>
      </header>

      <main>
      <section id="inicio" className={styles.hero}>

  <div className={styles.heroContent}>

    <h1>
      Seu carro merece atenção de verdade.
    </h1>

    <p>
      Atendimento técnico, estética e cuidado premium para manter seu veículo
      seguro, bonito e pronto para rodar com confiança.
    </p>

    <div className={styles.actions}>
      <button type="button" className={styles.primaryButton}>
        Solicitar orçamento
      </button>

      <button type="button" className={styles.secondaryButton}>
        Ver serviços
      </button>
    </div>
  </div>


  <div className={styles.heroVisual}>
    <div className={styles.visualCard}>
      <img
        src={carroImg}
        alt="Carro personalizado da BlackLine Garage"
      />
    </div>
  </div>

  <div className={styles.statsWrapper}>
    <ul className={styles.statsList}>
      {stats.map((item) => (
        <li key={item.label}>
          <strong>{item.value}</strong>
          <span>{item.label}</span>
        </li>
      ))}
    </ul>
  </div>

</section>

      <section id="servicos" className={styles.servicesSection}>
        <div className={styles.sectionHeader}>
          <h2>
            Tudo para deixar seu carro do jeito que você imagina.
          </h2>
        </div>

        <div className={styles.servicesGrid}>
          {services.map((service) => (
            <article key={service.title} className={styles.serviceCard}>
              <div className={styles.serviceImage}>
                <img
                  src={service.image}
                  alt={service.title}
                />
              </div>

              <div className={styles.serviceContent}>
                <h3>{service.title}</h3>

                <p>{service.text}</p>

                <button type="button" className={styles.serviceLink}>
                  Saiba mais →
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="sobre" className={styles.aboutSection}>
        <div className={styles.aboutImage} aria-hidden="true">
          <div className={styles.imageBlock} />
          <img src={carImg} alt="Carro sendo detalhado na BlackLine Garage" />
        </div>

        <div className={styles.aboutContent}>
          <h2>Precisão, transparência 
            <br />
            e cuidado com cada detalhe.</h2>
          <p>
            Somos uma garagem focada em entregar qualidade real, sem rodeios e com a
            atenção que seu veículo merece. Trabalhamos com foco em confiança,
            performance e resultado duradouro.
          </p>

          <div className={styles.featureList}>
            <div>
              <span>Atendimento personalizado</span>
            </div>
            <div>
              <span>Materiais de qualidade</span>
            </div>
            <div>
              <span>Prazo transparente</span>
            </div>
          </div>
        </div>
      </section>

      <section id="projetos" className={styles.section}>
        <div className={`${styles.sectionHeader} ${styles.resultsHeader}`}>
          <span className={styles.eyebrow}>O jeito BlackLine</span>
          <h2>Mais do que um serviço. Um cuidado completo.</h2>
          <p>
            Qualidade, atenção e personalidade em cada etapa do trabalho.
          </p>
        </div>

        <div className={styles.galleryGrid}>
          {gallery.map((item, index) => (
            <article key={item.title} className={styles.galleryItem}>
              <span className={styles.galleryNumber} aria-hidden="true">
                0{index + 1}
              </span>
              <div className={styles.galleryContent}>
                <span>{item.category}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
              <span className={styles.galleryAccent} aria-hidden="true" />
            </article>
          ))}
        </div>
      </section>
      <section id="contato" className={styles.infoSection}>
        <div className={styles.infoContent}>
          <img src={carrosImg} alt="Carros personalizados na BlackLine Garage" />
        </div>
      </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <div className={styles.footerTop}>
            <a className={styles.footerBrand} href="#inicio" aria-label="BlackLine Garage — início">
              <img src={logoImg} alt="" />
              <span>Seu carro. Do seu jeito.</span>
            </a>

            <div className={styles.footerCta}>
              <p>Pronto para dar o próximo passo?</p>
              <a href="#contato" className={styles.footerCtaLink}>
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

            <nav className={styles.footerNav} aria-label="Links do rodapé">
              <h2>Explore</h2>
              <a href="#inicio">Início</a>
              <a href="#projetos">Projetos</a>
              <a href="#servicos">Serviços</a>
              <a href="#sobre">Sobre nós</a>
            </nav>

            <div className={styles.footerContact}>
              <h2>Vamos conversar?</h2>
              <p>Conte o que você imagina para o seu carro.</p>
              <a href="#contato">Entre em contato <span aria-hidden="true">→</span></a>
            </div>
          </div>

          <div className={styles.footerBottom}>
            <span>© {new Date().getFullYear()} BlackLine Garage. Todos os direitos reservados.</span>
            <a href="#inicio">Voltar ao topo ↑</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home
