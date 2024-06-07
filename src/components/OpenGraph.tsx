import { useEffect, useState } from 'react'
import { TwitterOpenGraph } from '@/components/TwitterOpenGraph.tsx'

const ExtensionContainerId = 'ExtensionContainerIdExtensionContainerId'

export function OpenGraph() {
    const [isOpen, setIsOpen] = useState(true)

    const keyPress = (e: any) => {
        if (e.keyCode === 27) {
            setIsOpen(false)
        }
    }

    const handleDocumentClick = (e: any) => {
        if (e.target?.id === ExtensionContainerId) {
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
            className=""
            id={ExtensionContainerId}
        >
            <TwitterOpenGraph />
        </div>
    )
}
