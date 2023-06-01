import Coupon from "../../components/coupon/Coupon";
import { coupons } from "../../data/coupons";

import styles from "./CouponsPage.module.scss";

const CouponsPage = () => {
	return (
		<div className="section">
			<div className="container">
				<ul className={styles.coupons}>
					{coupons.map(({ img, name, code, id, shop }) => (
						<li key={id} className={styles.item}>
							<Coupon
								img={img}
								name={name}
								code={code}
								shop={shop}
							/>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default CouponsPage;
