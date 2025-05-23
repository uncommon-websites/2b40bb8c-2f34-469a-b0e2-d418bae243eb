<script lang="ts">
	// Components
	import UseCases from "$lib/components/layout/UseCases.svelte";
	import Summary from "$lib/components/layout/Summary.svelte";
	import Features from "$lib/components/layout/Features.svelte";
	import Testimonials from "$lib/components/layout/Testimonials.svelte";
	import CallToAction from "$lib/components/layout/CallToAction.svelte";
	import AboutTeaser from "$lib/components/layout/AboutTeaser.svelte";
	import LogoScroller from "$lib/components/layout/LogoScroller.svelte";
	import CustomerCardHero from "$lib/components/layout/hero-sections/CustomerCardHero.svelte";
</script>

<CustomerCardHero
  centered={true}
  title="Safe tools for complex thinking."
  subtitle="Claude helps you write, solve, and build—designed with care to support your work and humanity’s long-term well-being."
  customers={[
    {
      name: 'Erica',
      position: 'Software engineer',
      imageSrc: '/generated/image-a-professional-woman-coder-in-a-modern-w.webp',
    },
    {
      name: 'Ravi',
      position: 'Policy researcher',
      imageSrc: '/generated/image-a-professional-man-in-a-formal-shirt-sit.webp',
    },
    {
      name: 'Laura',
      position: 'Marketing manager',
      imageSrc: '/generated/image-a-professional-woman-smiling-in-a-bright.webp',
    },
    {
      name: 'James',
      position: 'Product strategist',
      imageSrc: '/generated/image-a-professional-man-with-glasses-sitting-.webp',
    },
    {
      name: 'Maya',
      position: 'Novelist',
      imageSrc: '/generated/image-a-woman-writer-in-a-cozy-indoor-setting-.webp',
    },
  ]}
/>

<LogoScroller
	label="Trusted by industry leaders"
	logoUrls={[
		"https://logo.clearbit.com/openai.com",
		"https://logo.clearbit.com/microsoft.com",
		"https://logo.clearbit.com/stripe.com",
		"https://logo.clearbit.com/zapier.com"
	]}
/>

<Summary
	title="What we do"
	text="Anthropic builds AI to serve humanity’s long-term well-being. Our Claude models help people research, code, and write—always prioritizing safety and responsibility."
/>

<Testimonials

testimonials={[
  {
    name: "Leocadia Byrne",
    position: "Lead software engineer",
    company: "Crestfall Technologies",
    quote:
      "Claude reduced our debug cycles by half. I spend more time building and far less chasing bugs. That's hours back in my week.",
    image: "/generated/image-middle-aged-woman-software-engineer-in-a.webp",
  },
  {
    name: "Werner Callenbach",
    position: "Research scientist",
    company: "Helix Institute",
    quote:
      "We use Claude to pre-check data for compliance. It flagged two critical errors regulators would have caught. Risk dropped, and so did my stress.",
    image: "/generated/image-older-male-research-scientist-in-a-labor.webp",
  },
  {
    name: "Rowen Ibarra",
    position: "Founder & CEO",
    company: "Studio Motif",
    quote:
      "We save over $8,000 every quarter by replacing old content tools with Claude. And everything gets done faster than before.",
    image: "/generated/image-younger-nonbinary-startup-founder-in-a-v.webp",
  },
]}
/>

<Features
  title="AI designed for real-world responsibility"
  subtitle="See how Claude supports your work, safely and transparently."
  features={[
    {
      title: "Advanced Claude models",
      description: "Claude family models handle nuanced writing, coding, and analysis while keeping your data private and secure.",
    },
    {
      title: "Developer-friendly APIs",
      description: "The Claude API offers high-availability endpoints and supports large inputs, so you can build fast, reliable AI products at scale.",
    },
    {
      title: "Research leadership",
      description: "Anthropic publishes research on interpretability, societal impacts, and alignment science—ensuring models are transparent and trustworthy.",
    },
    {
      title: "Responsible scaling & safety",
      description: "Built-in safeguards like constitutional AI, detailed evaluations, and responsible scaling policies keep models safe for every user.",
    },
    {
      title: "Seamless business integration",
      description: "Claude connects with Google Workspace and leading business tools, enabling real-time insights and collaboration anywhere you work.",
    },
    {
      title: "AI for the long-term benefit of humanity",
      description: "Every decision, from model training to deployment, is made with a clear goal: supporting people and creating tangible value for society.",
    },
  ]}
/>

<UseCases
  title="Use Cases"
  subtitle="Real-world applications for your business needs"
  useCases={[
    {
      title: "AI pair programmer for dev teams",
      description: "Claude Code helps developers write, debug, and document faster—with inline suggestions and language support across multiple frameworks.",
      image: "/generated/image-a-developer-in-a-modern-office-space-sur.webp",
      link: {
        href: "/use-cases/ai-pair-programmer",
        label: "Learn more"
      }
    },
    {
      title: "Research assistant for complex analysis",
      description: "Use Claude Opus 4 to summarize papers, compare arguments, and generate structured insights from dense technical content.",
      image: "/generated/image-a-business-professional-in-a-sleek-conte.webp",
      link: {
        href: "/use-cases/research-assistant",
        label: "Learn more"
      }
    },
    {
      title: "Writing support for business workflows",
      description: "Quickly draft copy, outlines, and customer-facing content—right inside Google Docs—with Claude’s Workspace integrations included in the Max plan.",
      image: "/generated/image-a-writer-in-a-cozy-home-office-setting-w.webp",
      link: {
        href: "/use-cases/writing-support",
        label: "Learn more"
      }
    }
  ]}
/>

<AboutTeaser />
<CallToAction
  title="AI you can trust. Help when you need it."
  subtitle="Built for people, built for impact"
  description="Claude is fast, helpful, and easy to work with. Whether you’re building an agent, exploring ideas, or shipping code, Claude helps you move smarter and quicker."
  imageSrc="/generated/image-a-cheerful-software-developer-with-a-joy.webp"
  callsToAction={[
    {
      href: "/get-started",
      label: "Try Claude",
      variant: "primary"
    },
    {
      href: "/contact",
      label: "Talk to our team",
      variant: "secondary"
    }
  ]}
/>
