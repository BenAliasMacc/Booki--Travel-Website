import { useState } from "react"

type filtersDataProps = {
    filterData:
        {
            name: string
            logo: string
            description: string
        }
    key: number
}

export const Filter = ({filterData, key}: filtersDataProps) => {

    const [active, setActive] = useState(false)

    const handleFilterAnimation = () => {
        setActive(!active)
    };

  return (
    <div className={`filter filter-animations__${active}`} key={key} onClick={handleFilterAnimation}>
        <div className={`filter__logo filter-animations-logo__${active}`}><img src={filterData.logo} alt={filterData.description} /></div>
        <p className={`filter__text filter-animations-text__${active}`}>{filterData.name}</p>
    </div>
  )
}