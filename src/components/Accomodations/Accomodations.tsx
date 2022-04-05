import { CardAccomodations } from "../CardAccomodations/CardAccomodations"

export const Accomodations = () => {
  return (
    <article className="accomodations">
        <div className="accomodations__container">
            <h2 className="accomodations__container__title">Hébergements à Marseille</h2>
            <div className="accomodations__container__cards">
                <CardAccomodations />
                <CardAccomodations />
                <CardAccomodations />
                <CardAccomodations />
                <CardAccomodations />
                <CardAccomodations />
            </div>
            <button className="accomodations__container__moreContent">Afficher plus</button>
        </div>
    </article>
  )
}
