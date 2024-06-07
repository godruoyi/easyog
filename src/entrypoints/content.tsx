import './../assets/main.css'
import ContentScript from '@/contentscript.tsx'
import { IEventType } from '@/types.ts'

export default defineContentScript({
    matches: ['*://*/*'],
    cssInjectionMode: 'ui',
    async main(ctx) {
        const contentScript = new ContentScript()

        contentScript.listen(IEventType.ShowPopup, (event) => {
            contentScript.createShadowRootUi(ctx, event)
        })
    },
})
