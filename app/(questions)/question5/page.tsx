export default async function Page() {
	return (
		<div className="flex flex-col justify-items-center  gap-4 font-[family-name:var(--font-geist-sans)]">
			<h1 className="font-bold text-2xl">Question 5</h1>
			<div className="text-gray-300">
				A Pro customer who typically spends $900 monthly on Vercel has
				experienced a sudden increase to $2,100 for their next billing period
				due to increased data transfer costs. Their main website also shows poor
				Core Web Vitals performance, specifically a failed Largest Contentful
				Paint score.
			</div>
			<div className="text-gray-300">
				Be proactive in reaching out to this customer about their increased
				usage and costs. Engage them in a conversation that explores the
				situation and leads to mutually beneficial solutions.
			</div>
			<div className="text-gray-300">
				Your champion is Travis (he/him) and he is the lead developer for a
				mobile game company, $14 million in revenue, 100 employees/10 Vercel
				team members. They are NOT an Enterprise customer yet, but have spent on
				average $900 per month in the last three months on Vercel. They are
				headquartered in Singapore.
			</div>
			<h1 className="font-bold text-2xl">Answer</h1>
			<div className="text-gray-300">Hi Travis,</div>
			<div className="text-gray-300">
				I hope this message finds you well! I wanted to reach out regarding your
				upcoming billing period with Vercel. I noticed that your typical monthly
				spend of around $900 has increased to $2,100 due to increased data
				transfer costs.
			</div>
			<div className="text-gray-300">
				This might be a sign of some great growth for your team, but I
				completely understand how sudden changes like this can raise concerns,
				especially when it impacts your budget. I want to make sure you have the
				support you need.
			</div>
			<div className="text-gray-300">
				While reviewing your account, I also noticed some concerns with your
				website&apos;s Core Web Vitals. Your Largest Contentful Paint (LCP)
				score isn’t quite where it needs to be. Addressing this can improve the
				user experience for your mobile game audience. You can learn more
				about&nbsp;
				<span className="underline">
					<a
						href="https://vercel.com/docs/speed-insights/metrics#largest-contentful-paint-lcp"
						target="_blank"
						rel="noopener noreferrer"
					>
						LCP
					</a>
				</span>
			</div>
			<div className="text-gray-300">
				I&apos;d love the chance to discuss some strategies to optimize your
				usage while improving your site&apos;s performance.
			</div>
			<div className="text-gray-300">I look forward to hearing from you!</div>
			<div className="text-gray-300">Best regards,</div>
		</div>
	);
}
