<template>
  <main>
    <div class="a-spacing-large" />
    <div class="container-fluid browsing-history">
      <div class="row">
        <div class="col-sm-8 col-8">
          <h1 class="a-size-large a-spacing-none a-text-normal">All products</h1>
          <div class="a-spacing-large" />
          <a href="#" class="a-button-buy-again">Add new product</a>
          <a href="#" class="a-button-history margin-left-10">Add new category</a>
          <a href="#" class="a-button-history margin-left-10">Add new owner</a>
        </div>
      </div>
    </div>
    <div class="a-spacing-large" />
    <div class="container-fluid browsing-history">
      <div class="row">
        <div class="col-xl-2 col-lg-2 col-md-3 col-sm-6 col-6 br bb">
          <div class="history-box">
            <!-- Product image -->
            <a href="#" class="a-link-normal">
              <img src="#" alt="Here should be a Product image" class="img-fluid">
            </a>
            <div class="a-spacing-top-base asin-title">
              <span class="a-text normal">
                <div class="p13n-sc-truncated">Product title</div>
              </span>
            </div>
            <!-- Product rating -->
            <div class="a-row">
              <a href="#">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </a>
              <span class="a-letter-space"></span>
              <span class="a-color-tertiary a-size-small asin-reviews">(12345)</span>
            </div>
            <!-- Product price -->
            <div class="a-row">
              <span class="a-size-base a-color-price">
                <span class="p13n-sc-price">$23</span>
              </span>
            </div>
            <!-- Product buttons -->
            <div class="a-row">
              <a href="#" class="a-button-history margin-left-10">Update</a>
              <a href="#" class="a-button-history margin-left-10">Delete</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
  export default {
    // asyncData is fetching data before NUXT page  finished loading on the browser
    // It's good for SEO because the date will be loaded first
    async asyncData({
      $axios
    }) { // TODO What is it?
      try {
        let response = await $axios.$get("http://localhost:3000/api/products");
        console.log(response);
        return {
          products: response.products
        };
      } catch (error) {

      }
    }
  };

</script>

<style>
</style>
