import * as Tab from '@/support/tab.ts'
import * as event from '@/support/event_bridge.ts'

class Background {
    public registerActionClickedListener() {
        browser.action.onClicked.addListener(async (tab, _info) => {
            if (Tab.isSystemPage(tab)) {
                console.info('tab is system page', tab)

                return
            }

            const tabID = tab.id as number
            await event.showPopup(tabID)
        })
    }
}

export default Background
