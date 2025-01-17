




export default async function Page() {
	return (
		<div className="flex flex-col justify-items-center min-h-screen max-w-3xl p-20 gap-4 sm:p-20 font-[family-name:var(--font-geist-sans)]">
			<h1 className="font-bold text-2xl">Question 8</h1>
			<div className="text-gray-300">
				How could we improve or alter this familiarization exercise?
			</div>

			<h1 className="font-bold text-2xl">Answer</h1>
			<div className="text-gray-300">
				Provide an example response or format template to clarify how to
				structure each response effectively.
			</div>
			<div className="text-gray-300">
				For instance, I was confused by the 4th bullet under &quot;Things to Note&quot;:
				“...When answering, feel free to list any relevant documentation you
				found or details about your decision-making process.”
			</div>
			<div className="text-gray-300">
				I wasn’t sure whether I should list all sources at the end of my
				responses or incorporate them into my response as I go.
			</div>
			<div className="text-gray-300">
				Clarify the instruction “Create a different page for each response.” For
				example, should I create pages like /question1, /question2, etc., or use
				Next.js dynamic routing and structure them as /question/1, /question/2,
				etc.?
			</div>
			<div className="text-gray-300">
				Both approaches achieve the same result, but I wanted to ensure I
				understand what&apos;s allowed to avoid any confusion.
			</div>
		</div>
	);
}
