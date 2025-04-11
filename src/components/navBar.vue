<template>
  <nav class="navbar">
    <div class="logo">{{ logoText }}</div>

    <div class="steps">
      <div
        v-for="n in totalSteps"
        :key="n"
        class="step-bar"
        :class="{ active: n <= currentStep }"
      ></div>
    </div>
  </nav>
</template>

<script setup>
import { defineProps, defineEmits, defineExpose, computed } from 'vue';


const props = defineProps({
  currentStep: {
    type: Number,
    required: true
  },
  totalSteps: {
    type: Number,
    required: true
  }
});


const logoText = computed(() => {
  if (props.currentStep === 1) return 'Lesson 1.1';
  if (props.currentStep === 2) return 'Lesson 2.1';
  return 'Learnly';
});

const emit = defineEmits(['updateStep']);

const nextStep = () => {
  if (props.currentStep < props.totalSteps) {
    emit('updateStep', props.currentStep + 1);
  }
};

const previousStep = () => {
  if (props.currentStep > 1) {
    emit('updateStep', props.currentStep - 1);
  }
};

defineExpose({
  nextStep,
  previousStep
});
</script>


<style scoped>
.navbar {
  display: flex;
  position: sticky;
  top: 0;
  z-index: 10;
  align-items: center;
  justify-content: space-between;
  background-color: #007BFF;
  padding: 1rem 2rem;
  color: white;
}
.logo {
  font-size: 1.25rem;
  font-weight: bold;
}
.steps {
  display: flex;
  gap: 0.5rem;
}
.step-bar {
  width: 6rem;
  height: 0.5rem;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 4px;
}
.step-bar.active {
  background-color: #ffffff;
}
</style>