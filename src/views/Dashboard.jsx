import React from 'react'
import { useRecoilValue } from 'recoil'
import { authenticated } from '../store'

export default function Dashboard() {
  const auth = useRecoilValue(authenticated)
  return (
    <div className='container'>
      Welcome {auth.user.name}
    </div>
  )
}
