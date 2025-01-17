




export default async function Page() {
	return (
		<div className="flex flex-col justify-items-center min-h-screen max-w-3xl p-20 gap-4 sm:p-20 font-[family-name:var(--font-geist-sans)]">
			<h1 className="font-bold text-2xl">Question 2</h1>
			<div className="text-gray-300">
				A customer has reached out asking, “When should I choose to use Edge
				Functions, Serverless Functions, or Edge Middleware with Vercel?” Please
				write a reply to the customer.
			</div>
			<div className="text-gray-300">
				Your Enterprise customer is Trevor (they/them), a frontend developer at
				a winery using Next.js and Statsig and they are primarily interested in
				being able to use the Vercel platform with Next.js to do personalization
				when it comes to what they are able to offer in their online shop based
				on geolocation (some places don’t allow fo shipping of alcohol via
				delivery).
			</div>
			<h1 className="font-bold text-2xl">Answer</h1>
			<div className="text-gray-300">Hi Trevor,</div>
			<div className="text-gray-300">
				Thank you for reaching out about Vercel&apos;s compute options. Let me break
				down each option and help you decide which might suit your use case
				best.
			</div>
			<div className="text-gray-300">
				- Edge Functions - Edge Functions are ideal for ultra-low latency
				responses, lightweight and fast computations, global distribution of
				your function, geolocation-based content, feature flags, and
				personalization. Learn more about Edge function
				https://vercel.com/docs/infrastructure/compute#edge-functions
			</div>
			<div className="text-gray-300">
				- Serverless Functions - Serverless Functions are better suited for
				tasks such as intensive and complex computations, direct database
				interactions, longer-running processes, access to Node.js ecosystem
				libraries, payment processing, webhook handlers, and machine learning
				inference. Learn more about Serverless function
				https://vercel.com/docs/infrastructure/compute#serverless-functions
			</div>
			<div className="text-gray-300">
				- Edge Middleware - Edge Middleware is designed for lightweight
				operations before a request is processed such as request modification,
				authentication checks, perform redirects, set custom headers, language
				detection, A/B testing, and bot identification. Learn more about Edge
				Middleware
				https://vercel.com/docs/infrastructure/compute#edge-middleware
			</div>
			<div className="text-gray-300">
				Given your specific needs, Edge Functions are likely your best primary
				solution here. They&apos;re ideal for your geolocation-based personalization
				because they run closest to your users, providing the fastest possible
				response times. They can validate your visitor&apos;s location and display
				available products or restrict certain items based on their geolocation.
			</div>
			<div className="text-gray-300">
				I hope this helps. Please let me know if you&apos;d like me to elaborate on
				any of these function types or if I can assist with anything else!
			</div>
			<div className="text-gray-300">Best regards,</div>
		</div>
	);
}
