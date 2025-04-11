<template>
    <div class="flip-card" @click="toggleFlip" :class="{ flipped: isFlipped }">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <slot name="front"></slot>
        </div>
        <div class="flip-card-back">
          <slot name="back"></slot>
        </div>
      </div>
    </div>
  </template>
  <script>
  export default {
    data() {
      return {
        isFlipped: false,
      };
    },
    methods: {
      toggleFlip() {
        this.isFlipped = !this.isFlipped;
      },
    },
  };
  </script>
  
  <style src="./flippingCardStyles.css"></style>
  