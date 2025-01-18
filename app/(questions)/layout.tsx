import { Nav } from "@/components/nav";

export default function QuestionLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className='space-y-4 max-w-2xl'>
			<Nav />
			{children}
		</div>
	);
}
