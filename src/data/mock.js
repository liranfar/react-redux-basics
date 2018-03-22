import {UPDATE_PAGE} from "../actions/page-actions";
import {connect} from "react-redux";
import {store} from "../index"

export const HeaderHome = {
    companyName: "Liran",
    lineOfBusiness: "Web Developer",
    pages: [
        {
            name: 'Home',
            link: '#',
            onPageClicked: () => store.dispatch({
                type: UPDATE_PAGE,
                payload: {name: 'Home'}
            })
        },
        {
            name: 'About',
            link: '#',
            // onPageClicked: (UPDATE_PAGE, {page: 'about'})
            onPageClicked: () => store.dispatch({
                type: UPDATE_PAGE,
                payload: {name: 'About'}
            })
        },
        {
            name: 'Services',
            link: '#',
            onPageClicked: () => store.dispatch({
                type: UPDATE_PAGE,
                payload: {name: 'Services'}
            })
            // onPageClicked: dispatch(UPDATE_PAGE, {page: 'services'})
        },
    ]
};


export const headerAbout = {
    companyName: "Liran",
    lineOfBusiness: "Web Developer",
    pages: [
        {
            name: 'Home',
            link: '#',
            onPageClicked: () => store.dispatch({
                type: UPDATE_PAGE,
                payload: {name: 'Home'}
            })
        },
        {
            name: 'About',
            link: '#',
            // onPageClicked: (UPDATE_PAGE, {page: 'about'})
            onPageClicked: () => store.dispatch({
                type: UPDATE_PAGE,
                payload: {name: 'About'}
            })
        },
        {
            name: 'Services',
            link: '#',
            onPageClicked: () => store.dispatch({
                type: UPDATE_PAGE,
                payload: {name: 'Services'}
            })
            // onPageClicked: dispatch(UPDATE_PAGE, {page: 'services'})
        },
    ]
};

export const headerServices = {
    companyName: "Liran",
    lineOfBusiness: "Web Developer",
    pages: [
        {
            name: 'Home',
            link: '#',
            onPageClicked: () => store.dispatch({
                type: UPDATE_PAGE,
                payload: {name: 'Home'}
            })
        },
        {
            name: 'About',
            link: '#',
            // onPageClicked: (UPDATE_PAGE, {page: 'about'})
            onPageClicked: () => store.dispatch({
                type: UPDATE_PAGE,
                payload: {name: 'About'}
            })
        },
        {
            name: 'Services',
            link: '#',
            onPageClicked: () => store.dispatch({
                type: UPDATE_PAGE,
                payload: {name: 'Services'}
            })
            // onPageClicked: dispatch(UPDATE_PAGE, {page: 'services'})
        },
    ]
};
export const showcase = {
    header: "Affordable Professional Web Developing",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacinia accumsan erat, a\
                            vestibulum velit volutpat ut. Maecenas volutpat augue nibh,\
                            vitae rutrum ex congue eget. Cras lectus ex, varius at neque et, mollis luctus quam.\
                            Vivamus fermentum nisi id aliquet ultricies. Vestibulum cursus erat sit amet risus facilisis\
                            commodo non et mi.\
                            Duis a lectus nibh. Proin at eros eget est sollicitudin sagittis. Donec mi nulla, convallis\
                            non mi ut,\
                            placerat scelerisque leo. Cras dolor magna, laoreet non elementum quis, egestas quis purus.\
                            Vestibulum nec porttitor ex. Nam bibendum dui erat, nec commodo ex aliquet ac.\
                            Aliquam a dictum lectus, nec lobortis massa. Sed tincidunt diam vulputate, ullamcorper nisl\
                            sit amet, venenatis purus."
};

export const newsletter = {
    header: "Subscribe to my Newsletter",
};

export const boxes = [
    {
        title: "HTML5 Markup",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacinia accumsan erat, a vestibulum velit volutpat ut.",
        img: "img/logo_html.png"
    },
    {
        title: "CSS3 Styling",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacinia accumsan erat, a vestibulum velit volutpat ut.",
        img: "img/logo_css.png"
    },
    {
        title: "React Redux",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacinia accumsan erat, a vestibulum velit volutpat ut.",
        img: "img/logo_react_redux.png",
    }
]