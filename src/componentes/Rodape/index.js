import './Rodape.css'
import logo from '../../imagens/logo.png';
import Facebook from '../../imagens/fb.png';
import Instagram from '../../imagens/ig.png';
import Twitter from '../../imagens/tw.png';

const Rodape = () => {
   return(
      <footer className='footer'>
         <ul className='lista__redes-sociais'>
            <li>
               <a href='#'><img src={Facebook} alt='Rede Social Facebook' /></a>
            </li>
            <li>
               <a href='#'><img src={Instagram} alt='Rede Social Instagram' /></a>
            </li>
            <li>
               <a href='#'><img src={Twitter} alt='Rede Social Twitter' /></a>
            </li>
         </ul>
         <img src={logo} alt='Logo Organo'/>
         <h6>Desenvolvido por Alura.</h6>
      </footer>
   )
}

export default Rodape