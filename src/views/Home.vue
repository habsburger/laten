<template>
  <main class="blog">
    <navbar :content="content" :filters="filters" :navs="navs"></navbar>
    <flow :filters="filters"></flow>
    <Footer></Footer>
  </main>
</template>

<script>
// @ is an alias to /src

import Navbar from "@/components/blog/Navbar";
import Footer from "@/components/blog/Footer";
import Flow from "@/components/blog/Flow";

export default {
  name: "Home",
  components: { Flow, Footer, Navbar },
  data() {
    return {
      navs: 0,
      title: "Latent",
      label: {
        post: "",
        author: "Song"
      }
    };
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
  }
};
</script>
