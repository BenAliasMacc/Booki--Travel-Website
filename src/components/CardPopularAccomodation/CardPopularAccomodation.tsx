import blueStar from "../../assets/images/logo/BlueStar.svg"
import greyStar from "../../assets/images/logo/GreyStar.svg"
import room from "../../assets/images/hebergements/annie-spratt-Eg1qcIitAuA-unsplash.jpg"

export const CardPopularAccomodation = () => {
  return (
    <div className="cardPopularAccomodations">
        <div className="cardPopularAccomodations__illustration">
          <img src={room} alt="" />
        </div>

        <div className="cardPopularAccomodations__informations">
          <h3>Auberge de la cannebière</h3>
          <p>Nuit à partir de <span>25€</span></p>
          <div  className="cardPopularAccomodations__informations__rating">
            <img src={blueStar} alt="" />
            <img src={blueStar} alt="" />
            <img src={blueStar} alt="" />
            <img src={blueStar} alt="" />
            <img src={greyStar} alt="" />    
          </div>
        </div>
    </div>
  )
}
