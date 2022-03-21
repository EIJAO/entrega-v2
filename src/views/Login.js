
import '../assets/signin.css'
import imagem from '../assets/svg.svg'

import { logar as login } from '../store/user'

// import logo1 from '../assets/logo512.png'

export default function Login() {

    async function logar(ev)
    {
        ev.preventDefault();
        let senha = ev.target.senha.value;
        let usuario = ev.target.login.value;

        let retorno = await login(usuario, senha);

        console.log(retorno)

    }

    return (
        <div className='body-main'>
            <main className="form-signin container-fluid">
                <div className='row'>
                    <div className='col-9'>
                        <img src={imagem} width="900"/>
                    </div>
                    <form className='col-3' onSubmit={logar}>
                        <img className="mb-4" src="/logo.svg" alt="" height="57" />
                        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                        <div className="form-floating">
                            <input type="text" name="login" className="form-control" id="floatingInput" placeholder="name@example.com" />
                            <label >Login</label>
                        </div>
                        <div className="form-floating">
                            <input type="password" name="senha" className="form-control" id="floatingPassword" placeholder="Password" />
                            <label >Senha</label>
                        </div>

                        <div className="checkbox mb-3">
                            <label>
                                <input type="checkbox" value="remember-me" /> Remember me
                            </label>
                        </div>
                        <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                        <p className="mt-5 mb-3 text-muted">© 2017–2021</p>
                    </form>
                </div>
            </main>
        </div>
    )
}