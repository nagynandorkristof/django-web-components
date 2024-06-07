<template>
    <q-field filled>
        <template v-slot:control>
            <div class="self-center full-width no-outline" tabindex="0">{{ model?.from ?? '' }} - {{ model?.to ?? '' }}</div>
        </template>
        <template v-slot:append>
            <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                    <q-date v-model="model" range>
                        <div class="row items-center justify-end">
                            <q-btn v-close-popup label="Close" color="primary" flat />
                        </div>
                    </q-date>
                </q-popup-proxy>
            </q-icon>
        </template>
    </q-field>
</template>

<script>
import { ref } from 'vue'

export default {
    setup() {
        return {
            model: ref({ from: '2020/07/08', to: '2020/07/17' })
        }
    }
}
</script>