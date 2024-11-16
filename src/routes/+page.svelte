<script lang="ts">
	import BlurFade from '@/components/BlurFade.svelte';
	import Particles from '@/components/Particles.svelte';
	import PulsatingButton from '@/components/PulsatingButton.svelte';

	// Club features
	const features = [
		{
			title: 'Weekly Workshops',
			description:
				'Join our hands-on sessions covering the latest in machine learning and technology',
			icon: '🎯'
		},
		{
			title: 'Project Collaboration',
			description: 'Work on real-world projects with like-minded individuals',
			icon: '🤝'
		},
		{
			title: 'Expert Talks',
			description: 'Learn from industry professionals and academic experts',
			icon: '🎓'
		},
		{
			title: 'Hackathons',
			description: 'Participate in coding competitions and win exciting prizes',
			icon: '💻'
		}
	];

	// Recent activities
	const recentActivities = [
		{
			title: 'AI Workshop Series',
			date: 'December 2023',
			description:
				'A three-part workshop series on practical applications of artificial intelligence'
		},
		{
			title: 'Tech Talk: Future of ML',
			date: 'November 2023',
			description: 'Industry experts sharing insights on machine learning trends'
		},
		{
			title: 'Coding Sprint',
			date: 'October 2023',
			description: 'Weekend-long coding event focusing on innovative ML solutions'
		}
	];
</script>

<main class="min-h-screen">
	<!-- Hero Section -->

	<div
		class="relative flex h-fit w-full flex-col items-center overflow-hidden rounded-lg border border-slate-200 bg-slate-900 px-4 py-20 pb-36 dark:border-slate-800 dark:bg-background md:shadow-xl"
	>

    <BlurFade delay={0.25}>
        <span
        class="pointer-events-none my-12 flex justify-center whitespace-pre-wrap bg-gradient-to-b from-purple-900 to-teal-600 bg-clip-text text-center text-7xl font-semibold leading-none text-transparent dark:from-teal-100 dark:to-teal-400/10"
    >
        Welcome to ML Club RITM
    </span>
      </BlurFade>
      <BlurFade delay={0.25 * 2}>
        <p class="mx-auto mb-8 max-w-2xl text-xl text-slate-700 dark:text-teal-100">
			Exploring the frontiers of Machine Learning and Artificial Intelligence through collaboration,
			innovation, and hands-on learning.
		</p>
      </BlurFade>
		

		

		<div class="flex items-center justify-center gap-4">
			<a href="/events">
				<PulsatingButton class="px-6 py-3">Upcoming Events</PulsatingButton>
			</a>
			<a
				href="/team"
				class="rounded-lg border border-teal-500 px-6 py-3 text-slate-800 transition hover:bg-teal-50 dark:border-teal-400 dark:text-teal-100 dark:hover:bg-teal-800/30"
				>Meet the Team</a
			>
		</div>
		<Particles className="absolute inset-0" refresh={true} />
	</div>

	<!-- Features Section -->
	<section class="bg-slate-900 py-16 text-white dark:bg-slate-800/60">
		<div class="container mx-auto px-4">
			<h2 class="mb-12 text-center text-3xl font-bold text-teal-400 dark:text-teal-600">What We Offer</h2>
			<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
				{#each features as feature}
					<div class="rounded-lg bg-slate-800 p-6 shadow-lg transition hover:bg-slate-700 dark:bg-slate-200 dark:hover:bg-slate-300">
						<div class="mb-4 text-4xl">{feature.icon}</div>
						<h3 class="mb-2 text-xl font-semibold text-teal-400 dark:text-teal-600">{feature.title}</h3>
						<p class="text-slate-300 dark:text-slate-600">{feature.description}</p>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Recent Activities Section -->
	<section class="bg-gradient-to-br from-purple-100 to-slate-100 py-16 text-slate-900 dark:from-purple-900 dark:to-slate-900 dark:text-white">
		<div class="container mx-auto px-4">
			<h2 class="mb-12 text-center text-3xl font-bold text-purple-600 dark:text-teal-400">Recent Activities</h2>
			<div class="grid grid-cols-1 gap-8 md:grid-cols-3">
				{#each recentActivities as activity}
					<div class="rounded-lg bg-white/80 p-6 shadow-lg backdrop-blur-sm transition-colors hover:bg-white dark:bg-slate-800/50 dark:hover:bg-slate-800/70">
						<h3 class="mb-2 text-xl font-semibold text-purple-700 dark:text-teal-400">{activity.title}</h3>
						<p class="mb-4 text-sm text-purple-500 dark:text-teal-200">{activity.date}</p>
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
