import { StructuredText, Image } from 'react-datocms'

export default function PostBody({ content }) {
  return (
    <div className="px-5 max-w-2xl mx-auto">
      <div className="prose prose-lg prose-blue text-accent-4">
        <StructuredText
          data={content}
          renderBlock={({ record }) => {
            if (record.__typename === 'ImageBlockRecord') {
              return <Image data={record.image.responsiveImage} />
            }

            return (
              <>
                <p>Don't know how to render a block!</p>
                <pre>{JSON.stringify(record, null, 2)}</pre>
              </>
            )
          }}
        />
      </div>
    </div>
  )
}
