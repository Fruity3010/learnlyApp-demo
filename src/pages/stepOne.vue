<template>
    <div class="card-center-title">
      <h1 class="Title">Answer the questions based on true or false</h1>
    </div>
  
    <div class="card-container">
      <div 
        v-for="(card, index) in cards" 
        :key="index"
        class="card" 
        :class="{ 'active-card': index === currentIndex }"
        :style="getCardStyle(index)"
        v-show="!allCardsAnswered || index === currentIndex"
      >
        <div class="card-header">
          <i class="fas fa-question-circle"></i>
        </div>
        <h3>{{ card.title }}</h3>
        <p>{{ card.description }}</p>
      </div>
      <div v-if="allCardsAnswered" class="score-display">
        <h2>Your score: {{ score }}/{{ cards.length }}</h2>
      </div>
  
      <div v-if="allCardsAnswered" class="try-again">
        <button @click="restartSwipe">Try Again</button>
      </div>
    
      <div class="buttons" v-if="!allCardsAnswered">
        <button @click="swipeLeft" class="left-btn">False</button>
        <button @click="swipeRight" class="right-btn">True</button>
      </div>
      <div v-if="toast.show" :class="['toast', toast.type]">
        <p>{{ toast.message }}</p>
      </div>
    </div>
    <div class="card-center">
   <button class="next-button" @click="$emit('updateStep', 1)">Back</button>

  </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        cardPosition: 0,
        cardRotation: 0,
        currentIndex: 0,
        score: 0,
        cards: [
          { title: 'Question 1', description: 'Is Tinubu President?', correctAnswer: true },
          { title: 'Question 2', description: 'Are we in 2025?', correctAnswer: true },
          { title: 'Question 3', description: 'Is tomorrow the weekend?', correctAnswer: false },
          { title: 'Question 4', description: 'Will I get the job?', correctAnswer: false },
        ],
        toast: {
          show: false,
          message: '',
          type: '',
        }
      };
    },
    computed: {
      allCardsAnswered() {
        return this.currentIndex >= this.cards.length;
      }
    },
    methods: {
      getCardStyle(index) {
        const depthEffect = 15; 
        const offset = (index - this.currentIndex) * -depthEffect; 
        const opacity = 1 - (index - this.currentIndex) * 0.2; 
      
        if (index > this.currentIndex) {
          return {
            transform: `translateY(${offset}px)`,
            zIndex: this.cards.length - index,
            opacity: opacity,
          };
        } else if (index === this.currentIndex) {
          return {
            transform: `translateX(${this.cardPosition}px) rotate(${this.cardRotation}deg)`,
            zIndex: this.cards.length,
            transition: 'transform 0.3s ease',
          };
        } else {
          return { display: 'none' };
        }
      },
      swipeLeft() {
        this.checkAnswer(false);
      },
      swipeRight() {
        this.checkAnswer(true);
      },
      checkAnswer(userAnswer) {
        const currentCard = this.cards[this.currentIndex];
        
        if (userAnswer === currentCard.correctAnswer) {
          this.score++;
          this.showToast('Correct answer!', 'success');
        } else {
          this.showToast('Incorrect answer!', 'error');
        }
        
        this.animateSwipe(userAnswer ? 200 : -200);
      },
      animateSwipe(position) {
        this.cardPosition = position;
        this.cardRotation = position > 0 ? 15 : -15;
      
        setTimeout(() => {
          this.currentIndex += 1;
          this.cardPosition = 0;
          this.cardRotation = 0;
        }, 300);
      },
      showToast(message, type) {
        this.toast.message = message;
        this.toast.type = type;
        this.toast.show = true;
      
        setTimeout(() => {
          this.toast.show = false;
        }, 2000);  
      },
      restartSwipe() {
        this.currentIndex = 0;
        this.score = 0;
        this.cardPosition = 0;
        this.cardRotation = 0;
      },
    },
  };
  </script>
  
  <style scoped>

  .card-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    margin-top: -5%;
    position: relative;
  }
  
  .question-section {
    margin-bottom: 20px;
    font-size: 24px;
    font-weight: bold;
    text-align: center;
  }
  
  .card {
    width: 450px;
    height: 450px;
    background-color: #f2f2f2;
    border: 1px solid #ccc;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    position: absolute;
    transition: transform 0.3s ease, opacity 0.3s ease;
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
  .card-header {
    font-size: 30px;
    margin-bottom: 10px;
  }
  
  .card h3 {
    margin: 0;
    padding: 0;
    font-size: 20px;
  }
  
  .card p {
    margin: 10px 0 0 0;
    padding: 0 20px;
    text-align: center;
    font-size: 14px;
  }
  
  .answer-icon {
    margin-top: 10px;
    font-size: 24px;
  }
  
  .buttons {
    position: absolute;
    top: 50%;
    z-index: 10;
    display: flex;
    justify-content: space-between;
    width: 80%;
    transform: translateY(-50%);
  }
  
  .left-btn,
  .right-btn {
    padding: 10px 20px;
    font-size: 16px;
    background-color: #007bff;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 8px;
  }
  
  .left-btn:hover,
  .right-btn:hover {
    background-color: #0056b3;
  }
  
  .try-again {
    margin-top: 50px;
    z-index: 10;
  }
  
  .try-again button {
    background-color: #28a745;
    font-size: 18px;
    padding: 10px 20px;
    font-size: 16px;
    border-radius: 10px;
    color: white;
  }
  
  .try-again button:hover {
    background-color: #218838;
  }
  
  .toast {
    position: absolute;
    top: 0;
    right: 0;
    transform: translateX(-50%);
    background-color: #333;
    color: white;
    padding: 10px 20px;
    z-index:6;
    border-radius: 5px;
    font-size: 16px;
    transition: opacity 0.3s ease;
  }
  
  .card-center-title {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: rgb(255, 255, 255);
    border-radius: 10px;
  }
  
  .toast.success {
    background-color: #28a745;
  }
  
  .toast.error {
    background-color: #dc3545;
  }
  
  .score-display {
    color: #333;
    font-size: 1.5rem;
    text-align: center;
    z-index: 10;
  }
  .card-center {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media (max-width: 994px) and (min-width: 768px) {
  .buttons {
    top: 70%;
    justify-content: space-around;
  }
  .Title {
    font-size: 1rem;
  }
  .card-container {
    margin-top: -10%;
    height: 75vh;
  }
  .card {
    width: 400px;
    height: 400px;
  }
}

  @media (max-width: 768px) {
    .buttons {
      top: 75%;
      justify-content: space-around;
    }
    .Title {
    font-size: 0.9rem;
  }
    .card-container {
    margin-top: -20%;
    height:80vh;
  }
  .card {
    width: 350px;
    height: 350px;
  
  }
  }
  
  @media only screen and (max-width: 375px) and (min-width: 360px) {
    .buttons {
      top: 80%;
    }
  }
  </style>