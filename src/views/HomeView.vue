<template>
  <div class="home">
    <div class="catalog">
      <h1>Beach Catalog!</h1>
      <div class="items">
        <router-link
          v-for="item in items"
          :key="item.id"
          :class="'item' + item.id"
          :to="{ name: 'catalogDetails', params: { id: item.id } }"
          >{{ item.title }}</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  data() {
    return {
      items: [],
    };
  },
  mounted() {
    fetch("http://localhost:3000/items")
      .then((res) => res.json())
      .then((data) => (this.items = data))
      .catch((err) => console.log(err.message));
  },
};
</script>

<style>
.home {
  box-sizing: border-box;
  padding-top: 50px;
  font-size: 30px;
}

.catalog {
  color: #fff;
}

.catalog h1 {
  text-align: start;
  padding-left: 40px;
  margin-bottom: 60px;
}

.items {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin: 10px;
  font-size: 30px;
}

.items a {
  margin: 10px;
  color: #fff;
  text-decoration: none;
  background-color: black;
  border-radius: 7px;
  padding: 30px;
  transition: 0.18s;
}

.items a:hover {
  background-size: 500px;
  background-color: #fff;
  color: #000;
}

.item1 {
  background-position: bottom right;
}

.item2 {
  background-position: bottom right;
}
</style>
