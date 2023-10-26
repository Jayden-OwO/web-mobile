export type AssemblySizeType = 'large' | 'default' | 'small'

export type LanguageType = 'zh' | 'en' | null

/* GlobalState */
export interface GlobalState {
  assemblySize: AssemblySizeType
  language: LanguageType
  primary: string
  footer: boolean
  history: any
}

/* tabsMenuProps */
export interface TabsMenuProps {
  icon: string
  title: string
  path: string
  name: string
  close: boolean
}

/* TabsState */
export interface TabsState {
  tabsMenuList: TabsMenuProps[]
}

/* KeepAliveState */
export interface KeepAliveState {
  keepAliveName: string[]
}
