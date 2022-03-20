export let templates = {
  B: {
    native: {
      usage: {
        s: `<i class="bi bi-%kn"></i>`,
        lang: "xml",
      }
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
    }
  },
  Mdi: {
    native: {
      import: {
        s: `import { mdi%n} from '@mdi/js'`,
        lang: "javascript",
      }
    },
    vue: {
      import: {
        s:`import { %v%n } from "./%kn.js"`,
        lang: "javascript",
      },
      usage: {
        s: `<v-icon name="%kv-%kn" />`,
        lang: "xml",
      },
    }
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
        s:`import { %v%n } from "./%kn.js"`,
        lang: "javascript",
      },
      usage: {
        s: `<v-icon name="%kv-%kn" />`,
        lang: "xml",
      },
    }
  }
}

export let urls = {
  B: {
    SVG: "https://raw.githubusercontent.com/twbs/icons/main/icons",
    download: {
      vue: "https://raw.githubusercontent.com/maciejg-git/vue-bootstrap-icons/main/dist-bootstrap/bootstrap"},
  },
  Mdi: {
    SVG: "https://raw.githubusercontent.com/Templarian/MaterialDesign/master/svg",
    download: { 
      vue: "https://raw.githubusercontent.com/maciejg-git/vue-bootstrap-icons/main/dist-mdi/mdi"},
  },
  Fa: {
    SVG: "https://raw.githubusercontent.com/FortAwesome/Font-Awesome/6.x/svgs",
    download: {
      vue: "https://raw.githubusercontent.com/maciejg-git/vue-bootstrap-icons/main/dist-fontawesome/fontawesome"},
  }
}
