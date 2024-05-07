# Vue Icon Browser

[https://vue-icon-browser.netlify.app/](https://vue-icon-browser.netlify.app/)

Vue Icon Browser is an icon browser for: 
- Bootstrap Icons 
- Material Design Icons
- Font Awesome Icons 
- Heroicons

The project has following goals:

- readabilty, simple UI, focus on the icons
- limited to only four packs of the icons (constrains are good)
- unified icons (same set of the attributes, extra vendor attributes removed, normalized naming for vendors with icon variants)
- icon data (name, variant, vendor etc) included in the Vue component (`$_icon` property)
- simplicity, icons are just Vue components (no API, wrapper components etc)
- simple workflow with a list of recently viewed icons
- npm packages or seperate, direct downloads 
- preview of the icon within many different contexts and UI widget for easier initial selection
- filtering by name
- grid and list views
- dark and light themes

Build with: Vue 3, Pinia and Tailwind CSS

Icon source: [Vue-icons](https://github.com/maciejg-git/vue-icons)
