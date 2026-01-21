import CoverPicker from './components/CoverPicker'
import MetadataSection from './components/MetadataSection'
import PostFooter from './components/PostFooter'
import PostToolbar from './components/PostToolbar'
import PostTypeSelector from './components/PostTypeSelector'
import TitleField from './components/TitleField'

export default function NewPostScreen() {
  return (
    <>
      <main className="flex-1 overflow-y-auto pb-44 scrollbar-hide">
        <PostTypeSelector />
        <div className="px-5 space-y-6">
          <CoverPicker />
          <TitleField />
          <PostToolbar />
          <textarea
            className="w-full min-h-[200px] text-[15px] leading-relaxed text-slate-900 placeholder:text-slate-400 border-none p-0 focus:ring-0 bg-transparent resize-none"
            placeholder="Describe your artifact... (Markdown supported)"
          />
          <MetadataSection />
        </div>
      </main>
      <PostFooter />
    </>
  )
}
