import { useEffect, useRef, useState } from 'react'
import type { ITwitterOpenGraph } from '@/types.ts'

export function TwitterSummaryCard(props: { og: ITwitterOpenGraph }) {
    const divRef = useRef<HTMLDivElement | null>(null)
    const [height, setHeight] = useState(0)
    const og = props.og

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
                    style={{ width: `${height}px`, height: `${height}px`, maxWidth: `${height}px` }}
                    src={og.image}
                    alt={og.imageAlt}
                />
            </div>
            <div ref={divRef} className="w-[350px] flex-grow rounded-r-xl border-[0.5px] border-l-0 border-gray-800 overflow-hidden">
                <div className="flex flex-col text-[16px] gap-[3px] p-4">
                    <div className="leading-none text-gray-700 overflow-ellipsis">godruoyi.com</div>
                    <div className="leading-none text-[17px] text-neutral-300 ">
                        {og.title}
                    </div>
                    <div
                        style={{
                            display: '-webkit-box',
                            WebkitBoxOrient: 'vertical',
                            WebkitLineClamp: 2,
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                        }}
                        className="text-[13px] text-gray-700 leading-none"
                    >
                        <label className="">{og.description}</label>
                    </div>

                </div>
            </div>
        </div>
    )
}
