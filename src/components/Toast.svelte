<script>
    import { createEventDispatcher } from 'svelte';
    import { fly } from 'svelte/transition';

    import CloseIcon from './CloseIcon.svelte';

    export const id = 0;
    export let text;
    export let type;

    const TYPES_CLASSES = new Map([
        ['success', 'bg-green-200'],
        ['error', 'bg-red-200'],
    ]);

    const dispatch = createEventDispatcher();

    function dismissToast() {
        dispatch('dismiss');
    }
</script>

<article
    transition:fly={{ x: 200, duration: 400 }}
    class={`${TYPES_CLASSES.get(type)} px-2 py-3 mb-2 flex items-center transition-transform`}>
    <p class="flex-grow">{text}</p>

    <button title="Close" on:click={dismissToast} class="focus:outline-none">
        <CloseIcon />
    </button>
</article>
