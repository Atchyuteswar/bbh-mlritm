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
		class="relative flex h-fit w-full flex-col items-center overflow-hidden rounded-lg border bg-background px-4 py-20 pb-36 md:shadow-xl"
	>

    <BlurFade delay={0.25}>
        <span
        class="pointer-events-none my-12 flex justify-center whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-7xl font-semibold leading-none text-transparent dark:from-teal-100 dark:to-teal-400/10"
    >
        Welcome to ML Club RITM
    </span>
      </BlurFade>
      <BlurFade delay={0.25 * 2}>
        <p class="mx-auto mb-8 max-w-2xl text-xl text-teal-100">
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
				class="rounded-lg border border-teal-400 px-6 py-3 text-teal-100 transition hover:bg-teal-800/30"
				>Meet the Team</a
			>
		</div>
		<Particles className="absolute inset-0" refresh={true} />
	</div>

	<!-- Features Section -->
	<section class="bg-slate-900 py-16 text-white">
		<div class="container mx-auto px-4">
			<h2 class="mb-12 text-center text-3xl font-bold text-teal-400">What We Offer</h2>
			<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
				{#each features as feature}
					<div class="rounded-lg bg-slate-800 p-6 shadow-lg transition hover:bg-slate-700">
						<div class="mb-4 text-4xl">{feature.icon}</div>
						<h3 class="mb-2 text-xl font-semibold text-teal-400">{feature.title}</h3>
						<p class="text-slate-300">{feature.description}</p>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Recent Activities Section -->
	<section class="bg-gradient-to-br from-purple-900 to-slate-900 py-16 text-white">
		<div class="container mx-auto px-4">
			<h2 class="mb-12 text-center text-3xl font-bold text-teal-400">Recent Activities</h2>
			<div class="grid grid-cols-1 gap-8 md:grid-cols-3">
				{#each recentActivities as activity}
					<div class="rounded-lg bg-slate-800/50 p-6 shadow-md backdrop-blur-sm">
						<h3 class="mb-2 text-xl font-semibold text-teal-400">{activity.title}</h3>
						<p class="mb-4 text-sm text-teal-200">{activity.date}</p>
						<p class="text-slate-300">{activity.description}</p>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Join Us Section -->
	<section class="bg-slate-900 py-16 text-white">
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
