export default Header
import '../styles/header.css'

function Header(){
  return(
    <header>
      <img src="../../chef-claude-icon.png" className='chef-claude-logo' alt="chef claude logo"/>
      <p>Chef Claude</p>
    </header>
  )
}