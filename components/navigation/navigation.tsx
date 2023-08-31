import PaddingContainer from '../layout/padding-container'
import Link from 'next/link'

export default function Navigation() {
  return (
    <PaddingContainer>
      <div className='flex justify-between h-16'>
        <div className='flex justify-between items-center w-full'>
          <Link href='/' className='text-2xl font-medium'>
            Jan
            <span className='text-teal-500'>Blog</span>
          </Link>
        </div>
      </div>
    </PaddingContainer>
  )
}
