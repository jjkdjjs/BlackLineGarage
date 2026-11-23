import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from './Projetos.module.css'
import carrosImg from '../assets/carros-final.png'
import pinturaImg from '../assets/servico-pintura.png'
import rodaImg from '../assets/servico-roda.png'
import performanceImg from '../assets/servico-performance.png'

const projects = [
  {
    category: 'Estética',
    title: 'Visual exclusivo',
    text: 'Conjunto de pintura, acabamento e detalhes criado para cada cliente.',
    image: pinturaImg,
  },
  {
    category: 'Rodas',
    title: 'Conjunto esportivo',
    text: 'Personalização de rodas e pneus com foco em presença e dirigibilidade.',
    image: rodaImg,
  },
  {
    category: 'Performance',
    title: 'Resposta ao volante',
    text: 'Preparação equilibrada para melhorar o desempenho sem perder confiabilidade.',
    image: performanceImg,
  },
]

function Projetos() {
  return (
    <div className={styles.page}>
      <Header />
      <main>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <span className={styles.eyebrow}>Projetos realizados</span>
            <h1>Cada carro conta uma <span>história única.</span></h1>
            <p>
              Projetos pensados no detalhe, com estética, técnica e acabamento
              para traduzir exatamente o que você imaginou.
            </p>
            <a className={styles.primaryButton} href="/contato">Criar meu projeto <span>↗</span></a>
          </div>
          <div className={styles.heroVisual}>
            <span className={styles.glow} aria-hidden="true" />
            <img src={carrosImg} alt="Carros personalizados pela BlackLine Garage" />
          </div>
        </section>

        <section className={styles.projectsSection}>
          <div className={styles.sectionHeader}>
            <div>
              <span>Portfólio</span>
              <h2>Veja o que podemos construir juntos.</h2>
            </div>
            <p>Do conceito ao acabamento, cada escolha tem um propósito.</p>
          </div>

          <div className={styles.projectGrid}>
            {projects.map((project, index) => (
              <article className={styles.projectCard} key={project.title}>
                <img src={project.image} alt={project.title} />
                <div className={styles.projectOverlay} />
                <span className={styles.projectNumber}>0{index + 1}</span>
                <div className={styles.projectContent}>
                  <span>{project.category}</span>
                  <h3>{project.title}</h3>
                  <p>{project.text}</p>
                </div>
              </article>
            ))}
          </div>

          <div className={styles.projectProcess}>
            <article><span>01</span><div><strong>Conversa</strong><p>Você conta o objetivo e o estilo desejado.</p></div></article>
            <article><span>02</span><div><strong>Planejamento</strong><p>Definimos serviços, materiais e prioridades.</p></div></article>
            <article><span>03</span><div><strong>Execução</strong><p>Cada etapa é acompanhada com atenção.</p></div></article>
            <article><span>04</span><div><strong>Entrega</strong><p>Você recebe o projeto pronto e orientado.</p></div></article>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Projetos
