import React from "react";
import Counter from "./Counter.jsx";

const Home = () => {
	let counter = 0;
	return (
		<div>
		<Counter seconds={counter} />
		</div>
	);
};

export default Home;