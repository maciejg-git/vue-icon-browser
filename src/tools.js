export let toKebab = (s) =>
    s &&
    s
      .match(/[A-Z]{2,}(?=[0-9]*[A-Z][a-z]+|\b)|[0-9]*[A-Z]?[a-z]+|[A-Z]|[0-9]+/g)
      .map(x => x.toLowerCase())
      .join('-');

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

