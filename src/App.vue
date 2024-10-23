<template>
  <div id="app" class="layout">

    <!-- Sidebar Navigation -->
    <nav class="sidebar">
        <div class="sidebar-header">
          <h1>HCI Project</h1>
          <h2>Rodrigo Lopes</h2>
        </div>
        <ul>
          <li><router-link to="/">About</router-link></li>
          <li><router-link to="/research">Research</router-link></li>
          <li><router-link to="/persona1">Persona 1</router-link></li>
          <li><router-link to="/persona2">Persona 2</router-link></li>
          <li><router-link to="/scenario1">Scenario 1</router-link></li>
          <li><router-link to="/scenario2">Scenario 2</router-link></li>
          <li><router-link to="/moodboard">Moodboard</router-link></li>
          <li><router-link to="/storyboard">Storyboard</router-link></li>
          <li><router-link to="/flowchart">Flowchart</router-link></li>
          <li><router-link to="/wireframes">Wireframes</router-link></li>
          <li><router-link to="/gui">GUI</router-link></li>
          <li><router-link to="/prototypes">Prototypes</router-link></li>
        </ul>
    </nav>

    <!-- Main Content Area -->
    <div class="main-content">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style scoped>
* {
  font-family: 'Courier New', Courier, monospace;
}

/* Layout for sidebar and main content */
.layout {
  display: flex;
  height: 100vh;
  overflow: hidden;
}

/* Sidebar Styles */
.sidebar {
  width: 250px;
  /* Fixed width for sidebar */
  background-color: #c0c1ff;
  padding: 20px;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  z-index: 1;
  border-right: 1px solid #000000;

}

.sidebar h1 {
  text-decoration: none;
  font-weight: 3000;
  font-family: 'Courier New', Courier, monospace;
  color: #333;
}

.sidebar h2 {
  text-decoration: none;
  font-family: 'Courier New', Courier, monospace;
  font-size: medium;
  font-weight: 3500;
  color: #333;
  border-bottom: 1px solid #000000;

}

/* Main Content Styles */
.main-content {
  flex-grow: 1;
  /* Allows the main content to take up remaining space */
  margin-left: 250px;
  /* Offset for the sidebar width */
  padding: 20px;
  overflow-y: auto;
  /* Ensure scrolling if content overflows */
}

/* Sidebar links styling */
.sidebar ul {
  list-style-type: none;
  padding: 0;
}

.sidebar ul li {
  margin: 10px 0;
}

.sidebar ul li a {
  text-decoration: none;
  font-family: 'Courier New', Courier, monospace;
  font-weight: 500;
  color: #333;
  font-weight: 500;
}

.sidebar ul li a:hover {
  font-weight: 700;
  color: #000;
}
</style>
