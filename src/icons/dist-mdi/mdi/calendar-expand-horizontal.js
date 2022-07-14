import { h } from 'vue'
export default {
  $_icon: {
    name: "CalendarExpandHorizontal",
    vendor: "Mdi",
    type: "",
    tags: ["calendar","expand","horizontal"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-calendar-expand-horizontal"},
      [ 
        h(
          "path",
          {"d":"M19 19H5V8H19M16 1V3H8V1H6V3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3H18V1M18 14L15 11V13H9V11L6 14L9 17V15H15V17L18 14Z"}
        ) 
      ]
    )
  }
}