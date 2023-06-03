import { NavLink } from "react-router-dom";
import { navigation } from "../../data/navigation";
import { isActiveLink } from "../../shared/functions/isActive";

import styles from "./Header.module.scss";

const Header = () => {
	return (
		<div className={styles.header}>
			<div className="container">
				<nav>
					<ul className={styles.linkList}>
						{navigation.map((el) => (
							<li key={el.id} className={styles.linkWrapper}>
								<NavLink
									to={el.link}
									className={({ isActive }) =>
										isActiveLink(isActive, styles)
									}
								>
									<p className={styles.linkText}>{el.name}</p>
								</NavLink>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</div>
	);
};

export default Header;
