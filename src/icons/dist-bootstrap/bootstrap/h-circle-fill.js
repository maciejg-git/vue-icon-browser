import { h } from 'vue'
export default {
  $_icon: {
    name: "HCircleFill",
    vendor: "B",
    type: "",
    tags: ["h","circle","fill"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"16","height":"16","fill":"currentColor","viewBox":"0 0 16 16","data-name":"b-h-circle-fill"},
      [ 
        h(
          "path",
          {"d":"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0Zm-5-3.998H9.67v3.322H6.33V4.002H5V12h1.33V8.455h3.34V12H11V4.002Z"}
        ) 
      ]
    )
  }
}