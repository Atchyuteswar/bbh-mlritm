<script lang="ts">
    import type { PageData } from './$types';

    import pica1 from '$lib/assets/orientation-day/1.jpeg';
    import pica2 from '$lib/assets/orientation-day/2.jpeg';
    import pica3 from '$lib/assets/orientation-day/3.jpeg';
    import pica4 from '$lib/assets/orientation-day/4.jpeg';
    import pica5 from '$lib/assets/orientation-day/5.jpeg';
    import pica6 from '$lib/assets/orientation-day/6.jpeg';
    import pica7 from '$lib/assets/orientation-day/7.jpeg';
    import pica8 from '$lib/assets/orientation-day/8.jpeg';
    import pica9 from '$lib/assets/orientation-day/9.jpeg';
    import pica10 from '$lib/assets/orientation-day/10.jpeg';
    import pica11 from '$lib/assets/orientation-day/11.jpg';
    import pica12 from '$lib/assets/orientation-day/12.jpeg';
    import pica13 from '$lib/assets/orientation-day/13.jpeg';
    import pica14 from '$lib/assets/orientation-day/14.jpeg';
    import pica15 from '$lib/assets/orientation-day/15.jpeg';
    import pica16 from '$lib/assets/orientation-day/16.jpeg';
    import pica17 from '$lib/assets/orientation-day/17.jpeg';
    import pica18 from '$lib/assets/orientation-day/18.jpeg';
    import pica19 from '$lib/assets/orientation-day/19.jpeg';
    import pica20 from '$lib/assets/orientation-day/20.jpeg';
    import pica21 from '$lib/assets/orientation-day/21.jpeg';
    import pica22 from '$lib/assets/orientation-day/22.jpeg';
    import pica23 from '$lib/assets/orientation-day/23.jpg';
    import pica24 from '$lib/assets/orientation-day/24.jpg';
    import pica25 from '$lib/assets/orientation-day/25.jpg';
    import pica26 from '$lib/assets/orientation-day/26.jpg';
    import pica27 from '$lib/assets/orientation-day/27.jpg';
    import pica28 from '$lib/assets/orientation-day/28.jpg';
    import pica29 from '$lib/assets/orientation-day/29.jpg';
    import pica30 from '$lib/assets/orientation-day/30.jpg';
    import pica31 from '$lib/assets/orientation-day/31.jpg';
    import pica32 from '$lib/assets/orientation-day/32.jpg';
    import pica33 from '$lib/assets/orientation-day/33.jpg';
    import pica34 from '$lib/assets/orientation-day/34.jpg';
    import pica35 from '$lib/assets/orientation-day/35.jpg';
    import pica36 from '$lib/assets/orientation-day/36.jpg';
    import pica37 from '$lib/assets/orientation-day/37.jpeg';
    import pica38 from '$lib/assets/orientation-day/38.jpg';
    import pica39 from '$lib/assets/orientation-day/39.jpg';
    import pica40 from '$lib/assets/orientation-day/40.jpg';
    import pica41 from '$lib/assets/orientation-day/41.jpg';
    import pica42 from '$lib/assets/orientation-day/42.jpg';
    import pica43 from '$lib/assets/orientation-day/43.jpg';
    import pica44 from '$lib/assets/orientation-day/44.jpg';
    import pica45 from '$lib/assets/orientation-day/45.jpg';
    import pica46 from '$lib/assets/orientation-day/46.jpg';
    import pica47 from '$lib/assets/orientation-day/47.jpg';
    import pica48 from '$lib/assets/orientation-day/48.jpg';
    import pica49 from '$lib/assets/orientation-day/49.jpg';
    import pica50 from '$lib/assets/orientation-day/50.jpg';
    import pica51 from '$lib/assets/orientation-day/51.jpg';
    import pica52 from '$lib/assets/orientation-day/52.jpg';
    import pica53 from '$lib/assets/orientation-day/53.jpg';
    import pica54 from '$lib/assets/orientation-day/54.jpeg';


    let { data }: { data: PageData } = $props();

    // Sample photo data with different aspect ratios
    const photos = [
        { url: pica1, alt: 'Photo 1' },
        { url: pica2, alt: 'Photo 2' },
        { url: pica3, alt: 'Photo 3' },
        { url: pica4, alt: 'Photo 4' },
        { url: pica5, alt: 'Photo 5' },
        { url: pica6, alt: 'Photo 6' },
        { url: pica7, alt: 'Photo 7' },
        { url: pica8, alt: 'Photo 8' },
        { url: pica9, alt: 'Photo 9' },
        { url: pica10, alt: 'Photo 10' },
        { url: pica11, alt: 'Photo 11' },
        { url: pica12, alt: 'Photo 12' },
        { url: pica13, alt: 'Photo 13' },
        { url: pica14, alt: 'Photo 14' },
        { url: pica15, alt: 'Photo 15' },
        { url: pica16, alt: 'Photo 16' },
        { url: pica17, alt: 'Photo 17' },
        { url: pica18, alt: 'Photo 18' },
        { url: pica19, alt: 'Photo 19' },
        { url: pica20, alt: 'Photo 20' },
        { url: pica21, alt: 'Photo 21' },
        { url: pica22, alt: 'Photo 22' },
        { url: pica23, alt: 'Photo 23' },
        { url: pica24, alt: 'Photo 24' },
        { url: pica25, alt: 'Photo 25' },
        { url: pica26, alt: 'Photo 26' },
        { url: pica27, alt: 'Photo 27' },
        { url: pica28, alt: 'Photo 28' },
        { url: pica29, alt: 'Photo 29' },
        { url: pica30, alt: 'Photo 30' },
        { url: pica31, alt: 'Photo 31' },
        { url: pica32, alt: 'Photo 32' },
        { url: pica33, alt: 'Photo 33' },
        { url: pica34, alt: 'Photo 34' },
        { url: pica35, alt: 'Photo 35' },
        { url: pica36, alt: 'Photo 36' },
        { url: pica37, alt: 'Photo 37' },
        { url: pica38, alt: 'Photo 38' },
        { url: pica39, alt: 'Photo 39' },
        { url: pica40, alt: 'Photo 40' },
        { url: pica41, alt: 'Photo 41' },
        { url: pica42, alt: 'Photo 42' },
        { url: pica43, alt: 'Photo 43' },
        { url: pica44, alt: 'Photo 44' },
        { url: pica45, alt: 'Photo 45' },
        { url: pica46, alt: 'Photo 46' },
        { url: pica47, alt: 'Photo 47' },
        { url: pica48, alt: 'Photo 48' },
        { url: pica49, alt: 'Photo 49' },
        { url: pica50, alt: 'Photo 50' },
        { url: pica51, alt: 'Photo 51' },
        { url: pica52, alt: 'Photo 52' },
        { url: pica53, alt: 'Photo 53' },
        { url: pica54, alt: 'Photo 54' },
    ];
