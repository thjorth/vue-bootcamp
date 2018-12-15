<template>
    <div class="task text-left">
        <h2>Task</h2>
        <p>
            It is time to add some ratings to our movie detail view. For that purpose, a couple of useful functions have been added to the movie service. 
            <em>getRatings</em> will fetch the ratings for a given movie while <em>postRating</em> will post a rating for a given movie. Ratings ranging
            from 0 to 10 (both values included) are accepted by the server.
        </p>
        <ol>
            <li>Import the two new methods from /src/services/movie.js. Use the<br/><em><strong>import</strong> { method1, method2 } <strong>from</strong> './path/to/file.js';</em><br/>form.</li>
            <li>
                In the <em>mounted</em> hook add an async call to <em>getRatings</em> and console log the returned value out. <strong>Hint:</strong>
                The ratings database is almost empty but some disturbed individual has already put a bunch of votes on The House That Jack Built so 
                use that title for testing purposes.
            </li>
            <li>Create a UI that can render out the ratings on the movie view. You can do it as a separate component ot just simply add it to the movie.vue component template.</li>
            <li>The create a UI that can be used for selecting your own rating including a button to submit the rating.</li>
            <li>Create a <em>submitRating</em> method on the Vue component and hook the button to submit ratings up to it</li>
            <li>In that method make an async call to the <em>postRating</em> method from the movie service. This method takes the id of the movie and the rating as an integer as parameters</li>
            <li>Once done, you can start rating different movies.</li>
        </ol>
    </div>
</template>