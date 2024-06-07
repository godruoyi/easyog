export function Header() {
    return (
        <div className="mx-8 pt-2">
            <div className="flex">
                <div className="flex-grow">
                    <div className="flex justify-between">
                        <h1 className="text-xl text-neutral-200">
                            Open
                            <span className="text-yellow-500 text-sm"> Checker</span>
                        </h1>
                        <a
                            className="shadow-md inline-flex justify-center items-center"
                            href="https://github.com/godruoyi"
                            target="_blank"
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="#E7E9EA" xmlns="http://www.w3.org/2000/svg">
                                <g>
                                    <path d="M12 0C5.37 0 0 5.373 0 12C0 17.303 3.438 21.8 8.205 23.385C8.805 23.498 9.025 23.127 9.025 22.808C9.025 22.523 9.015 21.768 9.01 20.768C5.672 21.492 4.968 19.158 4.968 19.158C4.422 17.773 3.633 17.403 3.633 17.403C2.546 16.659 3.717 16.674 3.717 16.674C4.922 16.758 5.555 17.91 5.555 17.91C6.625 19.745 8.364 19.215 9.05 18.908C9.158 18.132 9.467 17.603 9.81 17.303C7.145 17.003 4.344 15.971 4.344 11.373C4.344 10.063 4.809 8.993 5.579 8.153C5.444 7.85 5.039 6.63 5.684 4.977C5.684 4.977 6.689 4.655 8.984 6.207C9.944 5.94 10.964 5.808 11.984 5.802C13.004 5.808 14.024 5.94 14.984 6.207C17.264 4.655 18.269 4.977 18.269 4.977C18.914 6.63 18.509 7.85 18.389 8.153C19.154 8.993 19.619 10.063 19.619 11.373C19.619 15.983 16.814 16.998 14.144 17.293C14.564 17.653 14.954 18.389 14.954 19.513C14.954 21.119 14.939 22.409 14.939 22.799C14.939 23.114 15.149 23.489 15.764 23.369C20.565 21.795 24 17.295 24 12C24 5.373 18.627 0 12 0Z" />
                                </g>
                            </svg>
                        </a>
                    </div>
                    <p className="text-neutral-300 text-xs">An open-source tool for checking OG styles of any website</p>
                </div>
            </div>
        </div>
    )
}
