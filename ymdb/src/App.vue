<template>
  <div id="app" class="app">
    <c-header headline="YMDb"></c-header>
    
    <div class="app__nav">
      <span v-for="link in links" :key="link.to">
        <router-link :to="link.to">{{ link.text }}</router-link> 
        <span v-if="link.to != '/help'"> | </span>
      </span>
    </div>

    <router-view/>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      links: [
        {
          text: 'Home',
          to: '/',
        },
        {
          text: 'Task',
          to: '/task',
        },
        {
          text: 'Help',
          to: '/help',
        }
      ]
    };
  }
}
</script>

