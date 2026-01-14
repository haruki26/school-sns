export type SettingsItem = {
  icon: string
  label: string
  iconClassName: string
}

export type SettingsSection = {
  title: string
  items: Array<SettingsItem>
}

export type SettingsProfile = {
  name: string
  dept: string
  bio: string
  avatar: string
}

export type SettingsData = {
  profile: SettingsProfile
  sections: Array<SettingsSection>
  versionLabel: string
}
