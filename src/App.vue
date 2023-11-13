<template>
  <div>
    <nav>
      <router-link to="/">Главная</router-link> |
      <router-link to="/form">Форма</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
}
.block{
  display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
nav {
  background-color: #333;
  padding: 15px;
  color: white;
  text-align: center;
}
router-link, a{
  color: white;
  margin: 0 10px;
  text-decoration: none;
}

router-link:hover, a:hover {
  text-decoration: underline;
}
</style>
