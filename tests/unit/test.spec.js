import {expect} from 'chai'
import {shallowMount, render, createLocalVue} from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'
import DrawerLayoutPlugin from '@/lib'
import {DrawerLayout} from '@/lib'
import Test from './test.vue'

describe('Test DrawerLayout Installation', () => {
  it('install component when passed', () => {
    const localVue = createLocalVue()
    localVue.use(DrawerLayoutPlugin)
    const wrapper = shallowMount(Test, {
      localVue,
      attachToDocument: true
    })
    expect(wrapper.find(DrawerLayout).is(DrawerLayout)).to.equals(true)
  })
  it('renders drawer with width prop when passed', async () => {

    const wrapper = shallowMount(DrawerLayout, {
      propsData: {drawerWidth: 800},
      attachToDocument: true
    })
    expect(wrapper.find('.drawer-wrap').attributes().style).to.include('width: 800px;')
  })
})

// describe('DrawerLayout mounted', () => {
//   it('renders props.msg when passed', () => {
//     const msg = 'new message'
//     const wrapper = shallowMount(HelloWorld, {
//       propsData: {msg}
//     })
//     expect(wrapper.text()).to.include(msg)
//   })
//   it('install component when passed', async () => {
//     const localVue = createLocalVue()
//     localVue.use(DrawerLayoutPlugin)
//     const wrapper = shallowMount(DrawerLayout, {
//       propsData: {drawerWidth: 800},
//       attachToDocument: true
//     })
//     expect(wrapper.find('.drawer-wrap').attributes().style).to.include('width: 800px;')
//   })
//   it('renders drawer with width prop when passed', async () => {
//
//     const wrapper = shallowMount(DrawerLayout, {
//       propsData: {drawerWidth: 800},
//       attachToDocument: true
//     })
//     expect(wrapper.find('.drawer-wrap').attributes().style).to.include('width: 800px;')
//   })
// })
