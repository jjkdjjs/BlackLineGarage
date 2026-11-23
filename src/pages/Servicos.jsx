import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from './Servicos.module.css'
import pinturaImg from '../assets/servico-pintura.png'
import rodaImg from '../assets/servico-roda.png'
import freioImg from '../assets/servico-freio.png'
import detalhamentoImg from '../assets/servico-detalhamento.png'
import performanceImg from '../assets/servico-performance.png'

const services = [
  { number: '01', title: 'Personalização completa', text: 'Projetamos a transformação completa do seu carro, alinhando visual, materiais e acabamento.', image: freioImg },
  { number: '02', title: 'Detalhamento automotivo', text: 'Limpeza técnica, correção de pintura e proteção para recuperar brilho e preservar a estética.', image: detalhamentoImg },
  { number: '03', title: 'Rodas e pneus', text: 'Composição de rodas e pneus escolhida para valorizar o visual e manter segurança.', image: rodaImg },
  { number: '04', title: 'Performance', text: 'Melhorias de resposta e dirigibilidade com planejamento técnico e atenção à confiabilidade.', image: performanceImg },
  { number: '05', title: 'Pintura automotiva', text: 'Pintura e acabamento profissional, com preparação cuidadosa e resultado uniforme.', image: pinturaImg },
]

function Servicos() {
  return (
    <div className={styles.page}>
      <Header />
      <main>
        <section className={styles.hero}>
          <div>
            <span className={styles.eyebrow}>O que fazemos</span>
            <h1>Cuidado completo para <span>cada detalhe.</span></h1>
          </div>
          <p>
            Serviços técnicos e personalizados, realizados com transparência,
            materiais de qualidade e atenção em todas as etapas.
          </p>
        </section>

        <section className={styles.servicesSection}>
          <div className={styles.servicesGrid}>
            {services.map((service) => (
              <article className={styles.serviceCard} key={service.title}>
                <div className={styles.serviceImage}>
                  <img src={service.image} alt={service.title} />
                  <span>{service.number}</span>
                </div>
                <div className={styles.serviceContent}>
                  <h2>{service.title}</h2>
                  <p>{service.text}</p>
                  <a href="/contato">Solicitar orçamento <span>→</span></a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.assurance}>
          <article><span>01</span><strong>Avaliação inicial</strong><p>Entendemos a necessidade e o estado do veículo.</p></article>
          <article><span>02</span><strong>Orçamento detalhado</strong><p>Você recebe opções e informações antes da decisão.</p></article>
          <article><span>03</span><strong>Acompanhamento</strong><p>Atualizações claras durante todo o atendimento.</p></article>
          <article><span>04</span><strong>Entrega cuidadosa</strong><p>Revisamos o resultado e orientamos os próximos cuidados.</p></article>
        </section>

        <section className={styles.cta}>
          <div>
            <span>Seu projeto começa aqui</span>
            <h2>Conte pra gente o que você imagina.</h2>
          </div>
          <a href="/contato">Fale com a gente <span>↗</span></a>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Servicos
