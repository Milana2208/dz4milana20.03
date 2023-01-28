import React from 'react'
import { useContext } from 'react'
import { Langua } from './App'

function Show() {
    const {lang} = useContext(Langua)
  return (
    <div>
        {lang}
    </div>
  )
}

export default Show