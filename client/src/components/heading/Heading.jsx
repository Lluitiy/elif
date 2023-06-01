import styles from "./Heading.module.scss";

const Heading = ({ title }) => {
	return <h1 className={styles.heading}>{title}</h1>;
};

export default Heading;
