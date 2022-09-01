export default function registerIcon(app, icons, options) {
  let vendorPrefix =
    options && options.vendorPrefix !== undefined
      ? options.vendorPrefix
      : true;

  icons.forEach((i) => {
    let vendor = vendorPrefix ? i.$_icon.vendor : ""
    let suffix = i.$_icon.type
      .map((i) => {
        return i.charAt(0).toUpperCase() + i.slice(1);
      })
      .join("");

    app.component(`${vendor}${i.$_icon.name}${suffix}`, i);
  });
}
