import ReactDOM from 'react-dom/client'
import type { IEvent, IEventType } from '@/types.ts'
import { OpenGraph } from '@/components/OpenGraph.tsx'

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
        const name = 'browser-extension-opengraph-checker'
        const elements = document.getElementsByTagName(name)
        if (elements.length > 0) {
            return
        }

        const ui = await createShadowRootUi(ctx, {
            name,
            position: 'overlay',
            zIndex: 2147483647,
            onMount: (container) => {
                const app = document.createElement('div')
                container.append(app)
                const root = ReactDOM.createRoot(app)
                root.render(<OpenGraph />)
                return root
            },
            onRemove: (root) => {
                root?.unmount()
            },
        })

        ui.mount()
    }
}