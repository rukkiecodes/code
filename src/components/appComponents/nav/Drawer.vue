<template>
  <v-navigation-drawer
    app
    clipped
    id="drawer"
    :width="navigation.width"
    ref="drawer"
    color="#1C1E31"
    v-model="drawer.drawer"
  >
    <Tree />
  </v-navigation-drawer>
</template>

<script>
import Tree from "../Tree.vue";
import { mapState } from "vuex";
import { data } from "vue2-ace-editor";
export default {
  data: () => ({
    navigation: {
      shown: false,
      width: 200,
      borderSize: 2,
    },
  }),
  components: {
    Tree,
  },
  methods: {
    showDrawer() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return (this.drawer.drawer = false);
        case "sm":
          return (this.drawer.drawer = false);
        case "md":
          return (this.drawer.drawer = false);
        case "lg":
          return (this.drawer.drawer = true);
        case "xl":
          return (this.drawer.drawer = true);
      }
    },

    setBorderWidth() {
      let i = this.$refs.drawer.$el.querySelector(
        ".v-navigation-drawer__border"
      );
      i.style.width = this.navigation.borderSize + "px";
      i.style.cursor = "ew-resize";
    },

    setEvents() {
      const minSize = this.navigation.borderSize;
      const el = this.$refs.drawer.$el;
      const drawerBorder = el.querySelector(".v-navigation-drawer__border");
      const vm = this;
      const direction = el.classList.contains("v-navigation-drawer--right")
        ? "right"
        : "left";

      function resize(e) {
        document.body.style.cursor = "ew-resize";
        let f =
          direction === "right"
            ? document.body.scrollWidth - e.clientX
            : e.clientX;
        el.style.width = f + "px";
      }
      drawerBorder.addEventListener(
        "mousedown",
        (e) => {
          if (e.offsetX < minSize) {
            el.style.transition = "initial";
            document.addEventListener("mousemove", resize, false);
          }
        },
        false
      );

      document.addEventListener(
        "mouseup",
        () => {
          el.style.transition = "";
          this.navigation.width = el.style.width;
          document.body.style.cursor = "";
          document.removeEventListener("mousemove", resize, false);
        },
        false
      );
    },
  },
  created() {
    this.showDrawer();
  },
  mounted() {
    this.$nextTick(() => {
      this.showDrawer();

      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return false;
        case "sm":
          return false;
        case "md":
          return false;
        case "lg":
          this.setBorderWidth();
          this.setEvents();
        case "xl":
          this.setBorderWidth();
          this.setEvents();
      }
    });
  },
  computed: {
    ...mapState(["drawer"]),
    direction() {
      return this.navigation.shown === false ? "Open" : "Closed";
    },
  },
};
</script>
