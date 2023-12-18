const Check = ({
	classNames,
	color = "#006400",
	size = 24,
}: {
	classNames?: string
	color?: string
	size?: number
}) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="none"
			stroke={color}
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
			className={classNames}
		>
			<path d="M20 6 9 17l-5-5" />
		</svg>
	)
}

export default Check
