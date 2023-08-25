import React from "react";
import Header from "./header";
import Body from "./body";
import Footer from "./footer";

//create your first component
const Home = () => {
	return (
		<div>
			<Header title="React Playground!"/>
			<Body />
			<Footer />
		</div>
	);
};

export default Home;
