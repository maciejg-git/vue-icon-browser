import { h } from 'vue'
export default {
  $_icon: {
    name: "AudioInputStereoMinijack",
    vendor: "Mdi",
    type: "",
    tags: ["audio","input","stereo","minijack"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-audio-input-stereo-minijack"},
      [ 
        h(
          "path",
          {"d":"M11 4V3C11 2.45 11.45 2 12 2S13 2.45 13 3V4H11M13 9V5H11V9H9V15C9 16.3 9.84 17.4 11 17.82V22H13V17.82C14.16 17.4 15 16.3 15 15V9H13Z"}
        ) 
      ]
    )
  }
}