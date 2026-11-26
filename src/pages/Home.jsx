import styles from './Home.module.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import carroImg from '../assets/carro-prin.png'
import pinturaImg from '../assets/servico-pintura.png'
import rodaImg from '../assets/servico-roda.png'
import freioImg from '../assets/servico-freio.png'
import detalhamentoImg from '../assets/servico-detalhamento.png'
import performanceImg from '../assets/servico-performance.png'
import carImg from '../assets/car-service2.jpg'

const stats = [
  { value: '12+', label: 'anos de experiência em estética e preparo' },
  { value: '2.400+', label: 'veículos atendidos em Blumenau e região' },
  { value: '4.9/5', label: 'avaliação média dos clientes' },
]

const services = [
  {
    tag: 'Projeto completo',
    title: 'Personalização completa',
    text: 'Transforme o visual e o acabamento do seu carro com um projeto criado sob medida.',
    image: freioImg,
    slug: 'personalizacao',
  },
  {
    tag: 'Proteção & brilho',
    title: 'Detalhamento automotivo',
    text: 'Limpeza técnica, correção de verniz e vitrificação cerâmica para recuperar cada detalhe.',
    image: detalhamentoImg,
    slug: 'detalhamento',
  },
  {
    tag: 'Fitment',
    title: 'Rodas e pneus',
    text: 'Composição de rodas, pinças e pneus para valorizar presença e dirigibilidade.',
    image: rodaImg,
    slug: 'rodas',
  },
  {
    tag: 'Setup dinâmico',
    title: 'Performance',
    text: 'Melhorias de resposta, freios e suspensão com foco em equilíbrio e confiabilidade.',
    image: performanceImg,
    slug: 'performance',
  },
  {
    tag: 'Cabine controlada',
    title: 'Pintura automotiva',
    text: 'Repintura e acabamento profissional com preparação rigorosa e padrão original.',
    image: pinturaImg,
    slug: 'pintura',
  },
]

const gallery = [
  {
    title: 'Estética com personalidade',
    category: 'Acabamento',
    text: 'Um visual renovado, com atenção aos detalhes que fazem o seu carro se destacar sem exageros.',
  },
  {
    title: 'Performance com propósito',
    category: 'Desempenho',
    text: 'Soluções técnicas pensadas para entregar mais controle e prazer real ao volante.',
  },
  {
    title: 'Cuidado em cada detalhe',
    category: 'Preservação',
    text: 'Processos e insumos homologados para valorizar e proteger o patrimônio do seu veículo.',
  },
  {
    title: 'Confiança do início ao fim',
    category: 'Transparência',
    text: 'Atendimento próximo, diagnóstico claro e acompanhamento fotográfico em cada etapa.',
  },
]

function Home() {
  return (
    <div className={styles.page}>
      <Header isHome />

      <main>
        {/* HERO VITRINE */}
        <section id="inicio" className={styles.hero}>
          <div className={styles.heroContent}>
            <h1>
              Seu carro merece <span>atenção de verdade.</span>
            </h1>

            <p>
              Atendimento técnico, estética automotiva e personalização para
              manter seu veículo protegido, marcante e pronto para rodar com
              confiança.
            </p>

            <div className={styles.actions}>
              <a className={styles.primaryButton} href="/contato">
                Solicitar orçamento <span aria-hidden="true">↗</span>
              </a>

              <a className={styles.secondaryButton} href="/projetos">
                Ver projetos
              </a>
            </div>
          </div>

          <div className={styles.heroVisual}>
            <div className={styles.visualCard}>
              <img
                src={carroImg}
                alt="Carro personalizado da BlackLine Garage"
              />
              <div className={styles.floorGlow} aria-hidden="true" />
            </div>

            <div className={styles.floatingRating}>
              <strong>4.9 ★</strong>
              <span>Estúdio especializado · Blumenau, SC</span>
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

        {/* BENTO GRID DE SERVIÇOS (2 DESTAQUES + 3 ESPECIALIDADES) */}
        <section id="servicos" className={styles.servicesSection}>
          <div className={styles.sectionHeader}>
            <h2>Tudo para deixar seu carro do jeito que você imagina.</h2>
            <a href="/servicos">
              Ver catálogo completo <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className={styles.servicesGrid}>
            {services.map((service) => (
              <article key={service.title} className={styles.serviceCard}>
                <div className={styles.serviceImage}>
                  <img src={service.image} alt={service.title} />
                </div>

                <div className={styles.serviceContent}>
                  <span className={styles.serviceTag}>{service.tag}</span>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>

                  <a
                    className={styles.serviceLink}
                    href={`/contato?servico=${service.slug}`}
                  >
                    Solicitar orçamento <span aria-hidden="true">→</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* SOBRE A GARAGEM */}
        <section id="sobre" className={styles.aboutSection}>
          <div className={styles.aboutImage}>
            <img
              src={carImg}
              alt="Carro sendo detalhado na BlackLine Garage"
            />
            <div className={styles.aboutBadge}>
              <strong>Desde 2014</strong>
              <span>Cuidado artesanal e precisão técnica</span>
            </div>
          </div>

          <div className={styles.aboutContent}>
            <h2>
              Precisão, transparência <span>e cuidado com cada detalhe.</span>
            </h2>
            <p>
              Somos uma garagem em Blumenau focada em entregar qualidade real,
              sem atalhos e com a atenção que seu veículo merece. Trabalhamos
              com diagnóstico honesto, materiais homologados e acabamento
              duradouro.
            </p>

            <div className={styles.featureList}>
              <div>
                <strong>01</strong>
                <span>Atendimento personalizado</span>
              </div>
              <div>
                <strong>02</strong>
                <span>Produtos homologados</span>
              </div>
              <div>
                <strong>03</strong>
                <span>Prazo e etapas claros</span>
              </div>
            </div>

            <a className={styles.aboutLink} href="/sobre">
              Conhecer nossa estrutura <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>

        {/* DIFERENCIAIS */}
        <section id="projetos" className={styles.section}>
          <div className={`${styles.sectionHeader} ${styles.resultsHeader}`}>
            <h2>Mais do que um serviço. Um cuidado completo.</h2>
            <p>
              Qualidade, atenção e personalidade em cada etapa do trabalho na
              garagem.
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
      </main>

      <Footer isHome />
    </div>
  )
}

export default Home