import React, { Component } from 'react';

import { SECURITY_SETTINGS_ENDPOINT } from '../constants/Endpoints';
import SectionContent from '../components/SectionContent';
import ManageUsersForm from '../forms/ManageUsersForm';
import RestFormLoader from '../components/RestFormLoader';
import { restController, RestControllerProps } from '../components/RestController';
import { SecuritySettingsData } from './SecuritySettings';

class ManageUsers extends Component<RestControllerProps<SecuritySettingsData>> {

  componentDidMount() {
    this.props.loadData();
  }

  render() {
    return (
      <SectionContent title="Manage Users">
        <RestFormLoader
          {...this.props}
          render={formProps => <ManageUsersForm {...formProps} />}
        />
      </SectionContent>
    )
  }

}

export default restController(SECURITY_SETTINGS_ENDPOINT, ManageUsers);