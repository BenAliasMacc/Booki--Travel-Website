import { CardActivities } from "../CardActivities/CardActivities"

export const Activities = () => {
  return (
    <section className="activitiesSection">
        <h2>Activités à Marseille</h2>
        <div className="activitiesSection__cards">
            <CardActivities />
            <CardActivities />
            <CardActivities />
            <CardActivities />
        </div>
    </section>
  )
}
