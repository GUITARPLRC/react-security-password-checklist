import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { Eye, EyeOff, Cross, Check } from "../components"
import toast, { Toaster } from "react-hot-toast"

const inputClass =
	"mt-5 w-1/2 h-10 px-5 rounded border-2 border-gray-300 focus:outline-none focus:border-indigo-500 text-black"
const iconClass = "absolute mr-10 mb-10 hover:cursor-pointer"

export default function SecondVersion() {
	const [password, setPassword] = useState("")
	const [confirmPassword, setConfirmPassword] = useState("")
	const [firstType, setFirstType] = useState("password")
	const [secondType, setSecondType] = useState("password")
	const [hasMatch, setHasMatch] = useState(false)
	const [hasLength, setHasLength] = useState(false)
	const [hasUppercase, setHasUppercase] = useState(false)
	const [hasLowercase, setHasLowercase] = useState(false)
	const [hasNumber, setHasNumber] = useState(false)
	const [hasSpecial, setHasSpecial] = useState(false)
	const [canSubmit, setCanSubmit] = useState(true)

	useEffect(() => {
		/**
		 * Checks if password is valid
		 */
		const handlePasswordCheck = () => {
			if (!password || !confirmPassword || password !== confirmPassword) {
				// check if passwords match
				setHasMatch(false)
			} else {
				setHasMatch(true)
			}
			if (password.length < 6) {
				// check if min length fof 6
				setHasLength(false)
			} else {
				setHasLength(true)
			}
			if (!password.match(/(?=.*[A-Z])/)) {
				// check if 1 uppercase
				setHasUppercase(false)
			} else {
				setHasUppercase(true)
			}
			if (!password.match(/(?=.*[a-z])/)) {
				// check if 1 lowercase
				setHasLowercase(false)
			} else {
				setHasLowercase(true)
			}
			if (!password.match(/(?=.*\d)/)) {
				// check if 1 number
				setHasNumber(false)
			} else {
				setHasNumber(true)
			}
			if (!password.match(/[!@#$%^&*()_\-+={[}\]|:;"'<,>.]/)) {
				// check if 1 special character (!@#$%^&*()_-+={[}]|:;"'<,>.)
				setHasSpecial(false)
			} else {
				setHasSpecial(true)
			}
		}
		handlePasswordCheck()

		const newCanSubmitValue =
			password &&
			confirmPassword &&
			hasMatch &&
			hasLength &&
			hasUppercase &&
			hasLowercase &&
			hasNumber &&
			hasSpecial
				? true
				: false
		setCanSubmit(newCanSubmitValue)
	}, [
		password,
		confirmPassword,
		hasLength,
		hasMatch,
		hasNumber,
		hasSpecial,
		hasUppercase,
		hasLowercase,
	])

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

	/**
	 * Checks if password is valid
	 */
	const handleSubmit = () => {
		toast.success("Password is valid")
	}

	return (
		<>
			<p>Version Two</p>
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
			<p className="flex align-center">{hasMatch ? <Check /> : <Cross />}Passwords must match</p>
			<p className="flex align-center">
				{hasLength ? <Check /> : <Cross />}Passwords must be six characters
			</p>
			<p className="flex align-center">
				{hasUppercase ? <Check /> : <Cross />}Passwords must include an Uppercase character
			</p>
			<p className="flex align-center">
				{hasLowercase ? <Check /> : <Cross />}Passwords must include a Lowercase character
			</p>
			<p className="flex align-center">
				{hasNumber ? <Check /> : <Cross />}Passwords must include a Number
			</p>
			<p className="flex align-center">
				{hasSpecial ? <Check /> : <Cross />}
				{`Passwords must include a Special Character !@#$%^&*()_-+={[}]|:;"'<,>.`}
			</p>
			<button
				className="mt-5 bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
				onClick={handleSubmit}
				disabled={!canSubmit}
			>
				Submit
			</button>
			<Toaster />
		</>
	)
}
