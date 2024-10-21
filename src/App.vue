<template>
  <div id="app">
    <nav>
      <ul>
        <li><router-link to="/">About</router-link></li>
        <li><router-link to="/research">Research</router-link></li>
        <li><router-link to="/persona1">Persona 1</router-link></li>
        <li><router-link to="/persona2">Persona 2</router-link></li>
        <li><router-link to="/scenario1">Scenario 1</router-link></li>
        <li><router-link to="/scenario2">Scenario 2</router-link></li>
        <li><router-link to="/moodboard">Moodboard</router-link></li>
        <li><router-link to="/flowchart">Flowchart</router-link></li>
        <li><router-link to="/wireframes">Wireframes</router-link></li>
        <li><router-link to="/gui">GUI</router-link></li>
        <li><router-link to="/prototypes">Prototypes</router-link></li>
      </ul>
    </nav>

    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
nav {
  background-color: #333;
  padding: 10px;
}
nav ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
}
nav ul li {
  display: inline;
  margin-right: 10px;
}
nav ul li a {
  color: white;
  text-decoration: none;
  padding: 8px 16px;
  background-color: #444;
  border-radius: 4px;
}
nav ul li a:hover {
  background-color: #555;
}
</style>
