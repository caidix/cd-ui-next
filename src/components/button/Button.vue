<template>
  <button class="cd-btn" :class="rootClasses" :disabled="disabled">
    <cd-icon v-if="icon" class="cd-btn-icon" :name="icon" />
    <span v-if="$slots.default" class="cd-btn-text">
      <slot />
    </span>
    <span class="cd-btn-wrap-loading">
      <cd-loading v-if="loading" color="#fff" :radius="10" :stroke="3" />
    </span>
  </button>
</template>

<script lang="ts">
import { defineComponent, computed, PropType } from 'vue'
import CdIcon from '../icon'
import CdLoading from '../loading'
import { ComponentSize } from '@/utils/types'
import { isValidComponentSize } from '@/utils/validators'
import { ButtonType } from './types'

export default defineComponent({
  name: 'cd-button',
  components: {
    CdIcon,
    CdLoading,
  },
  props: {
    type: {
      type: String as PropType<ButtonType>,
      default: 'default',
      validator: (val: string) => {
        return [
          'default',
          'primary',
          'success',
          'warning',
          'info',
          'danger',
          'black',
        ].includes(val)
      },
    },
    size: {
      default: 'medium',
      type: String as PropType<ComponentSize>,
      validator: isValidComponentSize,
    },
    iconAfter: { type: Boolean },
    disabled: { type: Boolean },
    outlined: { type: Boolean },
    round: { type: Boolean },
    pulse: { type: Boolean },
    loading: { type: Boolean },
    block: { type: Boolean },
    text: { type: Boolean },
    icon: { type: String, default: null },
  },
  setup(props, { slots }) {
    const rootClasses = computed(() => [
      {
        pulse: props.pulse,
        'cd-btn--empty': !slots.default,
        'cd-btn--outlined': props.outlined,
        'cd-btn--round': props.round,
        'cd-btn--block': props.block,
        'cd-btn--text': props.text,
        'cd-btn--loading': props.loading,
        [`cd-btn--${props.size}`]: props.size,
        ...(props.type
          ? { [`cd-btn--${props.type}`]: true }
          : { 'cd-btn--default': true }),
        ...(props.icon
          ? {
              [props.iconAfter ? 'cd-btn--icon-right' : 'cd-btn--icon-left']:
                true,
            }
          : null),
      },
    ])
    return { rootClasses }
  },
})
</script>
