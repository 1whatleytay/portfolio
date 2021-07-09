<template>
  <router-link
    to="/"
    class="
      block
      px-8
      text-lg
      md:text-xl
      flex
      items-center
      font-bold
      py-8
      w-full
      text-yellow-300
      hover:underline hover:text-yellow-100
      transition-colors
      duration-200
    "
  >
    <vue-feather type="chevron-left" class="w-6 h-6 mr-2" />

    Taylor Whatley
  </router-link>

  <div class="py-16 bg-white text-gray-800">
    <div class="px-8">
      <div class="text-3xl md:text-5xl font-medium flex items-center">
        <div>
          <a href="/#projects" class="text-base md:text-2xl">Projects / </a> {{ project?.name }}
        </div>

        <img v-if="!slideshow" :src="project?.image" :alt="project?.name" class="rounded w-12 h-12 ml-8 object-cover" />
      </div>

      <div class="mt-4 text-lg text-gray-700 font-medium flex flex-wrap items-center">
        <div class="mr-4">
          {{ project?.description }}
        </div>

        <div class="mt-2 md:mt-0 w-full md:w-auto flex flex-wrap items-center">
          <span
              v-for="(badge, index) of project?.badges"
              :key="index"
              class="bg-gray-200 text-gray-800 p-1 text-xs mr-1 mt-1"
          >
            {{ badge }}
          </span>
          <span
              v-for="(tag, index) of project?.tags"
              :key="index"
              class="bg-blue-200 text-gray-800 p-1 text-xs mr-1 mt-1"
          >
            {{ tag }}
          </span>
        </div>
      </div>
    </div>

    <!-- No carousel yet... -->
    <img v-if="slideshow" :src="project?.image" :alt="project?.name" class="h-48 w-full object-contain my-16 bg-gray-100" />
    <div v-else class="w-full border-b my-8" />

    <div class="px-8">
      <div class="max-w-prose">
        {{ project?.blurb }}
      </div>

      <div class="mt-4 text-sm">
        <a v-for="(link, index) of project?.links" :key="index" :href="link" target="_blank" class="flex items-center mb-2 hover:underline text-gray-700 hover:text-gray-500">
          <vue-feather type="link" size="16" class="mr-2 block" />
          {{ link }}
        </a>
      </div>
    </div>
  </div>

  <div class="px-8 py-12 text-gray-300 font-light">
    &copy; Copyright 2021, Taylor Whatley
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

import { useRoute } from 'vue-router'

import { all } from '../projects'

export default defineComponent({
  setup() {
    const route = useRoute()

    const project = all.find((x) => x.id === route.params.id)

    const slideshow = computed(() => !(project?.props?.includes('icon') ?? false))

    return { project, slideshow }
  }
})
</script>
