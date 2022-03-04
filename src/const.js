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
        s: `import { %v%n } from "./vue-icons-%v"`,
        lang: "javascript",
      },
      usage: {
        s: `<v-icon name="%kv-%kn" />`,
        lang: "xml",
      },
      usageComponent: {
        s:`<v-icon :name="%v%n" />`,
        lang: "xml",
      }
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
        s:`import { %v%n } from "./vue-icons-%v"`,
        lang: "javascript",
      },
      usage: {
        s: `<v-icon name="%kv-%kn" />`,
        lang: "xml",
      },
      usageComponent: {
        s:`<v-icon :name="%v%n" />`,
        lang: "xml",
      }
    }
  }
}

export let urls = {
  B: {
    SVG: "https://raw.githubusercontent.com/twbs/icons/main/icons/"
  },
  Mdi: {
    SVG: "https://raw.githubusercontent.com/Templarian/MaterialDesign/master/svg/"
  }
}
