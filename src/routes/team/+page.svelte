<script lang="ts">
	import type { PageData } from './$types';
	import { siteConfig } from '$lib/config';

	// Import team member images
	import atchyuteswarImg from '$lib/assets/team/atchyuteswar.jpg';
	import shivaniImg from '$lib/assets/team/shivani.jpg';
	import defaultImg from '$lib/assets/team/default.jpg';
	import vishnuImg from '$lib/assets/team/vishnu.jpg';
	import jayasriImg from '$lib/assets/team/jayasri.jpg';
	import { Github, Linkedin, LinkedinIcon } from 'lucide-svelte';

	let { data }: { data: PageData } = $props();

	// Team members data
	const teamMembers = [
		{
			name: 'Atchyuteswar Gottumukkala',
			role: 'Lead',
			image: atchyuteswarImg,
			linkedin: 'https://linkedin.com/in/atchyuteswar',
			github: 'https://github.com/Atchyuteswar'
		},
		{
			name: 'Adarsh Yerram',
			role: 'Co-Lead',
			image: defaultImg,
			linkedin: 'https://www.linkedin.com/in/adarsh-yerram-132138323/',
			github: 'https://github.com/Adarshyerram'
		},
		{
			name: 'Jaya Sri ',
			role: 'Faculty Incharge',
			image: jayasriImg,
			linkedin: 'https://linkedin.com/mikejohnson',
			github: 'https://github.com/mikejohnson'
		},
		{
			name: 'Shivani Mulgi',
			role: 'PR & Outreach Lead',
			image: shivaniImg,
			linkedin: 'https://linkedin.com/in/atchyuteswar',
			github: 'https://github.com/Atchyuteswar'
		},
		{
			name: 'Ch Vishnu Varma',
			role: 'Co-Lead',
			image: vishnuImg,
			linkedin: 'https://www.linkedin.com/in/adarsh-yerram-132138323/',
			github: 'https://github.com/Adarshyerram'
		}
	];

	const pageTitle = `Team - ${siteConfig.name}`;
	const pageDescription = `Meet the talented team behind ${siteConfig.name}. Our diverse group of blockchain enthusiasts, developers, and leaders working together to build the future of blockchain technology.`;
</script>

<svelte:head>
	<title>{pageTitle}</title>
	<meta name="description" content={pageDescription} />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:title" content={pageTitle} />
	<meta property="og:description" content={pageDescription} />
	<meta property="og:url" content={`${siteConfig.url}/team`} />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={pageTitle} />
	<meta name="twitter:description" content={pageDescription} />

	<!-- Additional SEO tags -->
	<meta name="keywords" content={`team, members, leadership, ${siteConfig.keywords}`} />
	<meta name="robots" content="index, follow" />
	<link rel="canonical" href={`${siteConfig.url}/team`} />
</svelte:head>

<main class="min-h-screen bg-gray-50 dark:bg-gray-900">
	<section class="px-4 py-16">
		<div class="container mx-auto">
			<h1 class="mb-12 text-center text-4xl font-bold text-gray-900 dark:text-white">Our Team</h1>
			<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
				{#each teamMembers as member}
					<div class="flex flex-col items-center">
						<div
							class="group relative mb-4 h-48 w-48 overflow-hidden rounded-full transition-transform hover:scale-105"
						>
							<img
								src={member.image}
								alt={member.name}
								class="h-full w-full object-cover transition-opacity group-hover:opacity-90"
							/>
							<div
								class="absolute bottom-0 flex w-full justify-center space-x-2 bg-black/50 p-2 opacity-0 transition-opacity group-hover:opacity-100"
							>
								<a
									href={member.linkedin}
									target="_blank"
									rel="noopener noreferrer"
									class="text-white hover:text-blue-400"
								>
                                <Linkedin />
									
								</a>
								<a
									href={member.github}
									target="_blank"
									rel="noopener noreferrer"
									class="text-white hover:text-gray-300"
								>
									<Github />
								</a>
							</div>
						</div>
						<h3 class="text-xl font-semibold text-gray-900 dark:text-white">{member.name}</h3>
						<p class="text-gray-600 dark:text-gray-400">{member.role}</p>
					</div>
				{/each}
			</div>
		</div>
	</section>
</main>
