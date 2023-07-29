import Header from '../components/Header'
import styles from '../style/pages/sobre.module.css'
import cover from '../assets/sobre.png'

import { useState } from 'react'


//FOTOS
import araça from '../assets/Araçariguama.jpg'
import ita from '../assets/Itanhaém.jpg'
import sp from '../assets/São Paulo.jpeg'
import parque from '../assets/Cocó.jpeg'


const Sobre = () => {


  return (
    <>
      <Header
        title='Quem Somos?'
        text='RefloreSer é uma ONG dedicada ao reflorestamento e 
        à restauração de ecossistemas em todo o mundo. Fundada em 
        2010, nossa missão é reverter os danos causados pela 
        degradação ambiental, proteger a biodiversidade e promover 
        a conscientização sobre a importância 
        das florestas para o equilíbrio ecológico do planeta'
        image={cover}
      />
      <div className={styles.mainContainer}>
        <div className={styles.mainCard}>
          <div className={styles.values}>
            <h2 className={styles.valuesTitle}>VALORES QUE SOMAM</h2>
            <ul className={styles.valuesList}>
              <li className={styles.valuesText}><b>Sustentabilidade:</b> É importante de implementar práticas
                sustentáveis para garantir a preservação das florestas e o bem-estar
                das comunidades que delas dependem.</li>
              <li className={styles.valuesText}><b>Parcerias:</b> A preservação das florestas é uma tarefa
                coletiva e valorizamos parcerias, outras ONGs,
                empresas e comunidades locais para alcançar objetivos comuns.</li>
              <li className={styles.valuesText}><b>Educação Ambiental:</b> Por meio de programas educativos,
                busca-se despertar a consciência e responsabilidade ambiental em indivíduos de todas as idades.</li>
              <li className={styles.valuesText}><b>Ciência e Inovação:</b> Baseamos nossas ações em pesquisas científicas e buscamos
                inovações e melhores práticas para maximizar o impacto de nossas iniciativas.</li>
            </ul>
          </div>
        </div>
        <div className={styles.containerFocus}>
          <h2 className={styles.titleFocus}>Nosso foco</h2>
          <ul className={styles.focusCard}>
            <li className={styles.focusTextList}><b>Restauração de Áreas de lireservação
              Permanente (APPs):</b> Trabalhamos na recuperação de matas ciliares, 
              ajudando a proteger os recursos hídricos e evitar a erosão.</li>
            <li className={styles.focusTextList}><b>Monitoramento Ambiental:</b> Realizamos o
              acompanhamento contínuo das áreas reflorestadas, avaliando o crescimento das
              árvores e o impacto positivo nas regiões beneficiadas.</li>
            <li className={styles.focusTextList}><b>Campanhas de Conscientização:</b> Desenvolvemos
              campanhas educativas e materiais informativos para sensibilizar a população sobre a
              importância da conservação ambiental.</li>
            <li className={styles.focusTextList}><b>Voluntários e Parcerias Locais:</b> Envolvimento ativo 
            da comunidade local e estabelecimento de parcerias com outras organizações e entidades para 
            ampliar o impacto de nossa ONG.</li>

          </ul>
        </div>
        <div className={styles.projects}>
          <div className={styles.projectsTitle}>
            <h3>Nossos principais projetos</h3>
          </div>
          <div className={styles.projectsContainer}>
            <div className={styles.projectsCard}>
              <h4 className={styles.projectsTitle}>Parque de Araçariguama</h4>
              <img className={styles.projectsImage} src={araça} alt="" />
            </div>

            <div className={styles.projectsCard}>
              <h4 className={styles.projectsTitle}>Parque Ibirapuera</h4>
              <img className={styles.projectsImage} src={sp} alt="" />
            </div>

            <div className={styles.projectsCard}>
              <h4 className={styles.projectsTitle}>Parque Estadual do Cocó</h4>
              <img className={styles.projectsImage} src={parque} alt="" />
            </div>

            <div className={styles.projectsCard}>
              <h4 className={styles.projectsTitle}>Parque da Lagoa</h4>
              <img className={styles.projectsImage} src={ita} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sobre