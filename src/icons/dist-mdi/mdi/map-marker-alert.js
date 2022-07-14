import { h } from 'vue'
export default {
  $_icon: {
    name: "MapMarkerAlert",
    vendor: "Mdi",
    type: "",
    tags: ["map","marker","alert"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-map-marker-alert"},
      [ 
        h(
          "path",
          {"d":"M12 2C15.9 2 19 5.1 19 9C19 14.2 12 22 12 22S5 14.2 5 9C5 5.1 8.1 2 12 2M11 6V12H13V6H11M11 14V16H13V14H11Z"}
        ) 
      ]
    )
  }
}