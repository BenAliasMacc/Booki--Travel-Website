import { Link } from "react-router-dom"

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">

        <div className="footer__container__menu">
          <ul>
            <li><h2>A propos</h2></li>
            <li><Link to="/">Fonctionnement du site</Link></li>
            <li><Link to="/">Conditions générales de vente</Link></li>
            <li><Link to="/">Données et confidentialité</Link></li>
          </ul>
        </div>

        <div className="footer__container__menu">
          <ul>
            <li><h2>Nos hébergements</h2></li>
            <li><Link to="/">Charte qualité</Link></li>
            <li><Link to="/">Soumettre votre hôtel</Link></li>
          </ul>
        </div>

        <div className="footer__container__menu">
          <ul>
            <li><h2>Assistance</h2></li>
            <li><Link to="/">Centre d'aide</Link></li>
            <li><Link to="/">Nous contacter</Link></li>
          </ul>
        </div>

      </div>
    </footer>
  )
}
