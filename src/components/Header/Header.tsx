import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo/Booki.png'

export const Header = () => {
  return (
    <header className='header'>
        <h1>
            <Link to={'/'} aria-labelledby="retour à la page d'accueil" className='header__logo' >
                <img src={logo} alt='logo de booki' />
            </Link>
        </h1>
        <nav className='header__navbar'>
            <ul className='header__navbar__list'>
                <li><Link to={''}>Hébergements</Link></li>
                <li><Link to={''}>Activités</Link></li>
            </ul>
        </nav>
    </header>
  )
}
