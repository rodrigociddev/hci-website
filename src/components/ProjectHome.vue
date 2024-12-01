<template>
    <div class="project-home">
      <!-- Top Bar -->
      <header class="top-bar">
        <div class="header-left">
          <img src="@/assets/trophy-icon.png" alt="Trophy Icon" class="project-icon" />
          <div class="header-text">TrophyHunter</div>
        </div>
        <div class="auth-buttons">
          <router-link to="/project-search" class="auth-btn">Login</router-link>
          <router-link to="/project-search" class="auth-btn">Register</router-link>
        </div>
      </header>
  
      <!-- Hero Section -->
      <section class="hero-section">
        <div class="hero-overlay">
          <div class="hero-text">
            <h1>Track Every Achievement</h1>
            <p>
              TrophyHunter is your ultimate companion for tracking video game achievements
              and trophies. Stay organized, explore guides, and celebrate your gaming milestones
              all in one place.
            </p>
            <router-link to="/project-search" class="explore-btn">Start Exploring</router-link>
          </div>
        </div>
      </section>
  
      <!-- Search Bar -->
      <section class="search-section">
        <input
          type="text"
          v-model="searchQuery"
          placeholder="Search for a game..."
          class="search-bar"
        />
        <div v-if="searchResults.length > 0" class="search-popup">
          <div
            v-for="game in searchResults"
            :key="game.id"
            class="search-item"
            @click="goToGamePage(game.id)"
          >
            {{ game.title }}
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  import { gameData } from "@/data/gameData"; // Import the shared game data
  
  export default {
    name: "ProjectHome",
    data() {
      return {
        searchQuery: "",
        games: gameData, // Load game data
      };
    },
    computed: {
      searchResults() {
        const query = this.searchQuery.toLowerCase();
        if (!query) return [];
        return this.games.filter((game) =>
          game.title.toLowerCase().includes(query)
        );
      },
    },
    methods: {
      goToGamePage(gameId) {
        this.$router.push(`/game/${gameId}`); // Navigate to the game's page
      },
    },
  };
  </script>
  
  <style scoped>
  /* Remove page margins */
  body, html {
    margin: 0;
    padding: 0;
    background-color: #2a2a4a;
    height: 100%;
    overflow-x: hidden;
  }
  
  /* Overall Layout */
  .project-home {
    display: flex;
    flex-direction: column;
    height: 90vh;
    font-family: 'Courier New', Courier, monospace;
    color: white;
    background-color: #1a1a2e;
  }
  
  /* Top Bar Styles */
  .top-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #2a2a4a;
    color: white;
    padding: 10px 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  }
  
  .header-left {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  
  .project-icon {
    width: 40px;
    height: 40px;
  }
  
  .header-text {
    font-size: 24px;
    font-weight: bold;
  }
  
  .auth-buttons {
    display: flex;
    gap: 10px;
  }
  
  .auth-btn {
    background-color: #4a4a7d;
    color: white;
    border: none;
    padding: 5px 15px;
    font-size: 14px;
    border-radius: 4px;
    text-decoration: none;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .auth-btn:hover {
    background-color: #6a6abf;
  }
  
  /* Hero Section */
  .hero-section {
    position: relative;
    flex-grow: 1;
    background: url('@/assets/hero-background.png') no-repeat center center/cover;
  }
  
  .hero-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(26, 26, 46, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  
  .hero-text {
    max-width: 600px;
  }
  
  .hero-text h1 {
    font-size: 48px;
    margin-bottom: 15px;
    color: #e0e0ff;
  }
  
  .hero-text p {
    font-size: 18px;
    margin-bottom: 20px;
    line-height: 1.5;
  }
  
  .explore-btn {
    background-color: #6a6abf;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    border-radius: 4px;
    text-decoration: none;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .explore-btn:hover {
    background-color: #8484d9;
  }
  
  /* Search Section */
  .search-section {
    background-color: #2a2a4a;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
  }
  
  .search-bar {
    width: 80%;
    max-width: 600px;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #4a4a7d;
    border-radius: 4px;
    background-color: #1a1a2e;
    color: white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }
  
  .search-bar:focus {
    outline: none;
    border-color: #6a6abf;
    box-shadow: 0 2px 6px rgba(106, 106, 191, 0.5);
  }
  
  /* Search Popup */
  .search-popup {
    position: absolute;
    top: 60px;
    width: 80%;
    max-width: 600px;
    background-color: #1a1a2e;
    border: 1px solid #4a4a7d;
    border-radius: 4px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.5);
    z-index: 10;
  }
  
  .search-item {
    padding: 10px;
    color: #e0e0ff;
    border-bottom: 1px solid #4a4a7d;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .search-item:last-child {
    border-bottom: none;
  }
  
  .search-item:hover {
    background-color: #2a2a5e;
  }
  </style>
  