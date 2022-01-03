<template>
  <div class="contents">
    <h1 class="page-header">Create Post</h1>
    <div class="form-wrapper">
      <form class="form">
        <div>
          <label for="title">Title: </label>
          <input type="text" id="title" />
        </div>
        <div>
          <label for="contents">Contents: </label>
          <textarea type="text" id="contents" rows="5" />
        </div>
        <button class="btn">Create</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.form-wrapper .form {
  width: 100%;
}
.btn {
  color: white;
}
</style>
