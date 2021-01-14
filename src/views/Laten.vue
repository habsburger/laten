<template>
  <main class="blog" :class="{ 'blog--reading': this.post }">
    <navbar :content="content" :filters="filters" :navs="navs"></navbar>
    <flow :filters="filters"></flow>
    <post :post="post"></post>
    <Footer></Footer>
  </main>
</template>

<script>
// @ is an alias to /src

import Navbar from "@/components/blog/Navbar";
import Footer from "@/components/blog/Footer";
import Flow from "@/components/blog/Flow";
import Post from "@/components/blog/Post";

export default {
  name: "Home",
  components: { Post, Flow, Footer, Navbar },
  data() {
    return {
      navs: 0,
      title: "Laten",
      labels: {
        post: "",
        author: "Song"
      }
    };
  },
  props: {
    post: String,
    author: String
  },
  computed: {
    content() {
      return { title: this.title, labels: this.labels };
    },
    filters() {
      let filters = {};
      if (this.post) filters.post = this.post;
      if (this.author) filters.author = this.author;
      return filters;
    }
  },
  watch: {
    "$route.name"(to, from) {
      if (to !== from) this.navs++;
    }
  },
  beforeMount() {}
};
</script>
