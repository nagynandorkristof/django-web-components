<template>
    <q-select filled v-model="modelMultiple" multiple  use-chips stack-label
        label="Multiple selection" />
</template>

<script>
import { ref } from 'vue'

export default {
    setup() {
        return {
            modelMultiple: ref([]),
        }
    }
}
</script>