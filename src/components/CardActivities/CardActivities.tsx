import activity from '../../assets/images/activites/paul-hermann-QFTrLdQIRhI-unsplash.jpg'

export const CardActivities = () => {
  return (
    <div className="cardActivities">
        <div className="cardActivities__illustration">
          <img src={activity} alt="calanque" />
        </div>

        <div className="cardActivities__informations">
          <h3>Auberge de la cannebière</h3>
        </div>
    </div>
  )
}
