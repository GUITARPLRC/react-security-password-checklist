import { Dispatch, SetStateAction, useState } from "react"
import { Inter } from "next/font/google"
import { Eye, EyeOff } from "../components"
import toast, { Toaster } from "react-hot-toast"

const inter = Inter({ subsets: ["latin"] })

const inputClass =
	"mt-5 w-1/2 h-10 px-5 rounded border-2 border-gray-300 focus:outline-none focus:border-indigo-500 text-black"
const iconClass = "absolute mr-10 mb-10 hover:cursor-pointer"

export default function Home() {
	const [password, setPassword] = useState("")
	const [confirmPassword, setConfirmPassword] = useState("")
	const [message, setMessage] = useState("")
	const [firstType, setFirstType] = useState("password")
	const [secondType, setSecondType] = useState("password")

	/**
	 * Checks if password is valid
	 */
	const handleSubmit = () => {
		if (!password || !confirmPassword || password !== confirmPassword) {
			// check if passwords match
			return toast.error("Passwords do not match")
		} else if (password.length < 6) {
			// check if min length fof 6
			return toast.error("Password must be at least 6 characters long")
		} else if (!password.match(/(?=.*[A-Z])/)) {
			// check if 1 uppercase
			return toast.error("Password must contain at least 1 uppercase letter")
		} else if (!password.match(/(?=.*[a-z])/)) {
			// check if 1 lowercase
			return toast.error("Password must contain at least 1 lowercase letter")
		} else if (!password.match(/(?=.*\d)/)) {
			// check if 1 number
			return toast.error("Password must contain at least 1 number")
		} else if (!password.match(/[!@#$%^&*()_\-+={[}\]|:;"'<,>.]/)) {
			// check if 1 special character (!@#$%^&*()_-+={[}]|:;"'<,>.)
			return toast.error(
				`Password must contain at least 1 special character for example: !@#$%^&*()_-+={[}]|:;"'<,>.`,
			)
		}

		toast.success("Password is valid")
	}

	/**
	 * Handles toggling the password input type
	 * @param options.value string of the type of input
	 * @param options.method method to set the type of input
	 */
	const handleSeeToggle = ({
		value,
		method,
	}: {
		value: string
		method: Dispatch<SetStateAction<string>>
	}) => {
		if (value === "password") {
			method("text")
		} else {
			method("password")
		}
	}

	return (
		<main className={`min-h-screen p-20 ${inter.className}`}>
			<div className="flex flex-col">
				<input
					type={firstType}
					className={`${inputClass}`}
					value={password}
					onChange={(e) => setPassword(e.currentTarget.value)}
				/>
				<span
					className="flex justify-around items-center"
					onClick={() => handleSeeToggle({ value: firstType, method: setFirstType })}
				>
					{firstType === "password" ? (
						<Eye classNames={iconClass} size={25} />
					) : (
						<EyeOff classNames={iconClass} size={25} />
					)}
				</span>
				<input
					type={secondType}
					className={`${inputClass}`}
					value={confirmPassword}
					onChange={(e) => setConfirmPassword(e.currentTarget.value)}
				/>
				<span
					className="flex justify-around items-center"
					onClick={() => handleSeeToggle({ value: secondType, method: setSecondType })}
				>
					{secondType === "password" ? (
						<Eye classNames={iconClass} size={25} />
					) : (
						<EyeOff classNames={iconClass} size={25} />
					)}
				</span>
			</div>
			<p>
				Passwords must include an uppercase, lowercase, number, symbol and be 6 characters long.
			</p>
			<button
				className="mt-5 bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
				onClick={handleSubmit}
			>
				Submit
			</button>
			<Toaster />
		</main>
	)
}
