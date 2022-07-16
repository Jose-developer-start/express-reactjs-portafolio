import React from 'react'

export default function Button({url,title}) {
  return (
    <a className='btn post__btn' href="{url}">{title}</a>
  )
}
