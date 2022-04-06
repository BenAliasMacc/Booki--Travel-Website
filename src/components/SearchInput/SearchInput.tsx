import places from '../../assets/images/logo/Places.svg'

export const SearchInput = () => {
  return (
    <div className="searchInput">
      <div className='searchInput--focus'>
        <label htmlFor='search-input' className='searchInput__label'><img src={places} alt='Saisir le lieu' /></label>
        <input type='search' placeholder="Saisissez votre destination" id="search-input" className='searchInput__input' />
      </div>

        <button className='searchInput__button'>Rechercher</button>
    </div>
  )
}
