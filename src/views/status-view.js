  import React, { Component } from "react";
  import { string, func, shape, arrayOf, object, bool } from "prop-types";
  import { connect } from "react-redux";
  import StatusComponent from "../components/status-component";
  import fetchStatuses from '../actions/status-action';

  class StatusView extends Component {
    componentDidMount() {
      this.props.dispatch(fetchStatuses())
    }
    
    render() {
      //console.log(this.props.data.map(item => item.statuses))
      return (
        <div>
          <h1>Statuses to be displayed</h1>
          {this.props.data.map((item, i) => {
            return <StatusComponent 
              key={i} 
              provider={item.provider}
              pending={item.pending}
              statuses={item.statuses}/>
          })}
        </div>
      );
    }
  }
  StatusView.propTypes = {
    dispatch: func.isRequired,
    error: object,
    data: arrayOf(
      shape({
        provider: string,
        statuses: arrayOf(
          shape({
            name: string,
            status: bool,
          })
        )
      
      }),
    )
  };

  StatusView.defaultProps = {
    error: null,
    data: null
  };

  const mapStateToProps = state => ({
    data: state.data,
    error: state.error
  });

  export default connect(mapStateToProps)(StatusView);
