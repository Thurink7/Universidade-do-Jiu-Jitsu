type TeamCardProps = {
  nome: string;
  graduacao: string;
  imagem: string;
};

function TeamCard({ nome, graduacao, imagem }: TeamCardProps) {
  return (
    <article className="team-card">
      <div className="team-card-imagem">
        <img src={imagem} alt={`Professor ${nome}`} />
      </div>

      <div className="team-card-info">
        <h3>{nome}</h3>
        <p>{graduacao}</p>
      </div>
    </article>
  );
}

export default TeamCard;
