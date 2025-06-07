<template>
  <footer
    class="flex shrink-0 justify-between items-center border-t dark:border-neutral-700 text-gray-600 dark:text-gray-400 mt-10 px-6 py-4"
  >
    <div>
      <ul class="text-sm">
        <li>
          Bootstrap Icons,
          <span class="font-semibold">MIT</span>
        </li>
        <li>
          Material Design Icons
        </li>
        <li>
          Font Awesome,
          <span class="font-semibold">CC BY 4.0 License</span>
        </li>
        <li>
          Heroicons,
          <span class="font-semibold">MIT</span>
        </li>
      </ul>
    </div>
    <div class="flex flex-col items-end text-sm">
      <div>Icon Browser</div>
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
