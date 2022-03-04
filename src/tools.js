export let toKebab = (s) => {
  return s
    .replace(
      /([^\p{L}\d]+|(?<=\p{L})(?=\d)|(?<=\d)(?=\p{L})|(?<=[\p{Ll}\d])(?=\p{Lu})|(?<=\p{Lu})(?=\p{Lu}\p{Ll})|(?<=[\p{L}\d])(?=\p{Lu}\p{Ll}))/gu,
      '-'
    )
    .toLowerCase()
}

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

