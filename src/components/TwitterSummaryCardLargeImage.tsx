import type { ITwitterOpenGraph } from '@/types.ts'
import { formatDomain } from '@/support/url.ts'

export function TwitterSummaryCardLargeImage(props: { og: ITwitterOpenGraph }) {
    const og = props.og

    return (
        <div className="w-full max-w-[420px]">
            <div className="relative rounded-lg border-[1px] border-gray-700">
                <img
                    className="w-full max-w-max rounded-lg overflow-hidden object-cover max-w border-0"
                    src={og.image}
                    alt={og.imageAlt}
                />
                <div className="absolute bottom-2 rounded-md left-2 mr-2 text-[13px] text-neutral-200 rounded-t inset-x-0 overflow-hidden whitespace-nowrap overflow-ellipsis">
                    <label className="bg-black p-2">{og.title}</label>
                </div>
            </div>
            <p className="text-sm text-neutral-400 text-[13px]">
                {`from ${formatDomain(og.url)}`}
            </p>
        </div>
    )
}
