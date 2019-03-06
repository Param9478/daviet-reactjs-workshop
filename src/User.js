import React, { Component } from 'react';
class User extends Component {
    constructor() {
        console.log("constructor fired");
        super();
        this.state = {
            // person: 'testing'
            users: [],
            seed: 0
        };
        this.fetchUsers();
    }

    fetchUsers = () => {
        fetch("https://randomuser.me/api/?results=5")
            .then(
                (result) => {
                    return result.json();
                }
            )
            .then(
                (res) => {
                    console.log(res);
                    this.setState({
                        seed: res.info.seed,
                        users: res.results
                    });
                }
            )
            .catch((err) => {
                console.log(err);
            })
    }

    // changePerson = (e) => {
    //     console.log(e.target.value);
    //     this.setState({
    //         person: e.target.value
    //     });
    // }

    render() {
        console.log("render fired");
        return (
            <div className="container">
                {
                    this.state.seed
                }
                {/* {
                    this.state.person
                } */}
                {/* <input type="text"
                onChange={
                   (e)=>  this.changePerson(e)
                }
            /> */}
                {/* <button onClick={
                    this.changePerson
                }>
                    Change Value
                </button> */}
                {
                    this.state.users.map(
                        (v, i) => {
                            return (
                                <div key={i} className="row">
                                    <div>1</div>
                                    <div>{
                                        v.name.first
                                    }</div>
                                    <div>
                                        {
                                            v.email
                                        }
                                    </div>
                                    <div>Delete</div>
                                </div>
                            );
                        }
                    )
                }
               
            </div>
        );
    }
}
export default User;