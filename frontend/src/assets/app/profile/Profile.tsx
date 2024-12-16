export const Profile = (props: {readonly lang?: "ja" | "en"} = { lang: "ja" })  => {
    return (
    <div
    id="profile-card"
    className="flex flex-col items-stretch px-6 py-10 border border-gray-300 bg-white rounded-lg max-w-4xl mx-auto shadow-md"
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
                <p className="text-base mt-2">
                {props.lang === "ja" ? (
                    <div>
                    Th3rm1t3 と書いて「テルミット」と読みます。<br />
                    バックエンドをメインとして細々と活動しているジュニアエンジニアです。<br />
                    Python, Golang, Java, SQL などによく触れています。<br />
                    オタクですが雑食なので、いろいろなジャンルをつまみ食いしています。<br />
                    </div>
                ) : (
                    <div>
                    My name is "Th3rm1t3," pronounced as "テルミット" (/ˈtɛr.mɪt/).<br />
                    I'm a junior engineer mainly working on backend development in a low-key way.<br />
                    I often work with Python, Golang, Java, and SQL.<br />
                    I'm a bit of an otaku, but I enjoy exploring a variety of genres without sticking to one.<br />
                    </div>
                )}
                </p>
            </div>
        </div>
    </div>
    )
}