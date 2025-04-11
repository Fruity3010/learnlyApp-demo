<template>
    <div v-if="visible" class="toast" :class="type">
      <p>{{ message }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      message: {
        type: String,
        required: true,
      },
      type: {
        type: String,
        required: true,
      },
      duration: {
        type: Number,
        default: 3000,
      },
    },
    data() {
      return {
        visible: false,
      };
    },
    watch: {
      message() {
        if (this.message) {
          this.showToast();
        }
      },
    },
    methods: {
      showToast() {
        this.visible = true;
        setTimeout(() => {
          this.visible = false;
        }, this.duration);
      },
    },
  };
  </script>
  
  <style scoped>
  .toast {
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #333;
    color: white;
    padding: 15px;
    border-radius: 8px;
    font-size: 16px;
    z-index: 1000;
    opacity: 0.9;
    transition: opacity 0.3s ease;
  }
  
  .toast.correct {
    background-color: #28a745;
  }
  
  .toast.incorrect {
    background-color: #dc3545;
  }
  
  .toast p {
    margin: 0;
  }
  </style>
  