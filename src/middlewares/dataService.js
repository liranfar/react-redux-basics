import axios from 'axios'

const dataService = store => next => action => {

    console.log(store,next,action)


};


export default dataService