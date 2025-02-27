import { AppBar, IconButton, Toolbar, Typography } from "@mui/material"
import LogoSmall from '../../assets/logo.png'
import { useContext } from "react"
import { DarkModeContext } from "../../data/contexts/DarkMode.context"


interface HeaderProps{
    title:string
    onLogoClick?:()=> void
}
export default function Header({title,onLogoClick}:HeaderProps){
  const {darkMode}=useContext(DarkModeContext)
 return <AppBar position="sticky" style={{backgroundColor:darkMode?'#222':undefined}}>
 <Toolbar>
  <IconButton onClick={onLogoClick}>
    <img src={LogoSmall} alt="logo" />
  </IconButton>
   <Typography
     variant="h6"
     noWrap
     component="div"
   >
   {title}
   </Typography>
  
 </Toolbar>
</AppBar>

}