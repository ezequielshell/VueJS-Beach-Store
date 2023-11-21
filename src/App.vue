<template>
  <div>
    <div class="background">
      <nav>
        <h1>Sails Beach</h1>
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
* {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-image: url("./assets/images/img-1.jpg");
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

nav h1 {
  padding-left: 30px;
  font-size: 50px;
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
