<<<<<<< HEAD
import background from '../images/fundo-login1.jpg';

function Signup() {
  return (
    <section className="signup-section">
    <img src={background} alt="foto de fundo" className="hero-image"/>
      <div className="signup-container">
        <form className="signup-form">
        <h1 className="">CADASTRO</h1>
          <div className='signup-body'>
            <label htmlFor="name">Nome:</label>
            <input type="text" id="name" name="name" placeholder="Digite seu nome completo" required />
          </div>
          <div className='signup-body'>
            <label htmlFor="email">E-mail:</label>
            <input type="email" id="email" name="email" placeholder="Digite seu email" required/>
          </div>
          <div className='signup-body'>
            <label htmlFor="password">Senha:</label>
            <input type="password" id="password" name="password" placeholder="Digite sua senha" required />
          </div>
          <div className='signup-body'>
            <label htmlFor="password">Confirmação de senha</label>
            <input type="password" id="password" name="password" placeholder="Confirme sua senha" required />
          </div>
          <div>
            <button type="submit">Cadastrar</button>
          </div>
        </form>
      </div>
    </section>
  );
}

  export default Signup;
=======
import { Link } from 'react-router-dom';
import background from '../images/fundo-login1.jpg';

function Signup() {
  return (
    <section className="signup-section">
      <img src={background} alt="foto de fundo" className="hero-image" />
      <div className="signup-container">
        <form className="signup-form">
          <h1 className="">CADASTRO</h1>
          <div className="signup-body">
            <label htmlFor="name">Nome:</label>
            <input type="text" id="name" name="name" placeholder="Digite seu nome completo" required />
          </div>
          <div className="signup-body">
            <label htmlFor="email">E-mail:</label>
            <input type="email" id="email" name="email" placeholder="Digite seu email" required />
          </div>
          <div className="signup-body">
            <label htmlFor="password">Senha:</label>
            <input type="password" id="password" name="password" placeholder="Digite sua senha" required />
          </div>
          <div className="signup-body">
            <label htmlFor="confirmPassword">Confirmação de senha</label>
            <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirme sua senha" required />
          </div>
          <div>
            <button type="submit">Cadastrar</button>
          </div>
          <div className="login-redirect">
            <Link to="/login">Já possui cadastro? Faça seu login aqui!</Link>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Signup;
>>>>>>> ac64cb63497ab59deb8e6bd41642ba54dea68906
