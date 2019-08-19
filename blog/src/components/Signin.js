import React from 'react';

class Signin extends React.Component{

    render(){
        return(
            <form className="container">
                <div className="row">
                    <label className="input-group text-center col-4">Sign in</label>
                    <input type="text" className="form-control col-4"></input>

                </div>
            </form>
        )
    }

}

export default Signin;