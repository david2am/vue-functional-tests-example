<template>
  <div>
    <button v-show="loggedId"></button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loggedId: false,
    }
  },
}
</script>

<style lang="scss" scoped></style>
