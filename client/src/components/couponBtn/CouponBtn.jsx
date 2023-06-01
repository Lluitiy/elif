import { copyText } from "../../shared/functions/copyToClipboard";

import styles from "./CouponBtn.module.scss";

const CouponBtn = ({ reference }) => {
	return (
		<button
			className={styles.btn}
			type="button"
			onClick={() => copyText(reference)}
		>
			Copy
		</button>
	);
};

export default CouponBtn;
