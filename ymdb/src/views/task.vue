<template>
    <div class="task text-left">
        <h2>Task</h2>
        <p>
            It is time to hook up the search component to the movie service. Once that is done, expand
            the search component to list the first 10 hits on the page.
        </p>
        <ol>
            <li>Import the search function from the movie service found in /src/services/movie.js</li>
            <li>Add an empty (async) search method to search Vue component</li>
            <li>Make sure that the search method on the component makes an async call to the search function that was imported from the movie service. The search function should be called with the search term as its sole parameter.</li>
            <li>Examine the json structure that is returned by the call to the search function and render an element for each result in the markup</li>
            <li>
                <strong>For bonus points:</strong> Create a searchResultItem.vue component that can render the markup for a single item in the list. Then modify the search
                component to render out one of these item components per item in the result.
            </li>
        </ol>
    </div>
</template>