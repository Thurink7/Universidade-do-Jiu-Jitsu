import { useState } from 'react';

import competicaoImg from '../assets/competicao.png';
import kidsImg from '../assets/infantil.png';
import semKimonoImg from '../assets/sem-kimono.png';
import mistaImg from '../assets/misto.png';
import masculinaImg from '../assets/masculino.png';

const modalidades = [
  { id: 'competicao', nome: 'Competição', imagem: competicaoImg },
  { id: 'kids', nome: 'Turma Kids', imagem: kidsImg },
  { id: 'sem-kimono', nome: 'Turma Sem Kimono', imagem: semKimonoImg },
  { id: 'mista', nome: 'Turma Mista', imagem: mistaImg },
  { id: 'masculina', nome: 'Turma Masculina', imagem: masculinaImg },
];

function Modalidades() {
  const [ativa, setAtiva] = useState('competicao');

  const selecionada = modalidades.find(
    (modalidade) => modalidade.id === ativa
  );

  return (
    <section id="modalidade" className="modalidades">
      <div className="modalidades-container">
        <h2 className="modalidades-titulo">Modalidades</h2>

        <div className="modalidades-conteudo">
          <div className="modalidades-lista">
            {modalidades.map((modalidade) => (
              <button
                key={modalidade.id}
                className={`modalidade-opcao ${
                  ativa === modalidade.id ? 'ativa' : ''
                }`}
                onClick={() => setAtiva(modalidade.id)}
                aria-pressed={ativa === modalidade.id}
              >
                {modalidade.nome}
              </button>
            ))}
          </div>

          {selecionada && (
            <div className="modalidade-imagem">
              <img
                src={selecionada.imagem}
                alt={`Treino de ${selecionada.nome}`}
              />

              <h3>{selecionada.nome}</h3>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Modalidades;