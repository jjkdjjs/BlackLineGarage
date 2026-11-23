import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from './Contato.module.css'

function Contato() {
  const [message, setMessage] = useState({ text: '', type: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function handleSubmit(event) {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)

    setIsSubmitting(true)
    setMessage({ text: '', type: '' })

    try {
      const response = await fetch('https://formsubmit.co/ajax/4553544406@estudante.sed.sc.gov.br', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...Object.fromEntries(formData.entries()),
          _subject: 'Novo contato - BlackLine Garage',
          _template: 'table',
        }),
      })
      const result = await response.json()

      if (!response.ok || ![true, 'true'].includes(result.success)) {
        throw new Error(result.message || 'Não foi possível enviar a mensagem.')
      }

      form.reset()
      setMessage({
        text: 'Mensagem enviada! Em breve entraremos em contato.',
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
        <section id="contato" className={styles.contactSection} aria-labelledby="contact-title">
          <div className={styles.contactIntro}>
            <span className={styles.eyebrow}>
              <span aria-hidden="true" />
              BlackLine Garage · Contato
            </span>

            <h1 id="contact-title">
              Seu próximo projeto
              <br />
              <span>começa com uma conversa.</span>
            </h1>

            <p className={styles.introText}>
              Conte pra gente o que você imaginou. Vamos entender o que seu carro
              precisa e pensar no melhor caminho junto com você.
            </p>

            <div className={styles.contactHighlights} aria-label="Informações do atendimento">
              <div>
                <strong>Orçamento claro</strong>
                <span>Sem custos ocultos</span>
              </div>
              <div>
                <strong>Atendimento próximo</strong>
                <span>Você acompanha o projeto</span>
              </div>
            </div>

            <a className={styles.servicesLink} href="/servicos">
              Conheça nossos serviços <span aria-hidden="true">↗</span>
            </a>

            <div className={styles.locationCard}>
              <div className={styles.locationHeading}>
                <span className={styles.noteIcon} aria-hidden="true">⌖</span>
                <div>
                  <strong>Ponto de referência em Blumenau</strong>
                  <p>Parque Ramiro Ruediger</p>
                  <p>Rua Alberto Stein, 416 - Velha, Blumenau - SC</p>
                </div>
              </div>
              <iframe
                className={styles.map}
                title="Mapa do Parque Ramiro Ruediger em Blumenau"
                src="https://www.google.com/maps?q=Parque+Ramiro+Ruediger,+Rua+Alberto+Stein,+416,+Blumenau,+SC&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <a
                className={styles.mapLink}
                href="https://www.google.com/maps/search/?api=1&query=Parque+Ramiro+Ruediger,+Rua+Alberto+Stein,+416,+Blumenau,+SC"
                target="_blank"
                rel="noreferrer"
              >
                Abrir no Google Maps <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          <div className={styles.formCard}>
            <div className={styles.formHeading}>
              <span>FALE COM A GENTE</span>
              <h2>Vamos tirar sua ideia do papel?</h2>
              <p>Preencha os campos e conte um pouco sobre o seu carro.</p>
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
                  <span>Telefone</span>
                  <input
                    autoComplete="tel"
                    name="phone"
                    placeholder="(00) 00000-0000"
                    type="tel"
                  />
                </label>

                <label className={styles.field}>
                  <span>O que você procura?</span>
                  <select defaultValue="" name="service" required>
                    <option disabled value="">Selecione um serviço</option>
                    <option value="personalizacao">Personalização</option>
                    <option value="detalhamento">Detalhamento automotivo</option>
                    <option value="rodas">Rodas e pneus</option>
                    <option value="performance">Performance</option>
                    <option value="pintura">Pintura automotiva</option>
                    <option value="outro">Outro projeto</option>
                  </select>
                </label>
              </div>

              <label className={styles.field}>
                <span>Como podemos ajudar?</span>
                <textarea
                  name="details"
                  placeholder="Conte um pouco sobre o carro e o que você tem em mente..."
                  required
                  rows="4"
                />
              </label>

              <button className={styles.submitButton} type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Enviando...' : 'Enviar mensagem'}
                {!isSubmitting && <span aria-hidden="true">↗</span>}
              </button>

              <p
                className={`${styles.status} ${message.type ? styles[message.type] : ''}`}
                role="status"
                aria-live="polite"
              >
                {message.text}
              </p>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default Contato
