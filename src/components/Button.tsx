import * as React from 'react'
import clsx from 'clsx'

export interface Props {
  type?: 'primary' | 'secondary'
  className?: string | object
  loading?: boolean
}

const Button: React.FC<Props & React.HTMLProps<HTMLButtonElement>> = ({
  children,
  className,
  type = 'primary',
  loading = false,
  ...props
}) => {
  const disabled = props.disabled || loading

  const mergedClassName = clsx(
    'px-4 py-2',
    { 'text-white': !disabled, 'text-gray-500 dark:text-gray-700': disabled },
    {
      'bg-green-700 hover:bg-green-800': !disabled && type === 'primary',
      'bg-blue-700 hover:bg-blue-800': !disabled && type === 'secondary',
      'bg-gray-300 dark:bg-gray-800': disabled,
    },
    {
      'cursor-not-allowed': disabled && !loading,
      'cursor-wait': loading,
    },
    className
  )

  return (
    <button className={mergedClassName} disabled={disabled} {...props}>
      {children}
      {loading && '...'}
    </button>
  )
}

export default Button
