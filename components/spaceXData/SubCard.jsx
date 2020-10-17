
import styles from '../../styles/SpaceXCard.module.css';


export default function SubCard({mission}) {

const mobile = mission.links.mission_patch_small
? mission.links.mission_patch_small
: "./default.jpg";
const rest = mission.links.mission_patch
? mission.links.mission_patch
: "./default.jpg";

return(
    <div className={styles.subCard}>
      <div className={styles.subCard_image}>
        <img
          height={500}
          width={500}
          src="./default.jpg"
          srcSet={`${mobile} 1440w, ${rest} 1441w`}
          alt={mission.mission_name}
        />
      </div>
      <div className={styles.subCard_title}>
        {mission.mission_name} #{mission.flight_number}
      </div>
      <div className={styles.subCard_field}>
        <span className={styles.text_label}>Mission Ids:</span>
        {mission.mission_id.length > 0 ? (
          <span className={styles.text_value}>
            <ul>
              {mission.mission_id.map((id, index) => (
                <li key={index}>{id}</li>
              ))}
            </ul>
          </span>
        ) : null}
      </div>
      <div className={styles.subCard_field}>
        <span className={styles.text_label}>Launch Year: </span>
        <span className={styles.text_value}>{mission.launch_year}</span>
      </div>
      <div className={styles.subCard_field}>
        <span className={styles.text_label}>Successful Launch: </span>
        <span className={styles.text_value}>
          {mission.launch_success ? "True" : "False"}
        </span>
      </div>
      <div className={styles.subCard_field}>
        <span className={styles.text_label}>Successful Landing: </span>
        <span className={styles.text_value}>
          {mission.rocket.first_stage.cores[0].land_success === null
            ? null
            : mission.rocket.first_stage.cores[0].land_success
            ? "True"
            : "False"}
        </span>
      </div>
    </div>
)    
}