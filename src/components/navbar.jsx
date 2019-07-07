import React from 'react';

const Navbar = () => {
    return ( 
        <nav className="rtl navbar navbar-dark bg-dark flex-md-nowrap p-0 shadow">
            <a className="navbar-brand col-sm-3 col-md-2 mr-0 " href='#'>وب سایت شخصی</a>
            <div class="input-group my-auto">
                <input type="text" class="form-control form-control-dark " placeholder="جستجو" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                <div class="input-group-append">
                    <button class="btn btn-success" type="button">بگرد</button>
                </div>
                </div>

            <ul className="navbar-nav px-3">
                <li className="nav-item text-nowrap">
                <a className="nav-link" href="#">
                        خروج
                    </a>
                </li>
            </ul>
            
        </nav>
     );
}
 
export default Navbar;
