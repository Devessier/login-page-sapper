<script>
    import { toasts } from '../stores';
    import Input from '../components/Input.svelte';

    let username = '';
    let password = '';

    function submit(e) {
        e.preventDefault();

        toasts.trigger({
            text: 'The form has been not sent successfully',
        });
    }
</script>

<svelte:head>
    <title>Sign In</title>
</svelte:head>

<section class="mt-5 p-2 max-w-lg rounded sm:border mx-auto">
    <header class="text-center">
        <h2 class="text-2xl">Sign In</h2>
    </header>

    <form class="w-full flex flex-col items-center" on:submit={submit}>
        <Input
            bind:value={username}
            label="Username"
            placeholder="Francis"
            autocomplete="username" />
        <Input
            bind:value={password}
            label="Password"
            placeholder="******"
            type="password"
            autocomplete="current-password" />

        <button
            class="w-full mt-3 py-1 px-2 rounded bg-green-500 text-white
            focus:outline-none"
            type="submit">
            Submit
        </button>
    </form>
</section>
