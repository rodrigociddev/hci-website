<template>
  <div class="persona">
    <div class="content">
      <div class="text">
        <h2>Persona 1: Casual User - Alex Martinez</h2>
        <ul>
          <li><strong>Age:</strong> 25</li>
          <li><strong>Occupation:</strong> College student, part-time retail worker</li>
          <li><strong>Gaming Style:</strong> Plays video games to relax, often sticks to one or two favorite titles</li>
          <li><strong>Tech-Savviness:</strong> Moderate, familiar with basic web navigation and search functions</li>
        </ul>
        <h3>Back Story</h3>
        <p>Alex is a busy college student who plays video games casually during their free time. They tend to stick with
          one or two favorite titles and play them to relax after a long day of work or studying. Achievements and
          trophies are fun but not something they’re obsessive about. Occasionally, they’ll want to unlock a specific
          achievement just for fun or to show off to friends.</p>

        <h3>Frustrations</h3>
        <ul>
          <li>Long, complicated guides that are difficult to follow</li>
          <li>Having to scroll through a lot of unnecessary information</li>
          <li>Not being able to quickly find the achievement they’re looking for</li>
        </ul>

        <h3>Motivations</h3>
        <ul>
          <li>Wants a quick and simple guide to unlock a specific achievement</li>
          <li>Enjoys showing off unique achievements to friends</li>
          <li>Likes to feel a sense of accomplishment without too much effort</li>
        </ul>

        <h3>Ideal Experience</h3>
        <p>A simple and clean interface that allows Alex to quickly search for a game, find the achievement they want,
          and get straightforward steps on how to obtain it. The guide should be concise, and the navigation should be
          intuitive.</p>
      </div>
      <div class="image">
        <img src="../assets/alex.jpg" alt="Alex Martinez" />
      </div>
    </div>
    <router-link to="/scenario1">View Scenario 1</router-link>
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
