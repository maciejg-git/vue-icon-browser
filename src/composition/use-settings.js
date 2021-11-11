import { reactive } from "vue"

let settings = reactive({
  vendorPrefix: true,
  originalNames: false,
  kebabCase: false,
})

export default function useSettings() {
  return settings
}
