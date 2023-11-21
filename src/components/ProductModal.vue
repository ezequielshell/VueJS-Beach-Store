<template>
  <div class="modalContent">
    <div class="backdrop" @click.self="closeModal">
      <div class="modal">
        <h1>MODAL</h1>
        <h2>id: {{ id }}</h2>
        <h3 v-if="productDetail">
          {{ productDetail[arrayPosition].title }}
          {{ productDetail[arrayPosition].price }}
        </h3>
        <div class="addToCart">
          <button @click="addToCart">Add to Cart</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["id", "catalogId"],

  data() {
    return {
      productDetail: null,
      arrayPosition: null,
    };
  },

  methods: {
    closeModal() {
      this.$emit("close");
    },

    addToCart() {
      console.log(this.id);
      fetch("http://localhost:3000/cart", {
        method: "POST",
        headers: { "Content-Type": "aplication/json" },
        body: JSON.stringify({ id: this.id }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("Item adicionado ao carrinho: ", data);
        })
        .catch((err) => {
          console.log("Erro ao adicionar item ao carrinho: ", err);
        });

      this.closeModal();
    },
  },

  mounted() {
    fetch("http://localhost:3000/items/" + this.catalogId)
      .then((res) => res.json())
      .then((data) => (this.productDetail = data.products))
      .then((this.arrayPosition = this.id - 1))
      .catch((err) => console.log(err));
  },
};
</script>

<style>
.modalContent {
  box-sizing: border-box;
  color: #000;
}

.backdrop {
  position: fixed;
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
}

.modalContent .modal {
  width: 400px;
  padding: 20px;
  margin: 100px auto;
  background-color: #fff;
  border-radius: 10px;
}
</style>
