import React from 'react'

export default function Header() {
  return (
    <header id="sticky" class="sticky">

            <div class="container-fluid">

                <div class="row">

                    <div class="col-md-3 col-sm-3 col-xs-8">

                        <div class="logo">

                            <a href="index.html">
                                <div className='heading-title'> Rahul 
                                    <img className="" src='./assets/images/logo/wd1.png' alt='weds' /> 
                                    Nisha</div>
                            </a>

                        </div>

                    </div>

                    {/* <div class="col-md-9 col-sm-9 hidden-xs">

                        <div class="main-menus menu_scroll">

                            <nav>

                                <ul>

                                    <li class=""><a href="0">Home</a></li>

                                    <li class=""><a href="1">About Us</a></li>

                                    <li class="active"><a href="3">Events</a></li>

                                    <li class=""><a href="5">Gallery</a></li>

                                    <li class=""><a href="7">Contact Us</a></li>

                                </ul>

                            </nav>

                        </div>

                    </div> */}

                </div>

            </div>


            {/* <div class="mobilemenu">

                <div class="mobile-menu menu_scroll visible-xs">

                    <nav style={{display: "block"}}>

                        <ul>

                            <li><a href="0">Home</a></li>

                            <li><a href="1">About Us</a></li>

                            <li><a href="3">Events</a></li>

                            <li><a href="5">Gallery</a></li>

                            <li><a href="7">Contact Us</a></li>

                        </ul>

                    </nav>

                </div>

            </div> */}

        </header>
  )
}
