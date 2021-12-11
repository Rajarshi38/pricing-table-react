import dashboard from './images/dashboard.png';
const Navbar = ()=>{


    
    return (
        <div className = "navbar">
            <div className = "logo">
                <h2>Velocity</h2>
            </div>
            <div className = "links">
                <a href="#">Products</a>
                <a href="#">Pricing</a>
                <a href="#">About</a>
                <a href="#">Blog</a>
            </div>
            <div className="login">
                <button className="btn-login">Login</button>
            </div>
        </div>
    );
}

export default Navbar;