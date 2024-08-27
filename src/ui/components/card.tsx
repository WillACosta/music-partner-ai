type CardProps = {
  children: React.ReactNode
  variant?: 'default' | 'large'
  systemResponse?: boolean
} & React.HTMLAttributes<HTMLDivElement>

export function Card({
  children,
  className,
  variant,
  systemResponse = false,
  ...rest
}: CardProps) {
  const variantProperties = {
    default: 'px-12 py-6',
    large: 'p-12',
  }[variant || 'default']

  const borderColor = systemResponse ? 'border-stroke-variant' : 'border-stroke'

  return (
    <div
      className={`text-white rounded-lg bg-surface leading-relaxed border ${borderColor} ${className} ${variantProperties}`}
      {...rest}
    >
      {children}
    </div>
  )
}
