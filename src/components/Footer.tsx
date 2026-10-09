import logo from '../assets/logo-branco.png';
import { useState } from 'react';
import PlanosModal from './PlanosModal';

function Footer() {
    const [modalAberto, setModalAberto] = useState(false);
    return (
        <>
            <PlanosModal
                aberto={modalAberto}
                onFechar={() => setModalAberto(false)}
            />
            <section className="contato-cta">
                <div className="contato-cta-container">
                    <h2>Conheça nossa academia</h2>
                    <button className='contato-cta-botao' onClick={() => setModalAberto(true)}>
                        Ver Planos</button>
                </div>
            </section>
            <footer id="contato" className="footer">
                <div className="footer-container">
                    <div className="footer-logo">
                        <img src={logo} alt="Universidade do Jiu-Jitsu" />
                    </div>

                    <div className="footer-sobre">
                        <h3>Universidade do Jiu-Jitsu - Artes Marciais</h3>
                        <p>Tornando você cada dia mais campeão.</p>

                        <a href="#sobre">Sobre</a>
                    </div>

                    <div className="footer-contato">
                        <h3>Contato</h3>
                        <p>Entre em contato para conhecer nossa academia.</p>

                        <a
                            href="https://www.instagram.com/universidadedojiujitsu/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Instagram
                        </a>

                        <span>Caruaru, PE</span>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;

