import React from 'react'
// import { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import SectionSeparator from '../components/section-separator'
// import NextImage from 'next/image'
import PageTransition from '../components/page-transition'
import { renderMetaTags, useQuerySubscription } from 'react-datocms'
import Container from '../components/container'
import { getTable } from '../lib/airtable'
// import HeroPost from '../components/hero-post'
// import Intro from '../components/intro'
import Layout from '../components/layout'
import MoreStories from '../components/more-stories'
import { request } from '../lib/datocms'
import { metaTagsFragment, responsiveImageFragment } from '../lib/fragments'

import dynamic from 'next/dynamic'
const MyCarousel = dynamic(() => import('../components/MyCarousel'), {
  ssr: false
})

export const getStaticProps = async ({ preview }) => {
  const airtabledata = await getTable('Home Slider Projeler')
  const airtabledataOS = await getTable('Home Slider Once Sonra')

  // export async function getStaticProps({ preview }) {
  const graphqlRequest = {
    query: `
      {
        site: _site {
          favicon: faviconMetaTags {
            ...metaTagsFragment
          }
        }
        blog {
          seo: _seoMetaTags {
            ...metaTagsFragment
          }
        }
        allPosts(orderBy: date_DESC, first: 20) {
          title
          slug
          excerpt
          date
          coverImage {
            responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 2000, h: 1000 }) {
              ...responsiveImageFragment
            }
          }
          author {
            name
            picture {
              url(imgixParams: {fm: jpg, fit: crop, w: 100, h: 100, sat: -100})
            }
          }
        }
      }

      ${metaTagsFragment}
      ${responsiveImageFragment}
    `,
    preview
  }

  return {
    props: {
      airtabledata,
      airtabledataOS,
      subscription: preview
        ? {
            ...graphqlRequest,
            initialData: await request(graphqlRequest),
            token: process.env.NEXT_EXAMPLE_CMS_DATOCMS_API_TOKEN,
            environment: process.env.NEXT_DATOCMS_ENVIRONMENT || null
          }
        : {
            enabled: false,
            initialData: await request(graphqlRequest)
          }
    },
    revalidate: 6000
  }
}

