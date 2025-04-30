<template>
  <div id="app">
    <router-view />
    <nav style="position: fixed; bottom: 0; right: 0;">
      <RouterLink to="/index"><span style="color:white;font-size:x-large"><</span></RouterLink>
      <RouterLink to="/graph"><span style="color:white;font-size:x-large">></span></RouterLink>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
#app {
  width: 100vw;
  height: 100vh;
  background-color: #020308;
  overflow: hidden;
}
</style>
