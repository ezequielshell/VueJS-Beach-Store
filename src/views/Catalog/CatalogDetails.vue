<template>
  <div class="modal" v-if="showModal">
    <ProductModal
      :id="productId"
      :catalogId="catalogId"
      @close="toogleProductModal"
    />
  </div>

  <div class="products" v-if="products">
    <div class="productsTitle">
      <h1>{{ products.title }}</h1>
    </div>

    <div class="eachProduct">
      <div v-for="product in products.products" :key="product.id">
        <p @click="toogleProductModal(product.id)">
          {{ product.title }}
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import ProductModal from "@/components/ProductModal.vue";

export default {
  components: { ProductModal },
  data() {
    return {
      id: this.$route.params.id,
      products: null,
      showModal: false,
      productId: null,
      catalogId: null,
    };
  },
  methods: {
    toogleProductModal(id) {
      this.showModal = !this.showModal;
      this.productId = id;
      this.catalogId = Number(this.id);
    },
  },
  mounted() {
    fetch("http://localhost:3000/items/" + this.id)
      .then((res) => res.json())
      .then((data) => (this.products = data))
      .catch((err) => console.log(err.message));
  },
};
</script>

<style>
.products {
  box-sizing: border-box;
  padding-top: 50px;
  color: #fff;
  font-size: 30px;
}

.productsTitle h1 {
  text-align: start;
  padding-left: 40px;
  margin-bottom: 60px;
}

.eachProduct {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin: 10px;
}

.eachProduct p {
  cursor: pointer;
  margin: 10px;
  background-color: rgb(28, 28, 74);
  border-radius: 7px;
  padding: 30px;
  transition: 0.18s;
}

.eachProduct p:hover {
  background-color: #fff;
  color: #000;
}
</style>
