import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {useRecoilValue} from 'recoil'
import {authenticated} from '../store'

export default function Authenticated({children}) {
	const navigate = useNavigate()
	const auth = useRecoilValue(authenticated)

	useEffect(() => {
		if(!auth.check) {
			navigate('/login')
		}
	}, [auth.check])
	return (
		children
	)
}
