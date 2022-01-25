import React from 'react'
// import NextImage from 'next/image'

import Carousel from 'nuka-carousel'

export default function MyCarousel({ data }) {
  return (
    <Carousel
      defaultControlsConfig={{
        pagingDotsStyle: {
          bottom: '-50px',
          marginLeft: '5px',
          marginRight: '5px',
          position: 'relative'
        }
      }}
      renderCenterLeftControls={({ previousSlide }) => (
        <button onClick={previousSlide}>PREV</button>
      )}
      renderCenterRightControls={({ nextSlide }) => (
        <button onClick={nextSlide}>NEXT</button>
      )}
    >
      {data.map((item) => {
        return (
          <div key={item.Id}>
            {item.Photo && (
              <img
                src={item.Photo[0].thumbnails.full.url}
                alt={item.Name}
                width={item.Photo[0].thumbnails.full.width}
                height={760}
                // layout="responsive"
                // objectFit="cover"
                // placeholder="blur"
                // blurDataURL={item.Photo[0].thumbnails.small.url}
                srl_gallery_image="true"
              />
            )}
          </div>
        )
      })}
    </Carousel>
  )
}
