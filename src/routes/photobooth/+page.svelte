<script lang="ts">
	import type { PageData } from './$types';
	import { siteConfig } from '$lib/config';

	let { data }: { data: PageData } = $props();

	// Sample photo data with different aspect ratios
	const photos = [
		{ url: 'https://placehold.co/600x400', alt: 'Photo 1' },
		{ url: 'https://placehold.co/400x600', alt: 'Photo 2' },
		{ url: 'https://placehold.co/800x600', alt: 'Photo 3' },
		{ url: 'https://placehold.co/600x600', alt: 'Photo 4' },
		{ url: 'https://placehold.co/500x300', alt: 'Photo 5' },
		{ url: 'https://placehold.co/400x400', alt: 'Photo 6' },
		{ url: 'https://placehold.co/700x500', alt: 'Photo 7' },
		{ url: 'https://placehold.co/600x800', alt: 'Photo 8' },
		{ url: 'https://placehold.co/500x500', alt: 'Photo 9' }
	];

	const pageTitle = `Photo Gallery - ${siteConfig.name}`;
	const pageDescription = `Explore our photo gallery showcasing events, workshops, and memorable moments from ${siteConfig.name}. View our community's journey in blockchain technology and innovation.`;
</script>

<svelte:head>
	<title>{pageTitle}</title>
	<meta name="description" content={pageDescription} />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:title" content={pageTitle} />
	<meta property="og:description" content={pageDescription} />
	<meta property="og:url" content={`${siteConfig.url}/photobooth`} />
	<meta property="og:image" content={photos[0].url} />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={pageTitle} />
	<meta name="twitter:description" content={pageDescription} />
	<meta name="twitter:image" content={photos[0].url} />

	<!-- Additional SEO tags -->
	<meta
		name="keywords"
		content={`photo gallery, events, workshops, community, ${siteConfig.keywords}`}
	/>
	<meta name="robots" content="index, follow" />
	<link rel="canonical" href={`${siteConfig.url}/photobooth`} />
</svelte:head>

<main class="min-h-screen p-4">
	<div class="container mx-auto">
		<h1 class="mb-8 text-3xl font-bold">Photo Gallery</h1>
		<div
			class="columns-1 gap-4 sm:columns-2 md:columns-3 lg:columns-4 [&>div:not(:first-child)]:mt-4"
		>
			{#each photos as photo}
				<div class="break-inside-avoid">
					<img
						src={photo.url}
						alt={photo.alt}
						class="w-full rounded-lg object-cover shadow-md transition-transform duration-300 hover:scale-[1.02]"
						loading="lazy"
					/>
				</div>
			{/each}
		</div>
	</div>
</main>

<style>
	/* Optional: Add smooth transitions when columns change */
	.columns-1,
	.columns-2,
	.columns-3,
	.columns-4 {
		transition: columns 0.3s ease;
	}
</style>
