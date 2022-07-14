import { h } from 'vue'
export default {
  $_icon: {
    name: "CameraVideoFill",
    vendor: "B",
    type: "",
    tags: ["camera","video","fill"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"16","height":"16","fill":"currentColor","viewBox":"0 0 16 16","data-name":"b-camera-video-fill"},
      [ 
        h(
          "path",
          {"fill-rule":"evenodd","d":"M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2V5z"}
        ) 
      ]
    )
  }
}