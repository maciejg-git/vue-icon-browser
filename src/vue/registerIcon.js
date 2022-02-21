export default function registerIcon(app, icons, options) {
  let vendorPrefix =
    options && options.vendorPrefix !== undefined
      ? options.vendorPrefix
      : true;

  let iconSufix =
    options && options.iconSufix !== undefined ? options.iconSufix : false;

  icons.forEach((i) => {
    let icon = vendorPrefix ? i.$_icon.vendor + i.$_icon.name : i.$_icon.name;
    icon = iconSufix ? icon + "Icon" : icon;
    app.component(icon, i);
  });
}
