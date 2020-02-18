<script>
    export let value = '';
    export let label = '';
    export let placeholder = '';
    export let type = 'text';
    export let autocomplete = 'off';
</script>

<label class="block mb-2 w-full">
    {#if label}
        <p class="font-medium text-base mb-1">{label}</p>
    {/if}

    <input
        {value}
        {placeholder}
        {type}
        {autocomplete}
        on:input={({ target: { value: text } }) => (value = text)}
        class="w-full py-1 px-2 border-b-2 border-green-300
        focus:border-green-400 transition-colors duration-150 outline-none
        text-gray-700" />
</label>
