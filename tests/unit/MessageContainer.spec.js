import MessageContainer from '@/components/MessageContainer'
import { mount } from '@vue/test-utils'

describe('MessageContainer', () => {
  it('Wraps the MessageDisplay component', () => {
    const mockMessage = 'Hello from the db!'
    const wrapper = mount(MessageContainer, {
      stubs: {
        MessageDisplay: {
          template: `<p v-else data-testid="message">${mockMessage}</p>`
        }
      }
    })

    const message = wrapper.find('[data-testid="message"]').element.textContent

    expect(message).toEqual(mockMessage)
  })
})
