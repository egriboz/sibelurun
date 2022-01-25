import Head from 'next/head'
import Link from 'next/link'
// import NextImage from 'next/image'
import Container from '../components/container'
import Layout from '../components/layout'
import { getTable } from '../lib/airtableOrder'
import PageTransition from '../components/page-transition'
import PageTitle from '../components/page-title'
import SiteConfig from '../site.config'

function Projeler({ airtabledata }) {
  return (
    <>
      <Head>
        <title>Projeler | {SiteConfig.title}</title>
      </Head>
      <PageTransition>
        <Layout>
          <Container cname="col-sm">
            <PageTitle>Projeler</PageTitle>
            <p className="text-xl font-serif mb-10 md:text-2xl">
              Yakın Zamanda Tamamlanan Projeler
            </p>
          </Container>
          <Container cname="col-full">
            <div className="grid sm:grid-cols-3 gap-2">
              {airtabledata.map((item) => {
                return (
                  <div className="hover-zoom-img relative" key={item.Id}>
                    {item.Photo && (
                      <Link href={`/projeler/${item.Slug}`}>
                        <a>
                          <p className="overlay-name is-projects text-2xl font-bold md:text-2xl">
                            {item.Name}
                          </p>
                          <img
                            src={item.Photo[0].thumbnails.large.url}
                            alt={item.Name}
                            width={120}
                            height={40}
                            // layout="responsive"
                            // objectFit="cover"
                            // placeholder="blur"
                            // blurDataURL={item.Photo[0].thumbnails.small.url}
                            srl_gallery_image="true"
                          />
                        </a>
                      </Link>
                    )}
                  </div>
                )
              })}
            </div>
          </Container>
        </Layout>
      </PageTransition>
    </>
  )
}

export async function getStaticProps() {
  const airtabledata = await getTable('Projeler')

  return {
    props: {
      airtabledata
    },
    revalidate: 6000
  }
}

export default Projeler
