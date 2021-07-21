<template>
  <div class="max-w-sm py-4 px-8 shadow-md rounded flex flex-col justify-center items-center hover:shadow-lg cursor-pointer" :class="selected ? 'bg-indigo text-white' : ' bg-white text-gray-500'" @click="$emit('select', user)">
    <user class="text-lg"/>
    <span>{{ user.name }}</span>
    <span>{{ user.email }}</span>
    <span>{{ user.company.name }}</span>
    <span>{{ user.phone }}</span>
  </div>
</template>

<script>
import User from "./icons/User.vue";

export default {
  name: "UserCard",
  components: { User },
  props: {
    user: {
      type: Object,
      required: true,
    },
    selected: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["select"],
};
</script>