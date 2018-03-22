import React from 'react'
import MainCol from "./MainCol";
import WhatIdo from "./WhatIdo";
import Sidebar from "../common/Sidebar";

export default function Main(props) {
    const paragraphs = [
        {
            text:"Maecenas sed diam nec dui lobortis posuere. Suspendisse varius aliquet orci quis pretium.\
                                     Interdum et malesuada fames ac ante ipsum primis in faucibus. \
                                     Duis ut nibh et nunc placerat porttitor in nec sem. \
                                     Phasellus sodales urna eu rhoncus sodales. \
                                     Aliquam quis nunc id odio facilisis euismod vitae vel ipsum. Fusce euismod vel diam sit amet sollicitudin. \
                                     Maecenas nec risus elit.",
            className:''
        },
        {
            text:"Morbi fringilla mauris vestibulum, condimentum nibh quis, auctor risus. Aliquam ut vehicula elit.\
            Pellentesque lacinia lorem sed pulvinar imperdiet. Duis consequat pellentesque massa eget volutpat. Nullam\
            faucibus sagittis urna vel imperdiet. Curabitur fringilla ornare varius. Cras mattis faucibus lorem eu\
            tincidunt. Mauris sollicitudin, lacus nec posuere eleifend, odio tortor molestie odio, in gravida ipsum nibh\
            fermentum dui.",
            className: "dark"
        }
    ];
    const title = "About Me";
    return <section id="main">
                    <div className="container">
                        <MainCol title={title}
                                 body={paragraphs} />
                        <Sidebar title="What I do?" body={<WhatIdo />}/>
                    </div>
                </section>
}