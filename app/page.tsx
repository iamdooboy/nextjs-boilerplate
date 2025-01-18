import Link from "next/link";

const questions = Array.from({ length: 8 }, (_, i) => i + 1);

export default function Home() {
	return (
		<div className="min-h-screen flex flex-col justify-center items-center max-w-2xl w-full">
			<main className="mx-auto w-3/4">
				<div className="space-y-4">
					{questions.map((id) => (
						<Link
							key={id}
							href={`/question${id}`}
							className="block bg-[#070707] border-[#262626] border rounded-lg shadow-md p-6 transition-all hover:bg-neutral-900"
						>
							<div className="flex items-center justify-between">
								<span className="text-lg font-semibold text-gray-300">
									Question {id}
								</span>
								<span className="text-gray-300">&rarr;</span>
							</div>
						</Link>
					))}
				</div>
			</main>
		</div>
	);
}
