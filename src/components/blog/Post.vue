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
import { pretty } from "@/plugins/utils/pretty";

export default {
  name: "Post",
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
  },
  methods: {
    pretty
  },
  beforeMount() {
    // if (!this.post) return;
    this.title = "How To Install And Deploy This Template";
    this.author = "song";
    this.content =
      "Guide to installing and deploying this template in seconds\n" +
      "\n" +
      "A simple Vue.js template for creating a fast, beautiful blog on Netlify with a continuous deployment workflow and Cosmic JS CMS for content editing.\n" +
      "\n" +
      "This template provides blog, blog posts, authors and elegant modern design ready to deploy on Netlify in one click!\n" +
      "\n" +
      "Getting Started\n" +
      "\n" +
      "Below are steps to deploy your application to Netlify and integrate with Cosmic JS for content editing.\n" +
      "\n" +
      "1. Deploy to Netlify\n" +
      "Click the button below to deploy this application to Netlify. By default, it will be connected to the a demo Cosmic JS Bucket.";
    this.published = "2018-01-05T16:01:22.011Z";
    this.description = "caonima";
  }
};
</script>

<style scoped></style>
