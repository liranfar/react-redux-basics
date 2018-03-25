import {UPDATE_PAGE} from "../actions/page-actions";
import {store} from "../index";

export const HeaderHome = {
    companyName: "Liran",
    lineOfBusiness: "Farage",
    pages: [
        {
            name: 'Home',
            link: '/',
            onPageClicked: () => store.dispatch({
                type: UPDATE_PAGE,
                payload: {name: 'Home'}
            })
        },
        {
            name: 'About',
            link: '/about',
            // onPageClicked: (UPDATE_PAGE, {page: 'about'})
            onPageClicked: () => store.dispatch({
                type: UPDATE_PAGE,
                payload: {name: 'About'}
            })
        },
        {
            name: 'Services',
            link: '/services',
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
    lineOfBusiness: "Farage",
    pages: [
        {
            name: 'Home',
            link: '/',
            onPageClicked: () => store.dispatch({
                type: UPDATE_PAGE,
                payload: {name: 'Home'}
            })
        },
        {
            name: 'About',
            link: '/about',
            // onPageClicked: (UPDATE_PAGE, {page: 'about'})
            onPageClicked: () => store.dispatch({
                type: UPDATE_PAGE,
                payload: {name: 'About'}
            })
        },
        {
            name: 'Services',
            link: '/services',
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
    lineOfBusiness: "Farage",
    pages: [
        {
            name: 'Home',
            link: '/',
            onPageClicked: () => store.dispatch({
                type: UPDATE_PAGE,
                payload: {name: 'Home'}
            })
        },
        {
            name: 'About',
            link: '/about',
            // onPageClicked: (UPDATE_PAGE, {page: 'about'})
            onPageClicked: () => store.dispatch({
                type: UPDATE_PAGE,
                payload: {name: 'About'}
            })
        },
        {
            name: 'Services',
            link: '/services',
            onPageClicked: () => store.dispatch({
                type: UPDATE_PAGE,
                payload: {name: 'Services'}
            })
            // onPageClicked: dispatch(UPDATE_PAGE, {page: 'services'})
        },
    ]
};
export const showcase = {
    header: "Hi, I am Liran Farage - A web developer based in Israel.",
    body: ""
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
];

