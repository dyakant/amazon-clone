<template>
  <main>
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-3"></div>
        <div class="col-sm-6">
          <form>
            <div class="a-spacing-large" />
            <h2 style="text-align-center">Add new product</h2>
            <div class="a-selection">
              <!-- Category Dropdown -->
              <div class="a-spacing-top-medium">
                <label>Category</label>
                <select class="a-select-option" v-model="categoryId">
                  <option
                    v-for="category in categories"
                    :value="category._id"
                    :key="category._id"
                  >{{ category.type }}</option>
                </select>
              </div>
              <!-- Owner Dropdown -->
              <div class="a-spacing-top-medium">
                <label>Owner</label>
                <select class="a-select-option" v-model="ownerId">
                  <option
                    v-for="owner in owners"
                    :value="owner._id"
                    :key="owner._id"
                  >{{ owner.name }}</option>
                </select>
              </div>
            </div>
            <!-- Title area -->
            <div class="a-spacing-top-medium">
              <label>Title</label>
              <input type="text" class="a-input-text" style="width: 100%" v-model="title" />
            </div>
            <!-- Price area -->
            <div class="a-spacing-top-medium">
              <label>Price</label>
              <input type="number" class="a-input-text" style="width: 100%" v-model="price" />
            </div>
            <!-- stockQuantity area -->
            <div class="a-spacing-top-medium">
              <label>Stock Quantity</label>
              <input type="number" class="a-input-text" style="width: 100%" v-model="stockQuantity" />
            </div>
            <!-- Description area -->
            <div class="a-spacing-top-medium">
              <label>Description</label>
              <textarea
                placeholder="Provide details as a product description"
                style="width: 100%"
                v-model="description"
              ></textarea>
            </div>
            <!-- Photo area -->
            <div class="a-spacing-top-medium">
              <label>Add photo</label>
              <div class="a-row a-spacing-top-medium">
                <label class="choosefile-button">
                  <i class="fal fa-plus"></i>
                  <input type="file" @change="onFileSelected" />
                  <p style="margin-top: -70px">{{ fileName }}</p>
                </label>
              </div>
            </div>

            <!-- Add button -->
            <hr />
            <div class="a-spacing-top-large">
              <span class="a-button-register">
                <span class="a-button-inner">
                  <span class="a-button-text" @click="onAddProduct">Add product</span>
                </span>
              </span>
              <a href="/#" class="a-button-history margin-left-10">back to main</a>
            </div>
          </form>
        </div>
        <div class="col-sm-3"></div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  // TODO: What is it?
  async asyncData({ $axios }) {
    try {
      let categories = $axios.$get("http://localhost:3000/api/categories"); // TODO: switch with dotenv
      let owners = $axios.$get("http://localhost:3000/api/owners");

      const [catResponse, ownerResponse] = await Promise.all([
        categories,
        owners
      ]);

      return {
        categories: catResponse.categories,
        owners: ownerResponse.owners
      };
    } catch (error) {
      console.log(error);
      return {
        categories: null,
        owners: null
      };
    }
  },
  data() {
    return {
      categoryId: null,
      ownerId: null,
      title: "",
      price: 0,
      description: "",
      stockQuantity: 1,
      selectedFile: null,
      fileName: ""
    };
  },
  methods: {
    onFileSelected(event) {
      console.log(event);
      this.selectedFile = event.target.files[0];
      this.fileName = event.target.files[0].name;
    },
    async onAddProduct() {
      let data = new FormData();
      data.append("categoryId", this.categoryId);
      data.append("ownerId", this.ownerId);
      data.append("title", this.title);
      data.append("price", this.price);
      data.append("description", this.description);
      data.append("stockQuantity", this.stockQuantity);
      data.append("photo", this.selectedFile, this.fileName);

      let result = await this.$axios.$post(
        "http://localhost:3000/api/products",
        data
      );

      this.$router.push("/");
    }
  }
};
</script>

<style>
</style>
