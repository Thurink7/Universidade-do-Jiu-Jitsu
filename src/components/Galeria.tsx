const imagens = [
  {
    src: '/src/assets/image 9.png',
    alt: 'Alunos treinando Jiu-Jitsu',
    classe: 'galeria-item-1',
  },
  {
    src: '/src/assets/image 11.png',
    alt: 'Treino no tatame',
    classe: 'galeria-item-2',
  },
  {
    src: '/src/assets/image 12.png',
    alt: 'Competição de Jiu-Jitsu',
    classe: 'galeria-item-3',
  },
  {
    src: '/src/assets/image 13.png',
    alt: 'Equipe da Universidade do Jiu-Jitsu',
    classe: 'galeria-item-4',
  },
  {
    src: '/src/assets/image 14.png',
    alt: 'Turma reunida no tatame',
    classe: 'galeria-item-5',
  },
  {
    src: '/src/assets/image 15.png',
    alt: 'Alunos da academia',
    classe: 'galeria-item-6',
  },
];

function Galeria() {
  return (
    <section id="galeria" className="galeria">
      <div className="galeria-container">
        <h2>Nossa Academia</h2>

        <div className="galeria-grid">
          {imagens.map((imagem) => (
            <img
              key={imagem.classe}
              className={imagem.classe}
              src={imagem.src}
              alt={imagem.alt}
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Galeria;

