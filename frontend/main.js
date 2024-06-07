import htmx from 'htmx.org';

window.htmx = htmx;

import Alpine from 'alpinejs'

window.Alpine = Alpine

import { createApp } from 'vue';
import { Quasar, Notify, useQuasar } from 'quasar';

import '@quasar/extras/material-icons/material-icons.css'
import './main.sass'

import QDateInput from './components/QDateInput.vue';
import QDateTimeInput from './components/QDateTimeInput.vue';
import QDateRangeInput from './components/QDateRangeInput.vue';
import QMultiSelect from './components/QMultiSelect.vue';
import QButtonGroup from './components/QButtonGroup.vue';
import QToggleInput from './components/QToggleInput.vue';

function createComponent(component, selector, props = {}, quasar = {}) {
  let app = createApp(component, props)

  app.use(Quasar, quasar)

  app.mount(selector)
}


function getSafeInputProps(el) {
  let props = {}
  for (let i = 0; i < el.attributes.length; i++) {
    let attr = el.attributes[i]
    if (attr.name !== 'type') {
      props[attr.name] = attr.value
    }
  }
  return props
}

function getOptions(el) {
  const options = el.querySelectorAll('option')
  let optionsArray = []
  for (let i = 0; i < options.length; i++) {
    optionsArray.push({
      value: options[i].value,
      label: options[i].innerText
    })
  }
  return optionsArray
}

Alpine.directive('date-input', (el) => {
  const props = getSafeInputProps(el.querySelector('input'))
  createComponent(QDateInput, el, props)
})

Alpine.directive('date-time-input', (el) => {
  const props = getSafeInputProps(el.querySelector('input'))
  createComponent(QDateTimeInput, el, props)
})

Alpine.directive('date-range-input', (el) => {
  const props = getSafeInputProps(el.querySelector('input'))
  createComponent(QDateRangeInput, el, props)
})

Alpine.directive('multi-select', (el) => {
  const props = getSafeInputProps(el.querySelector('select'))
  props.options = getOptions(el.querySelector('select'))
  createComponent(QMultiSelect, el, props)
})

Alpine.directive('button-group', (el) => {
  const props = getSafeInputProps(el.querySelector('select'))
  props.options = getOptions(el.querySelector('select'))
  createComponent(QButtonGroup, el, props)
})

Alpine.directive('toggle', (el) => {
  const props = getSafeInputProps(el.querySelector('input'))
  createComponent(QToggleInput, el, props)
})

Alpine.directive('notify', (el) => {
  createComponent({
    setup() {
      const $q = useQuasar()

      function notify() {
        $q.notify({
          message: 'Hello World',
          color: 'primary',
          position: 'top'
        })
      }

      return {
        notify
      }
    }
  }, el, {}, {
    plugins: {
      Notify
    }
  })
})

Alpine.start()
