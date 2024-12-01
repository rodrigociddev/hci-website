<template>
  <div class="game-page">
    <!-- Top Bar -->
    <TopBar />

    <!-- Game Header -->
    <div class="game-header">
      <button class="back-button" @click="$router.push('/project-search')">
        Back to Games
      </button>
      <h1>{{ game.title }}</h1>
      <p>{{ game.category }}</p>
      <p class="achievement-count">
        Achievements Completed: {{ completedAchievements }}/{{ game.achievements.length }}
      </p>
      <a :href="game.video" target="_blank" class="video-link">Watch Game Guide</a>
    </div>

    <!-- Achievements Section -->
    <section class="achievements">
      <h2>Achievements</h2>
      <div class="divider"></div>
      <div
        v-for="achievement in game.achievements"
        :key="achievement.id"
        class="achievement-row"
      >
        <input
          type="checkbox"
          v-model="achievement.completed"
          @change="updateCompletedCount"
        />
        <div class="achievement-details">
          <h3>{{ achievement.name }}</h3>
          <p><strong>Description:</strong> {{ achievement.description }}</p>
          <p><strong>Guide:</strong> {{ achievement.guide }}</p>
          <a :href="achievement.video" target="_blank" class="video-link">
            Watch Achievement Guide
          </a>
        </div>
        <div class="mini-divider"></div>
      </div>
    </section>
  </div>
</template>

<script>
import { gameData } from "@/data/gameData";
import TopBar from "@/components/TopBar.vue";

export default {
  name: "GamePage",
  components: {
    TopBar,
  },
  data() {
    return {
      game: null,
      completedAchievements: 0,
    };
  },
  
  created() {
    const gameId = parseInt(this.$route.params.id, 10);
    this.game = gameData.find((game) => game.id === gameId);
    this.updateCompletedCount(); // Initialize the completed count
  },
  methods: {
    updateCompletedCount() {
      this.completedAchievements = this.game.achievements.filter(
        (achievement) => achievement.completed
      ).length;
    },
  },
};
</script>


<style scoped>
/* General Layout */
.game-page {
  color: white;
  background-color: #1a1a2e;
  min-height: 100vh;
}


.header-left {
  display: flex;
  align-items: center;
  gap: 10px;
}

.header-title {
  font-size: 20px;
  font-weight: bold;
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

/* Game Header */
.game-header {
  text-align: center;
  margin-bottom: 30px;
}

.game-header h1 {
  font-size: 32px;
  color: #e0e0ff;
}

.game-header p {
  font-size: 18px;
  color: #c0c1ff;
}

.achievement-count {
  margin-top: 10px;
  font-size: 16px;
  color: #a0a0ff;
}

.video-link {
  color: #6a6abf;
  text-decoration: none;
}

.video-link:hover {
  text-decoration: underline;
}

.back-button {
  display: inline-block;
  margin: 20px auto;
  padding: 10px 20px;
  background-color: #4a4a7d;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s ease;
}

.back-button:hover {
  background-color: #6a6abf;
}

/* Achievements Section */
.achievements {
  margin-top: 20px;
  padding-bottom: 40px;
}

.achievements h2 {
  text-align: center;
}

.divider {
  height: 2px;
  background-color: #4a4a7d;
  margin: 10px 0;
}

.mini-divider {
  height: 2px;
  background-color: #4a4a7d;
  margin: 10px 0;
}

.achievement-row {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  margin-left: 40px;
}

.achievement-row input[type="checkbox"] {
  margin-right: 30px;
}

.achievement-details h3 {
  font-size: 18px;
  color: #e0e0ff;
}

.achievement-details p {
  font-size: 14px;
  color: #c0c1ff;
}
</style>
