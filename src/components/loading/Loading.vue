<template>
  <svg class="cd-loading" :style="svgStyle">
    <circle
      class="cd-loading-circle"
      :stroke="color"
      :stroke-width="stroke"
      stroke-linecap="round"
      fill="none"
      :r="normalizedRadius"
      :cx="radius"
      :cy="radius"
      pathLength="100"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue'

export default defineComponent({
  name: 'cd-loading',
  props: {
    stroke: { default: 6, type: Number },
    radius: { default: 36, type: Number },
    color: { default: '#4b5cc4', type: String },
  },
  setup(props) {
    const normalizedRadius = computed(() => props.radius - props.stroke / 2)
    const svgStyle = computed(
      () =>
        ({
          'max-width': `${props.radius * 2}px`,
          'max-height': `${props.radius * 2}px`,
        } as CSSProperties),
    )
    return { normalizedRadius, svgStyle }
  },
})
</script>
