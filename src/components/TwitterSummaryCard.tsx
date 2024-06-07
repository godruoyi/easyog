import { useEffect, useRef, useState } from 'react'

export function TwitterSummaryCard() {
    const divRef = useRef<HTMLDivElement | null>(null)
    const [height, setHeight] = useState(0)

    useEffect(() => {
        if (divRef.current) {
            const newHeight = divRef.current.getBoundingClientRect().height
            setHeight(newHeight)
        }
    }, [])

    return (
        <div className="flex">
            <div className="rounded-l-xl border-[0.5px] border-r-0 border-gray-800 overflow-hidden">
                <img
                    className="object-cover"
                    style={{ width: `${height}px`, height: `${height}px` }}
                    src="https://godruoyi.com/_astro/brand-logo.Z0NyS6D-_Z1Vdph6.webp"
                    alt=""
                />
            </div>
            <div ref={divRef} className="w-[300px] flex-grow rounded-r-xl border-[0.5px] border-l-0 border-gray-800 overflow-hidden">
                <div className="flex flex-col text-[16px] gap-[2px] p-[12px]">
                    <div className="leading-none text-gray-700 mt-[4px]">godruoyi.com</div>
                    <div className="leading-none text-[17px] text-neutral-200">www </div>
                    <div className="leading-none max-h-20 text-gray-700 block overflow-ellipsis overflow-hidden mb-[4px]">
                        An open sn open sn ope An open sn open sn ope An open sn open sn ope
                    </div>
                </div>
            </div>
        </div>
    )
}
