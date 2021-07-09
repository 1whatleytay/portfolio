<template>
  <div class="px-8 py-16 text-yellow-300">
    <!--    <div class="text-4xl md:text-7xl font-medium font-plex">taylor whatley</div>-->
    <div class="text-4xl md:text-7xl font-medium">Taylor Whatley</div>

    <div class="flex flex-items-center mt-4">
      <a
        href="https://github.com/1whatleytay"
        target="_blank"
        class="hover:text-yellow-100 transition-colors duration-250 p-4"
      >
        <vue-feather type="github" size="24" fill="currentColor" />
      </a>
      <a
        href="https://www.linkedin.com/in/taylor-whatley"
        target="_blank"
        class="hover:text-yellow-100 transition-colors duration-250 p-4"
      >
        <vue-feather type="linkedin" size="24" fill="currentColor" />
      </a>
      <a
        href="https://devpost.com/1whatleytay"
        target="_blank"
        class="hover:text-yellow-100 transition-colors duration-250 p-4"
      >
        <!-- Sorry man... I hope this works on all browsers. -->
        <svg
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 64 64"
          width="64"
          height="64"
          style="enable-background: new 0 0 64 64"
          xml:space="preserve"
          class="w-6 h-6"
        >
          <g>
            <g>
              <path
                class="fill-current"
                d="M48.7,4.8H15.3L0,32l15.7,27.2h33.1L64,32L48.7,4.8z"
              />
            </g>
            <path
              class="fill-current text-gray-800"
              d="M32.2,16.9H21.4v30.3h10.8c8.2,0,14.9-6.8,14.9-15.1S40.5,16.9,32.2,16.9z M32,41.1h-4.5V22.9H32
            c5,0,9.1,4.1,9.1,9.1S37,41.1,32,41.1z"
            />
          </g>
        </svg>
      </a>
      <a
        href="mailto:whatltay@gmail.com"
        target="_blank"
        class="hover:text-yellow-100 transition-colors duration-250 p-4"
      >
        <vue-feather type="mail" size="24" />
      </a>
      <a
        href="/resume.pdf"
        target="_blank"
        class="hover:text-yellow-100 transition-colors duration-250 p-4"
      >
        <vue-feather type="clipboard" size="24" />
      </a>
    </div>
  </div>

  <div
    class="
      bg-gray-100
      px-8
      py-12
      lg:py-16
      text-gray-800
      flex flex-col-reverse
      lg:items-center lg:flex-row
    "
  >
    <div class="lg:pr-6">
      <!--      <div class="text-3xl md:text-5xl font-medium font-plex">about me</div>-->
      <div class="text-3xl md:text-5xl font-medium">About Me</div>

      <div class="mt-4 max-w-prose text-lg">
        <div class="mb-4">
          I'm a Canadian software developer. I make websites, compilers,
          emulators and some frameworks and game engines. I compete in
          competitions often and I've even won a few. You can find my resume
          <a href="/resume.pdf" class="underline hover:text-gray-500">here</a>.
        </div>

        <div class="mb-4">
          I've always had a passion and respect for what software can
          accomplish. I'm constantly pushing boundaries on developer
          technologies and what's considered possible with new toolsets.
        </div>
      </div>

      <div class="text-sm">
        <div class="flex items-center mb-2">
          <vue-feather type="award" size="16" class="mr-2 block" />
          Hack the North 2020++ Winner, Apple Student Challenge Winner
        </div>

        <div class="flex items-center mb-2">
          <vue-feather type="book" size="16" class="mr-2 block" />
          University of Toronto, Computer Science
        </div>

        <div class="flex items-center mb-2">
          <vue-feather type="code" size="16" class="mr-2 block" />
          C/C++, HTML/CSS/JS, Vue, Node.js, C#, Swift, LLVM + Clang AST
        </div>
      </div>
    </div>

    <img
      alt="Profile Picture"
      src="../assets/profile.png"
      class="
        w-32
        h-32
        lg:w-64 lg:h-64
        rounded-full
        mx-auto
        mb-12
        lg:mr-12 lg:ml-auto lg:mb-0
      "
    />
  </div>

  <div class="px-8 py-16 text-yellow-300" id="projects">
    <div class="text-3xl md:text-5xl font-medium">Awards</div>

    <div class="flex flex-wrap justify-begin items-center mt-8">
      <ProjectThumbnail
        v-for="(project, index) of state.awards"
        :key="index"
        :project="project"
      />
    </div>

    <div class="text-3xl md:text-5xl font-medium mt-16">Major Projects</div>

    <div class="flex flex-wrap justify-begin items-center mt-8">
      <ProjectThumbnail
        v-for="(project, index) of state.majors"
        :key="index"
        :project="project"
      />

      <a
        href="https://github.com/1whatleytay?tab=repositories"
        class="block w-full md:w-56 lg:w-64"
      >
        <button
          class="
            flex flex-col
            rounded-xl
            text-left text-xl
            md:mr-6
            bg-gray-700
            h-52
            mb-4
            w-full
            focus:ring
            overflow-hidden
          "
        >
          <span
            class="
              block
              flex
              items-center
              justify-center
              h-24
              text-center
              bg-gray-600
              w-full
            "
          >
            <vue-feather type="github" size="52" />
          </span>
          <span
            class="
              block
              flex-1 flex
              items-center
              justify-center
              lg:justify-start lg:pl-7
              text-2xl
              w-full
            "
          >
            All Projects (47)
          </span>
        </button>
      </a>
    </div>
  </div>

  <div class="px-8 py-12 text-gray-300 font-light">
    &copy; Copyright 2021, Taylor Whatley
  </div>
</template>

<script lang="ts">
import { reactive, defineComponent } from 'vue'

import { majors, awards } from '../projects'

import ProjectThumbnail from './ProjectThumbnail.vue'

export default defineComponent({
  name: 'Home',

  components: { ProjectThumbnail },

  setup() {
    const state = reactive({
      majors,
      awards
    })

    return { state }
  }
})
</script>
