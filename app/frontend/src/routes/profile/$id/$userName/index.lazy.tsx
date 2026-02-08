import { useSuspenseQuery } from '@tanstack/react-query'
import { Link, createLazyFileRoute } from '@tanstack/react-router'
import { Pencil, Share2 } from 'lucide-react'
import type { ProfileTab } from '@/features/profile/types'
import type React from 'react'
import {
  useFetchSelfInfoOptions,
  useFetchUserContentsOptions,
  useFetchUserFollowersOptions,
  useFetchUserInfoOptions,
} from '@/api/routes/users'
import UserOverview from '@/features/profile/components/UserOverview'
import Tab from '@/components/layout/Tab'
import FollowButton from '@/features/profile/components/FollowButton'
import ArtifactPreview from '@/components/ui/ArtifactPreview'
import ScrapPreview from '@/components/ui/ScrapPreview'
import Popover from '@/components/layout/Popover'

export const Route = createLazyFileRoute('/profile/$id/$userName/')({
  component: RouteComponent,
})

const tabLabels: Record<ProfileTab, string> = {
  artifacts: 'Artifacts',
  scraps: 'Scraps',
}

function RouteComponent() {
  const params = Route.useParams()
  const search = Route.useSearch()

  const { data: userInfo } = useSuspenseQuery(
    useFetchUserInfoOptions(params.id),
  )
  const { data: followers } = useSuspenseQuery(
    useFetchUserFollowersOptions(params.id),
  )

  const { data: contents } = useSuspenseQuery(
    useFetchUserContentsOptions(params.id, { type: search.contentsType }),
  )

  const {
    data: { id: accessUserId },
  } = useSuspenseQuery(useFetchSelfInfoOptions())

  const isFollowing = followers.some((user) => user.id === accessUserId)
  const isSelfProfile = accessUserId === userInfo.id

  const handleShare = async () => {
    if (typeof window === 'undefined') return
    const url = window.location.href
    const shareApi = (
      navigator as {
        share?: (data: ShareData) => Promise<void>
      }
    ).share
    const clipboardApi = (navigator as { clipboard?: Clipboard }).clipboard
    try {
      if (shareApi) {
        await shareApi({
          title: `${userInfo.userName}のプロフィール`,
          url,
        })
      } else if (clipboardApi) {
        await clipboardApi.writeText(url)
      }
    } catch {
      // Ignore share errors and keep UI quiet.
    }
  }

  const displayContents = (): React.ReactNode => {
    if (contents === null) {
      return (
        <div className="text-center text-slate-500">
          ここにはまだ何もありません。
        </div>
      )
    }

    switch (search.contentsType) {
      case 'artifacts':
        return contents.artifacts.map((a) => (
          <ArtifactPreview
            key={a.id}
            artifact={a}
            owner={{
              id: userInfo.id,
              name: userInfo.userName,
              avatarUrl: userInfo.avatarUrl,
            }}
          />
        ))
      case 'scraps':
        return contents.scraps.map((s) => (
          <ScrapPreview
            key={s.id}
            scrap={{
              id: s.id,
              content: s.body,
            }}
            owner={{
              id: userInfo.id,
              name: userInfo.userName,
              avatarUrl: userInfo.avatarUrl,
            }}
          />
        ))
    }
  }

  return (
    <div className="flex flex-col items-center w-full bg-white min-h-full pb-24">
      <div className="w-full max-w-2xl px-4 pt-6 pb-3 flex flex-col gap-4">
        <UserOverview
          id={userInfo.id}
          userName={userInfo.userName}
          avatarUrl={userInfo.avatarUrl}
          bio={userInfo.bio}
          followersCount={userInfo._count.userFolloweeRelationships}
          followingCount={userInfo._count.userFollowerRelationships}
          artifactsCount={userInfo._count.artifacts}
        />
        <div className="flex w-full gap-3">
          {!isSelfProfile && (
            <FollowButton
              targetUserId={userInfo.id}
              isFollowing={isFollowing}
              className="flex-1 bg-sky-500 hover:bg-sky-500/90 text-white text-sm font-bold rounded-lg flex items-center justify-center gap-2 h-10"
            />
          )}
          <button
            type="button"
            onClick={handleShare}
            className="flex-1 h-10 bg-slate-50 border border-slate-200 text-slate-900 text-sm font-bold rounded-lg flex items-center justify-center gap-2 hover:bg-slate-100 active:scale-[0.98] transition-all"
            aria-label="プロフィールを共有"
          >
            <Share2 className="h-4 w-4" />
            Share
          </button>
        </div>
      </div>
      <div className="sticky top-0 z-10 w-full bg-white/95 backdrop-blur">
        <div className="w-full max-w-2xl px-4">
          <Tab className="w-full border-b-0">
            {(['scraps', 'artifacts'] satisfies Array<ProfileTab>).map(
              (tab) => (
                <Link
                  key={tab}
                  to="."
                  search={(s) => ({ ...s, contentsType: tab })}
                  className="w-full"
                >
                  <Tab.Item
                    label={tabLabels[tab]}
                    isActive={search.contentsType === tab}
                    className="w-full"
                  />
                </Link>
              ),
            )}
          </Tab>
        </div>
      </div>
      <div className="w-full max-w-2xl px-4 py-4 flex flex-col gap-4">
        {displayContents()}
      </div>
      <Popover>
        <Link
          to={
            search.contentsType === 'artifacts'
              ? '/timeline/artifacts/create'
              : '/timeline/scraps/create'
          }
          className="flex h-14 w-14 items-center justify-center rounded-full bg-sky-500 text-white shadow-lg shadow-sky-500/30 hover:bg-sky-500/90 hover:scale-105 active:scale-95 transition-all"
          aria-label="投稿を作成"
        >
          <Pencil className="h-6 w-6" />
        </Link>
      </Popover>
    </div>
  )
}
