import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from './Sobre.module.css'
import carImg from '../assets/car-service.png'
import logoImg from '../assets/logo-em.png'

const milestones = [
  {
    year: '2014',
    title: 'A primeira baia',
    text: 'Começamos em Blumenau focados em lavagem técnica e polimento artesanal, carro por carro.',
  },
  {
    year: '2017',
    title: 'Estúdio climatizado',
    text: 'Ampliamos o espaço com iluminação calibrada e controle térmico para vitrificação e PPF.',
  },
  {
    year: '2021',
    title: 'Estética & Performance',
    text: 'Integramos projetos completos de rodas, freios, suspensão e personalização visual.',
  },
  {
    year: 'Hoje',
    title: 'Referência na região',
    text: 'Mais de 2.400 veículos atendidos com processo documentado e acompanhamento próximo.',
  },
]

const values = [
  {
    number: '01',
    title: 'Precisão',
    text: 'Cada projeto é planejado e executado com atenção aos detalhes que realmente importam no acabamento.',
  },
  {
    number: '02',
    title: 'Transparência',
    text: 'Explicamos cada etapa, respeitamos o orçamento combinado e mantemos uma comunicação clara.',
  },
  {
    number: '03',
    title: 'Cuidado',
    text: 'Tratamos o seu carro com responsabilidade, técnica e respeito total à sua expectativa.',
  },
]

const steps = [
  {
    step: '01 · Conversa',
    title: 'Entendemos o seu objetivo',
    text: 'Escutamos suas ideias, rotina de uso e orçamento antes de sugerir qualquer serviço.',
  },
  {
    step: '02 · Diagnóstico',
    title: 'Avaliamos o veículo',
    text: 'Inspecionamos verniz, acabamentos e mecânica para mostrar as melhores possibilidades.',
  },
  {
    step: '03 · Execução',
    title: 'Cuidado em cada etapa',
    text: 'O projeto avança com registros fotográficos, organização e atualização constante.',
  },
  {
    step: '04 · Entrega',
    title: 'Confira o resultado',
    text: 'Revisamos juntos sob luz técnica e orientamos todos os cuidados pós-entrega.',
  },
]

const manifestoCommitments = [
  {
    title: 'Sem linha de produção',
    text: 'Limitamos o número de veículos na baia para que nenhum prazo comprometa o tempo de cura ou o acabamento.',
  },
  {
    title: 'Rastreabilidade técnica',
    text: 'Registramos espessura de verniz, compostos aplicados e etapas concluídas para o histórico do seu veículo.',
  },
  {
    title: 'Pós-entrega acompanhado',
    text: 'Orientamos a lavagem correta e os produtos ideais para manter o resultado preservado por anos.',
  },
]

