import { Navigate, Route, Routes } from "react-router-dom";
import { lazy, Suspense, useState } from "react";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import Layout from "./layout/Layout";

const ShopsPage = lazy(() => import("./pages/shopsPage/ShopsPage"));
const Products = lazy(() => import("./components/products/Products"));
const ShoppingCartPage = lazy(() =>
	import("./pages/shoppingCartPage/ShoppingCartPage")
);
const CouponsPage = lazy(() => import("./pages/couponsPage/CouponsPage"));
const HistoryPage = lazy(() => import("./pages/historyPage/HistoryPage"));

function App() {
	const [cart, setCart] = useState({ shop: "", productIds: [] });

	return (
		<>
			<Suspense>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route path="shops" element={<ShopsPage />}>
							<Route
								path=":route"
								element={<Products setCart={setCart} />}
							/>
						</Route>
						<Route
							path="cart"
							element={
								<ShoppingCartPage
									setCart={setCart}
									cart={cart}
								/>
							}
						/>
						<Route path="coupons" element={<CouponsPage />} />
						<Route path="history" element={<HistoryPage />} />
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
