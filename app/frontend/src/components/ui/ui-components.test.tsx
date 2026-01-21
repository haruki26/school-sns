import { render, screen } from '@testing-library/react'
import Avatar from './Avatar'
import Badge from './Badge'
import Card from './Card'
import IconButton from './IconButton'
import SectionHeader from './SectionHeader'

describe('ui components', () => {
  it('renders basic UI atoms', () => {
    render(
      <div>
        <Avatar alt="Test avatar" src="/test.png" />
        <Badge>New</Badge>
        <Card>Card content</Card>
        <IconButton icon="add" label="Add" />
        <SectionHeader title="Section title" />
      </div>,
    )

    expect(screen.getByAltText('Test avatar')).toBeInTheDocument()
    expect(screen.getByText('New')).toBeInTheDocument()
    expect(screen.getByText('Card content')).toBeInTheDocument()
    expect(screen.getByLabelText('Add')).toBeInTheDocument()
    expect(screen.getByText('Section title')).toBeInTheDocument()
  })
})
