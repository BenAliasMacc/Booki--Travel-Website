import { useAppSelector } from "../../Hooks"
import { Cards } from "../Cards/Cards"

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

  const cardsArray = useAppSelector((state) => state.callApi.accomodations);
  const filter = useAppSelector((state) => state.filters.filter);
  
  const renderCards = cardsArray && 
    filter !== "" ? (
      
      cardsArray
      .filter((accomodation: AccomodationType) => accomodation.tags.includes(filter))
      .map((accomodation: AccomodationType) => {

        const { _id, media, title, price } = accomodation;

        return (
          <div className="cardAccomodations" key={_id}>
          <Cards media={media} title={title} price={price} />
          </div>
        )
      })

    ) : (

      cardsArray
      .slice(0, display)
      .map((accomodation: AccomodationType) => {

        const { _id, media, title, price } = accomodation;

        return (
          <div className="cardAccomodations" key={_id}>
            <Cards media={media} title={title} price={price} />
          </div>
        )
      })
    )
  
  return (
    <>
      {renderCards}
    </>
  )
}
