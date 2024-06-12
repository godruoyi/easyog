import ReactDOM from 'react-dom/client'
import type { ShadowRootContentScriptUi } from 'wxt/client'
import type { IEvent, IEventType, ITab } from '@/types.ts'
import { OpenGraph } from '@/components/OpenGraph.tsx'
import { OpengraphTagName } from '@/constants.ts'

let ui: ShadowRootContentScriptUi<ReactDOM.Root> | null = null

export default class ContentScript {
    public listen(type: IEventType, callback: (event: IEvent) => void) {
        browser.runtime.onMessage.addListener((message, _sender, _sendResponse) => {
            const event = message as IEvent

            if (event?.type === type) {
                callback(event)
            }
        })
    }

    public async createShadowRootUi(ctx: any, event: IEvent) {
        if (ui) {
            ui.remove()
        }

        const tab = event.payload as ITab

        ui = await createShadowRootUi(ctx, {
            name: OpengraphTagName,
            position: 'overlay',
            zIndex: 2147483647,
            onMount: (container) => {
                const app = document.createElement('div')
                container.append(app)
                const root = ReactDOM.createRoot(app)
                root.render(<OpenGraph tab={tab} />)
                return root
            },
            onRemove: (root) => {
                root?.unmount()
            },
        })

        ui.mount()
    }
}
