import styles from './Home.module.css'

const stats = [
  { value: '12+', label: 'anos de experiência' },
  { value: '2.4k', label: 'veículos atendidos' },
  { value: '4.9/5', label: 'avaliação média' },
]

const services = [
  { title: 'Diagnóstico', text: 'Identificação rápida de falhas elétricas, mecânicas e de performance.' },
  { title: 'Manutenção', text: 'Troca de óleo, revisão, alinhamento e inspeção geral do seu veículo.' },
  { title: 'Detalhamento', text: 'Acabamento premium com lavagem, polimento e proteção de pintura.' },
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
        <div className={styles.logo} >
            <img src="/assets/logo-em.png" alt="Logo da BlackLine Garage" />
        </div>

        <nav className={styles.nav} aria-label="Navegação principal">
          <a href="#inicio">Início</a>
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
          <span className={styles.eyebrow}>Garage premium</span>
          <h1>Seu carro merece atenção de verdade.</h1>
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

          <ul className={styles.statsList}>
            {stats.map((item) => (
              <li key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.heroVisual} aria-label="Visualização da garagem">
          <div className={styles.visualCard}>
            <div className={styles.imagePlaceholder} />
            <div className={styles.cardInfo}>
              <span>Atendimento exclusivo</span>
              <strong>Diagnóstico + revisão</strong>
            </div>
          </div>
        </div>
      </section>

      <section id="servicos" className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.eyebrow}>Serviços</span>
          <h2>O que fazemos por você</h2>
        </div>

        <div className={styles.cardGrid}>
          {services.map((service) => (
            <article key={service.title} className={styles.serviceCard}>
              <div className={styles.iconBox} aria-hidden="true" />
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="sobre" className={styles.aboutSection}>
        <div className={styles.aboutImage} aria-hidden="true">
          <div className={styles.imageBlock} />
        </div>

        <div className={styles.aboutContent}>
          <span className={styles.eyebrow}>Sobre nós</span>
          <h2>Precisão, transparência e cuidado com cada detalhe.</h2>
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

      <section id="contato" className={styles.ctaSection}>
        <div>
          <span className={styles.eyebrow}>Entre em contato</span>
          <h2>Vamos deixar seu carro no melhor estado possível.</h2>
        </div>

        <button type="button" className={styles.primaryButton}>
          Falar conosco
        </button>
      </section>
    </main>
  )
}

export default Home
