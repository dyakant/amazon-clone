<template>
  <main>
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-3"></div>
        <div class="col-sm-6">
          <form>
            <div class="a-selection">
              <h2 style="text-align-center">Add new product</h2>
              <!-- Category Dropdown -->
              <div class="a-spacing-top-medium">
                <label>Category</label>
                <select class="a-select-option">
                  <option v-for="category in categories" :value="category._id" :key="category._id">{{ category.type }}
                  </option>
                </select>
              </div>
              <!-- Owner Dropdown -->
              <div class="a-spacing-top-medium">
                <label>Owner</label>
                <select class="a-select-option">
                  <option v-for="owner in owners" :value="owner._id" :key="owner._id">{{ owner.name }}</option>
                </select>
              </div>
            </div>
            <!-- Title area -->
            <div class="a-spacing-top-medium">
              <label>Title</label>
              <input type="text" class="a-input-text" style="width: 100%" />
            </div>
            <!-- Price area -->
            <div class="a-spacing-top-medium">
              <label>Price</label>
              <input type="number" class="a-input-text" style="width: 100%" />
            </div>
            <!-- Description area -->
            <div class="a-spacing-top-medium">
              <label>Description</label>
              <textarea placeholder="Provide details as a product description" style="width: 100%"></textarea>
            </div>
            <!-- Photo area -->
            <div class="a-spacing-top-medium">
              <label>Add photo</label>
              <div class="a-row a-spacing-top-medium">
                <label class="choosefile-button">
                  <i class="fal fa-plus"></i>
                  <input type="file" />
                  <p style="margin-top: -70px">Photo</p>

                </label>
              </div>
            </div>

            <!-- Add button -->
            <hr />
            <div class="a-spacing-top-large">
              <span class="a-button-register">
                <span class="a-button-inner">
                  <span class="a-button-text">Add product</span>
                </span>
              </span>
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
    async asyncData({
      $axios
    }) { // TODO: What is it?
      try {
        let categories = $axios.$get("http://localhost:3000/api/categories"); // TODO: switch with dotenv
        let owners = $axios.$get("http://localhost:3000/api/owners");

        const [catResponse, ownerResponse] = await Promise.all([categories, owners]);

        return {
          categories: catResponse.categories,
          owners: ownerResponse.owners
        };
      } catch (error) {
        console.log(error);
      }
    }
  }
</script>

<style>

</style>
