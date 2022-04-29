import { useState } from "react"
import { CardAccomodations } from "../CardAccomodations/CardAccomodations"
import arrowDown from "../../assets/images/logo/ArrowDown.svg"
import arrowUp from "../../assets/images/logo/ArrowUp.svg"

export const Accomodations = () => {

  const [displayMore, setdisplayMore] = useState(false)

  const handleDisplayMoreCardsButton = () => {
    setdisplayMore(!displayMore)
  };
  
  const displayMoreCards = displayMore ? (undefined) : (6)

  const displayMoreCardsButton = displayMore ?  (
    <div className="accomodations__container__moreContent--center">Afficher moins <img src={arrowUp} alt='afficher moins' /></div>
  ) : (
    <div className="accomodations__container__moreContent--center">Afficher plus <img src={arrowDown} alt='afficher plus' /></div>
  )

  return (
    <article className="accomodations">
        <div className="accomodations__container">
            <h2 className="accomodations__container__title">Hébergements à Marseille</h2>
            <div className="accomodations__container__cards">
                <CardAccomodations display={displayMoreCards} />
            </div>
            <button className="accomodations__container__moreContent" onClick={handleDisplayMoreCardsButton}>{displayMoreCardsButton}</button>
        </div>
    </article>
  )
}
