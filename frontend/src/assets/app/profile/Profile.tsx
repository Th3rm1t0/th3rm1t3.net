import "./Profile.css"
import { Card, CardContent, Typography, Avatar } from "@mui/material"
import  Grid  from "@mui/material/Grid2";

export const Profile = (props: {readonly lang?: "ja" | "en"} = { lang: "ja" })  => {
    return (
    <Card id="profile-card">
      <CardContent>
        <Grid container  sx={{ justifyContent: "left" }}>
            <Grid
                size={{xs: 12, sm: 3, md: 3}}
                sx={{margin: "auto 0", display: "flex", justifyContent: "center" }}
                id="profile-icon"
            >
                <Avatar 
                alt="Profile Icon" 
                src="/public/avater.webp" 
                sx={{ width: 128, height: 128 }}
                />
            </Grid>
            <Grid size={{xs: 12, sm: 9, md: 9}} sx={{textAlign: "left"}}>
                <Typography variant="h4" component="h2">
                    Th3rm1t3
                </Typography>
                <Typography variant="body1">
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
                </Typography>
            </Grid>
        </Grid>
      </CardContent>
    </Card>
    )
}