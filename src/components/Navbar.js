import Button from './Button'
// {only to refer the addition of functionality to a button }
const Navbar = () => {

    const onClick=()=>{
        console.log('click')
    }

    return (
        <nav className="navbar navbar-light bg-light ">
             <img className="navbar-brand" src="./code_logo.png" alt="" height='75px' width= '100px'/>
            <Button id='gs' color='' text='Get Started' onClick={onClick}/>
      </nav>
    )
}

export default Navbar
