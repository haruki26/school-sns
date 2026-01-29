/** @vitest-environment jsdom */
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import VersionInfo from './index'

describe('VersionInfo', () => {
  it('renders app name and version', () => {
    render(<VersionInfo appName="School SNS" version="1.2.3" />)

    expect(screen.getByText('School SNS')).toBeTruthy()
    expect(screen.getByText('v1.2.3')).toBeTruthy()
  })
})
