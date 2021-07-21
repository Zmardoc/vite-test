<template>
  <div class="grid grid-cols-4 gap-4">
    <div class="col-span-2">
      <input v-model="innerFilterText" placeholder="Search user by name ..." type="text" class="appearance-none border border-gray focus:border-indigo rounded w-full py-2 px-3 text-gray-700"/>
    </div>
    <div class="h-full text-sm font-semibold text-white text-center rounded font-sans bg-indigo flex justify-center items-center">
      Selected Users: {{ selected }}
    </div>
    <div class="h-full text-sm font-semibold text-white text-center rounded font-sans bg-indigo flex justify-center items-center">
      Unselected Users: {{ unSelected }}
    </div>
  </div>
</template>

<script>
export default {
  name: "FilterBar",
  props: {
    onFilter: {
      type: Function,
      required: true,
    },
    selected: {
      type: Number,
      required: true,
    },
    unSelected: {
      type: Number,
      required: true,
    },
    filterText: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      innerFilterText: this.filterText,
    };
  },
  watch: {
    innerFilterText(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.onFilter(newVal);
      }
    },
    filterText(newVal) {
      this.innerFilterText = newVal;
    },
  },
};
</script>