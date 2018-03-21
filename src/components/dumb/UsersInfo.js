import React from 'react';

export function UsersInfo(props) {
    const usersExpectedDetails = props.users.map((user, index) =>
        [<li key={index + user.email}>email: {user.email}</li>,
            <li key={index + user.name}>full name: {user.name.first} {user.name.last}</li>]
    );
    const allDetails = props.users.map((user, index) => {
        const detailsList = [];
        Object.keys(user)
            .forEach(function (key) {
                let userDetail = user[key];
                if (typeof(userDetail) === "object") {
                    //TODO: display complex fields
                    return;
                }
                detailsList.push(<li key={index + userDetail}>{key + ' : ' + userDetail}</li>)
            });
        return detailsList
    });
    return <div>
        <div className="App-form-group">User Info:</div>
        <ul>
            {/*{usersExpectedDetails}*/}
            {allDetails}
        </ul>
    </div>;
}