</script>

<svelte:head>
    <title>Photo Gallery - Big Blockers - MLRITM</title>
    <meta name="description" content="Explore memories from Big Blockers Hyderabad events, workshops, and community gatherings. See our blockchain community in action through our photo gallery." />
    <meta name="keywords" content="BBH photos, MLRITM events gallery, blockchain community, event pictures, Big Blockers memories" />
    <meta property="og:title" content="Photo Gallery - Big Blockers Hyderabad MLRITM" />
    <meta property="og:description" content="Browse through our collection of memories from Big Blockers Hyderabad events and community gatherings." />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://bbh-mlritm.com/photobooth" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Photo Gallery - Big Blockers Hyderabad MLRITM" />
    <meta name="twitter:description" content="Browse through our collection of memories from Big Blockers Hyderabad events and community gatherings." />
</svelte:head>



<main class="min-h-screen p-4 bg-gradient-to-b from-white to-white dark:from-gray-900 dark:to-black">
    <h1 class="mb-8 text-3xl font-bold text-black dark:text-white text-center">Photo Gallery</h1>
    <div class="container mx-auto">
        <h1 class="mb-8 text-2xl font-bold text-black dark:text-white">Orientation Day & workshops ( 21st November 2024 ) :</h1>
        <div class="columns-1 gap-4 sm:columns-2 md:columns-3 lg:columns-4 [&>div:not(:first-child)]:mt-4">
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