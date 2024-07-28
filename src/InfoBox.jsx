import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import AcUnitOutlinedIcon from '@mui/icons-material/AcUnitOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import ThunderstormOutlinedIcon from '@mui/icons-material/ThunderstormOutlined';

export default function InfoBox({info}){
let RAIN_URL = "./rain.jpeg";
let SUMMER_URL = "./summer.jpeg";
let WINTER_URL = "./winter.jpeg";
    return(
        <div className="InfoBox">
            <div className="CardContainer">
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image = {info.humidity > 80 ? RAIN_URL : info.temp>15 ? SUMMER_URL : WINTER_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Weather - {info.city} {info.humidity > 80 ? <ThunderstormOutlinedIcon /> : info.temp>15 ? <WbSunnyOutlinedIcon /> : <AcUnitOutlinedIcon />}
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
         <p> Temprature = {info.temp}&deg;C</p>
         <p> Humidity = {info.humidity}</p>
         <p> Max Temprature = {info.tempMax}&deg;C</p>
         <p> Min Temprature = {info.tempMin}&deg;C</p>
         <p> The weather can be described as <i>{info.weather}</i> and feels like {info.feelslike}&deg;C</p>
        </Typography>
      </CardContent>
    </Card>
    </div>
        </div>
    );
}