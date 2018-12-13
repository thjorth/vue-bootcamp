<template>
    <form>
        <div class="search text-left">
            <label class="label" for="test10">[get this value from props]</label>
            <div class="input input-fullWidth">
                <input id="search-term" v-model="term" placeholder="[get this value from props]" type="text"/>
            </div>
        </div>
    </form>
</template>

<script>

export default {
    name: 'c-search',
    props: [
        'placeholder',
        'label',
    ],
    data: function() {
        return {
            term: '',
        };
    },
}
</script>
