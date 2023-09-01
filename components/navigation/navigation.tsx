import Link from 'next/link'
import PaddingContainer from '../layout/padding-container'
import ThemeButton from '@/components/ThemeButton'
import { getPages } from '@/libs/sanity-utils'

export default async function Navigation() {
  const pages = await getPages()

  return (
    <PaddingContainer>
      <header className='flex justify-between h-16'>
        <div className='flex justify-between items-center w-full'>
          <Link
            href='/'
            className='bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-lg font-bold'>
            codeoz
          </Link>
          <div className='flex items-center gap-4 text-gray-500 font-medium'>
            <div className='space-x-4 text-black dark:text-white'>
              {pages.reverse().map((page) => (
                <Link
                  key={page._id}
                  href={`/${page.slug}`}
                  className='hover:underline'>
                  {page.title}
                </Link>
              ))}
            </div>
            <ThemeButton />
          </div>
        </div>
      </header>
    </PaddingContainer>
  )
}
