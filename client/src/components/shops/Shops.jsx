import { NavLink } from "react-router-dom";
import { shops } from "../../data/shops";
import { isActiveLink } from "../../shared/functions/isActive";

import styles from "./Shops.module.scss";

const Shops = () => {
	return (
		<>
			<ul className={styles.shopList}>
				{shops.map((shop) => (
					<li key={shop.id} className={styles.shopItem}>
						<NavLink
							to={shop.route}
							className={({ isActive }) =>
								isActiveLink(isActive, styles)
							}
						>
							{shop.name}
						</NavLink>
					</li>
				))}
			</ul>
		</>
	);
};

export default Shops;
