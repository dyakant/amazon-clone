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
                  <option value="1">1</option>
                  <option value="2">2</option>
                </select>
              </div>
              <!-- Owner Dropdown -->
              <div class="a-spacing-top-medium">
                <label>Owner</label>
                <select class="a-select-option">
                  <option value="1">1</option>
                  <option value="2">2</option>
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
            <hr/>
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

  }

</script>

<style>

</style>
