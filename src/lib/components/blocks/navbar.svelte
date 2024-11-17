<script lang="ts">
	import ThemeSwitch from './ThemeSwitch.svelte';
	import { page } from '$app/stores';
	import { Button } from '$lib/components/ui/button';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import { Github, Menu } from 'lucide-svelte';
	import FooterLogo from '$lib/assets/footer-logo.png';
	import logo from "$lib/assets/logo.png"

	// home, events,team,photobooth
	const menuItems = [
		{ name: 'Home', href: '/' },
		{ name: 'Events', href: '/events' },
		{ name: 'Team', href: '/team' },
		{ name: 'Photobooth', href: '/photobooth' },
	];

	// Reactive statement to determine if the current route matches the item
	let isActive = (item: string) => {
		const routeId = $page.url.pathname;
		if (item === 'Home' && routeId == '/') {
			return true;
		} else {
			return routeId && (`/${item}` === routeId || routeId.includes(item.toLowerCase()));
		}
	};

	let show = $state(false);
</script>

<nav class="border-gray-700 bg-white-800 dark:bg-gray-900">
	<div class="flex flex-wrap items-center justify-around p-4">
		<!-- Logo -->
		<a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
			<div class="flex items-center text-lg font-semibold text-white">
					<img src={FooterLogo} alt="BBH-MLRITM Logo" class="h-10 w-50" />
			</div>
		</a>
		<!-- End of Logo -->
		<div class="flex items-center space-x-3 md:order-2 md:mx-0 md:space-x-0">
			<div class="px-2">
				<ThemeSwitch />
			</div>
			<Button
				data-collapse-toggle="navbar-user"
				variant="ghost"
				size="icon"
				class="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-black hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-gray-600 dark:text-gray-400 md:hidden"
				aria-controls="navbar-user"
				onclick={() => (show = !show)}
				aria-expanded="false"
			>
				<span class="sr-only">Open main menu</span>

				<Menu aria-hidden="true" />
			</Button>
		</div>
		<div
			class={` w-full items-center justify-between md:order-1 md:flex md:w-auto ${show ? 'block' : 'hidden'}`}
			id="navbar-user"
		>
			<ul
				class="mt-4 flex flex-col rounded-lg border border-gray-700 p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:p-0"
			>
				{#each menuItems as item}
					<li>
						<a
							href={item.href}
							class={`${isActive(item.name) ? 'block rounded bg-teal-700 px-3 py-2 capitalize text-white md:bg-transparent md:p-0 md:text-teal-700 md:dark:text-teal-500' : 'block rounded px-3 py-2 text-black hover:bg-gray-700 hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-teal-400'}`}
							aria-current={isActive(item.name) ? 'page' : undefined}>{item.name}</a
						>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</nav>
