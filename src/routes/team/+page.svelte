<script lang="ts">
    import type { PageData } from './$types';
    
    // Import team member images
    import atchyuteswarImg from '$lib/assets/team/atchyuteswar.jpg';
    import shivaniImg from '$lib/assets/team/shivani.jpg';
    import defaultImg from '$lib/assets/team/default.jpg';
    import vishnuImg from '$lib/assets/team/vishnu.jpg';
    import jayasriImg from '$lib/assets/team/jayasri.jpg';

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
</script>

<main class="min-h-screen bg-gradient-to-b from-gray-800 to-gray-900 dark:from-gray-900 dark:to-black">
    <section class="px-4 py-16">
        <div class="container mx-auto">
            <h1 class="mb-12 text-center text-4xl font-bold text-gray-900 dark:text-white">Our Team</h1>
            <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {#each teamMembers as member}
                    <div class="flex flex-col items-center">
                        <div class="group relative mb-4 h-48 w-48 overflow-hidden rounded-full transition-transform hover:scale-105">
                            <img
                                src={member.image}
                                alt={member.name}
                                class="h-full w-full object-cover transition-opacity group-hover:opacity-90"
                            />
                            <div class="absolute bottom-0 flex w-full justify-center space-x-2 bg-black/50 p-2 opacity-0 transition-opacity group-hover:opacity-100">
                                <a
                                    href={member.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="text-white hover:text-blue-400"
                                >
                                    <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                    </svg>
                                </a>
                                <a
                                    href={member.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="text-white hover:text-gray-300"
                                >
                                    <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                    </svg>
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