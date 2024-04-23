import React, { Component } from 'react';
import '../Estilos/Portafolio.css'

export class Portafolio extends Component {
  render() {
    return (
      <div>
        <header>
          <nav className="cabecera__container">
            <a href="/" className="cabecera__inicio">Inicio</a>
            <div className="cabecera__info">
              <a href="#" className="cabecera__sobre_mi">Sobre mi</a>
              <a href="#" className="cabecera__habilidades">Habilidades</a>
              <a href="#" className="cabecera__proyectos">Proyectos</a>
              <a href="#" className="cabecera__contacto">Contacto</a>
            </div>
          </nav>
        </header>
        <main>
          <section className="sobre__mi_container">
            <section className="sobre__mi_foto">
              <img 
              
              src={require(`../Imagenes/img-${this.props.imagen}.jpeg`)} 
              alt="img de Andres" 
              
              />
            </section>
            <section className="sobre__mi_info">
              <p>Hola, soy Andrés Rivera. Me apasiona aprender y llevar mis conocimientos más allá de lo básico. Siempre en busca de nuevos desafíos y oportunidades para crecer, me esfuerzo por alcanzar un nivel de maestría en las áreas que me interesan. Creo en compartir lo que he aprendido y en inspirar a otros a perseguir sus pasiones. ¡Listo para explorar, descubrir y aprender cada día!</p>
            </section>
          </section>
          <section className="habilidades__container">
            <section className="habilidades__item">
              <section className="habilidades__info">
                <h3>Maquetacion y estilos</h3>
                <hr />
                <nav className="habilidades__lista">
                  <ul>
                    <li><p><i className="fab fa-html5"></i> Html</p></li> 
                    <li><p><i className="fab fa-css3-alt"></i> Css</p></li>
                  </ul>
                </nav>
              </section>
            </section>
            <section className="habilidades__item">
              <section className="habilidades__info">
                <h3>Bootstrap</h3>
                <hr />
                <nav className="habilidades__lista">
                  <ul>
                    <li><p><i className="fab fa-bootstrap"></i> Bootstrap</p></li>
                  </ul>
                </nav>
              </section>
            </section>
            <section className="habilidades__item">
              <section className="habilidades__info">
                <h3>Desarrollo y gestión</h3>
                <hr />
                <nav className="habilidades__lista">
                  <ul>
                    <li><p><i className="fab fa-js"></i> Javascript</p></li>
                    <li><p><i className="fab fa-node"></i> Node.js</p></li>
                    <li><p><i className="fab fa-react"></i> React</p></li>
                    <li><p><i className="fab fa-git-alt"></i> Git y GitHub</p></li>
                  </ul>
                </nav>
              </section>
            </section>
          </section>
          <section>
            <section className="proyectos__container">
              <h2>Descubre mis proyectos</h2>
              <section className="proyectos__info">
                <p>¡Hola! Soy Andrés Rivera, un desarrollador front-end lleno de entusiasmo con una variedad de proyectos emocionantes para compartir. Desde aplicaciones web interactivas hasta sitios modernos y responsivos, cada proyecto refleja mi pasión por la innovación y la excelencia técnica. ¿Listo para explorar? ¡Únete a mí en este emocionante viaje de desarrollo web!</p>
              </section>
              <section className="proyectos__info">
                <a href="#">Ver más</a>
              </section>
            </section>
          </section>
          <section className="form__contacto">
            <div className="form__section">
              <h2>¡Hablemos!</h2>
              <form className="form__formulario" action="mailto:tuemail@example.com" method="post" encType="text/plain">
                <input className="form__input" type="email" name="email" placeholder="Tu correo electrónico" required />
                <input className="form__submit" type="submit" value="Enviar" />
              </form>
            </div>
          </section>
          <footer> 
            <section className="footer__mensaje">
              <h4>¡Gracias por llegar hasta aquí!</h4>
            </section>
            <hr />
            <section className="footer__container">
              <section className="footer__item_1">
                <a href="#">Sobre mí</a>
                <a href="#">Habilidades</a>
                <a href="#">Proyectos</a>
                <a href="#">Contacto</a>
              </section>
              <section className="footer__item_2">
                <a href=""><i className="fab fa-linkedin" style={{ color: '#ffffff' }}></i></a>
                <a href=""><i className="fab fa-github" style={{ color: '#ffffff' }}></i></a>
                <a href=""><i className="fab fa-instagram" style={{ color: '#ffffff' }}></i></a>
              </section>
            </section>
          </footer>
        </main>
      </div>
    );
  }
}

