import { TwitterSummaryCard } from '@/components/TwitterSummaryCard.tsx'
import { Header } from '@/components/Header.tsx'

export function TwitterOpenGraph() {
    return (
        <div className="bg-zinc-850 rounded-md fixed top-1.5 right-1.5">
            <Header />

            <div className="mx-8 mt-4 bg-black rounded-md h-auto">
                <div className="px-8 py-4">
                    <div className="text-blue-700 text-base">https://godruoyi.com</div>
                    <div className="mt-2">
                        <TwitterSummaryCard />
                    </div>
                </div>
            </div>

            <div className="mx-8 my-2 text-neutral-300 text-[8px] text-center">
                <div className="">@GODRUOYI</div>
            </div>
        </div>
    )
}
