import React from 'react'
import ServicesList from "./ServicesList";
import Quote from "./Quote";

export default () => <section id="main">
                    <div className="container">
                        <article id="main-col">
                            <h1 className="page-title">Services</h1>
                            <ServicesList />
                        </article>
                        <aside id="sidebar">
                            <Quote />
                        </aside>
                    </div>
                </section>