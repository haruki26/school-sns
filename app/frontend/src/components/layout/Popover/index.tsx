import { useEffect, useRef } from 'react'
import { cn } from '@/utils/cn'

interface BaseProps {
  children: React.ReactNode
  position?: {
    x: 'left' | 'right'
    y: 'top' | 'bottom'
  }
  className?: string
  renderMode?: 'always' | 'manual'
  isRendered?: boolean
}

interface AlwaysVisibleProps extends BaseProps {
  renderMode?: 'always'
}

interface ManualProps extends BaseProps {
  renderMode: 'manual'
  isRendered: boolean
}

type Props = AlwaysVisibleProps | ManualProps

const Popover: React.FC<Props> = ({
  children,
  position = { x: 'right', y: 'bottom' },
  className = '',
  renderMode = 'always',
  isRendered,
}) => {
  if (renderMode === 'manual' && !isRendered) {
    return null
  }

  const popoverId = `popover-${Math.random().toString(36).slice(2, 15)}`
  const popoverRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const popoverElement = popoverRef.current
    if (!popoverElement || popoverElement.id !== popoverId) return

    popoverElement.showPopover()
    return () => {
      popoverElement.hidePopover()
    }
  }, [popoverRef])

  return (
    <div ref={popoverRef} id={popoverId} popover="manual">
      <div
        className={cn(
          'fixed z-50',
          position.x === 'right' ? 'right-4' : 'left-4',
          position.y === 'bottom' ? 'bottom-18' : 'top-18',
          className,
        )}
      >
        {children}
      </div>
    </div>
  )
}

export default Popover
