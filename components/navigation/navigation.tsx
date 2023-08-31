import Link from 'next/link'
import PaddingContainer from '../layout/padding-container'
import ThemeButton from '@/components/ThemeButton'

export default function Navigation() {
  return (
    <PaddingContainer>
      <div className='flex justify-between h-16'>
        <div className='flex justify-between items-center w-full'>
          <Link href='/' className='text-2xl font-medium'>
            Jan
            <span className='text-teal-500'>Blog</span>
          </Link>
          <ThemeButton />
        </div>
      </div>
    </PaddingContainer>
  )
}
