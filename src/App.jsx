import RatingCard from "./components/RatingCard";
import styles from "./App.module.scss";
import MainText from "./components/MainText";
import OpinionCard from "./components/OpinionCard";

function App() {
	const mainTextMain = "10,000+ of our users love our products.";
	const mainTextSecondary = "We only provide great products combined with excellent customer service. See what our satisfied customers are saying about our services.";

	const image1 = "image-colton.jpg";
	const image2 = "image-irene.jpg";
	const image3 = "image-anne.jpg";
	const quote1 = "We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!";
	const quote2 = "Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery.";
	const quote3 = "Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!";

	return (
		<main className={styles.mainContainer}>
			<div className={styles.mainText}>
				<MainText main={mainTextMain} secondary={mainTextSecondary} />
			</div>
			
			<div className={styles.ratingCardContainer}>
				<div className={styles.ratingCardComponent1}>
					<RatingCard text="Reviews" stars={5} />
				</div>
				<div className={styles.ratingCardComponent2}>
					<RatingCard text="Report Guru" stars={5} />
				</div>
				<div className={styles.ratingCardComponent3}>
					<RatingCard text="BestTech" stars={5} />
				</div>
			</div>

			<div className={styles.opinionCardContainer}>
				<div className={styles.opinionCardComponent1}>
					<OpinionCard image={image1} name="Colton Smith" quote={quote1} />
				</div>
				<div className={styles.opinionCardComponent2}>
					<OpinionCard image={image2} name="Irene Roberts" quote={quote2} />
				</div>
				<div className={styles.opinionCardComponent3}>
					<OpinionCard image={image3} name="Anne Wallace" quote={quote3} />
				</div>
			</div>

			
		</main>
	);
}

export default App;
