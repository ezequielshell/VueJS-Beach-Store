<template>
  <div>
    <div class="background">
      <nav>
        <div class="logo">
          <img src="./assets/images/Logo/Logo (2).png" />
          <h1>Sails Beach</h1>
        </div>
        <div>
          <router-link to="/">Home</router-link>
          <router-link to="/cart">Cart</router-link>
        </div>
      </nav>
      <router-view />
    </div>
  </div>
</template>

<style>
@font-face {
  font-family: "Montserrat-Regular";
  src: url("./assets/fonts/Montserrat-Regular.ttf");
}
@font-face {
  font-family: "Montserrat-Light";
  src: url("./assets/fonts/Montserrat-Light.ttf");
}
@font-face {
  font-family: "Montserrat-Thin";
  src: url("./assets/fonts/Montserrat-Thin.ttf");
}

* {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-image: url("./assets/images/background/img-1.jpg");
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  box-sizing: border-box;
  padding: 30px;
  width: 100%;
  color: #fff;
  border-bottom: 2px solid #fff;
  background-color: rgba(0, 0, 0, 0.3);
}

.logo {
  display: flex;
  justify-content: center;
  align-items: center;
}
.logo img {
  background-color: #8a7547;
  border-radius: 50%;
  padding: 10px;
}

.logo h1 {
  font-family: "Montserrat-Thin";
  padding-left: 30px;
  font-size: 50px;
  color: #fff;
}

nav div {
  padding-right: 30px;
}

nav a {
  margin-left: 10px;
  font-weight: bold;
  color: #fff;
  text-decoration: none;
  border: 2px solid #fff;
  padding: 13px 20px;
  transition: 0.2s;
}

nav a:hover {
  background-color: rgba(0, 0, 0, 0.5);
}

nav a.router-link-exact-active {
  color: #ffcc5c;
  background-color: rgba(0, 0, 0, 0.3);
}
nav a.router-link-exact-active:hover {
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
