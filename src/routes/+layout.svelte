<script lang="ts">
	import { ModeWatcher } from "mode-watcher";
	import '../app.css';
	import Navbar from "$lib/components/blocks/navbar.svelte";
	import Footer from "@/components/blocks/footer.svelte";
	let { children } = $props();
</script>


<ModeWatcher />

<Navbar />
{@render children()}

<Footer/>