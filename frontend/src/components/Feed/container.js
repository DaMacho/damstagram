import React, { Component } from "react";
import PropTypes from "prop-types"
import Feed from "components/Feed/presenter";

class Container extends Component {
  state = {
    loading: true
  };
  static propTypes = {
    getFeed: PropTypes.func.isRequired,
  }
  componentDidMount() {
    const { getFeed } = this.props
    // The IF statement needs to reduce calling api 
    // to load photo whenever reload or comeback to feed page.
    if(!this.props.feed){
      getFeed()
    } else {
      this.setState({
        loading: false
      })
    }
  }
  componentWillReceiveProps = (nextProps) => {
    console.log(this.props, nextProps)
    if(nextProps.feed){
      this.setState({
        loading: false
      })
    }
  }

  render() {
    const { feed } = this.props
    return <Feed {...this.state} feed={feed}/>
  }
}


export default Container