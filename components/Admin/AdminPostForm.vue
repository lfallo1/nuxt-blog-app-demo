<template>
  <form @submit.prevent="onSave">
    <AppControlInput v-model="editedPost.author">Author Name</AppControlInput>
    <AppControlInput v-model="editedPost.title">Title</AppControlInput>
    <AppControlInput
      control-type="textarea"
      v-model="editedPost.body">Content</AppControlInput>
    <AppButton type="submit">Save</AppButton>
    <AppButton
      type="button"
      style="margin-left: 10px"
      btn-style="cancel"
      @click="onCancel">Cancel</AppButton>
  </form>
</template>

<script>
import AppControlInput from "@/components/UI/AppControlInput";
import AppButton from "@/components/UI/AppButton";

export default {
  components: {
    AppControlInput,
    AppButton
  },
  props: {
    id: {
      type: Number,
      required: false
    }
  },
  data() {
    return {
      editedPost: {
        author: "",
        title: "",
        content: ""
      }
    };
  },
  methods: {
    onSave() {
      // Save the post
      console.log(this.editedPost);
    },
    onCancel() {
      // Navigate back
      this.$router.push("/admin");
    }
  },
  created(){
    if(this.$route.params.postId) {
      this.editedPost = this.$store.getters.postById(this.$route.params.postId);
    }
  }
};
</script>
