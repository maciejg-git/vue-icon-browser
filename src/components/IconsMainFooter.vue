<template>
  <footer
    class="flex shrink-0 justify-between items-center border-t dark:border-neutral-700 text-gray-600 dark:text-gray-400 mt-10 px-6 py-4"
  >
    <div>
      <ul class="text-sm">
        <li>
          Bootstrap Icons
          <span class="font-semibold underline">v1.8.0</span>,
          <span class="font-semibold">MIT</span>
        </li>
        <li>
          Material Design Icons, <span class="font-semibold">Apache 2.0</span>
        </li>
        <li>
          Font Awesome <span class="font-semibold underline">v6.0.0</span>,
          <span class="font-semibold">CC BY 4.0 License</span>
        </li>
      </ul>
    </div>
    <div class="flex flex-col items-end text-sm">
      <div>Vue-icons</div>
      <v-button
        tag="a"
        href="https://github.com/maciejg-git/vue-icons-browser"
        mod-button="preset:plain"
      >
        <v-icon name="b-github" class="mr-2"></v-icon>
        Github
      </v-button>
    </div>
  </footer>
</template>
