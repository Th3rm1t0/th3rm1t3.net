export const Profile = (props: {readonly lang?: "ja" | "en"} = { lang: "ja" })  => {
    return (
    <div
    id="profile-card"
    className="flex flex-col items-stretch px-6 py-10 border border-gray-300 bg-white rounded-lg shadow-md"
    >
        <div className="flex flex-wrap items-center">
            <div
                id="profile-icon"
                className="w-full sm:w-1/4 flex justify-center mb-4 sm:mb-0"
            >
                <img
                alt="Profile Icon"
                src="/avater.webp"
                className="w-32 h-32 rounded-full"
                />
            </div>
            <div className="w-full sm:w-3/4 text-left">
                <h2 className="text-2xl font-bold">Th3rm1t3</h2>
                {props.lang === "ja" ? (
                    <p className="text-base mt-2">
                    Th3rm1t3 と書いて「テルミット」と読みます。<br />
                    バックエンドをメインとして細々と活動しているジュニアエンジニアです。<br />
                    Python, Golang, Java, SQL などによく触れています。<br />
                    オタクですが雑食なので、いろいろなジャンルをつまみ食いしています。<br />
                    </p>
                ) : (
                    <p className="text-base mt-2">
                    My name is "Th3rm1t3," pronounced as "テルミット" (/ˈtɛr.mɪt/).<br />
                    I'm a junior engineer mainly working on backend development in a low-key way.<br />
                    I often work with Python, Golang, Java, and SQL.<br />
                    I'm a bit of an otaku, but I enjoy exploring a variety of genres without sticking to one.<br />
                    </p>
                )}
            </div>
        </div>
        <div className="flex flex-wrap mt-8 mx-auto space-x-10 md:space-x-24">
            <div className="w-7 h-7 hover:text-green-800 transition">
                <a href="https://x.com/Th3rm1t3" target="_blank">
                    <svg viewBox="0 0 1200 1227" xmlns="http://www.w3.org/2000/svg">
                        <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" fill="currentColor" />
                    </svg>
                </a>
            </div>
            <div className="w-7 h-7 hover:text-green-800 transition">
                <a href="https://bsky.app/profile/th3rm1t3.bsky.social" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -3.268 64 68.414" >
                        <path d="M13.873 3.805C21.21 9.332 29.103 20.537 32 26.55v15.882c0-.338-.13.044-.41.867-1.512 4.456-7.418 21.847-20.923 7.944-7.111-7.32-3.819-14.64 9.125-16.85-7.405 1.264-15.73-.825-18.014-9.015C1.12 23.022 0 8.51 0 6.55 0-3.268 8.579-.182 13.873 3.805zm36.254 0C42.79 9.332 34.897 20.537 32 26.55v15.882c0-.338.13.044.41.867 1.512 4.456 7.418 21.847 20.923 7.944 7.111-7.32 3.819-14.64-9.125-16.85 7.405 1.264 15.73-.825 18.014-9.015C62.88 23.022 64 8.51 64 6.55c0-9.818-8.578-6.732-13.873-2.745z" fill="currentColor" />
                    </svg>
                </a>
            </div>
            <div className="w-7 h-7 hover:text-green-800 transition">
                <a href="https://github.com/Th3rm1t0" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M12.5.75C6.146.75 1 5.896 1 12.25c0 5.089 3.292 9.387 7.863 10.91.575.101.79-.244.79-.546 0-.273-.014-1.178-.014-2.142-2.889.532-3.636-.704-3.866-1.35-.13-.331-.69-1.352-1.18-1.625-.402-.216-.977-.748-.014-.762.906-.014 1.553.834 1.769 1.179 1.035 1.74 2.688 1.25 3.349.948.1-.747.402-1.25.733-1.538-2.559-.287-5.232-1.279-5.232-5.678 0-1.25.445-2.285 1.178-3.09-.115-.288-.517-1.467.115-3.048 0 0 .963-.302 3.163 1.179.92-.259 1.897-.388 2.875-.388.977 0 1.955.13 2.875.388 2.2-1.495 3.162-1.179 3.162-1.179.633 1.581.23 2.76.115 3.048.733.805 1.179 1.825 1.179 3.09 0 4.413-2.688 5.39-5.247 5.678.417.36.776 1.05.776 2.128 0 1.538-.014 2.774-.014 3.162 0 .302.216.662.79.547C20.709 21.637 24 17.324 24 12.25 24 5.896 18.854.75 12.5.75Z" fill="currentColor" />
                    </svg>
                </a>
            </div>
        </div>
    </div>
    )
}