import AppHeader from '@/components/AppHeader.vue'
import { mount } from '@vue/test-utils'

describe('AppHeader', () => {
  it('If user is not logged in, do not show log out button', () => {
    const wrapper = mount(AppHeader)
    expect(wrapper.find('button').isVisible()).toBe(false)
  })

  it('If user is logged in, show log out button', async () => {
    const wrapper = mount(AppHeader)
    await wrapper.setData({ loggedId: true })

    expect(wrapper.find('button').isVisible()).toBe(true)
  })
})
