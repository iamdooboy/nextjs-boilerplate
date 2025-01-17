export default async function Page() {
	return (
		<div className="flex flex-col justify-items-center  gap-4 font-[family-name:var(--font-geist-sans)]">
			<h1 className="font-bold text-2xl">Question 1</h1>
			<div className="text-gray-300">
				An Enterprise customer has come to you to ask about the difference
				between React and Next.js and what the benefits are of using Next.js for
				her team. Please write a response to the customer. a. Your customer is
				Christy (she/her), a project manager for the marketing department of a
				wearable tech company – in charge of making sure the marketing pages
				meet their core web vitals, SEO best practices, and conversion rate
				goals.
			</div>
			<div className="text-gray-300">
				Your customer is Christy (she/her), a project manager for the marketing
				department of a wearable tech company – in charge of making sure the
				marketing pages meet their core web vitals, SEO best practices, and
				conversion rate goals.
			</div>
			<h1 className="font-bold text-2xl">Answer</h1>
			<div className="text-gray-300">Hi Christy,</div>
			<div className="text-gray-300">
				Thank you for reaching out with your question! I&apos;d be happy to
				explain the difference between React and Next.js, as well as the
				benefits of using Next.js.
			</div>
			<div className="text-gray-300">
				React is a JavaScript library used for building user interfaces. While
				powerful, React lacks a lot of features such as server side rendering,
				routing, image optimization, tools for optimizing performance and SEO.
			</div>
			<div className="text-gray-300">
				This is where Next.js comes in. Next.js is built on top of React and
				includes a suite of features designed to simplify development while
				improving core web vitals, SEO, and user experience.
			</div>
			<div className="text-gray-300">
				- Server-Side Rendering (SSR) - This feature pre-renders pages on the
				server, resulting in faster initial page loads and improved search
				engine rankings. Learn more about&nbsp;
				<span className="underline">
					<a
						href="https://vercel.com/resources/how-vercel-improves-your-websites-search-engine-ranking"
						target="_blank"
						rel="noopener noreferrer"
					>
						Server-Side Rendering
					</a>
				</span>
			</div>
			<div className="text-gray-300">
				- Automatic Image Optimization - Next.js automatically optimizes images,
				delivering them in the best format, size, and resolution to improve page
				load times. Learn more about&nbsp;
				<span className="underline">
					<a
						href="https://vercel.com/docs/image-optimization"
						target="_blank"
						rel="noopener noreferrer"
					>
						Image Optimization
					</a>
				</span>
			</div>
			<div className="text-gray-300">
				- Built-in SEO Tools - Next.js makes it easy to implement dynamic meta
				tags, structured data, and sitemap generation. These tools directly
				support better visibility in search engine results. Learn more
				about&nbsp;
				<span className="underline">
					<a
						href="https://vercel.com/blog/nextjs-seo-playbook"
						target="_blank"
						rel="noopener noreferrer"
					>
						SEO
					</a>
				</span>
			</div>
			<div className="text-gray-300">
				- Performance Enhancements - Next.js helps optimize Core Web Vitals like
				Largest Contentful Paint (LCP), Cumulative Layout Shift (CLS), and First
				Input Delay (FID), directly impacting your site&apos;s performance, user
				experience, and SEO. Learn more about&nbsp;
				<span className="underline">
					<a
						href="https://vercel.com/guides/optimizing-core-web-vitals-in-2024"
						target="_blank"
						rel="noopener noreferrer"
					>
						Core Web Vitals
					</a>
				</span>
			</div>
			<div className="text-gray-300">
				Based on what you’re looking to achieve, Next.js is a fantastic fit for
				your marketing efforts. By adopting Next.js, your team can build faster,
				more SEO-friendly pages that hit all the right performance benchmarks.
			</div>
			<div className="text-gray-300">
				Please let me know if you&apos;d like me to dive deeper into any
				specific feature or if I can assist with anything else!
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
