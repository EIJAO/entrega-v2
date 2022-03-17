
import { Link } from "react-router-dom";

export default function Menu() {
    return (
        <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
            <div class="position-sticky pt-3">
                <ul class="nav flex-column">
                    <li class="nav-item">
                        <Link className="nav-link" to="/" >Dashboard</Link>
                    </li>
                    
                    <li class="nav-item">
                        <Link to="/clientes" className="nav-link"  >Clientes</Link>
                    </li>
                   
                </ul>

                
            </div>
        </nav>
    );
} 