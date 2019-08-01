import React, { Component } from 'react'

export class Users extends Component {
    constructor(props){
        super(props);
        this.state = {
        value : '',
        };
        }
        render() {
            let usersData = this.props.users_data;
            console.log(usersData);
            return(
            <div>
                <div className = "usersdata">
                    {
                        usersData.map((user) => {
                            return(
                                <div className='user' key={user.email}>
                                <p>{ user.name }</p>
                                <p>{ user.phone }</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            );
            }
           }

export default Users