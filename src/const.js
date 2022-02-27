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
      import: `import { mdi%n} from '@mdi/js'`
    },
    vue: {
      import: `import { %v%n } from "./vue-icons-%v"`,
      usage: `<v-icon name="%kv-%kn" />`,
      usageComponent: `<v-icon :name="%v%n" />`,
    }
  }
}

export let vendorsString = {
  B: [
    ["native", "usage"],
    ["vue", "import"],
    ["vue", "usage"],
    ["vue", "usageComponent"],
  ]
}
