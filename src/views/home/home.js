import React, { Component } from 'react';
import './home.css'
import Layout from '../../components/layout'
import Actions from './actions'

export default class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: {},
    }
  }

  componentDidMount() {
    this.props.dispatch(Actions.test("John Doe"));
    this.props.dispatch(Actions.getTestData());
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.testData) {

      console.log('API DATA: ', nextProps.testData);
      this.setState({
        data: nextProps.testData
      })
    }
  }

  render() {
    return (
      <Layout className="home">
        Welcome to Home {this.props.test}
        <hr />
        <div>{this.state.data.customerFirstName}</div>
      </Layout>
    );
  }
}
