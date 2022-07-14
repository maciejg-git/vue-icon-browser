import { h } from 'vue'
export default {
  $_icon: {
    name: "AccountSchool",
    vendor: "Mdi",
    type: "",
    tags: ["account","school"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-account-school"},
      [ 
        h(
          "path",
          {"d":"M16 8C16 10.21 14.21 12 12 12C9.79 12 8 10.21 8 8L8.11 7.06L5 5.5L12 2L19 5.5V10.5H18V6L15.89 7.06L16 8M12 14C16.42 14 20 15.79 20 18V20H4V18C4 15.79 7.58 14 12 14Z"}
        ) 
      ]
    )
  }
}