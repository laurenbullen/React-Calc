import React from 'react';

class Results extends React.Component {
    render(){
        return (
            <div className="results">
                <p>{this.props.result}</p>
            </div>
        )
    }
}

export default Results 