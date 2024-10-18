<template>
  <div class="home">
    <h1>Homepage</h1>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam illum aspernatur cumque totam, facere numquam voluptate unde ullam voluptatem? Inventore totam eum quam quia quasi possimus accusamus iusto ipsam laborum rem? Praesentium tempore provident reprehenderit eum corrupti est eius labore magni alias corporis nulla, dolor quam, sapiente doloribus quo unde exercitationem possimus dignissimos repellat cum. Harum fuga, vel adipisci quam consectetur mollitia voluptates voluptatibus dolores molestiae ab minus voluptatem dolore dolorum numquam quod distinctio officia veritatis aut maiores beatae suscipit! Perferendis accusantium quod odit deleniti optio tempora at aut vel itaque quibusdam possimus ipsum quasi explicabo quo aliquid, molestias animi.</p>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam illum aspernatur cumque totam, facere numquam voluptate unde ullam voluptatem? Inventore totam eum quam quia quasi possimus accusamus iusto ipsam laborum rem? Praesentium tempore provident reprehenderit eum corrupti est eius labore magni alias corporis nulla, dolor quam, sapiente doloribus quo unde exercitationem possimus dignissimos repellat cum. Harum fuga, vel adipisci quam consectetur mollitia voluptates voluptatibus dolores molestiae ab minus voluptatem dolore dolorum numquam quod distinctio officia veritatis aut maiores beatae suscipit! Perferendis accusantium quod odit deleniti optio tempora at aut vel itaque quibusdam possimus ipsum quasi explicabo quo aliquid, molestias animi.</p>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  mounted() {
    // Push a new state to the history stack and replace the current one to effectively clear the history
    window.history.pushState(null, null, window.location.href);
    window.history.replaceState(null, null, window.location.href);
  }
}
</script>

