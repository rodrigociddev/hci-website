<template>
  <div class="about">
    <h2>About This Project</h2>
    <p>
      This is my website for the CAP4104 Human-Computer Interaction project in Fall of 2024. I built this site using Vue.js as an expansion on vanilla HTML, JavaScript, and CSS, integrating some quality-of-life features for easier development. This was a solo project, so I handled all the UI/UX design and implementation, as well as the overall website structure and functionality.
    </p>

    <h3>Intro To The Project</h3>
    <p>
      Trophies (also called achievements depending on platform) are a way that video games track progress as well as certain accomplishments/secrets as the user plays through the game. The vast majority of gamers are casual gamers and thus do not really pay attention to these, but some gamers enjoy collecting all the trophies for their favorite games which can be a very long and difficult endeavor. Because of the difficulty of this, people create online and video guides on how to accomplish some of these, but the resources are sparse and inconsistent. The aim of this application, called TrophyHunter, is to create an all-in-one platform to easily convey the knowledge needed to complete and track trophies.
    </p>
  </div>
</template>

<script>
export default {
  name: 'AppAbout'
};
</script>

<style scoped>
.about {
  font-family: Arial, sans-serif;
  padding: 20px;
  text-align: center;
}
</style>