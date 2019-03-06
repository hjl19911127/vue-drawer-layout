import {shallowMount, mount, createLocalVue} from '@vue/test-utils'
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
    expect(wrapper.find(DrawerLayout).exists()).toBeTruthy()
  })
  test('install component by component way when passed', () => {
    const localVue = createLocalVue()
    localVue.component(DrawerLayout.name, DrawerLayout)
    const wrapper = shallowMount(Test, {
      localVue,
      attachToDocument: true
    })
    expect(wrapper.find(DrawerLayout).exists()).toBeTruthy()
  })
})

describe('Props Test', () => {
  test('renders drawer with width prop when passed', async () => {
    const wrapper = shallowMount(DrawerLayout, {
      propsData: {drawerWidth: 800},
      attachToDocument: true
    })
    expect(wrapper.find('.drawer-wrap').attributes().style).toMatch('width: 800px')
  })
  test('toggle method', async () => {
    const localVue = createLocalVue()
    localVue.component(DrawerLayout.name, DrawerLayout)
    const wrapper = mount(Test, {
      localVue,
      attachToDocument: true
    })
    wrapper.find('#show').trigger('click')
    expect(wrapper.find('.drawer-wrap').attributes().style).toMatch('transform: translate3d(640px,0,0)')
    wrapper.find('#hide').trigger('click')
    expect(wrapper.find('.drawer-wrap').attributes().style).toMatch('transform: translate3d(0px,0,0)')
  })
  test('reverse', async () => {
    const localVue = createLocalVue()
    localVue.component(DrawerLayout.name, DrawerLayout)
    const wrapper = mount({
      template: '<div style="width: 1000px;"><vue-drawer-layout ref="drawerLayout" :reverse="true"></vue-drawer-layout></div>',
    }, {
      localVue,
      attachToDocument: true
    })
    console.log(wrapper.html())
    expect(wrapper.find('.drawer-wrap').attributes().style).toMatch('right: -800px')
    wrapper.vm.$refs.drawerLayout.toggle(true)
    expect(wrapper.find('.drawer-wrap').attributes().style).toMatch('transform: translate3d(-800px,0,0)')
    wrapper.vm.$refs.drawerLayout.toggle(false)
    expect(wrapper.find('.drawer-wrap').attributes().style).toMatch('transform: translate3d(-0px,0,0)')
  })
  test('mask click', async () => {
    const localVue = createLocalVue()
    localVue.component(DrawerLayout.name, DrawerLayout)
    const wrapper = mount(Test, {
      localVue,
      attachToDocument: true
    })
    const component = wrapper.find(DrawerLayout)
    wrapper.find('.drawer .btn').trigger('click')
    expect(wrapper.find('.drawer-mask').isVisible()).toBeTruthy()
    component.trigger('transitionend')
    wrapper.find('.drawer-mask').trigger('click')
    expect(component.emitted('mask-click')).toBeTruthy()
  })
  test('using with mouse', async () => {
    const localVue = createLocalVue()
    localVue.component(DrawerLayout.name, DrawerLayout)
    const wrapper = mount(Test, {
      localVue,
      attachToDocument: true
    })
    const component = wrapper.find(DrawerLayout)
    wrapper.trigger('mousedown', {
      clientX: 0,
      clientY: 0,
    });
    wrapper.trigger('mousemove', {
      clientX: 640,
      clientY: 0,
    })
    wrapper.trigger('mouseup', {
      clientX: 640,
      clientY: 0,
    })
    expect(component.emitted()).toBeTruthy()
  })
})
