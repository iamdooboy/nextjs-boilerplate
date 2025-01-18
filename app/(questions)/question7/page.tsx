const DATA = [
	["Overview of Vercel Security", "https://vercel.com/security"],
	[
		"Shared Responsibility Model",
		"https://vercel.com/docs/security/shared-responsibility",
	],
	["Compliance Measures", "https://vercel.com/docs/security"],
	["Vercel Firewall", "https://vercel.com/docs/security/vercel-firewall"],
	["Vercel Secure Compute", "https://vercel.com/docs/security/secure-compute"],
	["Access Control", "https://vercel.com/docs/security/access-control"],
	["HTTPS/SSL", "https://vercel.com/docs/security/encryption"],
	["Directory Sync", "https://vercel.com/docs/security/directory-sync"],
	["SAML Single Sign-On", "https://vercel.com/docs/security/saml"],
	[
		"Deployment Protection",
		"https://vercel.com/docs/security/deployment-protection",
	],
	[
		"Deployment Retention",
		"https://vercel.com/docs/security/deployment-retention",
	],
	[
		"Protected Git Scopes",
		"https://vercel.com/docs/security/protected-git-scopes",
	],
	["DDoS Mitigation", "https://vercel.com/docs/security/ddos-mitigation"],
	[
		"Secure Backend Access",
		"https://vercel.com/docs/security/secure-backend-access",
	],
	["Audit Logs", "https://vercel.com/docs/observability/audit-log"],
	[
		"Vercel Ship 2024 Keynote Feature: Security",
		"https://www.youtube.com/watch?v=PB-i-IhtgoE",
	],
];

export default async function Page() {
	return (
		<div className="flex flex-col justify-items-center gap-4 font-[family-name:var(--font-geist-sans)]">
			<h1 className="font-bold text-2xl">Question 7</h1>
			<div className="text-gray-300">
				What resources would you want to prepare to make sure that the CISO of a
				newly signed Enterprise customer has everything they need to succeed as
				they migrate to the Enterprise version of the platform? Feel free to use
				documentation from vercel.com, and our YouTube channel to find assets to
				help.
			</div>
			<div className="text-gray-300">
				Your customer is Ty, a CISO for a Fortune 500 firm that just signed on
				for Enterprise with Vercel Secure Compute. They would like to discuss
				the security products Vercel offers as well as Enterprise offering and
				roadmap.
			</div>
			<h1 className="font-bold text-2xl">Answer</h1>
			<div className="text-gray-300">Hi Ty,</div>
			<div className="text-gray-300">
				Welcome to Vercel! My name is Duy Le and I am your dedicated Enterprise
				Success Manager. As part of the Vercel Enterprise plan, I am here to
				assist you to get started and answer any you may have.
			</div>
			<div className="text-gray-300">
				It is our pleasure to partner with you and your team as you migrate to
				the Enterprise version of our platform with Vercel Secure Compute. As a
				Fortune 500 firm, we understand your organization&apos;s complex
				security and performance needs, and we&apos;re committed to ensuring a
				seamless transition and continued success.
			</div>
			<div className="text-gray-300">
				To help you get started, I&apos;ve outlined key resources and next
				steps:
			</div>
			<div className="text-white rounded-full bg-[#0f2e18] w-max px-3 py-1">
				Get started with Vercel
			</div>
			<ul className="space-y-3">
				<li className="text-gray-300 flex items-center">
					<span className="mr-2">-</span>
					<span className="underline">
						<a
							href="https://vercel.com/docs/incremental-migration/migration-guide"
							target="_blank"
							rel="noopener noreferrer"
						>
							Incremental Migration Guide
						</a>
					</span>
				</li>
				<li className="text-gray-300 flex items-center">
					<span className="mr-2">-</span>
					<span className="underline">
						<a
							href="https://vercel.com/docs/production-checklist"
							target="_blank"
							rel="noopener noreferrer"
						>
							Production Checklist
						</a>
					</span>
				</li>
				<li className="text-gray-300 flex items-center">
					<span className="mr-2">-</span>
					<span className="underline">
						<a
							href="https://vercel.com/docs/incremental-migration/technical-guidelines"
							target="_blank"
							rel="noopener noreferrer"
						>
							Technical Guideline for Migration
						</a>
					</span>
				</li>
			</ul>

			<div className="text-white rounded-full bg-[#10233d] w-max px-3 py-1">
				Vercel Security Products
			</div>
			<ul className="space-y-3">
				{DATA.map(([text, href]) => (
					<li key={href} className="text-grey-300 flex items-center">
						<span className="mr-2">-</span>
						<span className="underline">
							<a href={href} target="_blank" rel="noopener noreferrer">
								{text}
							</a>
						</span>
					</li>
				))}
			</ul>
			<div className="text-white rounded-full bg-[#a431f7] w-max px-3 py-1">
				Overview of Enterprise Offering
			</div>

			<div className="text-gray-300">
				<span className="underline">
					<a
						href="https://vercel.com/docs/accounts/plans/enterprise"
						target="_blank"
						rel="noopener noreferrer"
					>
						Vercel Enterprise Plan
					</a>
				</span>
			</div>
			<div className="text-gray-300">
				I&apos;d love to schedule a call with you to dive deeper into Vercel
				Secure Compute, explore the Enterprise roadmap, and answer any questions
				you may have. Please let me know your availability, and I&apos;ll set up
				a meeting at your convenience.
			</div>
			<div className="text-gray-300">I look forward to working with you!</div>
			<div className="text-gray-300">Best regards,</div>
		</div>
	);
}
