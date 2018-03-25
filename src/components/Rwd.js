import React from 'react';

export default () =>
    <div>
        <nav className="row">
            <div id="brand-name" className="col-8 col-s-4">
                <label>Liran Farage</label>
            </div>
            <div className="menu">
                <ul>
                    <li className="col-1 col-s-2 current">Home</li>
                    <li className="col-1 col-s-2">About</li>
                    <li className="col-1 col-s-2">Services</li>
                    <li className="col-1 col-s-2">Contact</li>
                </ul>
            </div>
        </nav>
        <header>
            <div className="row">
                <img className="col-12 col-s-12 center" src="img/profile.jpg"
                     id="avatar"/>
            </div>
            <div className="row">
                <h2 className="col-5 col-s-5 center">Hello! My name is Liran, and I'm a full-stack developer based in
                    Israel</h2>
            </div>
        </header>
        <section id="tech">
            <div className="row">
                <h1 className="col-12 col-s-12 center">Technologies</h1>
            </div>
            <div className="row">
                <div className="col-4 col-s-6 box">
                    <img src="img/logo_html.png"/>
                    <h2>HTML5</h2>
                    <p className="">Pellentesque blandit pulvinar nisl at iaculis. Aenean nec tempus libero. Aenean sed dui arcu. Sed eget sem eu erat sodales tempus. In quis dictum felis. Suspendisse pharetra eu sapien nec hendrerit. Cras fermentum metus a venenatis viverra. Aliquam pharetra tristique varius.</p>
                </div>
                <div className="col-4 col-s-6 box">
                    <img src="img/logo_css.png" />
                    <h2>CSS3</h2>
                    <p className="">Pellentesque blandit pulvinar nisl at iaculis. Aenean nec tempus libero. Aenean sed dui arcu. Sed eget sem eu erat sodales tempus. In quis dictum felis. Suspendisse pharetra eu sapien nec hendrerit. Cras fermentum metus a venenatis viverra. Aliquam pharetra tristique varius.</p>
                </div>
                <div className="col-4 col-s-6 box">
                    <img src="img/logo_react_redux.png" />
                    <h2>React</h2>
                    <p className="">Pellentesque blandit pulvinar nisl at iaculis. Aenean nec tempus libero. Aenean sed dui arcu. Sed eget sem eu erat sodales tempus. In quis dictum felis. Suspendisse pharetra eu sapien nec hendrerit. Cras fermentum metus a venenatis viverra. Aliquam pharetra tristique varius.</p>
                </div>
            </div>
            <div className="row">
                <div className="col-4 col-s-6 box">
                    <img src="img/logo_python.png"/>
                    <h2>Python</h2>
                    <p className="">Pellentesque blandit pulvinar nisl at iaculis. Aenean nec tempus libero. Aenean sed dui arcu. Sed eget sem eu erat sodales tempus. In quis dictum felis. Suspendisse pharetra eu sapien nec hendrerit. Cras fermentum metus a venenatis viverra. Aliquam pharetra tristique varius.</p>
                </div>
                <div className="col-4 col-s-6 box">
                    <img src="img/logo_postgres.png" />
                    <h2>PostgreSQL</h2>
                    <p className="">Pellentesque blandit pulvinar nisl at iaculis. Aenean nec tempus libero. Aenean sed dui arcu. Sed eget sem eu erat sodales tempus. In quis dictum felis. Suspendisse pharetra eu sapien nec hendrerit. Cras fermentum metus a venenatis viverra. Aliquam pharetra tristique varius.</p>
                </div>
                <div className="col-4 col-s-6 box">
                    <img src="img/logo_redux.png" />
                    <h2>Redux</h2>
                    <p className="">Pellentesque blandit pulvinar nisl at iaculis. Aenean nec tempus libero. Aenean sed dui arcu. Sed eget sem eu erat sodales tempus. In quis dictum felis. Suspendisse pharetra eu sapien nec hendrerit. Cras fermentum metus a venenatis viverra. Aliquam pharetra tristique varius.</p>
                </div>
            </div>
        </section>
        <div className="footer">
            <h3>Liran Farage - full-stack developer. Copyright &copy; 2018</h3>
        </div>
    </div>


