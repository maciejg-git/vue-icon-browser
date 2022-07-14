import { h } from 'vue'
export default {
  $_icon: {
    name: "NavigationOutline",
    vendor: "Mdi",
    type: "",
    tags: ["navigation","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-navigation-outline"},
      [ 
        h(
          "path",
          {"d":"M12 7.3L16.3 17.7L12.8 16.2L12 15.8L11.2 16.2L7.7 17.7L12 7.3M12 2L4.5 20.3L5.2 21L12 18L18.8 21L19.5 20.3L12 2Z"}
        ) 
      ]
    )
  }
}