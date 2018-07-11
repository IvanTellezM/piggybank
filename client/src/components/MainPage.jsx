import React from 'react';
import PropTypes from 'prop-types';
// import { Card, CardTitle, CardText } from 'material-ui/Card';

const MainPage = ({ secretData, user }) => (
  <Card className="container">
    <CardTitle
      title="MainPage"
      subtitle="It works"
    />
  {secretData && <CardText style={{ fontSize: '14px', color: 'oragnge' }}>Hola! <strong>{user.name}</strong>!<br />{secretData}</CardText>}
  </Card>
);

Dashboard.propTypes = {
  secretData: PropTypes.string.isRequired
};

export default MainPage;
