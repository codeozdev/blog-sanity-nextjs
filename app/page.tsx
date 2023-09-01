import { getProjects } from '@/libs/sanity-utils'
import Link from 'next/link'
import Image from 'next/image'

export default async function Home() {
  const projects = await getProjects()

  return (
    <main className='sm:h-[calc(100vh-64px)] flex justify-center flex-col px-4 sm:px-0 text-center sm:text-start'>
      <h1 className='text-2xl sm:text-5xl font-extrabold w-full mt-10 sm:mt-0'>
        Hello I'm{' '}
        <span className='bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent'>
          Oguzhan Uguz
        </span>
      </h1>

      <p className='mt-3 sm:text-xl dark:text-gray-400 leading-relaxed '>
        Fullstack Developer olmaya calisiyorum bu yolda ögrenmeye devam ediyorum
      </p>
      <div className='sm:flex sm:items-center sm:justify-between mt-10 sm:mt-24 text-2xl  sm:text-3xl'>
        <h2 className='font-bold dark:text-gray-300 '>
          Web Geliştirme Araçlarım
        </h2>
        <p className='pr-5 underline text-xs hidden sm:block '>
          {new Date(projects[0]._createdAt).toISOString().split('T')[0]}
        </p>
      </div>

      <div className='my-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5'>
        {projects.reverse().map((project) => (
          <Link
            key={project._id}
            href={`/projects/${project.slug}`}
            className='flex items-center justify-center sm:flex-none sm:justify-start'>
            <div className='relative w-72 h-28'>
              {project.image && (
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className='object-cover rounded-lg border border-gray-500'
                />
              )}
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}
