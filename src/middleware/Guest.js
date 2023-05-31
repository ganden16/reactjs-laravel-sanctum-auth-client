import React from 'react'
import {useEffect} from 'react'
import {useNavigate, useOutlet} from 'react-router-dom'
import {useRecoilValue} from 'recoil'
import {authenticated} from '../store'

export default function Guest({children}) {
	const navigate = useNavigate()
	const outlet = useOutlet()
	const auth = useRecoilValue(authenticated)

	useEffect(() => {
		if(auth.check) {
			navigate('/')
		}
	}, [auth.check])
	return (
		children
	)
}
