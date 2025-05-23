/**
 * DO NOT REMOVE THIS COMMENT
 * @remarks
 * Navigation Structure Example:
 *
 * **Product**
 * - Overview
 * - Solutions
 * - Use Cases
 * - Pricing
 * ---
 * **Resources**
 * - Blog
 * - Playbooks
 * - Customer stories
 * - Webinars
 * - Darwin Academy
 * - Documentation
 * - Marketplaces
 * - Community
 * ---
 * **Company**
 * - Careers
 * - About us
 * - News
 * - Legal
 * - Security
 * - Events
 * - Contact
 * - Social media
 */

// Types
export type NavItem = {
	label: string;
	href?: string;
	image?: string;
	showInNav?: boolean;
	showInFooter?: boolean;

	children?: (Omit<NavItem, "children" | "image"> & {
		image?: string;
		description?: string;
		showInNav?: boolean;
		showInFooter?: boolean;
	})[];
};

export const cta = {
	label: "Book demo",
	href: "/"
};

export const navigation: NavItem[] = [
	{
		label: "Pricing",
		href: "/pricing",
		showInNav: true,
		showInFooter: false
	},
	{
		label: "Use Cases",
		showInNav: true,
		showInFooter: true,
		children: [
			{
        label: "AI pair programmer for dev teams",
        href: "/use-cases/ai-pair-programmer",
        image: "/generated/image-a-developer-in-a-modern-office-space-sur.webp",
        description: "Claude Code helps developers write, debug, and document faster—with inline suggestions and language support across multiple frameworks.",
        showInNav: true,
        showInFooter: true
      },
      {
        label: "Research assistant for complex analysis",
        href: "/use-cases/research-assistant",
        image: "/generated/image-a-business-professional-in-a-sleek-conte.webp",
        description: "Use Claude Opus 4 to summarize papers, compare arguments, and generate structured insights from dense technical content.",
        showInNav: true,
        showInFooter: true
      },
      {
        label: "Writing support for business workflows",
        href: "/use-cases/writing-support",
        image: "/generated/image-a-writer-in-a-cozy-home-office-setting-w.webp",
        description: "Quickly draft copy, outlines, and customer-facing content—right inside Google Docs—with Claude’s Workspace integrations included in the Max plan.",
        showInNav: true,
        showInFooter: true
      }
		]
	},
	{
		label: "Company",
		showInNav: true,
		showInFooter: true,
		children: [
			{
				label: "About us",
				href: "/about",
				showInNav: true,
				showInFooter: true
			},
			{
				label: "Pricing",
				href: "/pricing",
				showInNav: false,
				showInFooter: true
			},
			{
				label: "Careers",
				href: "/careers",
				showInNav: true,
				showInFooter: true
			}
		]
	},
	{
		label: "More",
		showInNav: false,
		showInFooter: true,
		children: [
			{
				label: "Privacy",
				href: "/legal/privacy",
				showInNav: false,
				showInFooter: true
			},
			{
				label: "Terms",
				href: "/legal/terms",
				showInNav: false,
				showInFooter: true
			}
			// Social media might be handled differently, not typically a nav item
		]
	}
];
// .sort((a, b) => (b.children?.length || 0) - (a.children?.length || 0));
