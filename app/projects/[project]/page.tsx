import { getProject } from '@/libs/sanity-utils'
import Link from 'next/link'
import Image from 'next/image'
import { PortableText } from '@portabletext/react'

interface Props {
  params: { project: string }
}

export default async function Project({ params }: Props) {
  const project = await getProject(params.project)

  return (
    <div className='grid place-content-center sm:h-[calc(100vh-64px)] px-4 sm:px-0 mt-10 sm:mt-0'>
      <div className='flex justify-between items-center'>
        <h1 className='font-bold dark:text-gray-300 text-4xl'>
          {project.name}
        </h1>
        <Link
          href={project.url}
          className='bg-gray-100 rounded-lg text-gray-500 font-bold py-1 px-6 whitespace-nowrap hover:bg-pink-500 hover:text-pink-100 transition'
          target='_blank'>
          View
        </Link>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10'>
        <div className='relative h-48 max-w-md col-span-1'>
          <Image
            src={project.image}
            alt={project.name}
            fill
            className='object-cover'
          />
        </div>
        <div className='flex items-center col-span-2'>
          <div className='text-center sm:text-start px-4 sm:px-0'>
            <PortableText value={project.content} />
          </div>
        </div>
      </div>
    </div>
  )
}
