<template>
  <main class="p-4" >
    <spinner v-if="loading" class="spinner"/>
    <template v-else>
      <filter-bar class="mb-4" :filter-text="filterText" :selected="countSelected" :un-selected="countUnselected" :on-filter="search => filterText = search"/>
      <div class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-3">
        <user-card v-for="user in filteredUsers" :key="user.id" :user="user" :selected="user.selected" @select="() => (user.selected = !user.selected)"/>
      </div>
      <div v-if="filteredUsers.length === 0" class="text-center">No users were found</div>
    </template>
  </main>
</template>

<script>
import FilterBar from "./components/FilterBar.vue";
import Spinner from "./components/Spinner.vue";
import UserCard from "./components/UserCard.vue";
import axios from "axios";

export default {
  name: "App",
  components: { UserCard, Spinner, FilterBar },
  data() {
    return {
      users: [],
      filterText: "",
      filteredUsers: [],
      loading: true,
    };
  },
  computed: {
    selectedUsers() {
      return this.users.filter((user) => user.selected);
    },
    countSelected() {
      return this.selectedUsers.length;
    },
    countUnselected() {
      return this.users.length - this.countSelected;
    },
  },
  watch: {
    filterText(newVal) {
      this.filterUsers(newVal);
    },
    users() {
      this.filterUsers(this.filterText);
    },
  },
  created() {
    this.getUsers();
    window.addEventListener("keydown", this.resetFilter);
  },
  unmounted() {
    window.removeEventListener("keydown", this.resetFilter);
  },
  methods: {
    getUsers() {
      this.loading = true;
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then(this.delay(2000))
        .then((response) => {
          this.users = response.data;
          this.loading = false;
        })
        .catch(() => (this.loading = false));
    },
    filterUsers(search) {
      this.filteredUsers = this.users.filter((user) =>
        user.name.toLowerCase().includes(search.toLowerCase())
      );
    },
    resetFilter(event) {
      if (event.key === "Escape") {
        this.filterText = "";
      }
    },
    delay(ms) {
      return (x) => new Promise((resolve) => setTimeout(() => resolve(x), ms));
    },
  },
};
</script>

<style scoped>
.spinner {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>