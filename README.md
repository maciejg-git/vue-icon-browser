# Vue Icon Browser

![GitHub License](https://img.shields.io/github/license/maciejg-git/vue-icon-browser)
![GitHub package.json version](https://img.shields.io/github/package-json/v/maciejg-git/vue-icon-browser)
[![Netlify Status](https://api.netlify.com/api/v1/badges/30e6e4ff-00ec-43a3-b045-d375a9ccf3bb/deploy-status)](https://app.netlify.com/sites/vue-icon-browser/deploys)

[https://iconbrowser.netlify.app/](https://iconbrowser.netlify.app/)

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
- download SVG parsed to object
- reordering selected icons
- multiple filter separated with space
- more settings
- auto update icons
- add backend with tags for common icons for better filtering
