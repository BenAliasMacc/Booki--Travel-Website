import { useState } from "react"
import { useAppDispatch } from "../../Hooks"
import { economicFilter, familyFilter, romanticFilter, petsFilter } from "../../redux/filtersButton/actionFiltersButton"

type filtersDataProps = {
    filterData:
        {
            name: string
            logo: string
            description: string
        }
}

export const Filter = ({ filterData }: filtersDataProps) => {

    const dispatch = useAppDispatch()
    const [active, setActive] = useState(false)

    const handleFilter = (filterName: string) => {
        setActive(!active)

        switch (filterName) {
            case '':
                return false
            case 'Economique':
                dispatch(economicFilter())
                break;
            case 'Familial':
                dispatch(familyFilter())
                break;
            case 'Romantique':
                dispatch(romanticFilter())        
                break;
            case 'Animaux Autorisés':
                dispatch(petsFilter())
                break;
            default:
                break;
        }               
    };

  return (
    <button className={`filter filter-animations__${active}`} onClick={() => handleFilter(filterData.name)} >
        <div className={`filter__logo filter-animations-logo__${active}`} ><img src={filterData.logo} alt={filterData.description} /></div>
        <p className={`filter__text filter-animations-text__${active}`}>{filterData.name}</p>
    </button>
  )
}