import { Card, CardActionArea, CardContent, CardMedia, Grid2, Paper, Typography } from "@mui/material";
import homeScreen from "../../assets/images/home-screen";

export default function Home(){
    return <Paper>
      <Grid2 padding={2}>
      <Card>
      <CardActionArea>
        <CardMedia component='img'
        height={150}
        image={homeScreen.imageHabits}/>
        <CardContent>
            <Typography variant="h5" component='div'
            >
                Habits
            </Typography>
                
        </CardContent>
        </CardActionArea>  
      </Card>  
      </Grid2>
      <Grid2 padding={2}>
      <Card>
      <CardActionArea>
      <CardMedia component='img'
        height={150}
        image={homeScreen.imageDashboard}/>
      <CardContent>
            <Typography variant="h5" component='div'
            >
                Dashboard
            </Typography>
                
        </CardContent>
        </CardActionArea>  
      </Card>
      </Grid2>
      <Grid2 padding={2}>
      <Card>
      <CardActionArea>
      <CardMedia component='img'
        height={150}
        image={homeScreen.imageSettings}/>
        <CardContent>
            <Typography variant="h5" component='div'
            >
                Settings
            </Typography>
                
        </CardContent>
        </CardActionArea>  
      </Card>
      </Grid2>
      <Grid2 padding={2}>
      <Card>
      <CardActionArea>
      <CardMedia component='img'
        height={150}
        image={homeScreen.imageAbout}/>
        <CardContent>
            <Typography variant="h5" component='div'
            >
                About
            </Typography>
                
        </CardContent>
        </CardActionArea>  
      </Card>
      </Grid2>
    </Paper>
}