function Sobre() {
  return (
    <div className={styles.page}>
      <Header />
      <main>
        {/* HERO EDITORIAL ASSIMÉTRICO */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1>
              Paixão por carros. <span>Compromisso com detalhes.</span>
            </h1>
            <p>
              Somos uma garagem criada para entregar mais do que serviços:
              buscamos confiança, transparência e resultados que fazem sentido
              para cada motorista.
            </p>

            <div className={styles.heroMetrics}>
              <div>
                <strong>Desde 2014</strong>
                <span>Tradição em estética automotiva</span>
              </div>
              <div>
                <strong>Atendimento sob hora</strong>
                <span>Vagas limitadas por semana</span>
              </div>
            </div>
          </div>

          <div className={styles.heroMedia}>
            <div className={styles.heroImage}>
              <img src={carImg} alt="Carro recebendo cuidado na BlackLine Garage" />
            </div>
            <div className={styles.floatingBadge}>
              <strong>100%</strong>
              <span>Foco em acabamento e preservação original</span>
            </div>
          </div>
        </section>

        {/* LINHA DO TEMPO DA GARAGEM */}
        <section className={styles.timelineSection}>
          <div className={styles.sectionIntro}>
            <h2>Uma década evoluindo a forma de cuidar de carros.</h2>
          </div>

          <div className={styles.timelineGrid}>
            {milestones.map((item) => (
              <article key={item.year}>
                <span className={styles.yearTag}>{item.year}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* BENTO GRID: NÚMEROS + PILARES */}
        <section className={styles.bentoSection}>
          <div className={styles.sectionIntro}>
            <h2>O que faz o nosso trabalho ser diferente.</h2>
          </div>

          <div className={styles.bentoGrid}>
            <div className={styles.statsPanel}>
              <div className={styles.statsPanelHeader}>
                <h3>Números construídos carro a carro</h3>
                <p>Consistência técnica em cada entrega realizada na garagem.</p>
              </div>

              <div className={styles.statsGrid}>
                <article>
                  <strong>12+</strong>
                  <span>anos de experiência</span>
                </article>
                <article>
                  <strong>2.400+</strong>
                  <span>carros atendidos</span>
                </article>
                <article>
                  <strong>4 etapas</strong>
                  <span>de acompanhamento</span>
                </article>
                <article>
                  <strong>100%</strong>
                  <span>foco no resultado</span>
                </article>
              </div>
            </div>

            <div className={styles.valuesStack}>
              {values.map((val) => (
                <article key={val.number}>
                  <span className={styles.valueNumber}>{val.number}</span>
                  <div>
                    <h3>{val.title}</h3>
                    <p>{val.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* BASTIDORES: ESTRUTURA + MÉTODO EM LINHA VERTICAL */}
        <section className={styles.workshopSection}>
          <div className={styles.workshopGrid}>
            <div className={styles.studioColumn}>
              <h2>Estrutura preparada para acabamento de alto nível.</h2>
              <p className={styles.columnLead}>
                Ambiente projetado para eliminar improvisos e garantir cura,
                brilho e montagem dentro do padrão técnico.
              </p>

              <div className={styles.studioList}>
                <article>
                  <h3>Baia com túneis de LED</h3>
                  <p>
                    Iluminação calibrada em múltiplas temperaturas para revelar
                    micro-riscos e hologramas invisíveis à luz comum.
                  </p>
                </article>
                <article>
                  <h3>Área climatizada e livre de poeira</h3>
                  <p>
                    Controle de temperatura e umidade para cura perfeita de
                    vitrificadores cerâmicos, PPF e repintura.
                  </p>
                </article>
                <article>
                  <h3>Ferramental de medição e precisão</h3>
                  <p>
                    Politrizes roto-orbitais, medidores digitais de espessura de
                    verniz e elevadores pantográficos.
                  </p>
                </article>
              </div>
            </div>

            <div className={styles.processColumn}>
              <h2>Como funciona na prática.</h2>
              <div className={styles.verticalSteps}>
                {steps.map((item) => (
                  <article key={item.step}>
                    <span>{item.step}</span>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* EQUIPE & MARCAS HOMOLOGADAS */}
        <section className={styles.teamSection}>
          <div className={styles.sectionIntro}>
            <h2>Quem coloca a mão no seu projeto.</h2>
          </div>

          <div className={styles.teamGrid}>
            <article>
              <div className={styles.memberBadge}>RM</div>
              <div>
                <h3>Rafael Mendes</h3>
                <small>Master Detailer · 11 anos de experiência</small>
                <p>Correção técnica de pintura, vitrificação cerâmica e restauração de verniz.</p>
              </div>
            </article>

            <article>
              <div className={styles.memberBadge}>LK</div>
              <div>
                <h3>Lucas Koehler</h3>
                <small>Performance & Setup</small>
                <p>Projetos de rodas, suspensão, freios e acerto dinâmico urbano e track.</p>
              </div>
            </article>

            <article>
              <div className={styles.memberBadge}>GA</div>
              <div>
                <h3>Gabriel Andrade</h3>
                <small>Consultoria & Pintura</small>
                <p>Diagnóstico inicial, personalização visual e acompanhamento de etapas.</p>
              </div>
            </article>
          </div>

          <div className={styles.brandsBar}>
            <div className={styles.brandsList}>
              <span>RUPES</span>
              <span>GYEON</span>
              <span>KOCH-CHEMIE</span>
              <span>MENZERNA</span>
              <span>BREMBO</span>
              <span>BBS</span>
            </div>
          </div>
        </section>

        {/* MANIFESTO & COMPROMISSO DA GARAGEM */}
        <section className={styles.manifestoSection}>
          <div className={styles.sectionIntro}>
            <h2>Não entregamos volume. Entregamos padrão de estúdio.</h2>
            <p>
              Acreditamos que estética e performance automotiva exigem calma,
              técnica documentada e respeito pela originalidade de cada carro
              que entra pela nossa porta.
            </p>
          </div>

          <div className={styles.garageLocationCard}>
            <div className={styles.garageBrandRow}>
              <img src={logoImg} alt="BlackLine Garage" />
              <div>
                <strong>BlackLine Garage</strong>
                <span>Blumenau · Santa Catarina</span>
              </div>
            </div>

            <div className={styles.garageInfoList}>
              <div>
                <small>Atendimento</small>
                <span>Segunda a Sexta · 08h às 18h</span>
              </div>
              <div>
                <small>Sábados</small>
                <span>08h30 às 12h30 (avaliações agendadas)</span>
              </div>
            </div>
          </div>

          <div className={styles.manifestoCommitments}>
            {manifestoCommitments.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Sobre