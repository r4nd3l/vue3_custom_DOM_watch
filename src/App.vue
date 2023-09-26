<template>
  <main
    class="h-screen w-screen flex flex-col items-center justify-center bg-gray-900"
  >
    <div
      class="h-24 w-24 resize flex items-center justify-center overflow-scroll p-2 bg-gray-700 text-gray-300 rounded"
      :ref="element"
    />
  </main>
</template>

<script setup lang="ts">
import { useDimension } from "./useDimension";

const element = useDimension("width");
</script>
