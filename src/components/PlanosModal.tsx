type PlanosModalProps = {
  aberto: boolean;
  onFechar: () => void;
};

const planos = [
  {
    nome: 'Mensal',
    descricao: 'Ideal para começar a treinar.',
    preco: 'Consulte o valor',
  },
  {
    nome: 'Trimestral',
    descricao: 'Para manter a constância nos treinos.',
    preco: 'Consulte o valor',
  },
  {
    nome: 'Anual',
    descricao: 'Para quem quer manter uma rotina de longo prazo.',
    preco: 'Consulte o valor',
  },
];

function PlanosModal({ aberto, onFechar }: PlanosModalProps) {
  if (!aberto) return null;

  return (
    <div className="planos-overlay" onClick={onFechar}>
      <div
        className="planos-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="titulo-planos"
        onClick={(evento) => evento.stopPropagation()}
      >
        <button
          className="planos-fechar"
          onClick={onFechar}
          aria-label="Fechar modal"
        >
          ×
        </button>

        <span className="planos-subtitulo">COMECE SUA JORNADA</span>
        <h2 id="titulo-planos">Nossos Planos</h2>
        <p className="planos-intro">
          Escolha a opção que combina com sua rotina.
        </p>

        <div className="planos-lista">
          {planos.map((plano) => (
            <article className="plano-card" key={plano.nome}>
              <h3>{plano.nome}</h3>
              <p>{plano.descricao}</p>
              <strong>{plano.preco}</strong>

              <a href="https://wa.me/5581982262838?text=Ol%C3%A1!%20Tenho%20interesse%20em%20come%C3%A7ar%20a%20treinar%20Jiu-Jitsu." onClick={onFechar}>
                Tenho interesse
              </a>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PlanosModal;