import { AccomodationsSection } from "../../components/AccomodationsSection/AccomodationsSection"
import { Activities } from "../../components/Activities/Activities"
import { FilterSection } from "../../components/FiltersSection/FilterSection"
import { SearchSection } from "../../components/SearchSection/SearchSection"

export const Destination = () => {
  return (
    <main>
      <SearchSection />
      <FilterSection />
      <AccomodationsSection />
      <Activities />
    </main>
  )
}
