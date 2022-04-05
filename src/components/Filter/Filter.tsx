type filtersDataProps = {
    filterData:
        {
            name: string
            logo: string
            description: string
        }
    key: number
}


export const Filter = (props: filtersDataProps) => {

    const filterData = props.filterData

  return (
    <div className="filter" key={props.key}>
        <div className="filter__logo"><img src={filterData.logo} alt={filterData.description} /></div>
        <p className="filter__text">{filterData.name}</p>
    </div>
  )
}