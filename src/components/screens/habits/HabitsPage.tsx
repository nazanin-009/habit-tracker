import { Box, Button, Card, CardActionArea, CardActions, colors, IconButton, Paper, TextField, Typography } from "@mui/material";
import { ChangeEvent, useContext, useState } from "react";
import { HabitContext } from "../../../data/contexts/HabitsDataContext";
import { DarkMode, DeleteForever, Done } from "@mui/icons-material";
import { DarkModeContext } from "../../../data/contexts/DarkMode.context";
import { CSSProperties } from "@mui/material/styles/createMixins";

export default function HabitsPage(){
   const [newHabitName,setNewHabitName]=useState("")
   const {habits,addHabit,removeHabitAt}=useContext(HabitContext)
   const { darkMode } = useContext (DarkModeContext)
   const cardStyle: CSSProperties = {
    marginTop:8,
    backgroundColor:darkMode?"#555" : undefined,
    color: darkMode ? "#ccc" : undefined
   }
    function handleNewHabitNameChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {
     setNewHabitName(event.target.value)
    }
    function handleNewHabitName(){
        addHabit({name:newHabitName,completed:false})
    }
    function handleDeleteClick(idx:number){
       removeHabitAt(idx) 
    }
    

   return <Paper style={{
    backgroundColor: darkMode ? "#444" : undefined,
    color: darkMode ? "#ccc" : undefined,
   }}>
        <Box p={1}>
            <Typography variant="subtitle1">Habits </Typography>
           {habits.map((habitItem,habitIndex)=>
          <Card style={cardStyle}>
              <Box p={1}>
               <Typography variant="subtitle2">
                {habitItem.name}
               </Typography>
               {habitItem.completed && <Done/>}
              </Box>
              <CardActions>
                <IconButton 
                color="error"
                onClick={()=>{
                    handleDeleteClick(habitIndex)
                }}>
                   
                   <DeleteForever/>
                </IconButton>
              </CardActions>
            </Card>
           )}
           <Card style={cardStyle}>
            <Box p={1}>
           <Typography variant="subtitle1">
            New Habit
           </Typography>
           <Box>
            <TextField 
            value={newHabitName}
            onChange={handleNewHabitNameChange}
            variant="standard"
             fullWidth 
              placeholder="Habit Name"/>
           </Box>
           <CardActions>
            <Button onClick={handleNewHabitName}>Add</Button>
           </CardActions>
           </Box>
           </Card>
        </Box>
    </Paper>
}