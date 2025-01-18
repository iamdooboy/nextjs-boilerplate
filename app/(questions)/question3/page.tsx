export default async function Page() {
	return (
		<div className="flex flex-col justify-items-center  gap-4 font-[family-name:var(--font-geist-sans)]">
			<h1 className="font-bold text-2xl">Question 3</h1>
			<div className="text-gray-300">
				Through use of a monitoring dashboard, you notice that an Enterprise
				customer has reduced the number of builds and their usage has gone down
				by about half quarter over quarter. Please write an email to the
				champion and executive sponsor of the account to re-engage and start to
				perform some discovery.
			</div>
			<div className="text-gray-300">
				Your customer is an SMB with yearly revenue about $5.5 million, 20
				employees total with one developer. They have a $22K ARR Vercel
				subscription. The executive sponsor is the VP of marketing and Vercel
				hosts their marketing pages. They have a reverse proxy in front of
				Vercel (Cloudflare) and history shows some errors in their builds. The
				manager&apos;s name is Alex (she/her), Engineering Manager The champion,
				Tanner – the lead on the project – it is found out, has left the
				company.
			</div>
			<h1 className="font-bold text-2xl">Answer</h1>
			<div className="text-gray-300">cc VP of Marketing</div>
			<div className="text-gray-300">Hi Alex,</div>
			<div className="text-gray-300">
				I hope this email finds you well. I wanted to reach out regarding your
				Vercel subscription and to see how we can better support your team
				moving forward.
			</div>
			<div className="text-gray-300">
				We&apos;ve noticed a significant decrease in your builds and overall
				activity quarter-over-quarter. Given how important your marketing pages
				are, I wanted to check in to understand the factors contributing to this
				change and see how we can best support you.
			</div>
			<div className="text-gray-300">
				I recently learned that Tanner, the lead on your project, is no longer
				with the company. I want to ensure that his departure from your company
				is not causing any challenges for your team.
			</div>
			<div className="text-gray-300">
				While reviewing your account, I also noticed there have been some errors
				in recent builds which may be related to the reverse proxy setup with
				Cloudflare.
			</div>
			<div className="text-gray-300">
				I&apos;d love to schedule some time with you to review your current
				deployment workflow, address any technical challenges, and explore ways
				to help you get the most out of Vercel. Let me know your availability, I
				look forward to connecting with you!
			</div>
			<div className="text-gray-300">
				I look forward to connecting with you!
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
