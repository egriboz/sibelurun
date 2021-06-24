import React from 'react'
import NextImage from 'next/image'

import Carousel from 'nuka-carousel'

export default function MyCarousel({ data }) {
  return (
    <Carousel>
      {data.map((item) => {
        return (
          <div key={item.Id}>
            {item.Photo && (
              <NextImage
                src={item.Photo[0].thumbnails.large.url}
                alt={item.Name}
                width={item.Photo[0].thumbnails.large.width}
                height={item.Photo[0].thumbnails.large.height}
                layout="responsive"
                objectFit="cover"
                placeholder="blur"
                blurDataURL={item.Photo[0].thumbnails.small.url}
                srl_gallery_image="true"
              />
            )}
          </div>
        )
      })}
    </Carousel>
  )
}
