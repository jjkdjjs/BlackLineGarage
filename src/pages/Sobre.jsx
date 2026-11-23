import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from './Sobre.module.css'
import carImg from '../assets/car-service.png'
import logoImg from '../assets/logo-em.png'

function Sobre() {
  return (
    <div className={styles.page}>
      <Header />
      <main>
        <section className={styles.hero}>
          <div className={styles.heroImage}>
            <img src={carImg} alt="Carro recebendo cuidado na BlackLine Garage" />
            <span className={styles.imageLabel}>Desde 2014 cuidando de carros</span>
          </div>
          <div className={styles.heroContent}>
            <span className={styles.eyebrow}>Sobre nós</span>
            <h1>Paixão por carros. <span>Compromisso com detalhes.</span></h1>
            <p>
              Somos uma garagem de Blumenau criada para entregar mais do que
              serviços: buscamos confiança, transparência e resultados que
              fazem sentido para cada motorista.
            </p>
          </div>
        </section>

        <section className={styles.valuesSection}>
          <div className={styles.sectionIntro}>
            <span>Nossa essência</span>
            <h2>O que faz o nosso trabalho ser diferente.</h2>
          </div>
          <div className={styles.valuesGrid}>
            <article>
              <span>01</span>
              <h3>Precisão</h3>
              <p>Cada projeto é planejado e executado com atenção aos detalhes que realmente importam.</p>
            </article>
            <article>
              <span>02</span>
              <h3>Transparência</h3>
              <p>Explicamos cada etapa, respeitamos o orçamento e mantemos uma comunicação clara.</p>
            </article>
            <article>
              <span>03</span>
              <h3>Cuidado</h3>
              <p>Tratamos o seu carro com responsabilidade, técnica e respeito à sua expectativa.</p>
            </article>
          </div>
        </section>

        <section className={styles.infoSection}>
          <div className={styles.statsGrid}>
            <article><strong>12+</strong><span>anos de experiência</span></article>
            <article><strong>2.400+</strong><span>carros atendidos</span></article>
            <article><strong>4 etapas</strong><span>de acompanhamento</span></article>
            <article><strong>100%</strong><span>foco no resultado</span></article>
          </div>

          <div className={styles.processGrid}>
            <article>
              <span>01 · Conversa</span>
              <h3>Entendemos o seu objetivo</h3>
              <p>Escutamos suas ideias, necessidades e orçamento antes de sugerir qualquer serviço.</p>
            </article>
            <article>
              <span>02 · Diagnóstico</span>
              <h3>Avaliamos o veículo</h3>
              <p>Verificamos o estado atual e mostramos as possibilidades técnicas e estéticas.</p>
            </article>
            <article>
              <span>03 · Execução</span>
              <h3>Cuidado em cada etapa</h3>
              <p>O projeto avança com acompanhamento, organização e comunicação transparente.</p>
            </article>
            <article>
              <span>04 · Entrega</span>
              <h3>Confira o resultado</h3>
              <p>Finalizamos juntos, explicamos os cuidados e garantimos clareza sobre o trabalho realizado.</p>
            </article>
          </div>
        </section>

        <section className={styles.story}>
          <div className={styles.storyLogo}>
            <img src={logoImg} alt="BlackLine Garage" />
          </div>
          <div className={styles.storyContent}>
            <span>Da conversa ao resultado</span>
            <h2>Seu carro merece um projeto feito sob medida.</h2>
            <p>
              Nosso processo começa ouvindo você. Depois, avaliamos as
              possibilidades, definimos prioridades e seguimos até o acabamento
              final sem atalhos.
            </p>
            <a href="/contato">Conhecer a equipe <span>↗</span></a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Sobre
