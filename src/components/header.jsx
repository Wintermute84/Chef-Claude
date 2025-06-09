export default Header
import '../styles/header.css'
import claudeDarkIcon from "../assets/chef-claude-icon-dark.png"
import claudeLightIcon from "../assets/chef-claude-icon.png"
import darkModeIcon from "../assets/darkmode.png"
import lightModeIcon from "../assets/lightmode.png"

function Header(props){
  return(
    <header style={props.darkMode?{backgroundColor:"black",borderBottom:"1px solid white"}:undefined}>
      <div className="header-logo-container" >
        <img src={props.darkMode?claudeDarkIcon:claudeLightIcon} className='chef-claude-logo' alt="chef claude logo"/>
        <p style={props.darkMode?{color:"white"}:undefined}>Chef Claude</p>
      </div>
      <img src={props.darkMode?lightModeIcon:darkModeIcon} className="display-mode-img" alt="dark/light-mode-image" onClick={props.toggle}/>
    </header>
  )
}