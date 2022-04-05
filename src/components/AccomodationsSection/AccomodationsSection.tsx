import { Accomodations } from "../Accomodations/Accomodations"
import { AccomodationsPopular } from "../AccomodationsPopular/AccomodationsPopular"

export const AccomodationsSection = () => {
  return (
    <section className="accomodationsSection">
        <Accomodations />
        <AccomodationsPopular />
    </section>
  )
}
