import { Card, CardActionArea, CardContent, Paper, Typography } from "@mui/material";

export default function Home(){
    return <Paper>
      <Card>
      <CardActionArea>
        {/* TODO: Create Card Media */}
        <CardContent>
            <Typography variant="h5" component='div'
            >
                Habits
            </Typography>
                
        </CardContent>
        </CardActionArea>  
      </Card>  
      <Card>
      <CardActionArea>
        {/* TODO: Create Card Media */}
        <CardContent>
            <Typography variant="h5" component='div'
            >
                Dashboard
            </Typography>
                
        </CardContent>
        </CardActionArea>  
      </Card>
      <Card>
      <CardActionArea>
        {/* TODO: Create Card Media */}
        <CardContent>
            <Typography variant="h5" component='div'
            >
                Settings
            </Typography>
                
        </CardContent>
        </CardActionArea>  
      </Card>
    </Paper>
}