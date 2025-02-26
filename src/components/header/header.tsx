import { AppBar, IconButton, Toolbar, Typography } from "@mui/material"
import LogoSmall from '../../assets/logo.png'
interface HeaderProps{
    title:string
    onLogoClick?:()=> void
}
export default function Header({title,onLogoClick}:HeaderProps){
 return <AppBar position="sticky">
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