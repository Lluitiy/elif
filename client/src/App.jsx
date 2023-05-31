import { Navigate, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

import Layout from "./layout/Layout";

const ShopsPage = lazy(() => import("./pages/shopsPage/ShopsPage"));
const ShoppingCartPage = lazy(() =>
	import("./pages/shoppingCartPage/ShoppingCartPage")
);
const CouponsPage = lazy(() => import("./pages/couponsPage/CouponsPage"));
const HistoryPage = lazy(() => import("./pages/historyPage/HistoryPage"));

function App() {
	return (
		<Suspense>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route path="shops" index element={<ShopsPage />} />
					<Route path="cart" element={<ShoppingCartPage />} />
					<Route path="coupons" element={<CouponsPage />} />
					<Route path="history" element={<HistoryPage />} />
				</Route>
				<Route path="*" element={<Navigate to="/shops" />} />
			</Routes>
		</Suspense>
	);
}

export default App;
