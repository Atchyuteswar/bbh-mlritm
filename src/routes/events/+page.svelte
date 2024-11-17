<script lang="ts">
    import { tils } from '@/index';
    import CyclingThroughStates from '@/components/CyclingThroughStates.svelte';

</script>

<main class="min-h-screen bg-gray-50 py-12 dark:bg-gray-900">
    <div class="container mx-auto px-4">
        <div class="mb-12 text-center">
            <h1 class="mb-4 text-4xl font-bold text-gray-900 dark:text-white">Events</h1>
            <p class="text-lg text-gray-600 dark:text-gray-300">
                Join our upcoming events and workshops to learn and grow together.
            </p>
        </div>

        <div class="flex flex-row md:flex-col md:gap-8">
            {#each tils as til}
                <CyclingThroughStates
                    title={til.title}
                    shortDescription={til.description.slice(0, 100) + '...'}
                    fullDescription={til.description}
                    tags={til.tags}
                    author={til.author}
                    date={til.date}
                    status={til.status}
                    difficulty={til.difficulty}
                    img={til.img}
                />
            {/each}
        </div>
    </div>
</main>
