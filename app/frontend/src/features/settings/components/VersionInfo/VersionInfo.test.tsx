/** @vitest-environment jsdom */
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import VersionInfo from './index'

describe('VersionInfo', () => {
  it('renders version label', () => {
    render(<VersionInfo version="1.2.3" />)

    expect(screen.getByText('v1.2.3')).toBeTruthy()
  })
})
