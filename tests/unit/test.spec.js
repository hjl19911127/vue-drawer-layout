import {shallowMount, render, createLocalVue} from '@vue/test-utils'
import DrawerLayoutPlugin from '@/lib'
import {DrawerLayout} from '@/lib'
import Test from './test.vue'

describe('Installation Test', () => {
  test('install component by plugin way when passed', () => {
    const localVue = createLocalVue()
    localVue.use(DrawerLayoutPlugin)
    const wrapper = shallowMount(Test, {
      localVue,
      attachToDocument: true
    })
    expect(wrapper.find(DrawerLayout).is(DrawerLayout)).toBe(true)
  })
  test('install component by component way when passed', () => {
    const localVue = createLocalVue()
    localVue.component(DrawerLayout.name, DrawerLayout)
    const wrapper = shallowMount(Test, {
      localVue,
      attachToDocument: true
    })
    expect(wrapper.find(DrawerLayout).is(DrawerLayout)).toBe(true)
  })
})

describe('Props Test', () => {
  test('renders drawer with width prop when passed', async () => {
    const wrapper = shallowMount(DrawerLayout, {
      propsData: {drawerWidth: 800},
      attachToDocument: true
    })
    expect(wrapper.find('.drawer-wrap').attributes().style).toMatch('width: 800px;')
  })
})
