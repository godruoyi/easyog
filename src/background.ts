import * as Tab from '@/support/tab.ts'
import type { IEvent, ITab } from '@/types.ts'
import { IEventType } from '@/types.ts'

class Background {
    public registerActionClickedListener() {
        browser.action.onClicked.addListener(async (tab, _info) => {
            if (Tab.isSystemPage(tab)) {
                console.info('tab is system page', tab)

                return
            }

            const tabID = tab.id as number
            const event = { type: IEventType.ShowPopup, payload: {
                url: tab.url,
                title: tab.title,
            } as ITab } as IEvent
            await browser.tabs.sendMessage(tabID, event)
        })
    }
}

export default Background
