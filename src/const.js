// %v vendor
// %kv kebab vendor
// %n icon name
// %kn kebab icon name
// %t icon type (font awesome)
// %kt kebab icon type (font awesome)

export const templates = {
  B: {
    native: {
      usage: {
        s: `<i class="bi bi-%kn"></i>`,
        lang: "xml",
      },
    },
    vue: {
      import: {
        s: `import { %v%n } from "./%kn.js"`,
        lang: "javascript",
      },
      usage: {
        s: `<v-icon name="%kv-%kn" />`,
        lang: "xml",
      },
    },
  },
  Mdi: {
    native: {
      import: {
        s: `import { mdi%n} from '@mdi/js'`,
        lang: "javascript",
      },
    },
    vue: {
      import: {
        s: `import { %v%n } from "./%kn.js"`,
        lang: "javascript",
      },
      usage: {
        s: `<v-icon name="%kv-%kn" />`,
        lang: "xml",
      },
    },
  },
  Fa: {
    native: {
      usage: {
        s: `<i class="fa-%kt fa-%kn"></i>`,
        lang: "xml",
      },
      vue: {
        s: `<font-awesome-icon icon="fa-%kt fa-%kn" />`,
        lang: "xml",
      },
    },
    vue: {
      import: {
        s: `import { %v%n } from "./%kn.js"`,
        lang: "javascript",
      },
      usage: {
        s: `<v-icon name="%kv-%kn" />`,
        lang: "xml",
      },
    },
  },
  H: {
    vue: {
      import: {
        s: `import { %v%n } from "./%kn.js"`,
        lang: "javascript",
      },
      usage: {
        s: `<v-icon name="%kv-%kn" />`,
        lang: "xml",
      },
    },
  },
};

export const urls = {
  B: {
    SVG: "https://raw.githubusercontent.com/twbs/icons/main/icons",
    normalizedSVG: "https://raw.githubusercontent.com/maciejg-git/vue-bootstrap-icons/main/dist-svg-bootstrap",
    download: {
      vue: "https://raw.githubusercontent.com/maciejg-git/vue-bootstrap-icons/main/dist-vue-bootstrap/icons",
    },
    github: {
      vue: "https://github.com/maciejg-git/vue-bootstrap-icons/blob/main/dist-vue-bootstrap/icons",
    },
  },
  Mdi: {
    SVG: "https://raw.githubusercontent.com/Templarian/MaterialDesign/master/svg",
    normalizedSVG: "https://raw.githubusercontent.com/maciejg-git/vue-bootstrap-icons/main/dist-svg-mdi",
    download: {
      vue: "https://raw.githubusercontent.com/maciejg-git/vue-bootstrap-icons/main/dist-vue-mdi/icons",
    },
    github: {
      vue: "https://github.com/maciejg-git/vue-bootstrap-icons/blob/main/dist-vue-mdi/icons",
    },
  },
  Fa: {
    SVG: "https://raw.githubusercontent.com/FortAwesome/Font-Awesome/6.x/svgs",
    normalizedSVG: "https://raw.githubusercontent.com/maciejg-git/vue-bootstrap-icons/main/dist-svg-fontawesome",
    download: {
      vue: "https://raw.githubusercontent.com/maciejg-git/vue-bootstrap-icons/main/dist-vue-fontawesome/icons",
    },
    github: {
      vue: "https://github.com/maciejg-git/vue-bootstrap-icons/blob/main/dist-vue-fontawesome/icons",
    },
  },
  H: {
    SVG: "https://raw.githubusercontent.com/tailwindlabs/heroicons/master/optimized",
    normalizedSVG: "https://raw.githubusercontent.com/maciejg-git/vue-bootstrap-icons/main/dist-svg-heroicons",
    download: {
      vue: "https://raw.githubusercontent.com/maciejg-git/vue-bootstrap-icons/main/dist-vue-heroicons/icons",
    },
    github: {
      vue: "https://github.com/maciejg-git/vue-bootstrap-icons/blob/main/dist-vue-heroicons/icons",
    },
  },
};
