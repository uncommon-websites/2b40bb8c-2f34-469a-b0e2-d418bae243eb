<script lang="ts">
	// Components
	import CallToAction from "$lib/components/layout/CallToAction.svelte";

	// Icons
	import StakeholderGrid from "$lib/components/layout/StakeholderGrid.svelte";
	import Story from "./Story.svelte";
	import SecondaryHero from "$lib/components/layout/hero-sections/SecondaryHero.svelte";
	import Culture from "$lib/components/layout/Culture.svelte";

	// Constants
	const values = [
  {
    title: "Responsible AI, always",
    description: "We set rigorous safety standards, research alignment, and uphold transparency in everything we build."
  },
  {
    title: "Collaboration powers progress",
    description: "Open minds and diverse viewpoints drive our work—internally and alongside our global partners."
  },
  {
    title: "Human impact guides us",
    description: "We judge our work by lasting benefits to people and society, not just technological progress."
  }
];
</script>

<SecondaryHero
  title="AI built to benefit humanity"
  subtitle="Safe, powerful, and designed to serve everyone"
  imageSrc="/generated/image-a-diverse-group-of-researchers-is-gather.webp"
/>

<!-- Story Section -->
<Story
	paragraphs={[
		"Anthropic was founded by a group of researchers and engineers who saw something worrying early on. While the capabilities of AI were growing quickly, the frameworks for building it safely weren't keeping pace. So in 2021, we left our roles at other leading AI labs to take a different approach—one rooted in long-term safety, ethical choices, and transparency. We believed there needed to be a company designed from the ground up to build powerful AI that puts people first.",
		"Today, that belief drives everything we do. Instead of chasing novelty or short-term wins, we focus on building AI systems like Claude that are helpful, honest, and harmless. That means shaping how our models learn, limiting misuse, being transparent about limitations, and holding ourselves accountable to the public interest. We publish research on interpretability, work with policymakers on safe deployment, and have guiding safety standards like our AI Constitution and Responsible Scaling Policy—all designed to center human well-being.",
		"Claude is the result of these choices. Whether you're coding a prototype, summarizing market research, or brainstorming with your team, Claude helps you think clearly, work faster, and stay fully in control. Developers use our API to build agents and tools. Writers use Claude to get unstuck. And businesses use Claude to scale with integrity. We’re proud to serve a growing community of everyday users who believe that the future of AI should be both ambitious and responsible."
	]}
/>

<!-- Our Culture Section -->
<Culture {values} />

<!-- StakeholderGrid Section -->
<StakeholderGrid
  stakeholderType="team"
  title="Our team."
  subtitle="Research, responsibility, and transparency come first."
  stakeholders={[
    {
      name: "Deep Ganguli",
      position: "Research Lead, Societal Impacts",
      bio: "Deep advances research on how AI affects society and works across the Anthropic team to keep progress safe and accountable.",
      image: "/generated/image-a-professional-headshot-of-deep-ganguli-.webp"
    }
  ]}
/>

<StakeholderGrid
	stakeholderType="investor"
	title="Backed by the best."
	subtitle="Point Nine, TSIC and others"
	stakeholders={[
		{
			name: "Point Nine Capital",
			image: "https://cdn.brandfetch.io/pointnine.com/w/400/h/400/logo?c=1id_elLz2Bd5Ej-dWo7"
		},
		{
			name: "TSIC Ventures",
			image: "https://cdn.brandfetch.io/tiny.vc/w/400/h/400/logo?c=1a2b3c4d5e"
		},
		{
			name: "Sequoia Capital",
			image: "https://cdn.brandfetch.io/sequoiacap.com/w/400/h/400/logo"
		}
	]}
/>

<!-- CTA Section -->
<CallToAction
  title="People-first AI needs people like you"
  subtitle="Join us in shaping responsible AI"
  description="Anthropic exists to build AI that’s safe, helpful, and aligned with human values. That work doesn’t happen by accident—it takes engineers, researchers, designers, and policy thinkers who care deeply about how this technology evolves.

We’re looking for teammates who want their work to have lasting impact. If you believe AI should be developed responsibly, for the benefit of the world, we’d love to meet you."
  callsToAction={[{ href: '/careers', label: 'See open roles', variant: 'primary' }]}
/>
