import { h } from 'vue'
export default {
  $_icon: {
    name: "FormatQuoteClose",
    vendor: "Mdi",
    type: "",
    tags: ["format","quote","close"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-format-quote-close"},
      [ 
        h(
          "path",
          {"d":"M14,17H17L19,13V7H13V13H16M6,17H9L11,13V7H5V13H8L6,17Z"}
        ) 
      ]
    )
  }
}