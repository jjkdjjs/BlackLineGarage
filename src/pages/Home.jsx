import styles from './Home.module.css'
import logoImg from '../assets/logo-em.png'
import carroImg from '../assets/carro-prin.png'
import pinturaImg from '../assets/servico-pintura.png'
import rodaImg from '../assets/servico-roda.png'
import freioImg from '../assets/servico-freio.png'
import detalhamentoImg from '../assets/servico-detalhamento.png'
import performanceImg from '../assets/servico-performance.png'
import carImg from '../assets/car-service.png'

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
  'Estética',
  'Performance',
  'Confiabilidade',
  'Serviço Premium',
]

function Home() {
  return (
    <main className={styles.page}>
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
              <strong>01</strong>
              <span>Atendimento personalizado</span>
            </div>
            <div>
              <strong>02</strong>
              <span>Materiais de qualidade</span>
            </div>
            <div>
              <strong>03</strong>
              <span>Prazo transparente</span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.eyebrow}>Resultados</span>
          <h2>Experiência que faz diferença</h2>
        </div>

        <div className={styles.galleryGrid}>
          {gallery.map((item) => (
            <div key={item} className={styles.galleryItem}>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

export default Home
