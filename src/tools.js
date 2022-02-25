export let toKebab = (s) => {
  return s
    .replace(/([A-Z])([A-Z])/g, "$1-$2")
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/[\s_]+/g, "-")
    .toLowerCase();
};

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

