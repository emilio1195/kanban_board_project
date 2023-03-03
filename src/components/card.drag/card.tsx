import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import { deepOrange } from '@material-ui/core/colors';
import Chip from '@material-ui/core/Chip';
import { display, fontSize } from '@mui/system';
import Dropdown from '../dropdown/dropdown';

interface Data_task {
    data: any;
    features: any
}

export default function RecipeReviewCard(props: Data_task) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Chip label={props.features.status} 
                style={{
                    background: props.features.color,
                    color: '#fff'
                    }}
            />
        }
        action={
          <span style={{
                    height: '100%',
                    fontSize: '0.8rem',
                    fontWeight: 500,
                    color: "#888",
                    paddingLeft: "10px",
                    textAlign: 'center'
                    }}
            >
            {props.data.date}
        </span>
        }
      />

      <CardContent>
        <Typography variant="body2"
            style={{
                color: "#202020",
                fontSize: "1.1rem",
                fontWeight: 500
            }}        
        >
          {props.data.title}
        </Typography>
        <Typography variant="body2"
            style={{
                color: "#202020",
                fontSize: "0.9rem",
                fontWeight: 400
            }}        
        >
          {props.data.description}
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
        <div style={{
                    width: '70%'
                    }}>
            <Dropdown 
                          item={props.data}
                      />
        </div>
        
        <div style={{
                    width: '30%',
                    textAlign: 'right',
                    display: 'flex',
                    justifyContent: 'end'
                    }}
            >
            <Avatar
                sx={{ 
                    width: 24, height: 24, fontSize: "0.85rem",
                    bgcolor: deepOrange[800] }}
                alt="Remy Sharp"
                src="/broken-image.jpg"
                >
                B
            </Avatar>
            <Avatar
            sx={{ width: 24, height: 24, fontSize: "0.85rem",
                bgcolor: deepOrange[900] }}
            alt="Remy Sharp"
            src="/broken-image.jpg"
            />
            <Avatar 
                sx={{ width: 24, height: 24}}
                src="/broken-image.jpg" />
        </div>
            
      </CardActions>
    </Card>
  );
}