import { SearchInput } from "../SearchInput/SearchInput"

export const SearchSection = () => {

  return (
    <section className="searchSection">
        <h2>Trouvez votre hébergement pour des vacances de rêve</h2>
        <p>En plein centre ville ou en pleine nature</p>
        <SearchInput
           styleInput={{width: "22.5rem", height: "2rem"}} 
           styleLabel={{width: "2rem", height: "2rem"}} />
    </section>
  )
}
