<template>
    <q-toggle
      :label="label"
      v-model="model"
    />
</template>

<script>
import { ref } from 'vue'

export default {
    setup() {
        return {
            model: ref(false),
        }
    }
}
</script>