import { useNavigate } from '@tanstack/react-router'
import MaterialIcon from '../../components/MaterialIcon'
import TimelineFilters from './components/TimelineFilters'
import TimelineCard from './components/TimelineCard'
import TimelineActionButton from './components/TimelineActionButton'
import QuoteCard from './components/QuoteCard'
import OfficialCard from './components/OfficialCard'
import ArtifactTimelineCard from './components/ArtifactTimelineCard'
import { getArtifactTimelineFeed, getTimelineFeed } from './viewModel'
import type { TimelineVariant } from './types'

type TimelineScreenProps = {
  variant?: TimelineVariant
}

export default function TimelineScreen({
  variant = 'scrap',
}: TimelineScreenProps) {
  const navigate = useNavigate()
  const isArtifact = variant === 'artifact'
  const artifactFeed = isArtifact ? getArtifactTimelineFeed() : []
  const timelineFeed = isArtifact ? [] : getTimelineFeed(variant)

  return (
    <>
      <TimelineFilters />
      <main className="flex-1 overflow-y-auto pb-24 scrollbar-hide">
        <div className="flex flex-col p-2 gap-2">
          {isArtifact
            ? artifactFeed.map((item) => (
                <ArtifactTimelineCard key={item.id} item={item} />
              ))
            : timelineFeed.map((item) => {
                switch (item.kind) {
                  case 'question':
                    return (
                      <TimelineCard
                        key={item.id}
                        avatar={item.avatar}
                        name={item.name}
                        time={item.time}
                      >
                        <p className="text-slate-900 text-[13px] leading-relaxed">
                          {item.text}{' '}
                          {item.tag ? (
                            <span className="text-blue-500 font-medium">
                              {item.tag}
                            </span>
                          ) : null}
                        </p>
                        <div className="flex items-center gap-4 mt-2">
                          <TimelineActionButton
                            icon="favorite"
                            count={item.likes}
                          />
                          {item.comments ? (
                            <TimelineActionButton
                              icon="chat_bubble"
                              count={item.comments}
                              className="hover:text-blue-500"
                            />
                          ) : null}
                        </div>
                      </TimelineCard>
                    )
                  case 'quote':
                    return (
                      <TimelineCard
                        key={item.id}
                        avatar={item.avatar}
                        name={item.name}
                        time={item.time}
                      >
                        <p className="text-slate-900 text-[13px] leading-relaxed mb-2.5">
                          {item.text}
                        </p>
                        <QuoteCard />
                        <div className="flex items-center gap-4 mt-2">
                          <TimelineActionButton
                            icon="favorite"
                            count={item.likes}
                            filled
                            className="text-blue-500 hover:text-blue-600"
                          />
                          {item.comments ? (
                            <TimelineActionButton
                              icon="chat_bubble"
                              count={item.comments}
                              className="hover:text-blue-500"
                            />
                          ) : null}
                        </div>
                      </TimelineCard>
                    )
                  case 'official':
                    return (
                      <OfficialCard
                        key={item.id}
                        name={item.name}
                        time={item.time}
                        text={item.text}
                        likes={item.likes}
                      />
                    )
                  case 'request':
                    return (
                      <TimelineCard
                        key={item.id}
                        avatar={item.avatar}
                        name={item.name}
                        time={item.time}
                      >
                        <p className="text-slate-900 text-[13px] leading-relaxed">
                          {item.text}
                        </p>
                        <div className="flex items-center gap-4 mt-2">
                          <TimelineActionButton
                            icon="favorite"
                            count={item.likes}
                          />
                          {item.comments ? (
                            <TimelineActionButton
                              icon="chat_bubble"
                              count={item.comments}
                              className="hover:text-blue-500"
                            />
                          ) : null}
                        </div>
                      </TimelineCard>
                    )
                  default:
                    return null
                }
              })}
        </div>
      </main>
      <button
        className="absolute bottom-28 right-4 z-40 flex items-center justify-center size-14 bg-slate-900 text-white rounded-full shadow-xl hover:scale-105 active:scale-95 transition-all"
        aria-label="Create post"
        onClick={() => navigate({ to: '/posts/new' })}
        type="button"
      >
        <MaterialIcon name="add" className="text-3xl" />
      </button>
    </>
  )
}
