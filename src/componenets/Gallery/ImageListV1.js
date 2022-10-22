import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import "./ImageListV1.css";
import { useTheme } from '@mui/material';
import pic1 from '../../util/images/1.jpg';
// import backSvg1 from '../../util/images/svg/ttten2.svg';
import backSvg2 from '../../util/svg/leaves.svg'

// import backSvg from '../../util/images/svg/patternpad.svg';

export default function ImageListV1() {
  const theme = useTheme();
  return (

    <Box sx={{
      display: 'flex',
      FlexDirection: 'column',
      // width: "100vw",
      // margin: '2em',
      marginTop: '1em',
      // marginBottom: '1em',
      // backgroundColor: 'rgba(221,221,221,0.6)',
      // borderRadius: '1em', 
      backgroundImage: `url(${backSvg2})`,
      // backgroundColor: 'rgba(0, 0, 0, 0.5)',

      // height:'400px',
      // backgroundColor:theme.palette.primary.dark,
      alignItems: 'center',
      justifyContent: 'space-around',
      // margin:'1em',
      padding: '1em',
    }}>
      {/* <img src={pic1} alt="bgr" /> */}


      <Box sx={{
        // width: 1000,
        // height: 900,
        width: 1000,
        height: 800,
        overflowY: 'scroll',
        margin: '1em',
      }}>
        <ImageList variant="masonry" cols={3} gap={8}>
          {itemData.map((item) => (
            <ImageListItem key={item.id}>
              <img
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </Box>

  );
}

const itemData = [
  {
    id: 1,
    // img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
    img: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80',
    title: 'Bed',
  },
  {
    id: 2,
    img: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dHJhdmVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60.unsplash.com/photo-1525097487452-6278ff080c31',
    title: 'Books',
  },
  {
    id: 3,
    img: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dHJhdmVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    title: 'Sink',
  },
  {
    id: 4,
    img: 'https://images.unsplash.com/photo-1553342385-111fd6bc6ab3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzZ8fHRyYXZlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    title: 'Kitchen',
  },
  {
    id: 5,
    img: 'https://images.unsplash.com/photo-1488085061387-422e29b40080?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHRyYXZlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    title: 'Blinds',
  },
  {
    id: 6,
    img: 'https://images.https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHRyYXZlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60.com/photo-1574180045827-681f8a1a9622',
    title: 'Chairs',
  },
  {
    id: 7,
    img: 'https://images.unsplash.com/photo-1626709615671-ca8833b1a4dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3wxNzg1NzI4fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    title: 'Laptop',
  },
  {
    id: 8,
    img: 'https://images.unsplash.com/photo-1627334901021-b7378029fd05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NnwxNzg1NzI4fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    title: 'Doors',
  },
  {
    id: 9,
    img: 'https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fHRyYXZlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60-2787fef5ebf7',
    title: 'Coffee',
  },
  {
    id: 10,
    img: 'https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fHRyYXZlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    title: 'Storage',
  },
  {
    id: 11,
    img: 'https://images.unsplash.com/photo-1599571727304-cda9ca83598c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTd8MTc4NTcyOHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
    title: 'Candle',
  },
  {
    id: 12,
    img: 'https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fHRyYXZlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    title: 'Coffee table',
  },
  {
    id: 13,
    img: 'https://https://images.unsplash.com/photo-1505832018823-50331d70d237?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fHRyYXZlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60.unsplash.com/photo-1563298723-dcfebaa392e3',
    title: 'Kitchen',
  },
  {
    id: 14,
    img: 'https://images.unsplash.com/photo-1541410965313-d53b3c16ef17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fHRyYXZlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60 ',
    title: 'Blinds',
  },
  {
    id: 15,
    img: 'https://images.unsplash.com/photo-1502003148287-a82ef80a6abc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDN8fHRyYXZlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    title: 'Chairs',
  },
  {
    id: 16,
    img: 'https://images.unsplash.com/photo-1635957985447-76f1d2ca2c5a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8OXwxNzg1NzI4fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    title: 'Laptop',
  },
  {
    id: 17,
    img: 'https://images.unsplash.com/photo-1526816229784-65d5d54ac8bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTF8MTc4NTcyOHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
    title: 'Doors',
  },
  {
    id: 18,
    img: 'https://images.unsplash.com/photo-1536323760109-ca8c07450053?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjN8fHRyYXZlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60-2787fef5ebf7',
    title: 'Coffee',
  },
  {
    id: 19,
    img: 'https://images.unsplash.com/photo-1501446529957-6226bd447c46?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njh8fHRyYXZlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    title: 'Storage',
  },
  {
    id: 20,
    img: 'https://images.unsplash.com/photo-1527824404775-dce343118ebc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjZ8fHRyYXZlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60-c5c3b14bbd62',
    title: 'Candle',
  },
  {
    id: 21,
    img: 'https://images.unsplash.com/photo-1501555088652-021faa106b9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njl8fHRyYXZlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    title: 'Coffee table',
  },
];
