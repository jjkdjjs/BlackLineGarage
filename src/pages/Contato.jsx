import { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from './Contato.module.css'

const VALID_SERVICES = [
  'personalizacao',
  'detalhamento',
  'rodas',
  'performance',
  'pintura',
  'outro',
]

function formatPhone(value) {
  const digits = value.replace(/\D/g, '').slice(0, 11)
  if (digits.length <= 2) return digits
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`
  if (digits.length <= 10) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`
  }
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`
}

function Contato() {
  const [message, setMessage] = useState({ text: '', type: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [phone, setPhone] = useState('')
  const [selectedService, setSelectedService] = useState('')

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const serviceParam = params.get('servico')
    if (serviceParam && VALID_SERVICES.includes(serviceParam)) {
      setSelectedService(serviceParam)
    }
  }, [])

  async function handleSubmit(event) {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)
    formData.set('_subject', 'Novo contato - BlackLine Garage')

    setIsSubmitting(true)
    setMessage({ text: '', type: '' })

    try {
      const response = await fetch(
        'https://formspree.io/f/xrpqdoya',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
          },
          body: formData,
        }
      )

      if (!response.ok) {
        throw new Error('Não foi possível enviar a mensagem.')
      }

      form.reset()
      setPhone('')
      setSelectedService('')
      setMessage({
        text: 'Mensagem enviada! Nossa equipe retornará em breve.',
        type: 'success',
      })
    } catch {
      setMessage({
        text: 'Não foi possível enviar agora. Verifique sua conexão e tente novamente.',
        type: 'error',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className={styles.page}>
      <Header />

      <main>
        {/* BLOCO SUPERIOR: APRESENTAÇÃO + FORMULÁRIO NIVELADOS */}
        <section
          id="contato"
          className={styles.contactSection}
          aria-labelledby="contact-title"
        >
          <div className={styles.contactIntro}>
            <div>
              <h1 id="contact-title">
                Seu próximo projeto <span>começa com uma conversa.</span>
              </h1>

              <p className={styles.introText}>
                Conte pra gente o que você imaginou. Avaliamos o que o seu carro
                precisa e definimos o melhor caminho técnico junto com você, sem
                compromisso.
              </p>
            </div>

            <div
              className={styles.highlightsGrid}
              aria-label="Diferenciais do atendimento"
            >
              <article>
                <strong>Orçamento transparente</strong>
                <span>Escopo detalhado antes de iniciar</span>
              </article>
              <article>
                <strong>Atendimento próximo</strong>
                <span>Atualizações reais durante o serviço</span>
              </article>
              <article>
                <strong>Segunda a Sexta</strong>
                <span>08h às 18h · Atendimento na garagem</span>
              </article>
              <article>
                <strong>Sábados</strong>
                <span>08h às 12h · Com horário agendado</span>
              </article>
            </div>

            <div className={styles.introFooter}>
              <a className={styles.secondaryLink} href="/servicos">
                Ver catálogo de serviços <span aria-hidden="true">↗</span>
              </a>
              <a className={styles.secondaryLink} href="/projetos">
                Explorar projetos <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          <div className={styles.formCard}>
            <div className={styles.formHeading}>
              <h2>Vamos tirar sua ideia do papel?</h2>
              <p>Preencha os dados abaixo com as informações do seu veículo.</p>
            </div>

            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.fieldRow}>
                <label className={styles.field}>
                  <span>Seu nome</span>
                  <input
                    autoComplete="name"
                    name="name"
                    placeholder="Como podemos te chamar?"
                    required
                  />
                </label>

                <label className={styles.field}>
                  <span>E-mail</span>
                  <input
                    autoComplete="email"
                    name="email"
                    placeholder="voce@email.com"
                    required
                    type="email"
                  />
                </label>
              </div>

              <div className={styles.fieldRow}>
                <label className={styles.field}>
                  <span>Telefone / WhatsApp</span>
                  <input
                    autoComplete="tel"
                    name="phone"
                    placeholder="(00) 00000-0000"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(formatPhone(e.target.value))}
                  />
                </label>

                <label className={styles.field}>
                  <span>Serviço desejado</span>
                  <select
                    name="service"
                    required
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                  >
                    <option disabled value="">
                      Selecione uma opção
                    </option>
                    <option value="personalizacao">Personalização completa</option>
                    <option value="detalhamento">Detalhamento automotivo</option>
                    <option value="rodas">Rodas e pneus</option>
                    <option value="performance">Performance</option>
                    <option value="pintura">Pintura automotiva</option>
                    <option value="outro">Outro projeto</option>
                  </select>
                </label>
              </div>

              <label className={styles.field}>
                <span>Veículo (modelo e ano)</span>
                <input
                  name="vehicle"
                  placeholder="Ex: Civic Si 2020, Golf GTI 2018..."
                />
              </label>

              <label className={styles.field}>
                <span>Como podemos ajudar?</span>
                <textarea
                  name="details"
                  placeholder="Descreva o que você gostaria de fazer no carro, objetivos ou dúvidas..."
                  required
                  rows="4"
                />
              </label>

              <button
                className={styles.submitButton}
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Enviando mensagem...' : 'Enviar mensagem'}
                {!isSubmitting && <span aria-hidden="true">↗</span>}
              </button>

              <p
                className={`${styles.status} ${
                  message.type ? styles[message.type] : ''
                }`}
                role="status"
                aria-live="polite"
              >
                {message.text}
              </p>
            </form>
          </div>
        </section>

        {/* BLOCO INFERIOR: LOCALIZAÇÃO E MAPA ALINHADOS NA LARGURA TOTAL */}
        <section
          className={styles.locationSection}
          aria-labelledby="location-title"
        >
          <div className={styles.locationCard}>
            <div className={styles.locationInfo}>
              <div>
                <h2 id="location-title">Atendimento presencial em Blumenau.</h2>
                <p className={styles.addressBlock}>
                  <strong>Parque Ramiro Ruediger · Referência</strong>
                  <span>Rua Alberto Stein, 416 - Velha, Blumenau - SC</span>
                </p>
              </div>

              <ul className={styles.visitChecklist}>
                <li>Diagnóstico técnico presencial sob agendamento</li>
                <li>Vagas limitadas na baia para atenção exclusiva</li>
                <li>Orçamento e prazos alinhados antes de qualquer etapa</li>
              </ul>

              <a
                className={styles.mapButton}
                href="https://www.google.com/maps/search/?api=1&query=Parque+Ramiro+Ruediger,+Rua+Alberto+Stein,+416,+Blumenau,+SC"
                target="_blank"
                rel="noreferrer"
              >
                Abrir rota no Google Maps <span aria-hidden="true">↗</span>
              </a>
            </div>

            <div className={styles.mapWrapper}>
              <iframe
                className={styles.map}
                title="Mapa da região do Parque Ramiro Ruediger em Blumenau"
                src="https://www.google.com/maps?q=Parque+Ramiro+Ruediger,+Rua+Alberto+Stein,+416,+Blumenau,+SC&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default Contato