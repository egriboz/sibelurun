import { getTable } from '../lib/airtable'

function Test({ airtabledata }) {
  return (
    <>
      <div>
        {airtabledata.map((item) => {
          return (
            <div key={item.Id}>
              {item.Photo && (
                <a href={item.Photo[0].thumbnails.full.url}>
                  <img
                    src={item.Photo[0].thumbnails.large.url}
                    alt={item.Name}
                    width={120}
                    height={80}
                    // layout="responsive"
                    // objectFit="cover"
                    srl_gallery_image="true"
                  />
                </a>
              )}
            </div>
          )
        })}
      </div>
    </>
  )
}
export async function getStaticProps() {
  const airtabledata = await getTable('Mimari')

  return {
    props: {
      airtabledata
    },
    revalidate: 600
  }
}

export default Test
