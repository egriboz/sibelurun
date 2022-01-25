// import NextImage from 'next/image'
import useWindowSize from '../hooks/useWindowSize'

function Projects({ data }) {
  const { width } = useWindowSize()
  return (
    <>
      <div className="projectsGridWrapper grid sm:grid-cols-6 gap-5 lg:gap-2">
        {data.map((item) => {
          return (
            <div key={item.Id}>
              {item.Photo && (
                <a href={item.Photo[0].thumbnails.full.url}>
                  {width > 768 && (
                    <img
                      src={item.Photo[0].thumbnails.large.url}
                      alt={item.Name}
                      width={120}
                      height={80}
                      // layout="responsive"
                      // objectFit="cover"
                      // placeholder="blur"
                      // blurDataURL={item.Photo[0].thumbnails.small.url}
                      srl_gallery_image="true"
                    />
                  )}
                  {width < 768 && (
                    <img
                      src={item.Photo[0].thumbnails.large.url}
                      alt={item.Name}
                      width={item.Photo[0].thumbnails.large.width}
                      height={item.Photo[0].thumbnails.large.height}
                      // layout="responsive"
                      // objectFit="cover"
                      // placeholder="blur"
                      // blurDataURL={item.Photo[0].thumbnails.small.url}
                      srl_gallery_image="true"
                    />
                  )}
                </a>
              )}
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Projects
