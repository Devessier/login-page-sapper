<script>
    const texts = [
        {
            important: true,
            text: 'Welcome !',
        },
        {
            text: 'This website is built with Sapper, Svelte and TailwindCSS.',
        },
        {
            text: 'The only thing you can do is trying to sign in !',
        },
    ];
</script>

<svelte:head>
    <title>Home</title>
</svelte:head>

{#each texts as { important, text }}
    {#if important}
        <h1 class="text-center text-4xl mt-5 mb-3">{text}</h1>
    {:else}
        <p class="text-center text-lg">{text}</p>
    {/if}
{/each}
