<script lang="ts">
    import type { PageData } from './$types';

    let { data }: { data: PageData } = $props();

    // Dummy data for TILs
    const tils = [
        {
            id: 1,
            title: "Orientation Day & Workshop",
            description: "An Orientation Day & Workshop to get you started with Blockchain technology. You will learn to make a wallet and its functions, abilities and how to use it.",
            tags: ["Python", "Backend", "Workshop"],
            author: "Rohan Sharon",
            date: "November 23, 2024",
            status: "Open",
            difficulty: "Workshop",
            img: "https://media.licdn.com/dms/image/v2/D5603AQHLEy5Js7Q-ew/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1718484227248?e=1737590400&v=beta&t=FszE3jA24ra7y_-g4k0nI9y0Z3BQlMAfIelL8FRAtao"
        }
        // {
        //     id: 2,
        //     title: "React State Management with Zustand",
        //     description: "Explore a simple yet powerful state management solution for React applications using Zustand. Learn about advanced patterns, middleware, and performance optimization techniques for large-scale applications. We'll dive deep into creating custom stores, implementing middleware for logging and persistence, handling async actions, integrating with React Query, and managing complex state shapes. You'll also learn about state splitting strategies, devtools integration, and how to handle real-time updates with WebSocket integration. This comprehensive guide will help you master modern state management in React applications.",
        //     tags: ["React", "JavaScript", "State Management", "Frontend"],
        //     author: "Jane Smith",
        //     date: "March 20, 2024",
        //     status: "Open",
        //     difficulty: "Advanced"
        // },
        // {
        //     id: 3,
        //     title: "Docker Containerization Basics",
        //     description: "Get started with Docker containers and learn how to containerize your applications for consistent deployment. This comprehensive guide covers everything from basic concepts to advanced deployment strategies. You'll learn about container orchestration with Docker Compose, multi-stage builds for optimal image sizes, networking between containers, volume management for persistent data, security best practices, and how to set up continuous integration pipelines with Docker. We'll also explore container monitoring, logging solutions, and how to deploy containers to various cloud platforms including AWS, Google Cloud, and Azure.",
        //     tags: ["Docker", "DevOps", "Containers"],
        //     author: "Mike Johnson",
        //     date: "March 25, 2024",
        //     status: "Open",
        //     difficulty: "Beginner"
        // },
        // {
        //     id: 4,
        //     title: "Machine Learning with TensorFlow",
        //     description: "Introduction to building and training neural networks using TensorFlow for image classification tasks. We'll cover data preprocessing, model architecture design, training optimization, and deployment strategies in detail. This comprehensive course includes hands-on projects working with convolutional neural networks (CNNs), transfer learning with pre-trained models, data augmentation techniques, and model deployment to production environments. You'll learn about TensorFlow's advanced features including distributed training, model quantization for mobile deployment, TensorBoard for visualization, and how to handle large datasets efficiently. By the end, you'll be able to build and deploy sophisticated machine learning models for real-world applications.",
        //     tags: ["ML", "Python", "TensorFlow", "AI"],
        //     author: "Sarah Wilson",
        //     date: "April 1, 2024",
        //     status: "Open",
        //     difficulty: "Advanced"
        // },
        // {
        //     id: 5,
        //     title: "GraphQL API Development",
        //     description: "Learn to build efficient APIs using GraphQL and understand its advantages over REST. This comprehensive guide covers schema design, resolvers, mutations, subscriptions, and advanced topics like authentication and caching. We'll explore how to handle complex data relationships, implement real-time features with subscriptions, optimize query performance, and set up proper error handling. You'll also learn about integrating GraphQL with various databases, implementing pagination, handling file uploads, and deploying GraphQL APIs to production. Advanced topics include implementing DataLoader for batching and caching, handling authentication and authorization, and setting up automated testing for your GraphQL API.",
        //     tags: ["GraphQL", "API", "Backend", "Node.js"],
        //     author: "Alex Brown",
        //     date: "April 5, 2024",
        //     status: "Open",
        //     difficulty: "Intermediate"
        // }
    ];

    // Track expanded state for each TIL
    let expandedStates = new Array(tils.length).fill(false);

    function toggleDescription(index: number) {
        expandedStates[index] = !expandedStates[index];
    }
</script>

<main class="min-h-screen bg-gray-50 py-12 dark:bg-gray-900">
    <div class="container mx-auto px-4">
        <div class="mb-12 text-center">
            <h1 class="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
                Upcoming Events
            </h1>
            <p class="text-lg text-gray-600 dark:text-gray-300">
                Explore our upcoming events and learn from industry experts.
            </p>
        </div>
        
        <div class="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {#each tils as til, index}
                <div class="group z-0 overflow-hidden rounded-xl bg-white p-6 shadow-md transition-all dark:bg-gray-800 md:hover:z-10 md:hover:scale-125 md:hover:shadow-xl">
                    <div class="mb-4 flex items-center justify-between">
                        <span class="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800 dark:bg-green-900 dark:text-green-100">
                            {til.status}
                        </span>
                        <span class="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-100">
                            {til.difficulty}
                        </span>
                    </div>
                    
                    <h3 class="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                        {til.title}
                    </h3>
                    
                    <div class="relative">
                        <p class="mb-4 line-clamp-3 text-gray-600 dark:text-gray-300 md:group-hover:line-clamp-none md:group-hover:text-xs">
                            {til.description}
                        </p>
                       
                    </div>
                    
                    <div class="mb-4 flex flex-wrap gap-2">
                        {#each til.tags as tag}
                            <span class="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700 dark:bg-gray-700 dark:text-gray-300">
                                {tag}
                            </span>
                        {/each}
                    </div>
                    
                    <div class="mt-6 flex items-center justify-between">
                        <div class="flex items-center space-x-2">
                            <div>
                                <img src={til.img} alt="Author" class="h-8 w-8 rounded-full" />
                            </div>
                            <div>
                                <p class="text-sm font-medium text-gray-900 dark:text-white">{til.author}</p>
                                <p class="text-xs text-gray-500 dark:text-gray-400">{til.date}</p>
                            </div>
                        </div>
                        <button class="rounded-full bg-blue-600 px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:hover:bg-blue-500">
                            <a target="_blank" href="https://lu.ma/n92xl3an">Apply</a>
                        </button>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</main>

<style>
    .line-clamp-3 {
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
</style>