<template>
  <switch-button @click="toggle">
    <div class="sun">
      <div
        class="i-carbon-sun"
        w="full"
        h="full"
      ></div>
    </div>
    <div class="moon">
      <div
        class="i-carbon-moon"
        w="full"
        h="full"
      ></div>
    </div>
  </switch-button>
</template>

<script lang="ts" setup>
import SwitchButton from './SwitchButton.vue'
import { toggle } from '../../logic/toggleAppearance'
</script>

<style lang="scss">
.sun,
.moon {
  width: 18px;
  height: 18px;
}
.sun {
  opacity: 1;
}

.moon {
  opacity: 0;
}

.dark .sun {
  opacity: 0;
  display: none;
}

.dark .moon {
  opacity: 1;
  display: block;
}
</style>
