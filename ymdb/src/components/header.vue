<template>
    <header>
        <h1 class="headline">{{ headline }}</h1>
    </header>
</template>

<script>

export default {
    name: 'c-header',
    props: {
        headline: {
            type: String,
            required: true,
        },
    }
}
</script>

<style lang="scss" scoped>
.headline {
    font-size: 3em;
}
</style>
