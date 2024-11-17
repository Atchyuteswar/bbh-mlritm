<script lang='ts'>
    import { Motion, useCycle } from "svelte-motion";
    
    export let title = "";
    export let shortDescription = "";
    export let fullDescription = "";
    export let tags: any[] = [];
    export let author = "";
    export let date = "";
    export let difficulty = "";
    export let status = "";
    export let img = "";
    
    let isExpanded = false;
    let rotate = useCycle(0, 90);
    let scale = useCycle(0.75, 1);
    let x = useCycle(0, 140);
    let backgroundColor = useCycle("rgb(31, 41, 55)", "rgb(31, 41, 55)"); 
</script>

<Motion
    animate={{
        scale: $scale,
        backgroundColor: $backgroundColor,
    }}
    transition={{
        duration: 0.3,
    }}
    onTap={() => {
        scale.next();
        backgroundColor.next();
        setTimeout(() => {
        isExpanded = !isExpanded;
        }, 700);
    }}
    let:motion
>
    <div 
        class="relative max-w-md rounded-lg bg-white p-6 shadow-md transition-all duration-300 dark:bg-gray-800"
        use:motion
    >
        <div class="flex items-start gap-4">
           
            <div class="flex-1">
                <div class="flex items-center justify-between">

                    <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                        {title}
                    </h3>
                    <span class="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 dark:bg-blue-400/10 dark:text-blue-400 dark:ring-blue-400/30">
                        {status}
                    </span>
                </div>
                    
                <div class="mt-2 flex flex-wrap gap-2">
                    {#each tags as tag}
                        <span class="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 dark:bg-blue-400/10 dark:text-blue-400 dark:ring-blue-400/30">
                            {tag}
                        </span>
                    {/each}
                </div>
                <p class="mt-2 text-sm text-gray-600 dark:text-gray-300">
                    {isExpanded ? fullDescription : shortDescription}
                </p>
                <div class="mt-4 flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                    {#if img}
                    <img
                        src={img}
                        alt={author}
                        class="mx-3 h-12 w-12 rounded-full object-cover"
                    />
                {/if}
                    <span>{author}</span>
                    <span>{date}</span>
                    <span class="rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-400/10 dark:text-green-400">
                        {difficulty}
                    </span>
                </div>
            </div>
        </div>
    </div>
</Motion>

<style>
    /* Add any additional styles here */
</style>
