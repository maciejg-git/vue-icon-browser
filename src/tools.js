export let toKebab = (s) => {
  return s
    .replace(
      /([^\p{L}\d]+|(?<=\p{L})(?=\d)|(?<=\d)(?=\p{L})|(?<=[\p{Ll}\d])(?=\p{Lu})|(?<=\p{Lu})(?=\p{Lu}\p{Ll})|(?<=[\p{L}\d])(?=\p{Lu}\p{Ll}))/gu,
      "-"
    )
    .toLowerCase();
};

export let download = (filename, text) => {
  let element = document.createElement("a");

  element.setAttribute(
    "href",
    "data:text/plain;charset=utf-8," + encodeURIComponent(text)
  );
  element.setAttribute("download", filename);

  element.style.display = "none";
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
};

export let cloneObject = (o) => JSON.parse(JSON.stringify(o));

export let scheduleRefUpdate = (ref, prop, t) => {
  setTimeout(() => {
    ref[prop] = false;
  }, t);
};

export let copyTextToClipboard = (text, ref) => {
  navigator.clipboard.writeText(text).then(
    function () {
      ref.value = true;
      scheduleRefUpdate(ref, "value", 1000);
    },
    function () {}
  );
};
