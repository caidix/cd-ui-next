<template>
  <i
    class="material-icons cd-icon"
    :class="[outlined && 'material-icons-outlined', box && 'cd-icon--box']"
    :style="{
      color,
      'background-color': box && boxColor ? boxColor : '',
    }"
  >
    <slot>{{ name ? name : '' }}</slot>
  </i>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'cd-icon',
  props: {
    name: { type: String, required: true },
    color: { type: String, default: null },
    outlined: { type: Boolean, default: false },
    box: { type: Boolean, default: false },
    boxColor: { type: String, default: null },
  },
})
</script>
