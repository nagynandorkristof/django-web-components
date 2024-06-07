<template>
    <q-btn-toggle
      v-model="model"
      toggle-color="primary"
    />
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      model: ref(null)
    }
  }
}
</script>