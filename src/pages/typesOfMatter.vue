<template>
  <div class="card-center-title">
    <h1 class="Title">Tap Card to discover the states of matter</h1>
  </div>

  <div class="wrapper">
    <div class="card-container">
      <div v-for="(item, index) in cardData" :key="index" class="card-item">
        <FlipCard>
          <template #front>
            <div class="card-front">
              <div class="card-center">
                <i :class="item.front.icon" class="card-icon"></i>
                <h3>{{ item.front.title }}</h3>
              </div>
            </div>
          </template>

          <template #back>
            <div class="card-back">
              <div class="card-center-back">
                <h3>{{ item.back.title }}</h3>
                <p>{{ item.back.description }}</p>
              </div>
            </div>
          </template>
        </FlipCard>
      </div>
    </div>
  </div>
  <div class="card-center">
   <button class="next-button" @click="$emit('updateStep', 2)">NEXT</button>

  </div>
</template>

<script>
import FlipCard from "../components/flippingCard/flippingCard.vue";

export default {
  components: {
    FlipCard,
  },
  data() {
    return {
      cardData: [
        {
          front: {
            icon: "fas fa-square",
            title: "Solid",
          },
          back: {
            title: "What is Solid?",
            description:
              "Solids have a fixed shape and volume. The particles are tightly packed and only vibrate in place.",
          },
        },
        {
          front: {
            icon: "fa-solid fa-droplet ",
            title: "Liquid",
          },
          back: {
            title: "What is Liquid?",
            description:
              "Liquids have a fixed volume but take the shape of their container. The particles are closely packed but can move past each other.",
          },
        },
        {
          front: {
            icon: "fas fa-cloud",
            title: "Gas",
          },
          back: {
            title: "What is Gas?",
            description:
              "Gases have neither a fixed shape nor volume. The particles are spread out and move freely.",
          },
        },
        {
          front: {
            icon: "fas fa-bolt",
            title: "Plasma",
          },
          back: {
            title: "What is Plasma?",
            description:
              "Plasma is a state of matter where the particles are charged. It is found in stars and lightning.",
          },
        },
      ],
    };
  },
};
</script>

<style scoped>
.wrapper {
  display: flex;
  margin-top: 1rem;
  justify-content: center;
  align-items: center;
  z-index: -1;
}

.card-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  justify-items: center;
}
.card-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #ffffff;
}
.card-center {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.card-center-title {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
}
.card-center-back {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
}
.card-item {
  width: 12.5rem;
  height: 18.75rem;
}
.Title {
  color: #0a4a80;
  font-size: 2rem;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}
.next-button {
  padding: 1.75rem 1.5rem;
  background-color: #ffffff;
  color: rgb(3, 34, 92);
  font-size: 1rem;
  width: 16rem;
  font-weight: 600;
  margin: 1rem;
  border: none;
  border-radius: 7px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}
@media (max-width: 48rem) {
  .Title {
    font-size: 0.9rem;
  }
  .card-container {
    gap: 0px;
  }
  .card-item {
  width: 12.5rem;
  height: 18.75rem;
}
}
</style>


