import * as React from 'react';
import Box from '@material-ui/core/Box';
import SpeedDial from '@material-ui/core/SpeedDial';
import SpeedDialAction from '@material-ui/core/SpeedDialAction';
import FacebookRoundedIcon from '@material-ui/icons/FacebookRounded';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import ConnectWithoutContactIcon from '@material-ui/icons/ConnectWithoutContact';

const actions = [
  { icon: <FacebookRoundedIcon/>, name: 'Facebook',url:'https://www.facebook.com/hajamor.mohamedali',tar:"_blank" },
  { icon: <LinkedInIcon />, name: 'Github',url:'https://www.linkedin.com/in/ibn-hadj-amor-mohamed-ali/',tar:"_blank" },
  { icon: <GitHubIcon />, name: 'Print',url:'https://github.com/ibmo419',tar:"_blank" },
  
];

function BasicSpeedDial() {

  return (
    <Box  sx={{ height: 40, transform: 'translateZ(0px)', flexGrow: 1 }} >
      <SpeedDial
        ariaLabel="SpeedDial basic"
        sx={{ position: 'absolute', bottom: 5, right: 100}}
        icon={<ConnectWithoutContactIcon />}
        FabProps={{ size: "small" }}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            href={action.url}
            target={action.tar}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}
export default BasicSpeedDial