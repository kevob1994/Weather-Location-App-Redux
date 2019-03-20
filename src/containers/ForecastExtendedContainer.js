import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastExtended from './../components/ForecastExtended'
import { connect } from 'react-redux';

class ForecastExtendedContainer extends Component {
    render() {
        return (
            <div>
                {
                    this.props.city &&
                   <ForecastExtended city={this.props.city}/>
                }
                
            </div>
        );
    }
}
ForecastExtendedContainer.ProtoTypes = {
    city: PropTypes.string.isRequired,
}
const mapStateToProps = state => ({
    city: state.city
})
export default connect(mapStateToProps, null)(ForecastExtendedContainer)
