const Eye = ({ classNames, size = 24 }: { classNames: string; size: number }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="none"
			stroke="#000"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			className={classNames}
		>
			<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
			<circle cx="12" cy="12" r="3" />
		</svg>
	)
}

export default Eye
