<template>
  <div class="persona">
    <div class="content">
      <div class="text">
        <h2>Persona 2: Hardcore User - Jordan Lee</h2>
        <ul>
          <li><strong>Age:</strong> 30</li>
          <li><strong>Occupation:</strong> Software developer</li>
          <li><strong>Gaming Style:</strong> Dedicated trophy/achievement hunter</li>
          <li><strong>Tech-Savviness:</strong> High, familiar with advanced features on websites</li>
        </ul>
        <h3>Back Story</h3>
        <p>Jordan is a dedicated gamer who loves the challenge of completing every trophy and achievement in a game. They pride themselves on 100% completion and are always looking for new games to conquer. They have a full-time job as a software developer, but gaming is their primary hobby, and they dedicate many hours to achieving completion in the games they play.</p>

        <h3>Frustrations</h3>
        <ul>
          <li>Guides that are too vague or missing key information</li>
          <li>Having to switch between multiple sources to get the full picture</li>
          <li>Difficulty in tracking which achievements they’ve completed</li>
        </ul>

        <h3>Motivations</h3>
        <ul>
          <li>Wants detailed, step-by-step guides with pro tips</li>
          <li>Enjoys tracking their progress and planning the best route to 100% completion</li>
          <li>Loves the challenge of completing difficult or hidden achievements</li>
        </ul>

        <h3>Ideal Experience</h3>
        <p>Jordan wants a comprehensive guide that covers every aspect of an achievement, including hidden and difficult ones. The guide should offer pro tips, time estimates, and the ability to track which achievements have been completed. The interface should allow for easy navigation between different achievements.</p>
      </div>
      <div class="image">
        <img src="../assets/jordan.webp" alt="Jordan Lee" />
      </div>
    </div>
    <router-link to="/scenario2">View Scenario 2</router-link>
  </div>
</template>

<style scoped>
.persona {
}

.content {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.text {
  width: 60%;
}

.image {
  width: 30%;
}

img {
  width: 100%;
  border-radius: 8px;
}
</style>
