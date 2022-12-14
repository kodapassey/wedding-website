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
import image16 from "./images/ranchWeddingImages/image16.jpg"
import image17 from "./images/ranchWeddingImages/image17.jpg"
import image18 from "./images/ranchWeddingImages/image18.jpg"
import image19 from "./images/ranchWeddingImages/image19.jpg"
import image20 from "./images/ranchWeddingImages/image20.jpg"
import image21 from "./images/ranchWeddingImages/image21.jpg"
import image22 from "./images/ranchWeddingImages/image22.jpg"
import image23 from "./images/ranchWeddingImages/image23.jpg"
import image24 from "./images/ranchWeddingImages/image24.jpg"
import image25 from "./images/ranchWeddingImages/image25.jpg"
import image26 from "./images/ranchWeddingImages/image26.jpg"
import image27 from "./images/ranchWeddingImages/image27.jpg"
import image28 from "./images/ranchWeddingImages/image28.webp"
import image29 from "./images/ranchWeddingImages/image29.jpg"
import image30 from "./images/ranchWeddingImages/image30.png"

const images = [
    {
        image: image1,
        title: "Our Gazebo"
    },
    {
        image: image2,
        title: "John and Jane Smith"
    },
    {
        image: image3,
        title: "Michael and Chloe Jones"
    },
    {
        image: image4,
        title: "Ceremony in front of the lake"
    },
    {
        image: image5,
        title: "Jack and Jill Smith OH... and Sparkles too!"
    },
    {
      image: image6,
      title: "Wedding Cake"
  },
  {
      image: image7,
      title: "Stairway to heaven"
  },
  {
      image: image8,
      title: "Banyan patio"
  },
  {
      image: image9,
      title: "Covered Pergula dinning area"
  },
  {
      image: image10,
      title: "No sky like this in the city"
  },
  {
    image: image11,
    title: "Banyan Patio"
},
{
    image: image12,
    title: "Covered Pergula Patio"
},
{
    image: image13,
    title: "James and Maddison Williams"
},
{
    image: image14,
    title: "Can you feel the love tonight"
},
{
    image: image15,
    title: "Burning Love"
},
// {
//   image: image16,
//   title: "Cute Wedding"
// },
{
  image: image17,
  title: "Sam and Nancy Harrison"
},
{
  image: image18,
  title: "Cascade Lodge patio"
},
{
  image: image19,
  title: "Will and Kate Orlov"
},
{
  image: image20,
  title: "Kelly Lodge Dinning hall"
},
{
image: image21,
title: "Cascade Lodge Dinning hall"
},
// {
// image: image22,
// title: "Sweet Wedding"
// },
{
image: image23,
title: "Adorable Wedding"
},
{
image: image24,
title: "Classic lean in with that VIEW!"
},
{
image: image25,
title: "No animals were harmed in this picture"
},
{
image: image26,
title: "The Meadows"
},
{
image: image27,
title: "Kelly Lodge Reception"
},
{
image: image28,
title: "Dinner at the Cascade Lodge"
},
{
image: image29,
title: "Outdoor dinning available"
},
{
image: image30,
title: "Charlie Chase and Sparkles"
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