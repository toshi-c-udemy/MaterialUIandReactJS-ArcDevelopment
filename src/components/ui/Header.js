import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

export default function Header(props) {
  return (
    <ElevationScroll>
      <AppBar position='fixed' color='primary'>
        <Toolbar>
          <Typography variant='h3' color='secondary'>
            Arc Development
          </Typography>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  );
}
