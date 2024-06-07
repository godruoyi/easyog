export interface ITwitterOpenGraph {
    card: string
    site: string
    title: string
    description: string
    image: string
    imageAlt?: string
}

export interface IEvent {
    type: IEventType
    payload?: any
}

export enum IEventType {
    ShowPopup,
}

export interface IEventListener {
    handle: (event: IEvent) => void
}
