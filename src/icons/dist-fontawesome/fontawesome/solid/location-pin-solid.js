import { h } from 'vue'
export default {
  $_icon: {
    name: "LocationPin",
    vendor: "Fa",
    type: "Solid",
    tags: ["location","pin"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 384 512","fill":"currentColor","data-name":"fa-location-pin"},
      [ 
        h(
          "path",
          {"d":"M384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192H384z"}
        ) 
      ]
    )
  }
}