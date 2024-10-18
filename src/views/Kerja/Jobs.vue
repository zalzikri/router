<template>
  <h1>List of Jobs</h1>
  <div v-if="jobs.length">
    <div class="job-container" v-for="job in jobs" :key="job.id">
      <!-- Provide a route for each job's details -->
      <router-link :to="{ name: 'jobdetail', params: { id: job.id } }">
        <h2>{{ job.title }}</h2>
      </router-link>
    </div>
  </div>
  <div v-else>
    <p>Loading jobs.....</p> <!-- Message if there are no jobs -->
  </div>
</template>


<script>
export default {
  data() {
    return {
      jobs: []
    };
  },
  mounted() {
    fetch('http://localhost:3000/jobs')
      .then(res => res.json())
      .then(data => {
        this.jobs = data;
      })
      .catch(err => console.log(err.message));
  }
}
</script>


<style scoped>
#app {
font-family: Arial, sans-serif;
text-align: center;
margin-top: 40px;
}

/* Use deep selector to target the router-link component's rendered anchor tag */
::v-deep a {
color: black;
text-decoration: none;
}

::v-deep a:hover,
::v-deep a:focus,
::v-deep a:active {
color: purple;
text-decoration: none;
outline: none;
}

.job-container {
  width: 500px;
  margin: 10px auto;
  border: 10px solid gray;
  padding: 10px;
  border-radius: 5px;
}
</style>