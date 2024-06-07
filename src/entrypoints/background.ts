import Background from '@/background.ts'

export default defineBackground(() => {
    const background = new Background()

    background.registerActionClickedListener()
    // background.registerContextMenusListener()
    // background.registerMessageListener()
})
