<script>
    export let lastItem = false;
    export let selected = false;
    export let link = '/';
    export let text = '';
</script>

<style lang="scss">
    .nav-link {
        > a {
            position: relative;
            display: inline-block;

            &::after {
                content: '';
                position: absolute;

                bottom: 2px;
                left: 0;
                width: 100%;
                height: 13px;

                z-index: -1;
            }

            &.selected::after {
                background-color: #9ae6b5;
            }
        }

        &:hover > a:not(.selected)::after {
            background-color: #9ae6b58c;
        }
    }
</style>

<li class="nav-link px-2 py-1" class:mr-2={!lastItem}>
    <a class:selected class="pb-1" href={link}>{text}</a>
</li>
