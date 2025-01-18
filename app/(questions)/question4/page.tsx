export default async function Page() {
	return (
		<div className="flex flex-col justify-items-center   gap-4  font-[family-name:var(--font-geist-sans)]">
			<h1 className="font-bold text-2xl">Question 4</h1>
			<div className="text-gray-300">
				An Enterprise customer who has been sold Vercel through a reseller
				called Sitecore has reached out to the team to ask about the product.
				Can you give a brief 2-5 sentence introduction to Vercel to showcase
				what Vercel does?
			</div>
			<div className="text-gray-300">
				Your new Enterprise customer is Acme University’s Marketing Department
				and their lead point person is called Clara (she/her). They have no web
				development or technical background and don’ know what Vercel is.
			</div>
			<h1 className="font-bold text-2xl">Answer</h1>
			<div className="text-gray-300">Hi Clara,</div>
			<div className="text-gray-300">
				I hope this email finds you well! I wanted to reach out and introduce
				you to Vercel. Vercel is a platform that helps teams build and launch
				modern websites and applications quickly and efficiently. It takes care
				of all the technical details, so your developers can focus on creating
				great experiences for your users. With Vercel, your website is fast,
				secure, and protected from threats like bots and online attacks.
			</div>
			<div className="text-gray-300">
				If you&apos;d like to learn more about Vercel and what we offer, here
				are some helpful resources:
			</div>
			<ul className="space-y-2">
				<li className="text-gray-300">
					<span className="underline">
						<a
							href="https://vercel.com"
							target="_blank"
							rel="noopener noreferrer"
						>
							Vercel Homepage
						</a>
					</span>
				</li>
				<li className="text-gray-300">
					<span className="underline">
						<a
							href="https://vercel.com/docs"
							target="_blank"
							rel="noopener noreferrer"
						>
							Vercel Documentations
						</a>
					</span>
				</li>
				<li className="text-gray-300">
					<span className="underline">
						<a
							href="https://vercel.com/docs/getting-started-with-vercel"
							target="_blank"
							rel="noopener noreferrer"
						>
							Get started with Vercel
						</a>
					</span>
				</li>
				<li className="text-gray-300">
					<span className="underline">
						<a
							href="https://vercel.com/docs/frameworks/more-frameworks"
							target="_blank"
							rel="noopener noreferrer"
						>
							Supported Frameworks on Vercel
						</a>
					</span>
				</li>
				<li className="text-gray-300">
					<span className="underline">
						<a
							href="https://vercel.com/security"
							target="_blank"
							rel="noopener noreferrer"
						>
							Vercel Security
						</a>
					</span>
				</li>
			</ul>
			<div className="text-gray-300">
				If you have any questions or need more information, don&apos;t hesitate
				to reach out!
			</div>
			<div className="text-gray-300">
				<span className="underline">
					<a
						href="https://cal.com/duyle/30min"
						target="_blank"
						rel="noopener noreferrer"
					>
						Click here to schedule a call
					</a>
				</span>
			</div>
			<div className="text-gray-300">Best regards,</div>
		</div>
	);
}
