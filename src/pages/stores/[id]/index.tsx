import React from 'react'
import { useRouter } from 'next/router'

export default function StorePage() {
    const router = useRouter(); 
    const {id} = router.query; //나중에는 id를 이용해서 특정 id를 가진 맛집 정보를 가져올 예정

  return (
    <div>
       <h1>Store Detail : {id} </h1>
    </div>
  )
}
