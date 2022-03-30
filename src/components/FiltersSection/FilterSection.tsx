import dog from '../../assets/images/logo/Dog.svg'
import handsUp from '../../assets/images/logo/HandsUp.svg'
import heart from '../../assets/images/logo/Heart.svg'
import bill from '../../assets/images/logo/Bill.svg'

export const FilterSection = () => {

    const filters = [
        {
            name: "Economique",
            logo: bill
        },
        {
            name: "Familial",
            logo: handsUp
        },
        {
            name: "Romantique",
            logo: heart
        },
        {
            name: "Animaux Autorisés",
            logo: dog
        }
    ]

  return (
    <section className="filterSection">
        <h3>Filtres</h3>

    </section>
  )
}
