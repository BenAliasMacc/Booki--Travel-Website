import blueStar from "../../assets/images/logo/BlueStar.svg"
import greyStar from "../../assets/images/logo/GreyStar.svg"
import { Link } from "react-router-dom"

type CardsProps = {
    media: string
    title: string
    price: number
  }

export const Cards = ({ media, title, price  }: CardsProps) => {

    return (
        <>
            <Link to={""}>
                <div className="cardAccomodations__illustration">
                <img src={media} alt="" />
                </div>

                <div className="cardAccomodations__informations">
                <h3>{title}</h3>
                <p>Nuit à partir de <span style={{fontWeight: 'bold'}}>{price}€</span></p>
                <div  className="cardAccomodations__informations__rating">
                    <img src={blueStar} alt="" />
                    <img src={blueStar} alt="" />
                    <img src={blueStar} alt="" />
                    <img src={blueStar} alt="" />
                    <img src={greyStar} alt="" />    
                </div>
                </div>
            </Link>
        </> 
    )
}
