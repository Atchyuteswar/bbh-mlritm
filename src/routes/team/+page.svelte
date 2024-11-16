<script lang="ts">
    import type { PageData } from './$types';

    let { data }: { data: PageData } = $props();

    // Team members data
    const teamMembers = [
        {
            name: 'John Doe',
            role: 'Team Lead',
            image: 'https://placehold.co/600x400',
            linkedin: 'https://linkedin.com/johndoe',
            github: 'https://github.com/johndoe'    
        },
        {
            name: 'Jane Smith',
            role: 'Developer',
            image: 'https://placehold.co/600x400',
            linkedin: 'https://linkedin.com/janesmith',
            github: 'https://github.com/janesmith'
        },
        {
            name: 'Mike Johnson',
            role: 'Designer',
            image: 'https://placehold.co/600x400',
            linkedin: 'https://linkedin.com/mikejohnson',
            github: 'https://github.com/mikejohnson'
        },
        // Add more team members as needed
    ];
</script>

<main class="min-h-screen">
    <section class="px-4 py-16">
        <div class="container mx-auto">
            <h1 class="mb-12 text-center text-4xl font-bold">Our Team</h1>
            <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {#each teamMembers as member}
                    <div class="flex flex-col items-center">
                        <div class="mb-4 h-48 w-48 overflow-hidden rounded-full">
                            <a target="_blank" href="{member.linkedin}">
                                <img
                                src={member.image}
                                alt={member.name}
                                class="h-full w-full object-cover"
                                />
                            </a>
                            </div>
                        <h3 class="text-xl font-semibold">{member.name}</h3>
                        <p class="text-gray-600">{member.role}</p>
                    </div>
                {/each}
            </div>
        </div>
    </section>
</main>