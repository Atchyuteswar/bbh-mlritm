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

<footer class="w-full bg-black py-8 text-white">
	<div class="container mx-auto px-4 md:px-6">
		<div class="grid grid-cols-1 gap-8 md:grid-cols-4">
			<!-- Logo and Description -->
			<div class="flex flex-col items-center md:items-start">
				<a href="/" class="flex items-center space-x-2">
					<img src={FooterLogo} alt="BBH-MLRITM Logo" class="h-30 w-60" />
				</a>
				<p class="mt-4 text-sm text-gray-400">
					Empowering students through Blockchain technology and innovation at MLRITM.
				</p>
			</div>

			<!-- Quick Links -->
			<div class="text-center md:text-left">
				<h3 class="mb-4 text-lg font-semibold">Quick Links</h3>
				<ul class="space-y-2">
					{#each menuItems as item}
						<li>
							<a href={item.href} class="text-gray-400 transition-colors hover:text-white">
								{item.name}
							</a>
						</li>
					{/each}
				</ul>
			</div>

			<!-- Contact -->
			<div class="text-center md:text-left">
				<h3 class="mb-4 text-lg font-semibold">Contact</h3>
				<ul class="space-y-2 text-gray-400">
					<li>MLRITM</li>
					<li>Dundigal, Hyderabad, India.</li>
					<li>Phno: +91 77028 50277</li>
					<li>Email: atchyuteswar.gottumukkala@timechainlabs.com</li>
				</ul>
			</div>

			<!-- Social Links -->
			<div class="text-center md:text-left">
				<h3 class="mb-4 text-lg font-semibold">Connect</h3>
				<div class="flex items-center justify-center space-x-4 md:justify-start">
					<a
						href="https://www.linkedin.com/showcase/bigblockers/posts/?feedView=all"
						target="_blank"
						rel="noopener noreferrer"
						class="rounded-md p-3 text-gray-400 transition-colors hover:border-gray-400 hover:bg-teal-400 hover:text-white"
					>
						<Linkedin class="size-6" />
					</a>
					<ThemeSwitch />
				</div>
			</div>
		</div>

		<!-- Copyright -->
		<div class="mt-8 border-t border-gray-800 pt-8 text-center">
			<p class="text-sm text-gray-400">
				&copy; {currentYear} BBH-MLRITM. All rights reserved.
			</p>
		</div>
	</div>
</footer>
