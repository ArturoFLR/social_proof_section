import PropTypes from "prop-types";
import styles from "./RatingCard.module.scss";

const RatingCard = ({text, stars}) => {
	
	const generateStars = () => {
		let result = [];
		for (let index = 0; index < stars; index++) {
			result = [...result, <img className={styles.star} src="icon-star.svg" alt="Estrella" key={index}/>];
		}
		return result;
	};
	
	return (
		<div className={styles.container}>
			<div className={styles.starsContainer}>
				{generateStars()}
			</div>
			<p className={styles.text}>Rated 5 Stars in {text}</p>
		</div>
	);
};

RatingCard.propTypes = {
	text: PropTypes.string.isRequired,
	stars: PropTypes.number.isRequired,
};

export default RatingCard;
