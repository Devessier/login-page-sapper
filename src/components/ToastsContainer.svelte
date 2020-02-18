<script>
    import { toasts } from '../stores';
    import Toast from './Toast.svelte';

    function dismissToast(id) {
        toasts.dismiss(id);
    }
</script>

<style lang="scss">
    .toast-container {
        @media (min-width: 768px) {
            width: 300px;
        }
    }
</style>

<section class="toast-container absolute top-0 right-0 max-w-full mt-2 mx-2">
    {#each $toasts as { id, text, type } (id)}
        <Toast {type} {text} on:dismiss={() => dismissToast(id)} />
    {/each}
</section>
