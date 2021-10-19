import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';

export default function ProductCard({ product }) {
  const artUrl = product.image_preview_url.split('.');

  const cardMedia = artUrl[3] === 'mp4'
    ? (
      <CardMedia
        component="video"
        height="304"
        image={product.image_preview_url}
        autoplay="true"
        loop="true"
      />
    )
    : (
      <CardMedia
        component="img"
        height="304"
        image={product.image_preview_url}
      />
    );

  return (
    <Card sx={{ maxWidth: 345 }}>
      {cardMedia}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.name || 'untitled'}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.short_description || 'no description'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    image_preview_url: PropTypes.string,
    name: PropTypes.string.isRequired,
    short_description: PropTypes.string,
  }).isRequired,
};