import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from './Servicos.module.css'
import pinturaImg from '../assets/servico-pintura.png'
import rodaImg from '../assets/servico-roda.png'
import freioImg from '../assets/servico-freio.png'
import detalhamentoImg from '../assets/servico-detalhamento.png'
import performanceImg from '../assets/servico-performance.png'

const featuredService = {
  number: '01',
  slug: 'personalizacao',
  title: 'Personalização completa',
  meta: 'Projeto sob medida · Acompanhamento integral',
  text: 'Projetamos a transformação completa do seu carro, alinhando estética externa, acabamentos internos, envelopamento, detalhes em black piano e harmonia visual sem perder a identidade do veículo.',
  highlights: ['Consultoria visual', 'Acabamento artesanal', 'Registro por etapas'],
  image: freioImg,
}

const services = [
  {
    number: '02',
    slug: 'detalhamento',
    title: 'Detalhamento automotivo',
    meta: '2 a 4 dias · Proteção cerâmica 9H',
    text: 'Limpeza técnica profunda, descontaminação, correção de pintura em múltiplos estágios e vitrificação para recuperar brilho e preservar o verniz.',
    image: detalhamentoImg,
  },
  {
    number: '03',
    slug: 'rodas',
    title: 'Rodas e pneus',
    meta: 'Fitment preciso · Balanceamento técnico',
    text: 'Composição de rodas, medidas de pneus, pintura de pinças em alta temperatura e geometria escolhida para valorizar o visual com segurança.',
    image: rodaImg,
  },
  {
    number: '04',
    slug: 'performance',
    title: 'Performance',
    meta: 'Setup urbano ou track · Peças homologadas',
    text: 'Melhorias de resposta, suspensão, freios e dirigibilidade com planejamento técnico e foco total na confiabilidade mecânica.',
    image: performanceImg,
  },
  {
    number: '05',
    slug: 'pintura',
    title: 'Pintura automotiva',
    meta: 'Cabine controlada · Padrão original',
    text: 'Repintura localizada ou completa, revitalização de para-choques e acabamento profissional com preparação rigorosa e verniz de alto sólido.',
    image: pinturaImg,
  },
]

const packages = [
  {
    name: 'Refresh Urbano',
    tag: 'Manutenção estética',
    duration: '1 dia na baia',
    description: 'Ideal para renovar o aspecto de carros de uso diário com limpeza técnica profunda e proteção de pintura.',
    slug: 'detalhamento',
    items: [
      'Lavagem técnica detalhada e descontaminação',
      'Higienização interna completa e hidratação',
      'Polimento comercial de brilho (1 etapa)',
      'Selante sintético com proteção de até 6 meses',
    ],
  },
  {
    name: 'Blindagem BlackLine',
    tag: 'Mais escolhido',
    duration: '3 a 4 dias na baia',
    featured: true,
    description: 'Nosso pacote completo de correção técnica de verniz e vitrificação cerâmica de longa duração.',
    slug: 'detalhamento',
    items: [
      'Correção técnica de pintura (remoção de swirls)',
      'Vitrificação cerâmica 9H na carroceria e rodas',
      'Cristalização hidrofóbica de para-brisa e vidros',
      'Garantia de brilho e proteção por até 3 anos',
    ],
  },
  {
    name: 'Projeto Signature',
    tag: 'Transformação total',
    duration: 'Sob cronograma',
    description: 'Consultoria completa unindo estética, conjunto de rodas, freios e acerto visual exclusivo.',
    slug: 'personalizacao',
    items: [
      'Diagnóstico presencial e definição de referências',
      'Pintura de pinças, detalhes black piano ou PPF',
      'Definição de setup de rodas, pneus e suspensão',
      'Relatório fotográfico de cada etapa na garagem',
    ],
  },
]

const assuranceSteps = [
  {
    number: '01',
    title: 'Avaliação inicial',
    text: 'Entendemos a sua expectativa e inspecionamos o estado real do veículo.',
  },
  {
    number: '02',
    title: 'Orçamento detalhado',
    text: 'Você recebe escopo, materiais e prazos claros antes de aprovar.',
  },
  {
    number: '03',
    title: 'Acompanhamento',
    text: 'Atualizações diretas com fotos durante toda a execução na baia.',
  },
  {
    number: '04',
    title: 'Entrega cuidadosa',
    text: 'Revisamos o resultado sob luz técnica e orientamos a manutenção.',
  },
]

const faqs = [
  {
    question: 'Preciso agendar antes de levar o carro?',
    answer: 'Sim. Trabalhamos com vagas limitadas por semana para garantir que cada veículo receba atenção exclusiva na baia, sem pressa e dentro do prazo combinado.',
  },
  {
    question: 'Quanto tempo demora um detalhamento completo?',
    answer: 'Depende do estado do verniz e do pacote escolhido. Serviços de manutenção levam 1 dia; correção técnica com vitrificação cerâmica leva de 2 a 4 dias.',
  },
  {
    question: 'Vocês fazem orçamento sem compromisso?',
    answer: 'Sim. Você pode enviar os dados do veículo pelo formulário ou agendar uma avaliação presencial em Blumenau para definirmos exatamente o que vale a pena fazer.',
  },
  {
    question: 'Quais produtos são utilizados nos serviços?',
    answer: 'Utilizamos apenas linhas profissionais homologadas (como Rupes, Gyeon, Koch-Chemie e Menzerna), respeitando a dureza de cada verniz e material interno.',
  },
]

