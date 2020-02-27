import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  root: {
		minWidth: "50%",
		
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

// function initMap() {
//   // The location of Uluru
//   var uluru = {lat: -25.344, lng: 131.036};
//   // The map, centered at Uluru
//   var map = new google.maps.Map(
//       document.getElementById('map'), {zoom: 4, center: uluru});
//   // The marker, positioned at Uluru
//   var marker = new google.maps.Marker({position: uluru, map: map});
// }



const Details = (props) => {
	const classes = useStyles();
	const id = props.match.params.id
	const place = props.place.find(c => c.id == id)
	return(
		<div className="detailCardContainer">
     <Card className={classes.root}>
			  {Object.keys(place).map((deets, idx) => {
          return (
					<div>
					<Typography>{`${place[deets]}`}</Typography>
					
					</div>
				)})}
        <div id="map"></div>
			</Card>
		</div>

	)
}


export default Details 