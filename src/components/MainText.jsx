import "../variables.scss";
import styles from "./MainText.module.scss";
import PropTypes from "prop-types";

const MainText = (main, secondary) => {
	return (
		<div className={styles.container}>
			<h1 className={styles.heading}>{main}</h1>
			<p className={styles.paragraph}>{secondary}</p>
		</div>
	);
};

MainText.propTypes = {
	main: PropTypes.string.isRequired,
	secondary: PropTypes.string.isRequired
};

export default MainText;
