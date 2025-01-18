"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Home = (props: { className?: string }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<title>Home</title>
		<path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
		<path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
	</svg>
);

const navItems = [
	{ href: "/", label: "Home", icon: Home },
	{ href: "/question1", label: "Q1" },
	{ href: "/question2", label: "Q2" },
	{ href: "/question3", label: "Q3" },
	{ href: "/question4", label: "Q4" },
	{ href: "/question5", label: "Q5" },
	{ href: "/question6", label: "Q6" },
	{ href: "/question7", label: "Q7" },
	{ href: "/question8", label: "Q8" },
];

export const Nav = () => {
	const pathname = usePathname();

	return (
		<header className="bg-[#0a0a0a] border-[#262626] border-b p-4 sticky top-0">
			<ul className="flex flex-wrap justify-between gap-2 sm:gap-4">
				{navItems.map((item) => (
					<li key={item.href}>
						<Link
							href={item.href}
							className={`flex items-center px-3 py-2 rounded-md text-sm font-medium
                ${
									pathname === item.href
										? "bg-black border border-[#262626] text-white"
										: "text-gray-400 hover:text-white"
								}`}
						>
							{item.icon && <item.icon className="w-4 h-4 mr-2 text-white" />}
							<span className="font-medium">{item.label}</span>
						</Link>
					</li>
				))}
			</ul>
		</header>
	);
};
