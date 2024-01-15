const Icon = ({ src, alt }) => {
	return (
		<img
			src={"/icons/" + src}
			alt={alt}
		/>
	)
}

export default Icon;