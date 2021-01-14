<template>
  <transition-group tag="ul" :name="transition" class="blog__feed">
    <li v-for="post in feed" class="preview" :key="post.id">
      <figure
        class="preview__figure"
        :class="figureClass"
        :style="getBgImg(post.image)"
      >
        <transition name="v--fade">
          <figcaption v-if="!reading" class="preview__details">
            <router-link
              class="preview__title"
              :to="`/post/${post.id}`"
              @click.native="scroll(0, 220, scrollDelay)"
            >
              {{ post.title }}
            </router-link>

            <div class="preview__meta">
              <time class="preview__published">
                {{ pretty(post.published) }}
              </time>

              <router-link
                class="preview__author"
                to="/"
                @click.native="scroll(0, 220, scrollDelay)"
              >
                {{ post.author }}
              </router-link>
            </div>
          </figcaption>
        </transition>
      </figure>
    </li>
  </transition-group>
</template>

<script>
import { pretty } from "@/plugins/utils/pretty";
import { scroll } from "@/plugins/utils/scroll";
import { isMobile } from "@/plugins/device";

export default {
  name: "Flow",
  props: {
    filters: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      posts: [
        {
          id: "5a4fa15249d70ca34b0000dd",
          title: "How to Install and Deploy This Template",
          author: "song",
          image:
            "https://imgix.cosmicjs.com/e2aa6260-9c1a-11e8-ab14-4dbdf8b00519-netlify.png",
          published: "2018-01-05T16:01:22.011Z"
        },
        {
          id: "5a4fa15249d70ca3490000dd",
          title: "How to Install and Deploy This Template",
          author: "song",
          image:
            "https://imgix.cosmicjs.com/7f787a60-ebcb-11e7-a759-f9eda9745d97-pexels-photo-748777.jpeg",
          published: "2018-01-05T16:01:22.011Z"
        },
        {
          id: "5a4fa15249d70ca34b00001d",
          title: "How to Install and Deploy This Template",
          author: "song",
          image:
            "https://imgix.cosmicjs.com/f456a320-ebc6-11e7-84a7-7367c605d42b-pexels-photo-577585.jpeg",
          published: "2018-01-05T16:01:22.011Z"
        },
        {
          id: "5a4fa15249d70ca34b4000dd",
          title: "How to Install and Deploy This Template",
          author: "song",
          image:
            "https://imgix.cosmicjs.com/e2aa6260-9c1a-11e8-ab14-4dbdf8b00519-netlify.png",
          published: "2018-01-05T16:01:22.011Z"
        }
      ],
      transition: "preview-appear"
    };
  },
  computed: {
    reading() {
      return this.filters.post;
    },
    scrollDelay() {
      return this.isMobile() ? 0 : 560;
    },
    figureClass() {
      return { "preview__figure--mobile": this.isMobile() && this.reading };
    },
    feed() {
      const filterBy = {
        post: (filter, { id }) => filter === id,
        author: (filter, { author }) => filter === author
      };

      if (!Object.keys(this.filters).length) return this.posts;

      return this.posts.filter(post => {
        return Object.keys(this.filters).every(filter => {
          return filterBy[filter](this.filters[filter], post);
        });
      });
    }
  },
  methods: {
    pretty,
    scroll,
    isMobile,
    getBgImg(src) {
      return { backgroundImage: `url(${src})` };
    }
  }
};
</script>

<style scoped></style>
