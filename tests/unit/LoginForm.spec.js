import LoginForm from '@/components/LoginForm.vue'
import { mount } from '@vue/test-utils'

describe('LoginForm', () => {
  it('emits and event with a user data payload', async () => {
    const wrapper = mount(LoginForm)
    const input = wrapper.find('input[type="text"]')

    input.setValue('David De Vargas')
    await wrapper.trigger('submit')

    const formSubmittedCalls = wrapper.emitted('formSubmitted')

    expect(formSubmittedCalls).toHaveLength(1)

    const expectedPayload = { name: 'David De Vargas' }

    expect(formSubmittedCalls[0][0]).toMatchObject(expectedPayload)
  })
})
