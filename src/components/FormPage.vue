<template>
  <div class="block">
    <h1>Форма</h1>
    <button @click="openPopup">Начать</button>
    <div v-show="showPopup" @click="closePopup" class="overlay">
      <div class="popup" @click.stop>
        <h2 class="popup-text">Форма</h2>
        <div class="form-container">
          <input v-model="formData.name" type="text" placeholder="Имя">
          <input v-model="formData.surname" type="text" placeholder="Фамилия">
          <input v-model="formData.email" type="text" placeholder="Email">
          <input v-model="formData.phone" type="text" placeholder="Телефон">
          <input v-model="formData.city" type="text" placeholder="Город">
          <button @click="submitForm">Отправить</button>
        </div>
      </div>
    </div>
    <div v-if="submittedData">
      <h2>Данные формы</h2>
      <pre>{{ submittedData }}</pre>
    </div>
  </div>
</template>

<script>
export default {
  name: "FormPage",
  data() {
    return {
      showPopup: false,
      formData: {
        name: "",
        surname: "",
        email: "",
        phone: "",
        city: "",
      },
      submittedData: null,
    };
  },
  methods: {
    openPopup() {
      this.showPopup = true;
    },
    closePopup() {
      this.showPopup = false;
    },
    submitForm() {
      this.submittedData = {
        name: this.formData.name,
        surname: this.formData.surname,
        email: this.formData.email,
        phone: this.formData.phone,
        city: this.formData.city,
      };
      this.closePopup();
    },
  },
};
</script>

<style scoped>
.overlay {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
}

.popup {
  background-color: #fff;
  max-width: 500px;
  padding: 20px;
  border-radius: 8px;
  display: flex;
  flex-wrap: wrap;
}

.popup-text {
  width: 100%;
  margin-bottom: 10px;
}

.popup input {
  width: calc(50% - 10px);
  margin-bottom: 10px;
  padding: 8px;
  margin-right: 5px;
  box-sizing: border-box;
}

@media (max-width: 600px) {
  .popup input {
    width: 100%;
  }
}

.popup button {
  background-color: #4caf50;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
}
</style>
