const Head = () => {
	return (
		<>
			<title>Chess baby!</title>
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<meta
				name="description"
				content="Fun little chess board visualization"
			/>
			<link
				rel="icon"
				href="/assets/images/pieces/wn.png"
				media="(prefers-color-scheme: dark)"
			/>
			<link
				rel="icon"
				href="/assets/images/pieces/bn.png"
				media="(prefers-color-scheme: light)"
			/>
		</>
	);
};

export default Head;
