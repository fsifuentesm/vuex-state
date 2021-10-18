<template>
  <div id="counter" class="bg-success text-white">
    <div class="row p-3">
      <div class="col-2">
        <i class="fas fa-dollar-sign fa-4x"></i>
      </div>
      <div class="col-10 text-right">
        <h2>{{(task.message)}}</h2>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Tasks',
  computed: {
    task() {
      return this.$store.getters.currentTask;
    },
  },
  methods: {},
};
</script>
