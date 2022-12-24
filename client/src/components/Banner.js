import { Link } from "react-router-dom"

const Banner = ({path, title}) => {
    return (
        // <nav class="navbar navbar-expand-lg bg-light">
        //     <div class="container-fluid">
        //         <a class="navbar-brand" href="#">Navbar</a>
        //         <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        //         <span class="navbar-toggler-icon"></span>
        //         </button>
        //         <div class="collapse navbar-collapse" id="navbarNav">
        //         <ul class="navbar-nav">
        //             <li class="nav-item">
        //             <a class="nav-link active" aria-current="page" href="#">Home</a>
        //             </li>
        //             <li class="nav-item">
        //             <a class="nav-link" href="#">Features</a>
        //             </li>
        //             <li class="nav-item">
        //             <a class="nav-link" href="#">Pricing</a>
        //             </li>
        //             <li class="nav-item">
        //             <a class="nav-link disabled">Disabled</a>
        //             </li>
        //         </ul>
        //         </div>
        //     </div>
        // </nav>



        <div className="navbar navbar-expand-sm">
            <div className="banner container-fluid">
                <h1>Pet Shelter</h1>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-link">
                            <Link className="nav-item" to={path}>{title}</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Banner