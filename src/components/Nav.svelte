<script>
    import NavItem from './NavItem.svelte';

    export let segment;

    const links = [
        {
            text: 'Home',
            link: '/',
            expectedSegment: undefined,
        },
        {
            text: 'Sign in',
            link: '/sign-in',
            expectedSegment: 'sign-in',
        },
    ];
</script>

<nav class="w-full px-4 py-2 border-b border-gray-800">
    <ul class="flex items-center">
        {#each links as { text, link, expectedSegment }, index}
            <NavItem
                lastItem={index === links.length - 1}
                selected={segment === expectedSegment}
                {link}
                {text} />
        {/each}
    </ul>
</nav>
