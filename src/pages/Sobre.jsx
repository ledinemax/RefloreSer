import Header from '../components/Header'
import styles from '../style/pages/sobre.module.css'
import cover from '../assets/sobre.png'


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
              <li className={styles.valuesText}><b>Educação Ambiental:</b> A conscientização é a chave para a mudança,
                por isso, nos empenhamos em educar as pessoas sobre a importância das florestas e
                do meio ambiente.</li>
              <li className={styles.valuesText}><b>Ciência e Inovação:</b> Baseamos nossas ações em pesquisas científicas e buscamos
                inovações e melhores práticas para maximizar o impacto de nossas iniciativas.</li>
            </ul>
          </div>
        </div>
        <div className={styles.containerFocus}>
          <h2 className={styles.titleFocus}>Nosso foco</h2>
          <span className={styles.focusCard}>
            <ul>
              <li className={styles.focusTextList}><b>Restauração de Áreas de Preservação
                Permanente (APPs):</b> Trabalhamos na recuperação de matas ciliares e áreas
                próximas a nascentes, ajudando a proteger os recursos hídricos e evitar a erosão.</li>
              <li className={styles.focusTextList}><b>Monitoramento Ambiental:</b> Realizamos o
                acompanhamento contínuo das áreas reflorestadas, avaliando o crescimento das
                árvores e o impacto positivo nas regiões beneficiadas.</li>
              <li className={styles.focusTextList}><b>Campanhas de Conscientização:</b> Desenvolvemos
                campanhas educativas e materiais informativos para sensibilizar a população sobre a
                importância da conservação ambiental.</li>
              <li className={styles.focusTextList}><b>Limpeza e manutenção das águas:</b> Atuamos na
                limpeza e preservação de rios, lagos e nascentes, como retirada de lixos, e plantio.</li>
            </ul>
          </span>
        </div>
        <div className={styles.projects}>
          <div className={styles.projectsTitle}>
            <h3>Nossos principais projetos</h3>
          </div>
          <div className={styles.projectsCard}>
            <h4 className={styles.projetosTextCard}>Reflorestamento em araçariguama</h4>
            <img className={styles.projectsImage} src="https://institutominere.com.br/files/thumbs/blog_0954-fazenda-bulcao-instituto-minere-2-800x480.jpg,qv=1656696426.pagespeed.ce.YHscVpammm.jpg" alt="" />
          </div>

          <div className={styles.projectsCard}>
            <h4 className={styles.projetosTextCard}>Reflorestamento Parque Ecólogico de São Paulo</h4>
            <img className={styles.projectsImage} src="https://www.fundacaoastrojildo.org.br/wp-content/uploads/2021/12/reflorestamento.jpg.webp" alt="" />
          </div>

          <div className={styles.projectsCard}>
            <h4 className={styles.projetosTextCard}>Parque Estadual do Cocó</h4>
            <img className={styles.projectsImage} src="https://s2-g1.glbimg.com/zuHajff86izEMhDLwKsT_qEXTYA=/0x0:800x533/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/c/3/rCDhC2TB6A8QciS8q5Aw/coco.jpeg" alt="" />
          </div>

          <div className={styles.projectsCard}>
            <h4 className={styles.projetosTextCard}>Parque da Lagoa</h4>
            <img className={styles.projectsImage} src="https://www.sobral.ce.gov.br/images/22okimage.jpg" alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Sobre