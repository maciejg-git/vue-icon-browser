export default function registerIcon(app, icons, options) {
  let { vendorPrefix = false, iconSufix = true } = options || {}
  icons.forEach((i) => {
    let icon = vendorPrefix ? i.vendor + i.name : i.name;
    icon = iconSufix ? icon + "Icon" : icon
    app.component(icon, i);
  });
}
