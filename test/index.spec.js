import { createLocalVue, shallowMount } from '@vue/test-utils'
import Vuetify from 'vuetify'
import index from '~/pages/index'
import { VBtn, VChip } from 'vuetify/lib'


describe('index page', () => {
	const localVue = createLocalVue()
	let vuetify

	beforeEach(() => {
		vuetify = new Vuetify()
	})

	it('should change isDefault on click v-btn', async () => {
		const wrapper = shallowMount(index, {
			localVue,
      		vuetify
		})
		expect(wrapper.vm.isDefault).toBe(true)
		await wrapper.find('.v-btn').trigger('click')
		expect(wrapper.vm.isDefault).toBe(false)
	})
})