function Servicos() {
  const [openFaq, setOpenFaq] = useState(0)

  function toggleFaq(index) {
    setOpenFaq((prev) => (prev === index ? -1 : index))
  }

  return (
    <div className={styles.page}>
      <Header />

      <main>
        {/* HERO ALINHADO EM DUAS COLUNAS NIVELADAS */}
        <section className={styles.heroSection}>
          <div className={styles.container}>
            <div className={styles.heroGrid}>
              <div className={styles.heroMain}>
                <h1>
                  Cuidado completo para <span>cada detalhe.</span>
                </h1>
                <p>
                  Serviços técnicos e personalizados, realizados com transparência,
                  insumos homologados e atenção rigorosa em todas as etapas.
                </p>
              </div>

              <div className={styles.heroPanel}>
                <article>
                  <strong>Garantia técnica</strong>
                  <span>Produtos certificados e cura em ambiente controlado</span>
                </article>
                <article>
                  <strong>Sem surpresas</strong>
                  <span>Escopo, valores e prazos aprovados antes do início</span>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* CATÁLOGO DE SERVIÇOS (1 DESTAQUE + GRID 2x2 SIMÉTRICO) */}
        <section className={styles.servicesSection}>
          <div className={styles.container}>
            {/* Serviço 01 em destaque */}
            <article className={styles.featuredCard}>
              <div className={styles.featuredImage}>
                <img src={featuredService.image} alt={featuredService.title} />
                <span className={styles.numberBadge}>{featuredService.number}</span>
              </div>

              <div className={styles.featuredContent}>
                <div>
                  <span className={styles.serviceMeta}>{featuredService.meta}</span>
                  <h2>{featuredService.title}</h2>
                  <p>{featuredService.text}</p>

                  <div className={styles.highlightTags}>
                    {featuredService.highlights.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>

                <div className={styles.cardFooter}>
                  <a href={`/contato?servico=${featuredService.slug}`}>
                    Solicitar orçamento <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </article>

            {/* Serviços 02 a 05 alinhados em grade 2x2 */}
            <div className={styles.servicesGrid}>
              {services.map((service) => (
                <article className={styles.serviceCard} key={service.title}>
                  <div className={styles.serviceImage}>
                    <img src={service.image} alt={service.title} />
                    <span className={styles.numberBadge}>{service.number}</span>
                  </div>

                  <div className={styles.serviceContent}>
                    <div>
                      <span className={styles.serviceMeta}>{service.meta}</span>
                      <h2>{service.title}</h2>
                      <p>{service.text}</p>
                    </div>

                    <div className={styles.cardFooter}>
                      <a href={`/contato?servico=${service.slug}`}>
                        Solicitar orçamento <span aria-hidden="true">→</span>
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* COMBOS E PACOTES */}
        <section className={styles.packagesSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2>Combos mais procurados na garagem.</h2>
              <p>
                Um ponto de partida claro para facilitar sua escolha — ajustamos
                cada etapa conforme a necessidade real do seu carro.
              </p>
            </div>

            <div className={styles.packagesGrid}>
              {packages.map((pkg) => (
                <article
                  key={pkg.name}
                  className={`${styles.packageCard} ${
                    pkg.featured ? styles.packageFeatured : ''
                  }`}
                >
                  <div className={styles.packageTop}>
                    <div className={styles.packageMetaRow}>
                      <span className={styles.packageTag}>{pkg.tag}</span>
                      <span className={styles.packageDuration}>{pkg.duration}</span>
                    </div>
                    <h3>{pkg.name}</h3>
                    <p>{pkg.description}</p>
                  </div>

                  <ul>
                    {pkg.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>

                  <a href={`/contato?servico=${pkg.slug}`}>
                    Cotar este pacote <span aria-hidden="true">↗</span>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ETAPAS DE ATENDIMENTO */}
        <section className={styles.assuranceSection}>
          <div className={styles.container}>
            <div className={styles.assuranceBox}>
              {assuranceSteps.map((step) => (
                <article key={step.number}>
                  <span>{step.number}</span>
                  <strong>{step.title}</strong>
                  <p>{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* DÚVIDAS FREQUENTES INTERATIVAS */}
        <section className={styles.faqSection}>
          <div className={styles.container}>
            <div className={styles.faqLayout}>
              <div className={styles.faqSidebar}>
                <h2>Dúvidas frequentes antes de agendar.</h2>
                <p>
                  Transparência desde o primeiro contato. Se o seu projeto tiver
                  alguma particularidade, nossa equipe orienta sem compromisso.
                </p>

                <div className={styles.faqHelpCard}>
                  <strong>Não sabe qual serviço escolher?</strong>
                  <span>
                    Envie o modelo e o ano do seu carro para receber uma
                    recomendação técnica.
                  </span>
                  <a href="/contato">
                    Falar com consultor <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </div>

              <div className={styles.faqList}>
                {faqs.map((item, index) => {
                  const isOpen = openFaq === index
                  return (
                    <article
                      key={item.question}
                      className={`${styles.faqItem} ${
                        isOpen ? styles.faqItemOpen : ''
                      }`}
                    >
                      <button
                        type="button"
                        className={styles.faqQuestion}
                        aria-expanded={isOpen}
                        onClick={() => toggleFaq(index)}
                      >
                        <span>{item.question}</span>
                        <i aria-hidden="true">{isOpen ? '−' : '+'}</i>
                      </button>

                      {isOpen && (
                        <div className={styles.faqAnswer}>
                          <p>{item.answer}</p>
                        </div>
                      )}
                    </article>
                  )
                })}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default Servicos