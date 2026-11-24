import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from './Projetos.module.css'
import carrosImg from '../assets/carros-final.png'
import pinturaImg from '../assets/servico-pintura.png'
import rodaImg from '../assets/servico-roda.png'
import performanceImg from '../assets/servico-performance.png'

const projects = [
  {
    number: '01',
    category: 'Estética',
    slug: 'pintura',
    title: 'Visual exclusivo & acabamento',
    duration: '4 dias na baia',
    text: 'Conjunto de repintura localizada, detalhes em black piano, correção de verniz e vitrificação cerâmica criado sob medida.',
    specs: ['Correção em 3 etapas', 'Vitrificação 9H', 'Acabamento de fábrica'],
    image: pinturaImg,
  },
  {
    number: '02',
    category: 'Rodas',
    slug: 'rodas',
    title: 'Conjunto esportivo & fitment',
    duration: '2 dias na baia',
    text: 'Composição de rodas, medidas de pneus, pintura de pinças em alta temperatura e geometria ajustada para presença e estabilidade.',
    specs: ['Fitment milimétrico', 'Pintura de pinças', 'Balanceamento técnico'],
    image: rodaImg,
  },
  {
    number: '03',
    category: 'Performance',
    slug: 'performance',
    title: 'Resposta ao volante & acerto',
    duration: '3 dias na baia',
    text: 'Preparação equilibrada de suspensão, freios e resposta do conjunto mecânico para melhorar o desempenho sem abrir mão da confiabilidade.',
    specs: ['Setup urbano / track', 'Upgrade de freios', 'Componentes homologados'],
    image: performanceImg,
  },
  {
    number: '04',
    category: 'Estética',
    slug: 'personalizacao',
    title: 'Projeto completo BlackLine',
    duration: '6 dias na baia',
    text: 'Transformação integrada unindo estética externa, revitalização interna, rodas e proteção total de pintura para carros de coleção ou uso diário.',
    specs: ['Consultoria completa', 'Proteção integral', 'Relatório fotográfico'],
    image: carrosImg,
  },
]

const filters = ['Todos', 'Estética', 'Rodas', 'Performance']

const deliverables = [
  {
    title: 'Consultoria de estilo e viabilidade',
    text: 'Antes de mexer no carro, alinhamos referências, compatibilidade técnica e o melhor custo-benefício.',
  },
  {
    title: 'Registro de cada etapa na baia',
    text: 'Você recebe fotos e atualizações reais do andamento do projeto, desde a desmontagem até o acabamento.',
  },
  {
    title: 'Padrão de montagem e garantia',
    text: 'Torque conferido, insumos homologados e revisão final sob iluminação técnica antes da entrega das chaves.',
  },
]

function Projetos() {
  const [activeFilter, setActiveFilter] = useState('Todos')

  const filteredProjects =
    activeFilter === 'Todos'
      ? projects
      : projects.filter((project) => project.category === activeFilter)

  return (
    <div className={styles.page}>
      <Header />
      <main>
        {/* HERO SHOWCASE */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1>
              Cada carro conta uma <span>história única.</span>
            </h1>
            <p>
              Projetos pensados no detalhe, com estética, técnica e acabamento
              para traduzir exatamente o que você imaginou para o seu veículo.
            </p>

            <div className={styles.heroActions}>
              <a className={styles.primaryButton} href="/contato?servico=personalizacao">
                Criar meu projeto <span>↗</span>
              </a>
              <a className={styles.secondaryButton} href="/servicos">
                Ver catálogo de serviços
              </a>
            </div>

            <div className={styles.heroTags}>
              <div>
                <strong>100% sob medida</strong>
                <span>Nenhum projeto sai igual ao outro</span>
              </div>
              <div>
                <strong>Acompanhamento real</strong>
                <span>Atualizações diretas durante a execução</span>
              </div>
            </div>
          </div>

          <div className={styles.heroVisual}>
            <span className={styles.glow} aria-hidden="true" />
            <div className={styles.visualFrame}>
              <img src={carrosImg} alt="Carros personalizados pela BlackLine Garage" />
              <div className={styles.visualCaption}>
                <span>BLACKLINE STUDIO · BLUMENAU</span>
                <strong>Estética · Rodas · Performance</strong>
              </div>
            </div>
          </div>
        </section>

        {/* VITRINE DE PROJETOS COM FILTRO */}
        <section className={styles.projectsSection}>
          <div className={styles.sectionHeader}>
            <h2>Veja o que podemos construir juntos.</h2>

            <div className={styles.filterBar} role="tablist" aria-label="Filtrar projetos por categoria">
              {filters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  role="tab"
                  aria-selected={activeFilter === filter}
                  className={`${styles.filterButton} ${activeFilter === filter ? styles.filterActive : ''}`}
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.projectGrid}>
            {filteredProjects.map((project) => (
              <article className={styles.projectCard} key={project.title}>
                <div className={styles.projectMedia}>
                  <img src={project.image} alt={project.title} />
                  <div className={styles.projectOverlay} />
                  <span className={styles.projectNumber}>{project.number}</span>
                  <span className={styles.projectDuration}>{project.duration}</span>
                </div>

                <div className={styles.projectContent}>
                  <span className={styles.projectCategory}>{project.category}</span>
                  <h3>{project.title}</h3>
                  <p>{project.text}</p>

                  <div className={styles.specTags}>
                    {project.specs.map((spec) => (
                      <span key={spec}>{spec}</span>
                    ))}
                  </div>

                  <a href={`/contato?servico=${project.slug}`}>
                    Quero um projeto assim <span>→</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* O QUE ACOMPANHA CADA PROJETO + ETAPAS */}
        <section className={styles.standardsSection}>
          <div className={styles.sectionHeader}>
            <h2>Como tiramos o seu projeto do papel.</h2>
          </div>

          <div className={styles.deliverablesGrid}>
            {deliverables.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>

          <div className={styles.projectProcess}>
            <article>
              <span>01</span>
              <div>
                <strong>Conversa</strong>
                <p>Você conta o objetivo, referências e o estilo desejado.</p>
              </div>
            </article>
            <article>
              <span>02</span>
              <div>
                <strong>Planejamento</strong>
                <p>Definimos serviços, peças, materiais e prioridades.</p>
              </div>
            </article>
            <article>
              <span>03</span>
              <div>
                <strong>Execução</strong>
                <p>Cada etapa é realizada e documentada com atenção.</p>
              </div>
            </article>
            <article>
              <span>04</span>
              <div>
                <strong>Entrega</strong>
                <p>Você recebe o carro pronto, revisado e orientado.</p>
              </div>
            </article>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className={styles.cta}>
          <div>
            <h2>Tem uma ideia para o seu carro?</h2>
            <p>Envie o modelo, ano e o que você gostaria de transformar.</p>
          </div>
          <a href="/contato?servico=personalizacao">
            Iniciar meu projeto <span>↗</span>
          </a>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Projetos