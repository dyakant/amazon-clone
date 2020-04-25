<template>
  <main>
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-3"></div>
        <div class="col-sm-6">
          <div class="a-spacing-top-medium" />
          <h2 style="text-align-center">Add new owner</h2>
          <form>
            <!-- Name area -->
            <div class="a-spacing-top-medium">
              <label>Name</label>
              <input type="text" class="a-input-text" style="width: 100%" v-model="name" />
            </div>
            <!-- About area -->
            <div class="a-spacing-top-medium">
              <label>About</label>
              <textarea placeholder="Write about owner" style="width: 100%" v-model="about"></textarea>
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
                  <span class="a-button-text" @click="onAddOwner">Add owner</span>
                </span>
              </span>
              <a href="/#" class="a-button-history margin-left-10">back to main</a>
            </div>
          </form>
          <hr />
          <ul class="list-group">
            <li v-for="owner in owners" :key="owner._id" class="list-group-item">{{ owner.name }}</li>
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
      let response = await $axios.$get("http://localhost:3000/api/owners");
      return {
        owners: response.owners
      };
    } catch (error) {
      console.log(error);
      return {
        owners: null
      };
    }
  },
  data() {
    return {
      name: "",
      about: "",
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
    async onAddOwner() {
      try {
        let data = new FormData();
        data.append("name", this.name);
        data.append("about", this.about);
        if (this.selectedFile) {
          data.append("photo", this.selectedFile, this.name);
        }
        let result = await this.$axios.$post(
          "http://localhost:3000/api/owners",
          data
        );
        this.owners.push({name: this.name}); // FIXME: it's better to load it from DB
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style>
</style>
