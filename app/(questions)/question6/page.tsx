




export default async function Page() {
	return (
		<div className="flex flex-col justify-items-center min-h-screen max-w-3xl p-20 gap-4 sm:p-20 font-[family-name:var(--font-geist-sans)]">
			<h1 className="font-bold text-2xl">Question 6</h1>
			<div className="text-gray-300">
				An Enterprise customer, new to Next.js and Vercel, asks about a high
				usage bill regarding fast origin transfer and fast data transfer. They
				have two questions:
			</div>
			<div className="text-gray-300">
				Why didn't my MIUs cover this bill? I didn't use all my MIUs la
				month...so why didn't those roll over?
			</div>
			<div className="text-gray-300">
				What would be the best way to help mitigate this so we don't se these
				overage bills in the future?
			</div>
			<div className="text-gray-300">
				Feel free to use AI to help supplement your answer, but only use AI to
				help guide your answer and put it into your own words. Help the customer
				by providing Vercel or Next.js resources if necessary.
			</div>
			<div className="text-gray-300">
				Your Enterprise customer is an SMB customer, under 50 employees, with an
				ARR of $18,500. Their last overage bill was $1,800 and consisted
				primarily of fast data transfer and function duration.
			</div>
			<div className="text-gray-300">
				MIU == Managed Infrastructure Unit and is a monthly entitlement for
				usage purchased by a customer that does not roll over every month.
			</div>
			<h1 className="font-bold text-2xl">Answer</h1>
			<div className="text-gray-300">Hi enterprise customer,</div>
			<div className="text-gray-300">
				I'd be delighted to answer your questions. Your MIUs didn't cover this
				month's billing cycle because MIUs by design do not roll over.This means
				that any unused MIUs from the previous month will expire at the end of
				the billing period. Your overage charges were due to high fast origin
				transfer and fast data transfer usage that exceeded your allocated MIUs
				for the month.
			</div>
			<div className="text-gray-300">
				Here are some strategies you can use to optimize your data to mitigate
				this in the future:
			</div>
			<div className="text-gray-300">Optimizing Fast Origin Transfer</div>
			<div className="text-gray-300">
				- Reduce the size of the response by ensuring your Function only respond
				with relevant data, excluding unnecessary API fields
			</div>
			<div className="text-gray-300">
				- Add caching headers to the function response. Learn more about caching
				https://vercel.com/docs/edge-network/caching
			</div>
			<div className="text-gray-300">
				- Ensure your Function supports If-Modified-Since or Etag to prevent
				duplicate data transmission
			</div>
			<div className="text-gray-300">
				- If using Middleware, consider setting a matcher to restrict what
				requests run middleware to prevent fast origin transfer usage from
				accruing twice. Learn more about match
				https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
			</div>
			<div className="text-gray-300">Optimizing Fast Data Transfer</div>
			<div className="text-gray-300">
				- Use Vercel's Image Optimization to serve optimized media tailored to
				the requesting device. Learn more about Image Optimization
				https://vercel.com/docs/image-optimization
			</div>
			<div className="text-gray-300">
				- Analyze and reduce the size of your bundles to reduce data transfer
				costs. For Next.js, check out this guide
				https://nextjs.org/docs/app/building-your-application/optimizing/bundle-analyzer
			</div>
			<div className="text-gray-300">
				- Use the Monitoring tab to further analyze data transfer of your
				projects.
			</div>
			<div className="text-gray-300">Setting Up Notifications</div>
			<div className="text-gray-300">
				You can also configure notifications for MIUs from the My Notification
				tab in the Settings section of the dashboard. This will notify you via
				email and in-app as will approach certain thresholds of your MIUs
				commitment.
			</div>
			<div className="text-gray-300">
				- To enable credit balance notifications, check the checkbox named
				Managed Infrastructure Units under Usage section
			</div>
			<div className="text-gray-300">
				- Configure notification increments for thresholds such as 50%, 75%, and
				100% of your MIU commitment by:
			</div>
			<div className="text-gray-300">- Select the … icon to open a modal</div>
			<div className="text-gray-300">
				- From here you can set up notifications for when you have reached 50%,
				75%, and 100% of your MIU commitment
			</div>
			<div className="text-gray-300">
				I hope these suggestions help optimize your usage and reduce future
				overage charges. Should you have any further questions, feel free to
				reach out.
			</div>
			<div className="text-gray-300">Best regards,</div>
		</div>
	);
}
