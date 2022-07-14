import { h } from 'vue'
export default {
  $_icon: {
    name: "VolumeVariantOff",
    vendor: "Mdi",
    type: "",
    tags: ["volume","variant","off"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-volume-variant-off"},
      [ 
        h(
          "path",
          {"d":"M5.64,3.64L21.36,19.36L19.95,20.78L16,16.83V20L11,15H7V9H8.17L4.22,5.05L5.64,3.64M16,4V11.17L12.41,7.58L16,4Z"}
        ) 
      ]
    )
  }
}