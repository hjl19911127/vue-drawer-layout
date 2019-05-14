import {shallowMount, mount, createLocalVue} from '@vue/test-utils'
import DrawerLayoutPlugin from '@/lib'
import {DrawerLayout} from '@/lib'

describe('Installation Cases', () => {
  const testComponent = {
    template: '<vue-drawer-layout/>',
  }
  test('install component by plugin way when passed', () => {
    const localVue = createLocalVue()
    localVue.use(DrawerLayoutPlugin)
    const wrapper = shallowMount(testComponent, {
      localVue,
      attachToDocument: true
    })
    expect(wrapper.find(DrawerLayout).exists()).toBeTruthy()
  })
  test('install component by component way when passed', () => {
    const localVue = createLocalVue()
    localVue.component(DrawerLayout.name, DrawerLayout)
    const wrapper = shallowMount(testComponent, {
      localVue,
      attachToDocument: true
    })
    expect(wrapper.find(DrawerLayout).exists()).toBeTruthy()
  })
})

describe('Using Cases', () => {
  test('renders with default width (80 percent of itself\'s width) when passed', () => {
    const localVue = createLocalVue()
    localVue.use(DrawerLayoutPlugin)
    const wrapper = mount({
      template: '<vue-drawer-layout style="width: 1000px;"/>'
    }, {
      localVue,
      attachToDocument: true
    })
    expect(wrapper.find('.drawer-wrap').attributes().style).toMatch('width: 800px')
    expect(wrapper.find('.drawer-wrap').attributes().style).toMatch('left: -800px')
  })
  test('renders with drawerWidth and drawableDistance when passed', () => {
    const wrapper = shallowMount(DrawerLayout, {
      propsData: {drawerWidth: 800, drawableDistance: 800},
      attachToDocument: true
    })
    expect(wrapper.find('.drawer-wrap').attributes().style).toMatch('width: 800px')
    expect(wrapper.find('.drawer-wrap').attributes().style).toMatch('left: -800px')
  })
  test('show or hide drawer with toggle method when passed', () => {
    const wrapper = shallowMount(DrawerLayout, {
      propsData: {drawerWidth: 800, drawableDistance: 800},
      attachToDocument: true
    })
    expect(wrapper.find('.drawer-wrap').attributes().style).toMatch('transform: translateX(0)')
    wrapper.vm.toggle(true)
    expect(wrapper.find('.drawer-wrap').attributes().style).toMatch('transform: translateX(800px)')
    wrapper.vm.toggle(false)
    expect(wrapper.find('.drawer-wrap').attributes().style).toMatch('transform: translateX(0)')
    wrapper.vm.toggle()
    expect(wrapper.find('.drawer-wrap').attributes().style).toMatch('transform: translateX(800px)')
    wrapper.vm.toggle()
    expect(wrapper.find('.drawer-wrap').attributes().style).toMatch('transform: translateX(0)')
  })
  test('renders reverse prop when passed', () => {
    const wrapper = shallowMount(DrawerLayout, {
      propsData: {drawerWidth: 800, drawableDistance: 800, reverse: true},
      attachToDocument: true
    })
    expect(wrapper.find('.drawer-wrap').attributes().style).toMatch('right: -800px')
    wrapper.vm.toggle(true)
    expect(wrapper.find('.drawer-wrap').attributes().style).toMatch('transform: translateX(-800px)')
    wrapper.vm.toggle(false)
    expect(wrapper.find('.drawer-wrap').attributes().style).toMatch('transform: translateX(0)')
  })
  test('renders with contentDrawable when passed', () => {
    const wrapper = shallowMount(DrawerLayout, {
      propsData: {drawerWidth: 800, drawableDistance: 800, contentDrawable: true},
      attachToDocument: true
    })
    expect(wrapper.find('.content-wrap').attributes().style).toMatch('transform: translateX(0)')
    wrapper.vm.toggle(true)
    expect(wrapper.find('.content-wrap').attributes().style).toMatch('transform: translateX(800px)')
    wrapper.vm.toggle(false)
    expect(wrapper.find('.content-wrap').attributes().style).toMatch('transform: translateX(0)')
  })
  test('using with mask when passed', () => {
    const wrapper = shallowMount(DrawerLayout, {
      propsData: {drawerWidth: 800, drawableDistance: 800, reverse: true},
      attachToDocument: true
    })
    wrapper.vm.toggle(true)
    expect(wrapper.find('.drawer-mask').isVisible()).toBeTruthy()
    wrapper.trigger('transitionend')
    wrapper.find('.drawer-mask').trigger('click')
    expect(wrapper.emitted('mask-click')).toBeTruthy()
  })
  test('horizontal move with mouse when passed', () => {
    const wrapper = shallowMount(DrawerLayout, {
      propsData: {drawerWidth: 800, drawableDistance: 800},
      attachToDocument: true
    })
    wrapper.trigger('mousedown', {
      clientX: 0,
      clientY: 0,
    });
    wrapper.trigger('mousemove', {
      clientX: 100,
      clientY: 0,
    })
    wrapper.trigger('mouseup', {
      clientX: 100,
      clientY: 0,
    })
    expect(wrapper.find('.drawer-wrap').attributes().style).toMatch('transform: translateX(800px)')
    wrapper.trigger('mousedown', {
      clientX: 100,
      clientY: 0,
    });
    wrapper.trigger('mousemove', {
      clientX: 0,
      clientY: 0,
    })
    wrapper.trigger('mouseup', {
      clientX: 0,
      clientY: 0,
    })
    expect(wrapper.find('.drawer-wrap').attributes().style).toMatch('transform: translateX(0)')
  })
  test('vertical move with mouse when passed', () => {
    const wrapper = shallowMount(DrawerLayout, {
      propsData: {drawerWidth: 800, drawableDistance: 800},
      attachToDocument: true
    })
    wrapper.trigger('mousedown', {
      clientX: 0,
      clientY: 0,
    });
    wrapper.trigger('mousemove', {
      clientX: 0,
      clientY: 100,
    })
    wrapper.trigger('mouseup', {
      clientX: 0,
      clientY: 100,
    })
    expect(wrapper.find('.drawer-wrap').attributes().style).toMatch('transform: translateX(0)')
    wrapper.trigger('mousedown', {
      clientX: 0,
      clientY: 100,
    });
    wrapper.trigger('mousemove', {
      clientX: 0,
      clientY: 100,
    })
    wrapper.trigger('mouseup', {
      clientX: 0,
      clientY: 0,
    })
    expect(wrapper.find('.drawer-wrap').attributes().style).toMatch('transform: translateX(0)')
  })
  test('move sidling with mouse when passed', () => {
    const wrapper = shallowMount(DrawerLayout, {
      propsData: {drawerWidth: 800, drawableDistance: 800},
      attachToDocument: true
    })
    wrapper.trigger('mousedown', {
      clientX: 0,
      clientY: 0,
    });
    wrapper.trigger('mousemove', {
      clientX: 100,
      clientY: 10,
    })
    wrapper.trigger('mouseup', {
      clientX: 100,
      clientY: 10,
    })
    expect(wrapper.find('.drawer-wrap').attributes().style).toMatch('transform: translateX(800px)')
    wrapper.trigger('mousedown', {
      clientX: 100,
      clientY: 10,
    });
    wrapper.trigger('mousemove', {
      clientX: 0,
      clientY: 0,
    })
    wrapper.trigger('mouseup', {
      clientX: 0,
      clientY: 0,
    })
    expect(wrapper.find('.drawer-wrap').attributes().style).toMatch('transform: translateX(0)')
  })
})
