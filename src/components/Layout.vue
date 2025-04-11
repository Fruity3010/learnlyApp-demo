<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
      <Navbar :currentStep="currentStep" :totalSteps="totalSteps" @updateStep="updateStep" />
      <div class="content">
        <slot></slot> 
      </div>
    </div>
  </template>
  
  <script setup>
  import Navbar from './navBar.vue';
  import { defineProps, defineEmits } from 'vue';

  defineProps({
    currentStep: Number,
    totalSteps: Number
  });
  
  const emit = defineEmits(['updateStep']); 
  
  const updateStep = (step) => {
    emit('updateStep', step);
  };
  </script>
  
  <style scoped>
  .content {
    padding: 0rem 2rem;
    background-color: #6bc2ff;
    min-height: 100vh;
  }
  </style>
  