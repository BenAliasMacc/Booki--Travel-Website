import React from 'react'
import placesIcon from '../../assets/images/logo/Places.svg'
import { useAppSelector } from '../../Hooks'
import { SearchButton } from '../SearchButton/SearchButton'

type SearchInputProps = {
  styleInput: React.CSSProperties,
  styleLabel: React.CSSProperties,
  styleButton?: {
    small: React.CSSProperties
    large: React.CSSProperties
  }
}

export const SearchInput = ({ styleInput, styleLabel, styleButton }: SearchInputProps) => {

  const accomodations = useAppSelector((state) => state.callApi.accomodations)
  const placesArray = Array.from(accomodations.map(accomodation => accomodation.place));
  const places = placesArray.reduce(function(acc, valCourante) {
    
    if(acc.indexOf(valCourante) === -1) {
      acc.push(valCourante);
    }
    return acc
  }, [])
  

  const handleInput = (e) => {
    console.log(e.target.value);
  }

  return (
    <div className="searchInput" style={styleInput}>
      <div className='searchInput--focus'>
        <label htmlFor='search-input' className='searchInput__label' style={styleLabel} >
          <img src={placesIcon} alt='Saisir le lieu' />
        </label>
        <input type='search' placeholder="Saisissez votre destination" id="search-input" className='searchInput__input' onChange={(e) => handleInput(e)} />
        <div className="searchInput__selection">
          <ul>
            {
              places?.map((place, id) => <li key={id}>{place}</li>)
            }
          </ul>
        </div>
      </div>

      <SearchButton styles={styleButton} />

    </div>
  )
}
