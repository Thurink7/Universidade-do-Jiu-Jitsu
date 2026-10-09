import { useState } from 'react';
import PlanosModal from './PlanosModal';
import logoImg from '../assets/logo-preto.png'; 


function Header() {
    const [menuAberto, setMenuAberto] = useState(false);
    const [modalAberto, setModalAberto] = useState(false);
    return (
        <header>
            <div className='container-header'>
                <div className='logo-header'>
                    <img src={logoImg} alt="Logo da Universidade do Jiu-jitsu" />
                </div>
                <button
                    className="menu-toggle"
                    onClick={() => setMenuAberto(!menuAberto)}
                    aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
                    aria-expanded={menuAberto}
                >
                    {menuAberto ? "✕" : "☰"}
                </button>
                <PlanosModal
                    aberto={modalAberto}
                    onFechar={() => setModalAberto(false)}
                />
                <div className='nav-container'>
                    <nav className={`nav-links ${menuAberto ? "aberto" : ""}`}>
                        <a href="#inicio">Início</a>
                        <a href="#sobre">Sobre</a>
                        <a href="#equipe">Equipe</a>
                        <a href="#modalidade">Modalidade</a>
                        <a href="#horário">Horários</a>
                        <a href="#galeria">Galeria</a>
                        <a href="#contato">Contato</a>
                    </nav>
                </div>
                <div className='cta-header'>
                    <button onClick={() => setModalAberto(true)}>
                        Ver Planos</button>
                </div>
            </div>
        </header>
    );
}
export default Header;