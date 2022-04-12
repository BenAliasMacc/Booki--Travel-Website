import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo/Booki.png'

export const Header = () => {

    const [showNav, setShowNav] = useState(false)

    const handleBurgerMenu = () => {
        setShowNav(!showNav)
    }

    const diplayNav = showNav ? "show-navbar" : "";

  return (
    <header className={`header ${diplayNav}`}>
        <h1>
            <Link to={'/'} aria-labelledby="retour à la page d'accueil" className='header__logo' >
                <img src={logo} alt='logo de booki' />
            </Link>
        </h1>

        <nav className='header__navbar'>

            <ul className='header__navbar__list'>
                <li className='header__navbar__list__link'><Link to={''}>Hébergements</Link></li>
                <li className='header__navbar__list__link'><Link to={''}>Activités</Link></li>
            </ul>

            <button className="header__navbar__burger-menu" onClick={handleBurgerMenu}>
                <span className="header__navbar__burger-menu__bar"></span>
            </button>

        </nav>
    </header>
  )
}
