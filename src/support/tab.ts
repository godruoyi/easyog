import type Browser from 'webextension-polyfill'

export function isSystemLink(link: string) {
    return (
        link.startsWith('chrome://') || link.startsWith('chrome-extension://') || link.startsWith('chrome-search://')
    )
}

export function isSystemPage(tab: Browser.Tabs.Tab) {
    return tab.active && isSystemLink(tab.url as string)
}
