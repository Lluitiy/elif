import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { allShops } from "../../redux/shop/shop-selectors";
import { isActiveLink } from "../../shared/functions/isActive";

import styles from "./Shops.module.scss";

const Shops = () => {
	const shops = useSelector(allShops);
	
	return (
		<>
			<ul className={styles.shopList}>
				{shops.map((shop) => (
					<li key={shop._id} className={styles.shopItem}>
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
