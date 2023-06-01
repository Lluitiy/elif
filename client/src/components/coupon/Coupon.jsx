import { useRef } from "react";

import CouponBtn from "../couponBtn/CouponBtn";

import style from "./Coupon.module.scss";

const Coupon = ({ img, name, code }) => {
	const ref = useRef(null);

	return (
		<div className={style.coupon}>
			<img
				src={img}
				alt={`Picture of the ${name} coupon`}
				className={style.img}
				width={290}
				height={180}
			/>
			<div className={style.meta}>
				<p className={style.name}>{name}</p>
				<p className={style.code} ref={ref}>
					{"\u0028"} {code} {"\u0029"}
				</p>
			</div>
			<CouponBtn reference={ref} />
		</div>
	);
};

export default Coupon;
