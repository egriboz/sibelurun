import React from 'react'
import cn from 'classnames'

function PageTitle({ children, className, ...props }) {
  return (
    <p
      className={cn('text-2xl font-bold text-highlight mt-10 mb-10', className)}
      {...props}
    >
      {children}
    </p>
  )
}

export default PageTitle
