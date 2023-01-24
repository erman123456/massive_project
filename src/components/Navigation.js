import React from "react";

const Navigation = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="/">Languange Care</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="/">About us</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="/">Online Course</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="/">Membership</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="/">Contact</a>
                        </li>
                        <li class="nav-item">
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="/">Action</a></li>
                                <li><a class="dropdown-item" href="/">Another action</a></li>
                                <li>
                                    <hr class="dropdown-divider"/>
                                </li>
                                <li><a class="dropdown-item" href="/">Something else here</a></li>
                            </ul>
                        </li>
                    </ul>
                    <div class="d-flex" role="search">
                        <button class="btn btn-outline-success" type="button">Log in</button>
                    </div>
                    <div class="d-flex" role="search">
                        <button class="btn btn-outline-success" type="button">sign up</button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;
