import './App.css';
import frame from './assets/frame-inicio.png';
import TeamCard from './components/TeamCard';
import sobre from './assets/hero-sobre.png';
import charlles from './assets/foto-charlles.png';
import cesar from './assets/foto-cesar.png';
import Header from './components/Header';
import Modalidades from './components/Modalidades';
import Horarios from './components/Horarios';
import Galeria from './components/Galeria';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />

      <main>
        <section id='hero'>
          <div className='container'>
            <div className='hero-text'>
              <h1>TREINE NA MELHOR ACADEMIA DE JIU-JITSU DA REGIÃO</h1>
            </div>
            <div className='hero-cta'>
              <a className='cta1' href="#contato">Marcar Aula Experimental</a>
              <a className='cta2' href="#sobre">Conheça a Universidade</a>
            </div>
          </div>
        </section>
        <section id="inicio">
          <div className='inicio-container'>
            <div className='frame'>
              <img src={frame} alt="Imagem de traço de pincel contornando as palavras 'Disciplina', 'Respeito', 'Técnica' e 'Evolução'" />
            </div>
            <div className='inicio-text'>
              <h2>Universidade do Jiu-Jitsu</h2>
              <p>Aqui, preservamos a tradição do “Básico que funciona”, transformando fundamentos em excelência. Mais do que ensinar técnicas, buscamos proporcionar um estilo de vida baseado na formação de caráter, disciplina e equilíbrio.</p>
              <a href="">Nossa História</a>
            </div>
            <div className='box-container'>
              <div className='box'>
                <h4>Metodologia</h4>
                <span>Treinamento pensado para acompanhar a evolução de cada aluno.</span>
              </div>
              <div className='box'>
                <h4>Equipe</h4>
                <span>Professores preparados para orientar alunos em diferentes níveis.</span>
              </div>
              <div className='box'>
                <h4>Comunidade</h4>
                <span>Um ambiente de respeito, parceria e evolução coletiva.</span>
              </div>
              <div className='box'>
                <h4>Aprendizado</h4>
                <span>Do primeiro treino à busca por novos desafios dentro do Jiu-Jitsu.</span>
              </div>
            </div>
          </div>
        </section>

        <section id="sobre">
          <div className='sobre-container'>
            <div className='sobre-text'>
              <h2>Nossa Filosofia</h2>
              <p>A Universidade do Jiu-Jitsu defende que o verdadeiro propósito do Jiu-Jitsu não é apenas formar competidores ou campeões de torneios, mas também desenvolver o caráter dos indivíduos. O tatame serve como um laboratório para a vida, ensinando valores fundamentais, como a humildade e reconhecer que sempre há algo a aprender.</p>
              <span>Disciplina — Perseverança — Aprender a cair —  Levantar — Seguir em frente</span>
            </div>
            <div className='sobre-imagem'>
              <img src={sobre} alt="Imagem da universidade do jiu-jitsu" />
            </div>
          </div>
        </section>

        <section id="equipe" className="equipe">
          <div className="equipe-container">
            <div className="equipe-header">
              <span className="equipe-subtitulo">QUEM ENSINA</span>
              <div className='texto-equipe'>
                <h2>Nossa Equipe de <span>campeões</span></h2>
              <p>
                Conheça os professores que compartilham conhecimento, experiência e a
                filosofia do Jiu-Jitsu dentro do tatame.
              </p>
              </div>
            </div>

            <div className="equipe-grid">
              <TeamCard nome='Edicharlles Teixeira'
              graduacao='Faixa Preta Zenith'
              imagem={charlles} />
              <TeamCard nome='César Novaes'
              graduacao='Faixa Roxa Zenith'
              imagem={cesar}/>
            </div>
          </div>
        </section>

        <section id="modalidade">
          <Modalidades></Modalidades>
        </section>

        <section id="horário">
          <Horarios></Horarios>
        </section>

        <section id="galeria">
          <Galeria/>
        </section>

        <section id="contato">
          <Footer></Footer>
        </section>
      </main>

    </>
  );
}

export default App;
