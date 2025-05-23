<script lang="ts">
	// Types
	import type { PageProps } from "./$types";

	// Components
	import Features from "$lib/components/layout/Features.svelte";
	import Testimonials from "$lib/components/layout/Testimonials.svelte";
	import CallToAction from "$lib/components/layout/CallToAction.svelte";
	import Pricing from "$lib/components/layout/Pricing.svelte";

	// Props
	const { data }: PageProps = $props();
</script>

<Pricing />

<Testimonials
  testimonials={[
    {
      name: "Lena Morales",
      position: "Head of Ops",
      company: "Vesa",
      quote: "Claude helps us generate accurate financial and legal summaries at scale, faster than ever. Plus, we trust how it's being developed.",
      image: "/generated/image-a-confident-and-friendly-hispanic-woman-.webp"
    },
    {
      name: "Ethan Kasai",
      position: "Engineering Manager",
      company: "Notiontide",
      quote: "Efficiency has doubled since integrating Claude into our internal tooling. We went from prototype to production in weeks, not months.",
      image: "/generated/image-a-smiling-and-approachable-japanese-amer.webp"
    },
    {
      name: "Dana Wu",
      position: "AI Partner",
      company: "Virta Research",
      quote: "Other models could do the job, but Claude does it with context, nuance—and reduces hallucinations in our clinical data flow.",
      image: "/generated/image-a-thoughtful-and-professional-chinese-am.webp"
    }
  ]}
/>

<CallToAction
  title="Start using Claude today"
  subtitle="AI that helps you think, code, and create—responsibly."
  description="Join thousands who trust Anthropic for advanced AI that’s safe, reliable, and easy to integrate into your workflow. Get instant access on the web or build with our API."
  imageSrc="/generated/image-a-person-sitting-comfortably-on-a-cozy-c.webp"
  callsToAction=[
    { href: "/sign-up", label: "Get started for free", variant: "primary" },
    { href: "/contact", label: "Contact sales", variant: "secondary" }
  ]
/>
