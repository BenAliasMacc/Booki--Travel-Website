import chartLine from '../../assets/images/logo/ChartLine.svg'
import { CardPopularAccomodation } from '../CardPopularAccomodation/CardPopularAccomodation'

export const AccomodationsPopular = () => {
  return (
    <aside className="accomodationsPopular">
      <div className="accomodationsPopular__container">
        <div className="accomodationsPopular__container__title">
          <h2>Les plus populaires</h2>
          <img src={chartLine} alt='les plus populaires' />
        </div>
        <div className="accomodationsPopular__container__cards">
          <CardPopularAccomodation />
          <CardPopularAccomodation />
          <CardPopularAccomodation />
        </div>
      </div>
    </aside>
  )
}
