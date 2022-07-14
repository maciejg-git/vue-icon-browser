import { h } from 'vue'
export default {
  $_icon: {
    name: "WifiStrength4",
    vendor: "Mdi",
    type: "",
    tags: ["wifi","strength","4"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-wifi-strength-4"},
      [ 
        h(
          "path",
          {"d":"M12,3C7.79,3 3.7,4.41 0.38,7C4.41,12.06 7.89,16.37 12,21.5C16.08,16.42 20.24,11.24 23.65,7C20.32,4.41 16.22,3 12,3Z"}
        ) 
      ]
    )
  }
}