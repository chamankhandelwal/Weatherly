import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"
export default function InfoBox({wInfo}){
    const INIT_URL='https://akm-img-a-in.tosshub.com/indiatoday/images/story/202506/vehicles-ply-on-road-amid-a-dust-storm--in-new-delhi-photo-pti-121434802-16x9.jpg?VersionId=ujTYIBKECtzlCarqfWH49v.8tH0HVkW0&size=690:388'; 
    const HOT_URL = "https://thumbs.dreamstime.com/b/sand-sunny-desert-illustration-golden-rays-sky-blue-clear-contrast-sand-sunny-desert-sand-sunny-desert-324967530.jpg";
    const COLD_URL="https://newsus.cgtn.com/news/3567544d79596a4d3363544f77596a4d34637a4e31457a6333566d54/img/59c9a396656c414480e9950dc39b9b2b/59c9a396656c414480e9950dc39b9b2b.JPG";
    const RAIN_URL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiwzSVsS4B-LiWZxSZMUK9PamGDmmleRgvAA&s";
    return(
        <div className='InfoBox'>
            <h3>
                Weather Details:
            </h3>
            <div className="card-continer">
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={wInfo.humidity>80?RAIN_URL:wInfo.temp?HOT_URL:COLD_URL}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {wInfo.city}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
         <p><b>Temperature:&nbsp;{wInfo.temp}&deg;C</b></p>
         <p>Weather:&nbsp;{wInfo.weather}</p>
         <p>Feels Like:&nbsp;{wInfo.feelsLike}&deg;C</p>
         <p>Minimun Temp:&nbsp;{wInfo.minTemp}&deg;C</p>
         <p>Maximun Temp:&nbsp;{wInfo.maxTemp}&deg;C</p>
         <p><i>Humidity:&nbsp;{wInfo.humidity}</i></p>
         
        </Typography>
      </CardContent>
    </Card>
    </div>
        </div>
    )
}