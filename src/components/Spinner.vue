<template>
  <div class="spinner">Loading...</div>
</template>

<script>
export default {
  name: "Spinner",
};
</script>

<style scoped>
.spinner,
.spinner:after {
  border-radius: 50%;
  width: 5em;
  height: 5em;
}
.spinner {
  margin: auto;
  font-size: 10px;
  position: relative;
  text-indent: -9999em;
  border-top: 0.8em solid #4f46e5;
  border-right: 0.8em solid #4f46e5;
  border-bottom: 0.8em solid #4f46e5;
  border-left: 0.8em solid #ffffff;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation: load8 1.5s infinite linear;
  animation: load8 1.5s infinite linear;
}
@-webkit-keyframes load8 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes load8 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>