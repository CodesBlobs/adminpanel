import { CardContent, Typography, Card, Box } from '@mui/material'
import React from 'react'

const LatestVideoCard = (props) => {
  return (<Card {...props}>
     <CardContent>
        <Typography variant='cardTitle'>Latest Video Performance</Typography>
        <Box sx={styles.LatestVideoContainer}>
            <Box sx={styles.latestVideoThumbnail} component={'img'} src='src/assets/meeeee.jpg'/>
            <Typography sx={styles.latestVideoTitle}>React mr m</Typography>
        </Box>
        <Typography variant='h7' sx={styles.latestVideoTimeLable}>First 6 hours: </Typography>
        <Box sx={styles.latestVideoStatsRow}>
          <Typography variant='h7'>Views: </Typography>
          <Typography variant='h7'>225</Typography>
        </Box>
        <Box sx={styles.latestVideoStatsRow}>
          <Typography variant='h7'>Whatch Time: </Typography>
          <Typography variant='h7'>30</Typography>
        </Box>
        <Box sx={styles.latestVideoStatsRow}>
          <Typography variant='h7'>Likes: </Typography>
          <Typography variant='h7'>23</Typography>
        </Box>

        <Typography sx={styles.cardAction} variant='link'>GO TO VIDEO ANALYTICS</Typography>
        <Typography sx={styles.cardAction} variant='link'>SEE COMMENTS(12)</Typography>
     </CardContent>
  </Card>)
}

export default LatestVideoCard
/**
 * @type {import("@mui/material").SxProps}
 */
const styles = {
  latestVideoTitle:{
    position:'absolute',
    bottom: 0,
    color: 'neutral.medium',
    left: 0,
    right:0,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '1rem',
    mb: 2
  },

  LatestVideoContainer:{
    width: '100%',
    position:'relative',
  },
  latestVideoThumbnail: {
    width:'100%',
    mt: 1,
    filter: 'brightness:(20%)',
    display:'block'
  },
  cardAction:{
    mt:2
  },
  latestVideoStatsRow:{
    display:'flex',
    justifyContent:'space-between',
    mt: 2
  },
  latestVideoTimeLable:{
    color: 'neutral.normal',
    mt: 2
  }


}