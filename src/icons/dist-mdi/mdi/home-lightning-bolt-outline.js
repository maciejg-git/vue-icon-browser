import { h } from 'vue'
export default {
  $_icon: {
    name: "HomeLightningBoltOutline",
    vendor: "Mdi",
    type: "",
    tags: ["home","lightning","bolt","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-home-lightning-bolt-outline"},
      [ 
        h(
          "path",
          {"d":"M5 20V12H2L12 3L22 12H19V20H5M12 5.69L7 10.19V18H17V10.19L12 5.69M11.5 18V14H9L12.5 7V11H15L11.5 18Z"}
        ) 
      ]
    )
  }
}