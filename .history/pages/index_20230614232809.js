import Head from "next/head"
import styles from "../styles/Home.module.css"
import { Toolbar } from "../components/toolbar"

export default function Home() {
	return (
		<div className="page-container">
			<Toolbar />
			<div className={styles.main}>
				<h1>Thinklio</h1>
				<h3>Your one stop shop for the </h3>
				<h3>the lastest news artiles</h3>
			</div>
		</div>
	)
}
