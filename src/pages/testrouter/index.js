import React, { Component } from 'react';
import { connect } from 'dva';

export default connect(({ testrouter }) => testrouter)(
    class TestRouter extends Component {
        componentDidMount() {
            console.log(this.props);
        }
        render() {
            return (
                <div>Hello World</div>
            )
        }
    }
)