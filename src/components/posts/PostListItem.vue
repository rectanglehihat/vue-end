<template>
  <li>
    <div class="post-title">
      {{ postItem.title }}
    </div>
    <div class="post-contents">
      {{ postItem.contents }}
    </div>
    <div class="post-time">
      {{ postItem.createdAt | formatData }}
      <!-- <i class="icon ion-md-create" @click="routeEditPage"></i> -->
      <ion-icon
        name="create-outline"
        class="icon ion-md-create"
        @click="routeEditPage"
      ></ion-icon>
      <i class="icon ion-md-trash" @click="deleteItem"></i>
      <ion-icon
        name="trash-outline"
        class="icon ion-md-trash"
        @click="deleteItem"
      ></ion-icon>
    </div>
  </li>
</template>

<script>
import { deletePost } from "@/api/posts";

export default {
  props: {
    postItem: {
      type: Object,
      require: true,
    },
  },
  // filters: {
  //   formatData(value) {
  //     return new Date(value);
  //   },
  // },
  methods: {
    async deleteItem() {
      if (confirm("Do you want to delete it?")) {
        await deletePost(this.postItem._id);
        this.$emit("refresh");
        console.log("delete");
      }
    },
    routeEditPage() {
      const id = this.postItem._id;
      this.$router.push(`/post/${id}`);
    },
  },
};
</script>

<style></style>
