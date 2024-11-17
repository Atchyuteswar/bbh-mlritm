<script lang="ts">
	import BlurFade from '@/components/BlurFade.svelte';
	import Particles from '@/components/Particles.svelte';
	import PulsatingButton from '@/components/PulsatingButton.svelte';

	import type { PageData } from './$types';
	import { tils } from '$lib/index';

	let { data }: { data: PageData } = $props();

	// Club features
	const features = [
		{
			title: 'Collaboration',
			description: 'Collaborate with like-minded individuals who share your passion for blockchain. Our community fosters an environment where ideas flourish, and partnerships are forged.',
			icon: '🤝'
		},
		{
			title: 'Blockchain Development',
			description: 'We focus on educating and empowering our members with the potential of the BSV blockchain.',
			icon: '🔗'
		},
		{
			title: 'Workshops and Talks',
			description: 'Learn from industry experts and gain practical knowledge in blockchain technology.',
			icon: '👨‍🏫'
		},
		{
			title: 'Hackathons',
			description: 'Participate in coding competitions and hackathons to showcase your skills and creativity.',
			icon: '👨‍💻'
		}
	];

	// Recent activities
	const recentActivities = tils.map(til => ({
		title: til.title,
		date: new Date(til.date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
		description: til.description
	}));
</script>

<main class="min-h-screen">
	<!-- Hero Section -->

	<div
		class="relative flex h-fit w-full flex-col items-center overflow-hidden rounded-lg border border-slate-200 bg-slate-900 px-4 py-20 pb-36 dark:border-slate-800 dark:bg-[#000000] md:shadow-xl"
	>
	<Particles className="absolute inset-0"  />


    <BlurFade delay={0.25}>
        <span
        class="pointer-events-none my-12 flex justify-center whitespace-pre-wrap bg-gradient-to-b from-[#ffffff] to-[#05d5c4] bg-clip-text text-center text-7xl font-semibold leading-none text-transparent dark:from-[#ffffff] dark:to-[#99F6E4] lg:py-12"
    >
        Welcome to Big Blockers - MLRITM
    </span>
      </BlurFade>
      <BlurFade delay={0.25 * 2}>
        <p class="mx-auto mb-8 max-w-2xl text-xl text-[#2cc2a4] dark:text-[#99F6E4]">
			“The Big Blockers Community is a group of experts working together to promote the utility of blockchain technology and create the next generation of the internet, Metanet.”
		</p>
      </BlurFade>
		

		<div class="relative flex w-full items-center justify-center gap-4">
			<a href="/events">
				<PulsatingButton class="px-6 py-3">Upcoming Events</PulsatingButton>
			</a>
			<a href="/team" class="relative flex cursor-pointer items-center justify-center rounded-lg border border-[#0D9488] px-6 py-3 text-center text-[#2cc2a4] transition hover:bg-[#0D9488]/10 dark:border-[#99F6E4] dark:text-[#99F6E4] dark:hover:bg-[#0D9488]/30"
				>
				<span>
					
					Meet the Team
				</span>
				<div
				class="absolute left-1/2 top-1/2 size-full -translate-x-1/2 -translate-y-1/2 rounded-lg bg-inherit"
			  ></div>
			</a>
		</div>
	
	</div>

	<!-- Features Section -->
	<section class="bg-[#0F172A] py-16 text-white dark:bg-slate-800/60">
		<div class="container mx-auto px-4">
			<h2 class="mb-12 text-center text-3xl font-bold text-[#0D9488] dark:text-[#99F6E4]">What We Offer</h2>
			<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
				{#each features as feature}
					<div class="rounded-lg bg-slate-800/80 p-6 shadow-lg transition hover:bg-slate-700 dark:bg-[#1E293B] dark:hover:bg-[#334155]">
						<div class="mb-4 text-4xl">{feature.icon}</div>
						<h3 class="mb-2 text-xl font-semibold text-[#0D9488] dark:text-[#99F6E4]">{feature.title}</h3>
						<p class="text-slate-300 dark:text-slate-300">{feature.description}</p>
					</div>
				{/each}
			</div>
		</div>
	</section>

	

	<!-- Recent Activities Section -->
	<section class="bg-gradient-to-r from-blue-200 to-cyan-200 py-16 text-slate-900 dark:bg-gradient-to-r dark:from-blue-800 dark:to-cyan-900 dark:text-white">
		<div class="container mx-auto px-4">
			<h2 class="mb-12 text-center text-3xl font-bold text-teal-400 dark:text-teal-400">Recent Activities</h2>
			<div class="grid grid-cols-1 gap-8 md:grid-cols-3">
				{#each recentActivities as activity}
					<div class="rounded-lg bg-white/80 p-6 shadow-lg backdrop-blur-sm transition-colors hover:bg-white dark:bg-slate-800/50 dark:hover:bg-slate-800/70">
						<h3 class="mb-2 text-xl font-semibold text-teal-400 dark:text-teal-400">{activity.title}</h3>
						<p class="mb-4 text-sm text-teal-400 dark:text-teal-200">{activity.date}</p>
						<p class="text-slate-600 dark:text-slate-300">{activity.description}</p>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Join Us Section -->
	<section class="bg-slate-900 py-16 text-white dark:bg-slate-800/60">
		<div class="container mx-auto px-4 text-center">
			<h2 class="mb-6 text-3xl font-bold text-teal-400">Join Our Community</h2>
			<p class="mx-auto mb-8 max-w-2xl text-slate-300">
				Whether you're a beginner or an expert, there's a place for you in our community. Join us to
				learn, grow, and innovate together.
			</p>
			<a
				href="/events"
				class="inline-block rounded-lg bg-teal-600 px-8 py-3 text-white transition hover:bg-teal-500"
				>Get Started</a
			>
		</div>
	</section>
</main>
