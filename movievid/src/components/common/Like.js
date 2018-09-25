import React, { Component } from 'react';
class Like extends Component {
    state = { liked: true }
    render() { 
        console.log('inside the Like',this.props);
        const { liked } = this.props;
        let classes = 'fa fa-heart';
        if(!liked) {
            classes += '-o';
        }
        return (<i onClick={this.props.onClick} className={classes} aria-hidden="true"></i>)
    }
}
 
export default Like;