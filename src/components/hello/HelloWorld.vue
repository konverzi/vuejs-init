<template>
  <div class="hello">
    <h1 class="tx">{{ msg }}</h1>
    {{ $store.state.version }}
    {{ $store.state.data }}

    <input v-model="message" />
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  computed: {
    message: {
      get() {
        return this.$store.state.version;
      },
      set(value) {
        this.$store.commit("SETVERSION", value);
      }
    }
  },
  created() {
    this.crot();

    this.$store.subscribe((mutation, state) => {
      require("consola").info("subs:", mutation, state);
    });
  },
  methods: {
    async crot() {
      await this.$store.dispatch("getinfo", {});
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" src="./HelloWorld.scss"></style>
