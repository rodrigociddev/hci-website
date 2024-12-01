<template>
  <div id="app" class="layout">
    <!-- Sidebar Navigation -->
    <nav :class="['sidebar', { collapsed: isCollapsed }]">
      <div class="sidebar-header">
        <button class="toggle-btn" @click="toggleSidebar">
          <img
            :src="isCollapsed ? require('@/assets/collapse.webp') : require('@/assets/collapse.webp')"
            alt="Toggle Sidebar"
            class="toggle-icon"
          />
        </button>
        <h1 v-if="!isCollapsed">HCI Project</h1>
        <h2 v-if="!isCollapsed">Rodrigo Lopes</h2>
      </div>
      <ul v-if="!isCollapsed">
        <li class="project-title">
          <router-link to="/project-home">Project Demo</router-link>
        </li>
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
        <br />
      </ul>
    </nav>

    <!-- Main Content Area -->
    <div class="main-content" :style="{ marginLeft: isCollapsed ? '60px' : '250px' }">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      isCollapsed: false, // Sidebar collapsed state
    };
  },
  watch: {
    $route(to) {
      // Automatically collapse or expand the sidebar based on the route
      const collapsedRoutes = ["/project-home", "/project-search", "/game/1" , "/game/2" , "/game/3" , "/game/4" , "/game/5"]; // Add project-related routes here
      this.isCollapsed = collapsedRoutes.includes(to.path);
    },
  },
  created() {
    // Check the initial route on load
    const collapsedRoutes = ["/project-home", "/project-search", "/game/1" , "/game/2" , "/game/3" , "/game/4" , "/game/5"]; // Add project-related routes here
    this.isCollapsed = collapsedRoutes.includes(this.$route.path);
  },
  methods: {
    toggleSidebar() {
      this.isCollapsed = !this.isCollapsed;
    },
  },
};
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

.sidebar img {
  padding-bottom: 10px;
  position: absolute;
  left: 15px;
  top: 20px;
}

/* Sidebar Styles */
.sidebar {
  width: 250px;
  background-color: #c0c1ff;
  padding: 20px;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  z-index: 1;
  border-right: 1px solid #000000;
  transition: width 0.3s;
}

.sidebar.collapsed {
  width: 60px;
  overflow: hidden;
}

.sidebar h1,
.sidebar h2 {
  margin: 0;
  margin-top: 2vh;
}

.sidebar h1 {
  font-weight: 3000;
  color: #333;
}

.sidebar h2 {
  font-size: medium;
  font-weight: 3500;
  color: #333;
  border-bottom: 1px solid #000000;
}

/* Toggle Button */
.toggle-btn {
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-top: 10px;
}

.toggle-icon {
  width: 24px; /* Adjust size as needed */
  height: 24px;
}

.toggle-btn:hover .toggle-icon {
  transform: scale(1.1);
  transition: transform 0.2s ease-in-out;
}

/* Sidebar links styling */
.sidebar ul {
  list-style-type: none;
  padding: 0;
  margin: 20px 0;
}

.sidebar ul li {
  margin: 10px 0;
}

.sidebar ul li a {
  text-decoration: none;
  font-family: 'Courier New', Courier, monospace;
  font-weight: 500;
  color: #333;
}

.sidebar ul li a:hover {
  font-weight: 700;
  color: #000;
}

.project-title {
  font-size: 20px;
  font-weight: 600;
}

body,
html {
  margin: 0;
  padding: 0;
  background-color: #1a1a2e;
  height: 100%;
  overflow-x: hidden;
}

/* Main Content Styles */
.main-content {
  flex-grow: 1;
  padding: 0px;
  margin: 0px;
  overflow-y: auto;
  transition: margin-left 0.3s;
}
</style>
