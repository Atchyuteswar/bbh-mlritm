<script lang="ts">
	import ThemeSwitch from '@/components/blocks/ThemeSwitch.svelte';
	import { Heart, MoveUp, ArrowUpFromDot, ArrowUp, Linkedin } from 'lucide-svelte';
	import { Github } from 'lucide-svelte';
	import logo from '$lib/assets/logo.png';
	import FooterLogo from '$lib/assets/footer-logo.png';

	const menuItems = [
		{ name: 'Home', href: '/' },
		{ name: 'Events', href: '/events' },
		{ name: 'Team', href: '/team' },
		{ name: 'Photobooth', href: '/photobooth' }
	];

	const currentYear = new Date().getFullYear();
</script>

<footer class="bg-white py-12 text-gray-300 dark:bg-black">
	<div class="container mx-auto px-4 md:px-6">
		<div class="grid grid-cols-1 gap-8 md:grid-cols-4">
			<!-- Logo and Description -->
			<div class="flex flex-col items-center md:items-start">
				<a href="/" class="flex items-center space-x-2">
					<img src={FooterLogo} alt="BBH-MLRITM Logo" class="h-30 w-60" />
				</a>
				<p class="mt-4 text-sm sm:text-center text-black dark:text-gray-400">
					Empowering students through Blockchain technology and innovation at MLRITM.
				</p>
			</div>

			<!-- Quick Links -->
			<div>
				<h3 class="mb-4 text-lg font-semibold text-teal-900 dark:text-teal-400">Quick Links</h3>
				<ul class="space-y-2">
					{#each menuItems as item}
						<li>
							<a href={item.href} class=" text-black dark:text-gray-400 hover:text-teal-400 transition-colors">{item.name}</a>
						</li>
					{/each}
				</ul>
			</div>

			<!-- Social Links -->
			<div>
				<h3 class="mb-4 text-lg font-semibold text-teal-900 dark:text-teal-400">Connect With Us</h3>
				<div class="flex space-x-4">
					<a
						href="https://github.com/bbh-mlritm"
						target="_blank"
						rel="noopener noreferrer"
						class=" text-black dark:text-gray-400 hover:text-teal-400 transition-colors"
					>
						<Github />
					</a>
					<a
						href="https://www.linkedin.com/company/big-blockers-hyderabad/"
						target="_blank"
						rel="noopener noreferrer"
						class=" text-black dark:text-gray-400 hover:text-teal-400 transition-colors"
					>
						<Linkedin />
					</a>
				</div>
			</div>

			<!-- Theme Switch -->
			<div class="flex flex-col items-center md:items-start">
				<h3 class="mb-4 text-lg font-semibold text-teal-900 dark:text-teal-400">Theme</h3>
				<ThemeSwitch />
			</div>
		</div>

		<div class="mt-8 flex items-center justify-center border-t border-gray-700 pt-8">
			<p class="text-sm text-black dark:text-gray-400">
				&copy; {new Date().getFullYear()} BBH-MLRITM. Made with <Heart class="inline h-4 w-4 text-red-500" /> by
				the BBH-MLRITM team
			</p>
		</div>
	</div>
</footer>
