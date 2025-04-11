<template>
  <Layout :currentStep="currentStep" :totalSteps="totalSteps" @updateStep="updateStep">
    <component :is="currentStepComponent" @updateStep="updateStep" />

  </Layout>
</template>

<script setup>
import { ref, computed } from 'vue';
import Layout from './components/Layout.vue';
import StepTwo from './pages/stepOne.vue';
import StepOne from './pages/typesOfMatter.vue';

const totalSteps = 2;
const currentStep = ref(1); 


const updateStep = (step) => {
  if (step >= 1 && step <= totalSteps) {
    currentStep.value = step;
  }
};

const currentStepComponent = computed(() => {
  return currentStep.value === 1 ? StepOne : StepTwo;
});
</script>
