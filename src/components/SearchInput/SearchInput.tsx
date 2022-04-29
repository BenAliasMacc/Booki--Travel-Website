import { useEffect, useState } from 'react';
import places from '../../assets/images/logo/Places.svg'
import magnifyingGlass from '../../assets/images/logo/Magnifying-Glass.svg'

export const SearchInput = () => {

  const [smallScreen, setSmallScreen] = useState(false)

  useEffect(() => {
    window.screen.width > 576 ? setSmallScreen(false) : setSmallScreen(true)

    const updateMedia = () => {
      window.screen.width > 576 ? setSmallScreen(false) : setSmallScreen(true)
    };

    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);

  }, [])

  return (
    <div className="searchInput">
      <div className='searchInput--focus'>
        <label htmlFor='search-input' className='searchInput__label'><img src={places} alt='Saisir le lieu' /></label>
        <input type='search' placeholder="Saisissez votre destination" id="search-input" className='searchInput__input' />
      </div>

      { smallScreen ? (
        <button className='searchInput__button'><img src={magnifyingGlass} alt='loupe' /></button> 
      ) : (
        <button className='searchInput__button'>Rechercher</button>
      )}
    </div>
  )
}
