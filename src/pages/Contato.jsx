import { useState } from 'react'

//FIREBASE
import database from '../services/firebase'
import { ref, push, set } from 'firebase/database'

import Header from '../components/Header'
import styles from '../style/pages/contato.module.css'
import contato from '../assets/contato.png'


const Contato = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [number, setNumber] = useState('')


  function handleInputName(e) {
    setName(e.target.value)
  }

  function handleInputEmail(e) {
    setEmail(e.target.value)
  }

  function handleInputNumber(e) {
    const inputNumber = e.target.value; 
  
    const onlyNumber = inputNumber.replace(/[^0-9+()\s-]/g, '');
    if (onlyNumber.length <= 11 ) {
      setNumber(onlyNumber);
    }
  }

  function handleInputMessage(e) {
    setMessage(e.target.value)
  }


  function handleSubmit(e) {
    e.preventDefault()

    const messageListRef = ref(database, 'messages') //cria coleção no DB do Firebase
    const newMessageRef = push(messageListRef) // cria e envia nova mensagem na coleção
    set(newMessageRef, {
      name: name,
      email: email,
      text: message,
      number: number
    })

    setName('')
    setEmail('')
    setMessage('')
    setNumber('')
  }

  return (
    <>
      <Header className={styles.headerContato}
        title="Onde nos achar"
        text='Aqui você sabe onde nos achar, seja por endereço, 
        redes sociais, e até mesmo para nos enviar uma mensagem para entrarmos em contato.'
        image={contato}
      />

      <main className={styles.contactContainer}>
        <div className={styles.contactText}>
          <h2 className={styles.contactTitle}>Vamos conversar?</h2>
          <p> Queremos ouvir você! Se você tem alguma dúvida, sugestão,
            interesse em nossos projetos ou deseja fazer parte de nossa
            causa, entre em contato conosco. Sua opinião é valiosa para o
            aprimoramento contínuo de nossas ações em prol da limpeza e
            manutenção das águas.</p>
        </div>

        <div className={styles.formContainer}>
          <form className={styles.form} onSubmit={handleSubmit}>

            <input className={styles.formInput}
              type="text"
              placeholder='Digite seu nome'
              onChange={handleInputName}
              value={name}
            />
            <input className={styles.formInput}
              type="email"
              placeholder='Digite seu email'
              onChange={handleInputEmail}
              value={email}
            />
            <input className={styles.formInput}
              type="text"
              value={number}
              onChange={handleInputNumber}
              placeholder="Digite o número de celular"
            />
            <textarea className={styles.formInput}
              placeholder='Digite sua mensagem'
              onChange={handleInputMessage}
              value={message}
            />
            <button className={styles.formButton}
              type='submit'>Enviar mensagem
            </button>
          </form>
        </div>
      </main>

    </>
  )
}

export default Contato