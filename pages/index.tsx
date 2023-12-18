import { Inter } from "next/font/google"
import FirstVersion from "@/components/FirstVersion"
import SecondVersion from "@/components/SecondVersion"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
	return (
		<main className={`min-h-screen p-20 ${inter.className}`}>
			<FirstVersion />
			<hr className="mt-5 border-b-2 border-black" />
			<SecondVersion />
		</main>
	)
}