export default function Index({ subscription, airtabledata, airtabledataOS }) {
  const {
    data: { allPosts, site, blog }
  } = useQuerySubscription(subscription)

  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(0, 3)
  const metaTags = blog.seo.concat(site.favicon)

  return (
    <>
      <PageTransition>
        <Layout preview={subscription.preview}>
          <Head>{renderMetaTags(metaTags)}</Head>
          <Head>
            <title>İç Mimar Sibel Ürün</title>
          </Head>

          <Container cname="col-md flex justify-center items-center h-60">
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-serif">
                “ Tasarım; estetik, deneyimsel ve duygusal olarak hayatımzın
                iyileştirilmesiyle ilgilidir... ”
              </p>
            </div>
          </Container>
          <div>
            <section className="md:px-6 md:py-6 px-0 py-0">
              <div className="grid md:grid-cols-2 gap-6 rounded-l-none md:rounded-l-2xl overflow-hidden">
                <div className="hover-zoom-img relative bg-accent-3">
                  <img
                    src="/static/images/su.jpg"
                    alt="Sibel Ürün"
                    width={660}
                    height={660}
                    // layout="responsive"
                    // objectFit="cover"
                  />
                </div>

                <div className="px-5 md:pr-10 flex flex-col justify-center font-serif text-lg border-accent-2 xs:border-t-0 md:border-t border-r border-b sm:rounded-tr-none md:rounded-tr-2xl rounded-br-2xl overflow-hidden">
                  <p>
                    20 yıldır iş yaşamında faal olan Sibel Ürün Bursa’da doğdu,
                    orta öğretimini Bursa Anadolu Lisesinde tamamlayarak,
                    Bilkent Üniversitesi İç Mimari ve Çevre tasarımı bölümünden
                    mezun oldu.
                  </p>
                  <p>
                    Yüksek Lisansını Yeditepe Üniversitesinde Art Management
                    üzerine yaptı, “Kurumlar Bağlamında Sanat Finans İlişkileri
                    ve Türkiye” isimli tez çalışmasını yayınladı. Marmara
                    Üniversitesi Avrupa Birliği Enstitüsü Doktora Programına
                    kabul edildi.
                  </p>
                  <p>
                    2000 yılından itibaren de mesleki çalışmalarını sahibi
                    olduğu Ürün Mimarlık şirketinde sürdürmektedir.
                  </p>
                  <p className="mt-5 mb-10 text-center md:text-left">
                    <Link href="/hakkinda">
                      <a className="rounded-md bg-transparent text-sm hover:bg-accent-4 hover:text-white py-4 px-6 border border-brand-1  hover:border-transparent font-bold font-sans hover:no-underline">
                        DEVAMI
                      </a>
                    </Link>
                  </p>
                </div>
              </div>
            </section>
          </div>

          <div className="home-projects-grid grid md:grid-cols-2 gap-6 mb-10 md:px-5 md:py-5">
            <div className="flex flex-col justify-center items-center text-center px-10 py-10">
              <h4 className="mb-3 text-2xl font-bold">Tasarım ve Çözümler</h4>
              <p className="text-2xl font-serif">
                " Her mekan, kişinin içindeki tutkusunu yansıtır... "
              </p>
              <p className="mt-10">
                <Link href="/projeler">
                  <a className="rounded-md bg-transparent text-sm hover:bg-accent-4 hover:text-white py-4 px-6 border border-brand-1  hover:border-transparent font-bold font-sans hover:no-underline">
                    PROJELER
                  </a>
                </Link>
              </p>
            </div>
            {airtabledata.map((item) => {
              return (
                <div className="hover-zoom-img relative" key={item.Id}>
                  {item.Photo && (
                    <>
                      <p className="overlay-name text-2xl font-bold md:text-3xl">
                        {item.Name}
                      </p>
                      <img
                        src={item.Photo[0].thumbnails.large.url}
                        alt={item.Name}
                        width={120}
                        height={80}
                        className="responsive"
                        // layout="responsive"
                        // objectFit="cover"
                        // placeholder="blur"
                        // blurDataURL={item.Photo[0].thumbnails.small.url}
                        srl_gallery_image="true"
                      />
                    </>
                  )}
                </div>
              )
            })}
          </div>

          <div className="grid md:grid-cols-1 gap-6 mb-16 md:px-0 md:py-5">
            <div className="flex flex-col justify-center items-center text-center px-10 pt-10">
              <h4 className="mb-3 text-2xl font-bold">Öncesi Sonrası</h4>
              <p className="text-2xl font-serif">
                4 ayda hayallerine kavuştular...
              </p>
            </div>

            <MyCarousel data={airtabledataOS} />
            <p className="text-center mt-20 pb-5">
              <Link href="/projeler/once-sonra">
                <a className="rounded-md bg-transparent text-sm hover:bg-accent-4 hover:text-white py-4 px-6 border border-brand-1  hover:border-transparent font-bold font-sans hover:no-underline">
                  TAMAMINI GÖR
                </a>
              </Link>
            </p>
          </div>

          {/* <Container>
            {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          </Container> */}

          <div className="px-5">
            <SectionSeparator />
          </div>

          <div className="mb-20 md:ml-6 md:mr-6 md:mx-auto">
            <h2 className="text-center mb-8 text-2xl font-bold tracking-tighter leading-tight">
              Son Yazılar
            </h2>
            <h3 className="px-5 pb-10 text-center font-serif mb-8 text-xl max-w-2xl m-auto ">
              Mesleğime ve sektörüme yönelik güncel olayları, deneyimlerimi ve
              ünlülerin evlerine ait yorumlarımı blog yazılarımda
              bulabilirsiniz...
            </h3>

            {morePosts.length > 0 && <MoreStories posts={morePosts} />}
            <p className="text-center mt-20 pb-5">
              <Link href="/blog">
                <a className="rounded-md bg-transparent text-sm hover:bg-accent-4 hover:text-white py-4 px-6 border border-brand-1  hover:border-transparent font-bold font-sans hover:no-underline">
                  YAZILARIMIN TAMAMI
                </a>
              </Link>
            </p>
          </div>

          {/* <div className="blog-linear-gradient mb-20 md:ml-6 md:mr-6 md:mx-auto md:px-5 md:border-t md:border-r md:border-l md:border-accent-2 md:rounded-t-2xl overflow-hidden">
            <Container>
              <h2 className="pt-10 text-center mb-8 text-2xl font-bold tracking-tighter leading-tight">
                Son Yazılar
              </h2>
              <h3 className="pb-10 text-center font-serif mb-8 text-xl max-w-2xl m-auto ">
                Mesleğime ve sektörüme yönelik güncel olayları, deneyimlerimi ve
                ünlülerin evlerine ait yorumlarımı blog yazılarımda
                bulabilirsiniz...
              </h3>

              {morePosts.length > 0 && <MoreStories posts={morePosts} />}
              <p className="text-center mt-20 pb-5">
                <Link href="/blog">
                  <a className="rounded-md bg-transparent text-sm hover:bg-accent-4 hover:text-white py-4 px-6 border border-brand-1  hover:border-transparent font-bold font-sans hover:no-underline">
                    YAZILARIMIN TAMAMI
                  </a>
                </Link>
              </p>
            </Container>
          </div> */}
        </Layout>
      </PageTransition>
    </>
  )
}
