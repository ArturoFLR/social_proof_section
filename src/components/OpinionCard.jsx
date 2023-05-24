import PropTypes from "prop-types";
import styles from "./OpinionCard.module.scss";

const OpinionCard = ({image, name, quote}) => {
	return (
		<div className={styles.mainContainer}>
			<img src={image} alt="Customer image" className={styles.picture}></img>

			<div className={styles.nameVerifiedContainer}>		
				<p className={styles.name}>{name}</p>
				<p className={styles.verified}>Verified Buyer</p>
			</div>	

			<p className={styles.quote}>{`" ${quote} "`}</p>
		</div>
	);
};

OpinionCard.propTypes = {
	image: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	quote: PropTypes.string.isRequired
};

export default OpinionCard;
