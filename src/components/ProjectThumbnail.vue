<template>
  <router-link
    :to="`/projects/${project.id}`"
    class="w-full md:w-56 lg:w-64 md:mr-6 mb-4"
  >
    <button
      class="rounded-xl text-left bg-gray-700 w-full focus:ring overflow-hidden"
    >
      <img
        :src="project.image"
        :alt="project.name"
        class="w-full h-24 object-cover"
      />
      <span class="block pl-7 py-7 text-xl font-medium">
        {{ project.name }}
        <vue-feather
          v-if="project.props?.includes('award')"
          type="award"
          size="16"
          fill="currentColor"
        />
        <span class="block h-4 my-1">
          <span
            v-for="(badge, index) of project.badges"
            :key="index"
            class="bg-gray-600 p-1 text-xs mr-1"
          >
            {{ badge }}
          </span>
        </span>
      </span>
    </button>
  </router-link>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

import { Project } from '../projects'

export default defineComponent({
  props: {
    project: {
      type: Object as PropType<Project>,
      required: true
    }
  },

  setup(props) {
    return { project: props.project }
  }
})
</script>
