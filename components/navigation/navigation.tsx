import Link from 'next/link'
import PaddingContainer from '../layout/padding-container'
import ThemeButton from '@/components/ThemeButton'

export default async function Navigation() {
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
            <ul className='flex items-center gap-4'>
              <li className='hover:underline'>
                <Link href='/about'>About</Link>
              </li>
              <li className='hover:underline'>
                <Link href='/obsidian'>Obsidian</Link>
              </li>
            </ul>
            <ThemeButton />
          </div>
        </div>
      </header>
    </PaddingContainer>
  )
}
