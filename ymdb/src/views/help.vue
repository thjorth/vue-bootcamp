<template>
  <div class="about text-left">
    <h2>Help!</h2>
    <p>
      Read about <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import" target="_blank">ES6 import statements</a>. 
      Pay attention to the form <em>import { export1 , export2 } from "module-name";</em> as that allows us to import specific named exports from a 
      module with multiple export statements.
    </p>

    <p>
      A bit on <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function" target="_blank">async functions</a>. Note
      that you use <em>await</em> when calling a function that is defined as <em>async</em>. You cannot use the <em>await</em> keyword unless doing so inside
      a function that is defined as <em>async</em> itself.
    </p>

    <p>
      Breakpoints and step debugging can be unpredictable inside <em>async</em> functions. A good old console.log statement might prove useful when inspecting
      the results returned by the search.
    </p>

    <p>Look in /src/App.vue for an example of how create a v-for construct.</p>
  </div>
</template>
