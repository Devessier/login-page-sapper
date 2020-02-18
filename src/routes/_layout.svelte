<script>
    import Nav from '../components/Nav.svelte';
    import ToastsContainer from '../components/ToastsContainer.svelte';

    export let segment;
</script>

<Nav {segment} />

<ToastsContainer />

<main class="container mx-auto">
    <slot />
</main>
