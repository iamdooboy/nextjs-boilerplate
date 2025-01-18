import Link from "next/link";

const questions = Array.from({ length: 8 }, (_, i) => i + 1);

export default function Home() {
	return (
		<div className="min-h-screen py-12 px-6 max-w-2xl w-3/4">
			<main className="mx-auto">
				<div className="space-y-4">
					{questions.map((id) => (
						<Link
							key={id}
							href={`/question${id}`}
							className="block bg-slate-600 rounded-lg shadow-md p-6 transition-all hover:shadow-lg hover:scale-105"
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
