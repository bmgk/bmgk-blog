import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { getFileBySlug } from '@/lib/mdx'

const DEFAULT_LAYOUT = 'AuthorLayout'
const EMPTY = 'AuthorNoLayout'

export async function getStaticProps() {
  const authorDetails = await getFileBySlug('authors', ['default'])
  const mariuszDetails = await getFileBySlug('authors', ['mariusz'])
  return { props: { authorDetails, mariuszDetails } }
}

export default function About({ authorDetails, mariuszDetails }) {
  return (
    <>
      <MDXLayoutRenderer
        layout={DEFAULT_LAYOUT}
        mdxSource={authorDetails.mdxSource}
        frontMatter={authorDetails.frontMatter}
      />
      <MDXLayoutRenderer
        layout={EMPTY}
        mdxSource={mariuszDetails.mdxSource}
        frontMatter={mariuszDetails.frontMatter}
      />
    </>
  )
}
