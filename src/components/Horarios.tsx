import { useState } from 'react';

const dias = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'];

const horarios = [
  {
    dia: 'Seg',
    manha: [
      { turma: 'Turma Masculino', hora: '6:20' },
      { turma: 'Turma Masculino', hora: '8:00' },
    ],
    tarde: [],
    noite: [
      { turma: 'Turma Kids', hora: '18:00' },
      { turma: 'Turma Misto', hora: '20:30' },
    ],
  },
  {
    dia: 'Ter',
    manha: [],
    tarde: [],
    noite: [],
  },
  {
    dia: 'Qua',
    manha: [],
    tarde: [],
    noite: [],
  },
  {
    dia: 'Qui',
    manha: [],
    tarde: [],
    noite: [],
  },
  {
    dia: 'Sex',
    manha: [],
    tarde: [],
    noite: [],
  },
  {
    dia: 'Sáb',
    manha: [],
    tarde: [],
    noite: [],
  },
  {
    dia: 'Dom',
    manha: [],
    tarde: [],
    noite: [],
  },
];

function Horarios() {
  const [diaAtivo, setDiaAtivo] = useState('Seg');

  const agenda = horarios.find((item) => item.dia === diaAtivo);

  const periodos = [
    { titulo: 'Manhã', aulas: agenda?.manha ?? [] },
    { titulo: 'Tarde', aulas: agenda?.tarde ?? [] },
    { titulo: 'Noite', aulas: agenda?.noite ?? [] },
  ];

  return (
    <section id="horario" className="horarios">
      <div className="horarios-container">
        <h2>Grade de horários</h2>

        <p className="horarios-descricao">
          A Universidade do Jiu-Jitsu defende que o verdadeiro propósito do
          Jiu-Jitsu não é apenas formar competidores ou campeões de torneios,
          mas também desenvolver o caráter dos indivíduos.
        </p>

        <div className="horarios-legenda">
          <span>● Turma Masculino</span>
          <span>● Turma Misto</span>
          <span>● Turma Sem Kimono</span>
          <span>● Turma Kids</span>
        </div>

        <div className="dias-semana">
          {dias.map((dia) => (
            <button
              key={dia}
              className={diaAtivo === dia ? 'dia-ativo' : ''}
              onClick={() => setDiaAtivo(dia)}
              aria-pressed={diaAtivo === dia}
            >
              {dia}
            </button>
          ))}
        </div>

        <div className="horarios-periodos">
          {periodos.map((periodo) => (
            <div className="periodo-card" key={periodo.titulo}>
              <h3>{periodo.titulo}</h3>

              {periodo.aulas.length > 0 ? (
                periodo.aulas.map((aula, index) => (
                  <div className="aula-item" key={`${aula.turma}-${index}`}>
                    <strong>{aula.turma}</strong>
                    <span>{aula.hora}</span>
                  </div>
                ))
              ) : (
                <p className="sem-aulas">Sem aulas</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Horarios;