<script lang="ts">
	
	interface ImageModule {
		default: string;
	}

	const imageModules: Record<string, ImageModule> = import.meta.glob(
		'$lib/assets/orientation-day/*.{avif,gif,heif,jpeg,jpg,png,tiff,webp,svg}',
		{
			eager: true,
			query: {
				enhanced: true
			}
		}
	);
</script>

<svelte:head>
	<title>Photo Gallery | Big Blockers Hyderabad Events & Memories - MLRITM</title>
	<meta name="description" content="Explore Big Blockers Hyderabad's memorable moments through our photo gallery. View highlights from orientation day, workshops, and blockchain events at MLRITM." />
	<meta name="keywords" content="Big Blockers Hyderabad photos, MLRITM events, blockchain community gallery, orientation day pictures, student activities, tech events Hyderabad, blockchain workshops photos" />
	
	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://bbh-mlritm.com/photobooth" />
	<meta property="og:title" content="Photo Gallery | Big Blockers Hyderabad - MLRITM Events" />
	<meta property="og:description" content="Browse through our collection of memorable moments from Big Blockers Hyderabad's blockchain events, workshops, and community gatherings at MLRITM." />
	<meta property="og:image" content="https://bbh-mlritm.com/gallery-preview.jpg" />
	<meta property="og:site_name" content="Big Blockers Hyderabad" />
	<meta property="og:locale" content="en_IN" />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Photo Gallery | Big Blockers Hyderabad Events - MLRITM" />
	<meta name="twitter:description" content="Discover the vibrant community of Big Blockers Hyderabad through our event photos and memorable moments at MLRITM." />
	<meta name="twitter:image" content="https://bbh-mlritm.com/gallery-preview.jpg" />
	
	<!-- Additional SEO Tags -->
	<meta name="robots" content="index, follow" />
	<meta name="author" content="Big Blockers Hyderabad" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<link rel="canonical" href="https://bbh-mlritm.com/photobooth" />
	
	<!-- JSON-LD Structured Data -->
	<script type="application/ld+json">
	{
	  "@context": "https://schema.org",
	  "@type": "ImageGallery",
	  "name": "Big Blockers Hyderabad Event Gallery",
	  "description": "Photo gallery showcasing events, workshops, and community gatherings of Big Blockers Hyderabad at MLRITM",
	  "url": "https://bbh-mlritm.com/photobooth",
	  "image": "https://bbh-mlritm.com/gallery-preview.jpg",
	  "publisher": {
	    "@type": "Organization",
	    "name": "Big Blockers Hyderabad",
	    "url": "https://bbh-mlritm.com"
	  }
	}
	</script>
</svelte:head>

<main
	class="min-h-screen bg-gradient-to-b from-white to-white p-4 dark:from-gray-900 dark:to-black"
>
	<h1 class="mb-8 text-center text-3xl font-bold text-black dark:text-white">Photo Gallery</h1>
	<div class="container mx-auto">
		<h1 class="mb-8 text-2xl font-bold text-black dark:text-white">
			Orientation Day & workshops ( 21st November 2024 ) :
		</h1>
		<div
			class="columns-1 gap-4 sm:columns-2 md:columns-3 lg:columns-4 [&>div:not(:first-child)]:mt-4"
		>
			{#each Object.entries(imageModules) as [_path, module], i}
				<div class="break-inside-avoid">
					<enhanced:img
						alt={'Photo ' + i}
						class="w-full rounded-lg object-cover shadow-md transition-transform duration-300 hover:scale-[1.02]"
						src={module.default}
					/>
				</div>
			{/each}
		</div>
	</div>
</main>
