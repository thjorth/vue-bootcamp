<template>
    <div class="c-view task text-left" key="task">
        <h2>Task</h2>
        <p>
            Now let's add some transitions to make it all more interesting. First we will animate the transitions between the different router views. After that we will 
            add an overlay that will animate into view showing a large poster from the movie.
        </p>
        <ol>
            <li>Place a transition tag around a the <em>router-view</em> tag and give it the name <em>slider</em></li>
            <li>
                Now create the styles for the six different animation classes that are applied during the animation cycle.<br/>
                <ul>
                    <li>
                        <em>slide-enter-active</em> will be applied all the time the activation animation is playing.<br/>
                    </li>
                    <li>
                        <em>slide-enter</em> defines the style properties that are animated <strong>from</strong> while the element is being activated.<br/>
                    </li>
                    <li>
                        <em>slide-enter-to</em> defines the style properties that are animated <strong>to</strong> while the element is being de-activated.<br/>
                    </li>
                    <li>
                        <em>slide-leave-active</em> will be applied all the time the de-activation animation is playing.<br/>
                    </li>
                    <li>
                        <em>slide-leave</em> defines the style properties that are animated <strong>from</strong> during de-activation of the element<br/>
                    </li>
                    <li>
                        <em>slide-leave-to</em> defines the style properties that are animated <strong>to</strong> during de-activation of the element<br/>
                    </li>
                    <li>
                        <a href="https://vuejs.org/v2/guide/transitions.html" target="_blank">Read more about animations</a>
                    </li>
                </ul>
            </li>
            <li>
                For the poster, add an element in bottom of the movie component add a v-if attribute that is hooked up to a boolean data attribute on the component.
                Make sure that attribute is initialized to be null.
            </li>
            <li>
                Add a link or button to the movie component and hook its click event up to a method on the component. Implement that method so a click sets the 
                boolean to <em>true</em>
            </li>
            <li>
                Create markup for the poster inside the element you just added. Make sure you add an image tag with the poster image url that is availabe
                in the movie component.
            </li>
            <li>
                Style the element and its contents so it acts like an overlay and takes up the whole screen (or whatever you prefer)
            </li>
            <li>
                Add a link or button inside the overlay and hook it up to a method that sets the boolean to false.
            </li>
            <li>
                Wrap the element in a <em>transition</em> tag and set its name to <em>overlay</em>
            </li>
            <li>
                Create six animation classes named overlay-enter-active, overlay-enter, overlay-enter-to, overlay-leave-active, overlay-leave, overlay-leave-to 
                and implement css rules to make the element slide in from the bottom of the page when activated, and slide out of the bottom of the 
                when de-activated.
            </li>
        </ol>
    </div>
</template>