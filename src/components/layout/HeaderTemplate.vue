<template>
  <header>
    <div class="site-title">
      <h1>Algorithms Animated</h1>
      <div>Easily visualize and understand algorithms and data structures</div>
    </div>
    <nav class="nav-bar pure-menu pure-menu-horizontal">
      <ul class="nav-bar-list pure-menu-list">
        <li class="pure-menu-item pure-menu-has-children pure-menu-allow-hover">
          <span>Sorting algorithms</span> 
          <ul class="pure-menu-children">
            <li class="pure-menu-item"><router-link class="pure-menu-link"  to="/sorting-algorithms/selection-sort">Selection sort</router-link></li>
            <li class="pure-menu-item"><router-link class="pure-menu-link" to="/">Bubble sort</router-link></li>
            <li class="pure-menu-item"><router-link class="pure-menu-link"  to="/">Quicksort</router-link></li>
          </ul>
        </li>
        <li class="pure-menu-item">Graph algorithms</li>
        <li class="pure-menu-item pure-menu-has-children pure-menu-allow-hover">
          <span>Data structures</span>
          <ul class="pure-menu-children">
            <li class="pure-menu-item"> <router-link class="pure-menu-link" to="/">Linked list</router-link> </li>
            <li class="pure-menu-item"><router-link class="pure-menu-link" to="/">Hashmap</router-link> </li>
            <li class="pure-menu-item"><router-link class="pure-menu-link" to="/">Tree</router-link></li>
          </ul>
        </li>
        <li class="pure-menu-item">String algorithms</li>
        <li class="pure-menu-item">About</li>
      </ul>
    </nav>
  </header>
</template>
<script>
export default {
    name: "HeaderTemplate",
};
</script>
<style scoped>

.nav-bar {
  background-color: var(--clr-complementary-300);
}
.nav-bar-list {
  display: flex;
  justify-content: space-evenly;
  padding: 1.8rem;
}

.site-title {
  text-align: center;
}
</style>
