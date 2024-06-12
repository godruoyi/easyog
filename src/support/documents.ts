import elementReady from 'element-ready'
import type { ITwitterOpenGraph } from '@/types.ts'

export async function extractOGTwitterElements(): Promise<ITwitterOpenGraph | null> {
    const head = document.head

    if (head) {
        console.log('extractOGTwitterElementsDirectly')
        return extractOGTwitterElementsDirectly(head)
    }

    console.log('observerOGTwitterElements')
    return await observerOGTwitterElements()
}

function extractOGTwitterElementsDirectly(head: HTMLHeadElement): ITwitterOpenGraph | null {
    const metaPropertyElements = head.querySelectorAll('meta[property^="twitter:"]')
    const metaNameElements = head.querySelectorAll('meta[name^="twitter:"]')

    if (metaPropertyElements && metaPropertyElements.length > 0) {
        return extractOGFromMetaElements(metaPropertyElements)
    }
    if (metaNameElements && metaNameElements.length > 0) {
        return extractOGFromMetaElements(metaNameElements)
    }

    return null
}

function extractOGFromMetaElements(nodes: NodeListOf<Element>): ITwitterOpenGraph {
    const og = {} as ITwitterOpenGraph
    nodes.forEach((e) => {
        const content = e.getAttribute('content')
        const property = e.getAttribute('property')
        const name = e.getAttribute('name')
        const key = property ?? name

        if (key) {
            const formatedKey = key.replaceAll(/(twitter:)|(:src)/g, '')

            // todo set og value directly
            // eslint-disable-next-line ts/ban-ts-comment
            // @ts-expect-error
            og[formatedKey] = content
        }
    })

    console.log(og)

    return og
}

async function observerOGTwitterElements(): Promise<ITwitterOpenGraph | null> {
    // todo timeout support
    const head = await elementReady('head')

    if (!head) {
        return null
    }

    return extractOGTwitterElementsDirectly(head)
}
