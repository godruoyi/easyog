export function TwitterSummaryCardLargeImage() {
    return (
        <div className="">
            <div className="relative">
                <img
                    className="rounded-xl overflow-hidden border-[1px] border-gray-800 object-cover max-w"
                    src="https://pbs.twimg.com/card_img/1795918488206286848/tvoX34uK?format=png&name=medium"
                    alt=""
                />
                <div className="absolute bottom-2 rounded-md left-2 mr-2 text-[13px] text-neutral-200 rounded-t inset-x-0 overflow-hidden whitespace-nowrap overflow-ellipsis">
                    <label className="bg-black p-2 rounded-r-xl">Learn about how to Learn</label>
                </div>
            </div>
            <p className="text-sm text-neutral-400 text-[13px]">from xxxx</p>
        </div>
    )
}
