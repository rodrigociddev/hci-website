<template>
    <header class="top-bar">
      <div class="header-left" @click="goHome">
        <img src="@/assets/trophy-icon.png" alt="Trophy Icon" class="project-icon" />
        <div class="header-title">TrophyHunter</div>
      </div>
      <div class="header-right">
        <img src="@/assets/profile-icon.png" alt="Profile Icon" class="profile-icon" />
      </div>
    </header>
  </template>
  
  <script>
  export default {
    name: "TopBar",
    methods: {
      goHome() {
        this.$router.push("/project-home");
      },
    },
  };
  </script>
  
  <style scoped>
  /* Top Bar Styles */
  .top-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #2a2a4a;
    padding: 10px 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
    cursor: pointer;
  }
  
  .header-left {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  
  .header-title {
    font-size: 24px;
    font-weight: bold;
    color: white;
  }
  
  .project-icon {
    width: 40px;
    height: 40px;
  }
  
  .header-right {
    display: flex;
    align-items: center;
  }
  
  .profile-icon {
    width: 40px;
    height: 40px;
    cursor: pointer;
  }
  </style>
  