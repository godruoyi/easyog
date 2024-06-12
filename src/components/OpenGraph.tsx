import { useEffect, useState } from 'react'
import { TwitterOpenGraph } from '@/components/TwitterOpenGraph.tsx'
import { OpengraphTagName } from '@/constants.ts'
import type { ITab } from '@/types.ts'

export function OpenGraph(props: { tab: ITab }) {
    const [isOpen, setIsOpen] = useState(true)

    const keyPress = (e: any) => {
        if (e.keyCode === 27) {
            setIsOpen(false)
        }
    }

    const handleDocumentClick = (e: any) => {
        if (e.target?.tagName === OpengraphTagName.toUpperCase()) {
            return
        }
        setIsOpen(false)
    }

    useEffect(() => {
        setIsOpen(true)

        document.addEventListener('keyup', keyPress)
        document.addEventListener('click', handleDocumentClick)

        return () => {
            document.removeEventListener('keyup', keyPress)
            document.removeEventListener('click', handleDocumentClick)
        }
    }, [])

    return (
        <div
            style={{ display: isOpen ? 'block' : 'none' }}
        >
            <TwitterOpenGraph tab={props.tab} />
        </div>
    )
}
