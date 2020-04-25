<template>
  <main>
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-3"></div>
        <div class="col-sm-6">
          <div class="a-spacing-top-medium" />
          <h2 style="text-align-center">Add new category</h2>
          <form>
            <!-- Type area -->
            <div class="a-spacing-top-medium">
              <label>Type</label>
              <input type="text" class="a-input-text" style="width: 100%" v-model="type" />
            </div>

            <!-- Add button -->
            <hr />
            <div class="a-spacing-top-large">
              <span class="a-button-register">
                <span class="a-button-inner">
                  <span class="a-button-text" @click="onAddCategory">Add category</span>
                </span>
              </span>
              <a href="/#" class="a-button-history margin-left-10">back to main</a>
            </div>
          </form>
          <hr />
          <ul class="list-group">
            <li
              v-for="category in categories"
              :key="category._id"
              class="list-group-item"
            >{{ category.type }}</li>
          </ul>
        </div>
        <div class="col-sm-3"></div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    try {
      let response = await $axios.$get("http://localhost:3000/api/categories");
      return {
        categories: response.categories
      };
    } catch (error) {
      console.log(error);
      return {
        categories: null
      };
    }
  },
  data() {
    return {
      type: ""
    };
  },
  methods: {
    async onAddCategory() {
      try {
        let data = { type: this.type };
        let result = await this.$axios.$post(
          "http://localhost:3000/api/categories",
          data
        );
        this.categories.push(data); // FIXME: it's better to load it from DB
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style>
</style>
