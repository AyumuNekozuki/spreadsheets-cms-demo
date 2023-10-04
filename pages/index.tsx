import Image from 'next/image'
import { Inter } from 'next/font/google'

import { getContents } from '@/libs/spreadsheets';

const inter = Inter({ subsets: ['latin'] })


export default function Home({ contents }: any) {

  console.log(contents)
  return (
    <>
      {contents.forEach((content: any) => {
        return (
          <>{content.title} | {content.content}</>
        )
      })}
    </>
  )
}


export async function getStaticProps() {
  const contents = await getContents();
  return {
    props: { contents },
    revalidate: 3600,
  };
}
