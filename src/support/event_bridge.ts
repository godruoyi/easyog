import type { IEvent } from '@/types.ts'
import { IEventType } from '@/types.ts'

export async function showPopup(id: number) {
    const event = { type: IEventType.ShowPopup } as IEvent
    return await browser.tabs.sendMessage(id, event)
}
