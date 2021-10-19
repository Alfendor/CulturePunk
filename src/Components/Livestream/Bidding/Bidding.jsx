import React from 'react';
import PropTypes from 'prop-types';
import '../ChatBidding.css';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import axios from 'axios';
import BiddingModal from './BiddingModal';

const Bidding = (props) => {
  // Need to pass in username/userid as props
  const { lists } = props;

  const handleClick = () => (
    axios.delete('/WithdrawBid', {
      userId: 4,
      userName: 'Oliver Squirtle Nomes',
    })
      .then((response) => console.log('Delete Success!', response))
      .catch((err) => console.log('Delete Err:', err))
  );

  return (
    <Grid className="ChatBidding-bidSection" item xs={9}>
      Bidding List
      <List id="ChatBidding-bidArea">
        {lists.map((list) => (
          <Grid item xs={12} key={list.userId}>
            <ListItem disableGutters>
              <ListItemText id="ChatBidding-eachBid" primary={`${list.userName}`} />
              <ListItemText id="ChatBidding-eachBidContent" primary={`${list.price}`} />
            </ListItem>
          </Grid>
        ))}
      </List>
      <Grid className="ChatBidding-button">
        <BiddingModal className="ChatBidding-button" />
        <Button onClick={(e) => handleClick(e)} className="ChatBidding-button" variant="contained" size="small">Withdraw Bidding</Button>
      </Grid>
    </Grid>
  );
};

Bidding.defaultProps = [];

Bidding.propTypes = {
  lists: PropTypes.arrayOf(PropTypes.object),
};

export default Bidding;