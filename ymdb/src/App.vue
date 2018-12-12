<template>
  <div id="app" class="app">
    <c-header headline="YMDb"></c-header>
    
    <div class="app__nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/task">Task</router-link> |
      <router-link to="/help">Help</router-link>
    </div>
    <router-view/>
  </div>
</template>

