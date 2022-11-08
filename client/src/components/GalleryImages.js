import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';


import image1 from "./images/ranchWeddingImages/image1.jpg"
import image2 from "./images/ranchWeddingImages/image2.jpg"
import image3 from "./images/ranchWeddingImages/image3.jpg"
import image4 from "./images/ranchWeddingImages/image4.jpg"
import image5 from "./images/ranchWeddingImages/image5.jpg"
import image6 from "./images/ranchWeddingImages/image6.jpg"
import image7 from "./images/ranchWeddingImages/image7.jpg"
import image8 from "./images/ranchWeddingImages/image8.jpg"

import image9 from "./images/ranchWeddingImages/image9.jpg"
import image10 from "./images/ranchWeddingImages/image10.jpg"
import image11 from "./images/ranchWeddingImages/image11.jpg"
import image12 from "./images/ranchWeddingImages/image12.jpg"
import image13 from "./images/ranchWeddingImages/image13.jpeg"
import image14 from "./images/ranchWeddingImages/image14.jpg"
import image15 from "./images/ranchWeddingImages/image15.jpg"

const images = [
    {
        image: image1,
        title: "Cute Wedding"
    },
    {
        image: image2,
        title: "Sweet Wedding"
    },
    {
        image: image3,
        title: "Adorable Wedding"
    },
    {
        image: image4,
        title: "Cutting the Cake!"
    },
    {
        image: image5,
        title: "Cute Wedding"
    },
    {
      image: image6,
      title: "Cute Wedding"
  },
  {
      image: image7,
      title: "Sweet Wedding"
  },
  {
      image: image8,
      title: "Adorable Wedding"
  },
  {
      image: image9,
      title: "Cutting the Cake!"
  },
  {
      image: image10,
      title: "Cute Wedding"
  },
  {
    image: image11,
    title: "Cute Wedding"
},
{
    image: image12,
    title: "Sweet Wedding"
},
{
    image: image13,
    title: "Adorable Wedding"
},
{
    image: image14,
    title: "Cutting the Cake!"
},
{
    image: image15,
    title: "Cute Wedding"
},
];



export default function MyGallery() {

       
    return (
      <Box 
      sx={{ px:2 }}
      >
      <ImageList variant="masonry" cols={3} gap={8}>
        {images.map((item) => (
          <ImageListItem key={item.image}>
            <img
              src={`${item.image}?w=248&fit=crop&auto=format`}
              srcSet={`${item.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
            title={item.title}
            // subtitle={item.author}
            // actionIcon={
            //   <IconButton
            //     sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
            //     aria-label={`info about ${item.title}`}
            //   >
              
            //   </IconButton>
            // }
          />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
    );

}