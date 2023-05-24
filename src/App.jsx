import RatingCard from "./components/RatingCard";
import styles from "./App.module.scss";

function App() {
	
	return (
		<main className={styles.mainContainer}>
			<div className={styles.ratingCard}>
				<RatingCard text="Reviews" stars={5} />
			</div>
			<div className={styles.ratingCard}>
				<RatingCard text="Report Guru" stars={5} />
			</div>
			<div className={styles.ratingCard}>
				<RatingCard text="BestTech" stars={5} />
			</div>

			
		</main>
	);
}

export default App;
