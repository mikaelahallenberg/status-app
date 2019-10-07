  import React, { Component } from "react";
  import { string, func, shape, arrayOf, object, bool } from "prop-types";
  import { connect } from "react-redux";
  import StatusComponent from "../components/status-component";
  import fetchStatuses from '../actions/status-action';
  import styled from 'styled-components';

  const Container = styled.section`
  display: flex;
  max-width: 40em;
  flex-direction: column;
`;
  const Wrapper = styled.div`
  width: 32em;
  display: flex;
  justify-content: space-between;
  `;
  const Heading = styled.h1`
  font-size: 1.6em;
  color: 
  `;
  class StatusView extends Component {
    componentDidMount() {
      this.props.dispatch(fetchStatuses())
    }
    
    render() {
      console.log(this.props.data)
      return (
        <Container>
          <Heading>Statuses</Heading>
          <Wrapper>
          {this.props.data.map((item, i) => {
            console.log(item, i)
            return <StatusComponent 
              key={i} 
              provider={item.provider}
              pending={item.pending}
              statuses={item.statuses}/>
            })}
          </Wrapper>
        </Container>
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
