const Icon = ({ src, alt, className }) => {
	return (
		<img
			src={"/icons/" + src}
			alt={alt}
			className={className}
		/>
	)
}

export default Icon;