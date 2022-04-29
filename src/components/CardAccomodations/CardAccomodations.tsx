import blueStar from "../../assets/images/logo/BlueStar.svg"
import greyStar from "../../assets/images/logo/GreyStar.svg"
import { Link } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../Hooks"
import { useEffect, useState } from "react"

type CardAccomodationsProps = {
  display: number | undefined
}

type AccomodationType = {
  _id: number
  media: string
  title: string
  price: number
}

export const CardAccomodations = ({ display }: CardAccomodationsProps) => {

  const accomodations = useAppSelector(state => state.callApi.accomodations)
  const filterTag = useAppSelector(state => state.filters.filter)
  console.log(filterTag);
  

  const filter = () => {
    if (filterTag && filterTag !== "" ) {
      setArrayAccomodation(arrayAccomodation.filter((accomodation) => accomodation.tags.includes(filterTag)))
    }
  }

  useEffect(() => {
    filter()
  }, [filterTag])
  
  const [arrayAccomodation, setArrayAccomodation] = useState([])   

  useEffect(() => {
    setArrayAccomodation([...accomodations])
  }, [accomodations])
  
  const renderCards = arrayAccomodation
    .slice(0, display)
    .map((accomodation: AccomodationType) => {

    const { _id, media, title, price } = accomodation;

    return (
        <div className="cardAccomodations" key={_id}>
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
      </div>
    )
  })
  

  return (
    <>
      {renderCards}
    </>
  )
}
