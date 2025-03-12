# Vue Icon Browser

[https://vue-icon-browser.netlify.app/](https://vue-icon-browser.netlify.app/)

Vue Icon Browser is an icon browser for: 
- Bootstrap Icons 
- Material Design Icons
- Font Awesome Icons 
- Heroicons

The icons come from the [Vue-icons](https://github.com/maciejg-git/vue-icons) project.

Build with: Vue 3, Pinia, [Litewind-vue](https://github.com/maciejg-git/vue-litewind) and Tailwind CSS

### Browser features

- simple UI, focus on the readabilty
- limited to only four packs of the icons (constrains are good)
- unified icons (same set of the attributes, extra vendor attributes removed, normalized naming for vendors with icon variants)
- icon data (name, variant, vendor etc) included in the `$_icon` property
- simple workflow with a list of recently viewed icons
- direct downloads of Vue component icons or SVG
- preview of the icon within many different contexts and UI widgets for easier initial selection
- filtering by name
- dark and light themes

---

To do:

- adding custom classes
- remove vendor attributes from SVG
- download SVG parsed to object
- more settings
- store settings in cookies
- auto update icons
- add backend with tags for common icons for better filtering
