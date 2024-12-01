<template>
  <div class="project-search">
    <!-- Top Bar -->
    <TopBar />

    <!-- Main Content -->
    <main class="main-content">
      <!-- Favorites Section -->
      <section class="favorites-section">
        <h2>Favorites</h2>
        <div class="divider"></div>
        <div v-if="favoriteGames.length">
          <div
            class="game-row"
            v-for="game in favoriteGames"
            :key="game.id"
            @click="goToGamePage(game.id)"
          >
            <h3>{{ game.title }}</h3>
            <p>{{ game.category }}</p>
            <p>Achievements: {{ countCompletedAchievements(game) }}/{{ game.achievements.length }}</p>
          </div>
        </div>
      </section>

      <!-- All Games Section -->
      <section class="all-games-section">
        <h2>All</h2>
        <div class="divider"></div>
        <div v-if="filteredGames.length">
          <div
            class="game-row"
            v-for="game in filteredGames"
            :key="game.id"
            @click="goToGamePage(game.id)"
          >
            <h3>{{ game.title }}</h3>
            <p>{{ game.category }}</p>
            <p>Achievements: {{ countCompletedAchievements(game) }}/{{ game.achievements.length }}</p>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import { gameData } from "@/data/gameData";
import TopBar from "@/components/TopBar.vue";

export default {
  name: "ProjectSearch",
  components: {
    TopBar,
  },
  data() {
    return {
      games: gameData, // Load game data
    };
  },
  computed: {
    favoriteGames() {
      return this.games.filter((game) => game.isFavorite);
    },
    filteredGames() {
      return this.games.filter((game) => !game.isFavorite);
    },
  },
  methods: {
    goToGamePage(gameId) {
      this.$router.push(`/game/${gameId}`);
    },
    countCompletedAchievements(game) {
      return game.achievements.filter((achievement) => achievement.completed).length;
    },
  },
};
</script>

<style scoped>
/* General Layout */
.project-search {
  display: flex;
  flex-direction: column;
  height: 100vh;
  font-family: 'Courier New', Courier, monospace;
  color: white;
  background-color: #1a1a2e;
}

/* Favorites and All Sections */
.favorites-section,
.all-games-section {
  margin-bottom: 30px;
}

h2 {
  font-size: 24px;
  color: #e0e0ff;
  text-align: center;
}

.divider {
  height: 2px;
  background-color: #4a4a7d;
  margin: 10px 0;
}

.game-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #4a4a7d;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.game-row:hover {
  background-color: #2a2a5e;
}

.game-row h3 {
  font-size: 18px;
  padding-left: 20px;
  color: #e0e0ff;
}

.game-row p {
  font-size: 14px;
  padding-right: 20px;
  color: #c0c1ff;
}
</style>
