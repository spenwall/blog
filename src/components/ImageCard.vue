<template>
  <div>
    <div @click="openInfo" class="shadow flex flex-col relative">
      <div
        class="transition absolute z-10 w-12 h-12 top-0 border-4 border-white hover:bg-blue-800 right-0 m-2 flex justify-center items-center rounded-full"
        :class="color"
      >
        <font-awesome class="text-white" :icon="['fas', 'question']" />
      </div>
      <div class="sw-card-height text-md relative flex flex-col justify-between items-center">
        <div class="flex flex-col justify-center flex-grow">
          <g-image :src="image" alt="project" />
        </div>
        <transition name="info-transition">
          <div
            v-if="info"
            class="bg-white absolute top-0 pr-16 w-full h-full p-3 overflow-hidden"
          >
            <slot></slot>
          </div>
        </transition>
        <div :class="color" class="h-14 text-white text-sm lg:text-lg w-full p-4 z-10">
          <div v-html="title"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      default: "bg-blue-500"
    },
    image: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    }
  },
  data: function() {
    return {
      info: false
    };
  },
  methods: {
    openInfo() {
      this.info = !this.info;
    }
  }
};
</script>

<style>
.sw-card-height {
  height: 450px;
}
.info-transition-enter-active,
.info-transition-leave-active {
  transition: all 0.5s ease-in-out;
}

.info-transition-enter,
.info-transition-leave-to {
  height: 0px;
}
</style>
