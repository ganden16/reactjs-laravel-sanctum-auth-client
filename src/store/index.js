import {atom} from 'recoil'

export const authenticated = atom({
	key: 'authenticated',
	default: {
		check: false,
		user: []
	}
})

