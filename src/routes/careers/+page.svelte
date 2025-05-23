<script lang="ts">
	// Types

	// Components
	import SectionHeader from "$lib/components/layout/SectionHeader.svelte";
	import Culture from "$lib/components/layout/Culture.svelte";
	import Testimonials from "$lib/components/layout/Testimonials.svelte";
	import SecondaryHero from "$lib/components/layout/hero-sections/SecondaryHero.svelte";
	import Card from "$lib/components/ui/Card.svelte";
	import JobList, { type JobOpening } from "./JobList.svelte";

	// Icons
	import IconBriefcase from "~icons/lucide/briefcase";
	import IconUsers from "~icons/lucide/users";
	import IconHeart from "~icons/lucide/heart";
	import IconGlobe from "~icons/lucide/globe";

	// Constants
	const SECTION_BASE_CLASSES = "section-py section-px container mx-auto";
	const GRADIENT_BG_CLASSES =
		"bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800";
	const ICON_CONTAINER_CLASSES =
		"bg-primary-50 text-primary-600 dark:bg-primary-950 dark:text-primary-400 flex items-center justify-center rounded-full";

	const benefits = [
  {
    title: "Mission with real impact",
    description: "Shape responsible AI that advances human well-being.",
    icon: IconGlobe
  },
  {
    title: "Growth with world-class mentors",
    description: "Learn from leading researchers and build at the frontier.",
    icon: IconUsers
  },
  {
    title: "Collaboration for a safer future",
    description: "Work side-by-side on breakthrough, safety-first AI projects.",
    icon: IconHeart
  }
];

	const openings: JobOpening[] = [
		// Engineering
		{
			title: "Senior Frontend Developer",
			department: "Engineering",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},
		{
			title: "Backend Engineer",
			department: "Engineering",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},
		{
			title: "Design Engineer",
			department: "Engineering",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},

		// Design
		{
			title: "UX/UI Designer",
			department: "Design",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},
		{
			title: "Product Designer",
			department: "Design",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},

		// Product
		{
			title: "Product Manager",
			department: "Product",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},
		{
			title: "Product Analyst",
			department: "Product",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},

		// Marketing
		{
			title: "Marketing Specialist",
			department: "Marketing",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},
		{
			title: "Content Strategist",
			department: "Marketing",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},
		{
			title: "Social Media Manager",
			department: "Marketing",
			location: "Remote",
			type: "Full-time",
			url: "#"
		}
	];

	const employeeTestimonials = [
  {
    name: "Kevin Liu",
    position: "Software Engineer",
    company: "Engineering",
    quote:
      "From my very first week, everyone made sure I felt supported. There's a real sense of inclusion here—you can always ask questions and learn from others.",
    image: "/generated/image-a-young-asian-male-software-engineer-wit.webp"
  },
  {
    name: "Jasmine Williams",
    position: "Product Manager",
    company: "Product",
    quote:
      "Growth here is real. My mentors encouraged me to take on new challenges, and there are clear pathways to move forward in your career. I always feel pushed—but never alone.",
    image: "/generated/image-a-mid-career-black-female-product-manage.webp"
  },
  {
    name: "David Miller",
    position: "Senior Researcher",
    company: "Research",
    quote:
      "I collaborate daily with brilliant minds from every background. The atmosphere is flexible and motivating—we share ideas freely and build on each other’s strengths.",
    image: "/generated/image-a-senior-white-male-researcher-relaxed-a.webp"
  }
];

	const processSteps = [
  {
    step: 1,
    title: "Apply online",
    description: "Submit your résumé and short questions—no cover letter needed."
  },
  {
    step: 2,
    title: "Initial review",
    description: "Recruiters and team review your background; you’ll hear soon if there’s a fit."
  },
  {
    step: 3,
    title: "First-round interview",
    description: "A video call to discuss your experience, thinking style, and role interest."
  },
  {
    step: 4,
    title: "Skills challenge",
    description: "If relevant, a project or code challenge—typically one week to complete."
  },
  {
    step: 5,
    title: "Final interviews",
    description: "Meet potential teammates and leadership; discuss collaboration and ideas."
  },
  {
    step: 6,
    title: "Offer & onboarding",
    description: "If selected, you’ll get a timely offer and onboarding plan."
  }
];

	const values = [
  {
    icon: IconGlobe,
    title: "Integrity and openness",
    description: "We share openly, reason carefully, and always act with care for the world."
  },
  {
    icon: IconUsers,
    title: "Collaboration over ego",
    description: "Debate is welcome, humility assumed. We challenge ideas, never people."
  },
  {
    icon: IconHeart,
    title: "Safety and responsibility",
    description: "Safety is built in from the beginning—not added on as an afterthought."
  }
];
</script>

<!-- Hero Section -->

<SecondaryHero
  title="Build AI for humanity"
  subtitle="Join a collaborative team shaping responsible AI for lasting impact"
  imageSrc="/generated/image-a-modern-open-office-space-filled-with-d.webp"
/>

<!-- Why Join Us Section -->
<section class={SECTION_BASE_CLASSES}>
	<SectionHeader title="Why join us?" subtitle="Build your career while making an impact" />

	<div class="mt-16 grid gap-4 md:grid-cols-3">
		{#each benefits as benefit}
			<Card {...benefit} />
		{/each}
	</div>
</section>

<!-- Culture Section -->
<Culture {values} />

<Testimonials testimonials={employeeTestimonials} />

<!-- Application Process -->
<section class={SECTION_BASE_CLASSES}>
	<div class="mx-auto">
		<h2 class="text-title1 mb-16">Our application process</h2>

		<div class="grid gap-12 md:grid-cols-3">
			{#each processSteps as { step, title, description }, i}
				<div class="flex flex-col">
					<div class="{ICON_CONTAINER_CLASSES} mb-6 size-11">
						<span class="text-headline">{step}</span>
					</div>
					<h3 class="text-headline mb-3">{title}</h3>
					<p class="text-body text-emphasis-low">{description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>
<!-- Current Openings Section -->
<section class={GRADIENT_BG_CLASSES}>
	<div class="section-px section-py container mx-auto grid w-full items-start lg:grid-cols-2">
		<SectionHeader title="Current openings" subtitle="Find your perfect role" />

		<JobList {openings} />
	</div>
</section>
