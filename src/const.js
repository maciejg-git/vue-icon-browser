export let templates = {
  B: {
    native: {
      usage: `<i class="bi bi-%kn"></i>`,
    },
    vue: {
      import: `import { %v%n } from "./vue-icons-%v"`,
      usage: `<v-icon name="%kv-%kn" />`,
      usageComponent: `<v-icon :name="%v%n" />`,
    }
  }
}

