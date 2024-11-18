<script lang="ts">
	import { events } from '@/index';
	import { siteConfig } from '$lib/config';

	const pageTitle = `Events & Workshops - ${siteConfig.name}`;
	const pageDescription = `Discover and join upcoming blockchain events, workshops, and hackathons at ${siteConfig.name}. Learn from industry experts, participate in hands-on sessions, and connect with fellow blockchain enthusiasts.`;

	// Get the first upcoming event's image for social media preview
	const previewImage = events[0]?.img || '';

	// Get all unique tags for keywords
	const eventTags = [...new Set(events.flatMap((til) => til.tags))].join(', ');
</script>

<svelte:head>
	<title>{pageTitle}</title>
	<meta name="description" content={pageDescription} />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:title" content={pageTitle} />
	<meta property="og:description" content={pageDescription} />
	<meta property="og:url" content={`${siteConfig.url}/events`} />
	{#if previewImage}
		<meta property="og:image" content={previewImage} />
	{/if}

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={pageTitle} />
	<meta name="twitter:description" content={pageDescription} />
	{#if previewImage}
		<meta name="twitter:image" content={previewImage} />
	{/if}

	<!-- Additional SEO tags -->
	<meta
		name="keywords"
		content={`events, workshops, hackathons, blockchain events, ${eventTags}, ${siteConfig.keywords}`}
	/>
	<meta name="robots" content="index, follow" />
	<link rel="canonical" href={`${siteConfig.url}/events`} />
</svelte:head>

<main class="min-h-screen bg-gray-50 py-12 dark:bg-gray-900">
	<div class="container mx-auto px-4">
		<!-- Header Section -->
		<div class="mb-16 text-center">
			<h1
				class="mb-4 bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-5xl font-bold text-transparent dark:from-teal-300 dark:to-teal-500"
			>
				Events & Workshops
			</h1>
			<p class="mx-auto max-w-2xl text-lg text-gray-300 dark:text-gray-400">
				Join our upcoming events and workshops to learn about blockchain technology, participate in
				hands-on sessions, and connect with like-minded individuals.
			</p>
		</div>

		<!-- Events Grid -->
		<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#each events as event}
				<div
					class="group relative overflow-hidden rounded-xl bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-gray-800/50 dark:shadow-gray-900/30"
				>
					<!-- Event Image -->
					{#if event.img}
						<div class="mb-6 aspect-video overflow-hidden rounded-lg">
							<img
								src={event.img}
								alt={event.title}
								class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
							/>
						</div>
					{/if}

					<!-- Event Status, Type & State Badges -->
					<div class="mb-4 flex flex-wrap items-center gap-2">
						<span
							class="inline-flex items-center rounded-full bg-teal-100 px-3 py-1 text-sm font-medium text-teal-800 dark:bg-teal-900/30 dark:text-teal-300"
						>
							{event.status}
						</span>
						<span
							class="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
						>
							{event.type}
						</span>
						<span
							class="inline-flex items-center rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-800 dark:bg-purple-900/30 dark:text-purple-300"
						>
							{event.state}
						</span>
					</div>

					<!-- Event Title & Description -->
					<h2 class="mb-3 text-xl font-semibold text-black dark:text-white">{event.title}</h2>
					<p class="mb-4 text-black dark:text-gray-300">{event.description}</p>

					<!-- Event Details -->
					<div
						class="mt-6 flex flex-wrap items-center gap-4 border-t border-gray-100 pt-4 text-sm dark:border-gray-700"
					>
						<div class="flex items-center gap-2">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-5 w-5 text-gray-400"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
								/>
							</svg>
							<span class="text-black dark:text-gray-400">{event.date}</span>
						</div>
						<div class="flex items-center gap-2">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-5 w-5 text-gray-400"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
								/>
							</svg>
							<span class="text-black dark:text-gray-400">{event.author}</span>
						</div>
					</div>

					<!-- Tags -->
					<div class="mt-4 flex flex-wrap gap-2">
						{#each event.tags as tag}
							<span
								class="rounded-full bg-gray-100 px-3 py-1 text-sm text-black dark:bg-gray-700 dark:text-gray-300"
							>
								#{tag}
							</span>
						{/each}
					</div>

					<!-- Apply Button -->
					<a
						href="https://lu.ma/n92xl3an"
						target="_blank"
						rel="noopener noreferrer"
						class="mt-6 block w-full rounded-lg bg-teal-500 px-4 py-2 text-center font-medium text-white transition-all duration-200 hover:bg-teal-600 hover:shadow-lg dark:bg-teal-600 dark:hover:bg-teal-700"
					>
						Apply Now
					</a>
				</div>
			{/each}
		</div>
	</div>
</main>
