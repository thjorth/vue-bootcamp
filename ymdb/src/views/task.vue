<template>
    <div class="task text-left">
        <h2>Task</h2>
        <p>
            Let's make sure that our search results are not lost when click the back button from a movie view. To do that we will use vuex to persist
            the search result when navigating between the different views. Vuex is also what you use whenever you need to share data across multiple
            components.
        </p>
        <ol>
            <li>Look at the /src/store.js file. This store was created by vue-cli - I have just added a few things to it</li>
            <li>The store is already added to Vue so inside every Vue component the store can be accessed as <em>this.$store</em></li>
            <li>
                Modify the search function so it calls the commit method on the store and invokes the <em>setSearchResult</em> mutation
                and supplies the array holding the search results as a parameter.
            </li>
            <li>
                Use <em>mapGetters</em> to map the <em>getSearchResult</em> getter on the store into the <em>computed</em> property on 
                the Vue component. This will make getSearchResult a reactive getter that you can bind your ui to.
            </li>
            <li>
                <strong>Bonus points:</strong> use <em>mapMutations</em> from <em>vuex</em> to map the setter into the methods property on
                the Vue component. Now you can just call that method when setting the search result instead of having to use 
                <em>this.$store.commit('setSearchResult', result)</em>
            </li>
            <li>Modify the UI so the list of search results is rendered based on the mapped getter instead of the data property</li>
        </ol>
    </div>
</template>