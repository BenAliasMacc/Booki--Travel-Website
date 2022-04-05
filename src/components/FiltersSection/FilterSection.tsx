import dog from '../../assets/images/logo/Dog.svg'
import handsUp from '../../assets/images/logo/HandsUp.svg'
import heart from '../../assets/images/logo/Heart.svg'
import bill from '../../assets/images/logo/Bill.svg'
import info from '../../assets/images/logo/Info.svg'
import { Filter } from '../Filter/Filter'

export const FilterSection = () => {

    const filters = [
        {
            name: "Economique",
            logo: bill,
            description: "économique"
        },
        {
            name: "Familial",
            logo: handsUp,
            description: "familial"
        },
        {
            name: "Romantique",
            logo: heart,
            description: "romantique"
        },
        {
            name: "Animaux Autorisés",
            logo: dog,
            description: "animaux autorisés"
        }
    ]

  return (
    <section className="filterSection">
        <div className='filterSection__container'>
            <h3 className="filterSection__container__title">Filtres</h3>
            <div className='filterSection__container__filters'>
                {
                    filters.map((filter, index) => <Filter filterData={filter} key={index} />)
                }
            </div>
        </div>
        <div className='filterSection__text'>
            <div className='filterSection__text__logo'><img src={info} alt='information' /></div>
            <p>Plus de 500 logements disponibles</p>
        </div>
    </section>
  )
}
