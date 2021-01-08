<template>
  <transition name="post">
    <article v-if="post" class="post">
      <header class="post__header">
        <h2 class="post__title">{{ title }}</h2>

        <h3 class="post__meta">
          by
          <router-link class="post__author" to="/">{{ author }}</router-link>
          <span class="post__sep"></span>
          <time>{{ pretty(published) }}</time>
        </h3>

        <blockquote class="post__subtitle">{{ description }}</blockquote>
      </header>

      <section class="post__body rte" v-html="content"></section>
    </article>
  </transition>
</template>

<script>
export default {
  name: "Posts",
  props: {
    post: String
  },
  data() {
    return {
      title: "",
      author: "",
      content: "",
      published: "",
      description: ""
    };
  }
};
</script>

<style scoped></style>
