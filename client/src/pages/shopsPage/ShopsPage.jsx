import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import Heading from "../../components/heading/Heading";
import Shops from "../../components/shops/Shops";

import styles from "./ShopsPage.module.scss";
import { getAllShops } from "../../redux/shop/shop-operations";

const ShopsPage = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAllShops());
	}, [dispatch]);

	return (
		<div className="section">
			<div className="container">
				<div className={styles.wrapper}>
					<div className={styles.aside}>
						<Heading title="Shops:" />
						{/* shops list */}
						<Shops />
					</div>

					{/* products */}
					<div className={styles.products}>
						<Outlet />
					</div>
				</div>
			</div>
		</div>
	);
};

export default ShopsPage;
