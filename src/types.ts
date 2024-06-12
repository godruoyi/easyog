export interface ITwitterOpenGraph {
    card: string
    url: string
    title: string
    description: string
    image: string
    imageAlt?: string
}

export interface ITab {
    url: string
    title: string
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
