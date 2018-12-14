<template>
    <div class="task text-left">
        <h2>Task</h2>
        <p>
            Now we will create a view where we can see more about a particular movie. We will use the Vue router to handle the navigation,
            and we will modify the search result so we can navigate to the detailed view of the movie. A view is just a Vue component, 
            but it is useful to make the distinction and agree that views (or pages) are Vue components you can navigate to and regular components
            are just building blocks you can use in the different views.
        </p>
        <ol>
            <li>Create a new Vue component in /src/views/. Call it <em>movie.vue</em></li>
            <li>Import the component into the router and add a rule allowing you to navigate to the newly created view/component. Make the router rule respond to <em>/movie</em></li>
            <li>Add an <em>id</em> parameter to the route and make sure the route is configured to pass parameters in as props</li>
            <li>Modify the result list from chapter 2 and insert a router-link in the template so you will navigate to <em>/movie/&lt;imdbId from the search result&gt;</em></li>
            <li>Add an <em>id</em>prop to the movie.vue component. The router will pass the <em>id</em> from the path into the <em>id</em> prop in the movie.vue component</li>
            <li>Import the <em>getDetails</em> function from the movie service into the component</li>
            <li>Add a <em>mounted</em> hook in the component. This will be called whenever the movie component is mounted in the DOM.</li>
            <li>
                Inside the mounted hook, you should make an async call to the <em>getDetails</em> function and supply the <em>id</em> prop as a parameter. This will fetch
                details about the movie and return it as an object. Use console.log to log it out into the console so you can inspect the contents and structure of it
            </li>
            <li>
                Add a data property to the view and once you get the object back from <em>getDetails</em> in the mounted hook, assign the object to that data attribute.
                Now the contents of that object are available to use in the template.
            </li>
            <li>
                Add markup to the template and insert references to the properties in the data object so you can display the details for the movie.
            </li>
        </ol>
    </div>
</template>