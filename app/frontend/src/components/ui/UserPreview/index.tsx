import { Link } from '@tanstack/react-router'
import Avatar from '@/components/ui/Avatar'
import { cn } from '@/utils/cn'
import IconWithLabel from '@/components/ui/IconWithLabel'

interface Props {
  id: string
  avatarUrl: string | null
  name: string
  classNames?: {
    container?: string
    avatar?: string
    name?: string
  }
}

const UserPreview: React.FC<Props> = ({ id, avatarUrl, name, classNames }) => {
  return (
    <Link
      to="/profile/$id/$userName"
      params={{ id, userName: name }}
      className={cn('rounded', classNames?.container)}
    >
      <IconWithLabel
        icon={() => (
          <Avatar
            src={avatarUrl ?? undefined}
            alt={name}
            className={cn('w-8 h-8', classNames?.avatar)}
          />
        )}
        label={() => (
          <span className={cn('font-bold text-lg', classNames?.name)}>
            {name}
          </span>
        )}
        className="gap-2"
      />
    </Link>
  )
}

export default UserPreview
