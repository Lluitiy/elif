import { Navigate, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import { ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllShops } from "./redux/shop/shop-operations";

import ShopsPage from "./pages/shopsPage/ShopsPage";
import Products from "./components/products/Products";

import "react-toastify/dist/ReactToastify.css";
import Layout from "./layout/Layout";

const ShoppingCartPage = lazy(() =>
	import("./pages/shoppingCartPage/ShoppingCartPage")
);
const CouponsPage = lazy(() => import("./pages/couponsPage/CouponsPage"));

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAllShops());
	}, []);
	return (
		<>
			<Suspense>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route path="shops" element={<ShopsPage />}>
							<Route path=":route" element={<Products />} />
						</Route>
						<Route path="cart" element={<ShoppingCartPage />} />
						<Route path="coupons" element={<CouponsPage />} />
					</Route>
					<Route path="*" element={<Navigate to="/shops" />} />
				</Routes>
			</Suspense>

			<ToastContainer
				position="bottom-right"
				autoClose={3000}
				hideProgressBar={false}
				newestOnTop
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="dark"
			/>
		</>
	);
}

export default App;
