import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import magnifyingGlass from '../../assets/images/logo/Magnifying-Glass.svg';

type SearchButtonProps = {
  styles?: {
    small: React.CSSProperties
    large: React.CSSProperties
  }
}

export const SearchButton  = ({styles}: SearchButtonProps) => {
  
  const navigate = useNavigate()
  const [smallScreen, setSmallScreen] = useState(false)
  
  useEffect(() => {
    window.screen.width > 576 ? setSmallScreen(false) : setSmallScreen(true)

    const updateMedia = () => {
      window.screen.width > 576 ? setSmallScreen(false) : setSmallScreen(true)
    };

    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);

  }, [])

  const handleClick = () => {
    navigate('/destination')
  }

  return (
    <>
      {smallScreen ? (
        <button className='searchButton' style={styles?.small} onClick={handleClick} ><img src={magnifyingGlass} alt='loupe' /></button> 
      ) : (
        <button className='searchButton' style={styles?.large} onClick={handleClick} >Rechercher</button>
      )}     
    </>
  )
}
