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
  font-family: "Montserrat-Regular";
  text-align: start;
  padding-left: 40px;
  margin-bottom: 60px;
}

.items {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 10px;
  margin: 10px;
  font-size: 30px;
}

.items a {
  margin: 10px;
  color: #fff;
  text-decoration: none;
  background-color: #8a7547;
  border-radius: 15px;
  padding: 30px;
  height: 200px;
  transition: 0.3s;
  text-align: start;
  font-family: "Montserrat-Regular";
}

.item1 {
  background-image: url("../assets/images/Catalog/Beach-clothes.png");
  background-position: 240px 60px;
  background-repeat: no-repeat;
  background-size: 200px;
}

.item1:hover {
  background-size: 230px;
  background-position: 210px 30px;
  background-color: #ba9e62;
}

.item2 {
  background-image: url("../assets/images/Catalog/Board.png");
  background-position: 250px 70px;
  background-repeat: no-repeat;
  background-size: 200px;
}

.item2:hover {
  background-size: 230px;
  background-position: 220px 40px;
  background-color: #ba9e62;
}

.item3 {
  background-image: url("../assets/images/Catalog/Equipments.png");
  background-position: 240px 60px;
  background-repeat: no-repeat;
  background-size: 200px;
}

.item3:hover {
  background-size: 230px;
  background-position: 210px 30px;
  background-color: #ba9e62;
}

.item4 {
  background-image: url("../assets/images/Catalog/Flip-flops.png");
  background-position: 250px 60px;
  background-repeat: no-repeat;
  background-size: 200px;
}

.item4:hover {
  background-size: 230px;
  background-position: 200px 30px;
  background-color: #ba9e62;
}

.item5 {
  background-image: url("../assets/images/Catalog/Sunscreen.png");
  background-position: 250px 60px;
  background-repeat: no-repeat;
  background-size: 200px;
}

.item5:hover {
  background-size: 230px;
  background-position: 210px 30px;
  background-color: #ba9e62;
}

.item6 {
  background-image: url("../assets/images/Catalog/Sunglasses.png");
  background-position: 230px 80px;
  background-repeat: no-repeat;
  background-size: 200px;
}

.item6:hover {
  background-size: 230px;
  background-position: 200px 50px;
  background-color: #ba9e62;
}

.item7 {
  background-image: url("../assets/images/Catalog/Towel.png");
  background-position: 260px 70px;
  background-repeat: no-repeat;
  background-size: 170px;
}

.item7:hover {
  background-size: 200px;
  background-position: 230px 40px;
  background-color: #ba9e62;
}

.item8 {
  background-image: url("../assets/images/Catalog/Beach-chair.png");
  background-position: 250px 60px;
  background-repeat: no-repeat;
  background-size: 200px;
}

.item8:hover {
  background-size: 230px;
  background-position: 210px 30px;
  background-color: #ba9e62;
}
</style>
