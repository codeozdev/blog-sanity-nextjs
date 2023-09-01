import { getProjects } from '@/libs/sanity-utils'
import Link from 'next/link'
import Image from 'next/image'

export default async function Home() {
  const projects = await getProjects()

  return (
    <main>
      <h1 className='text-4xl font-extrabold'>
        Hello I'm{' '}
        <span className='bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent'>
          Oguzhan Uguz
        </span>
      </h1>
      <p className='mt-3 text-xl dark:text-gray-400'>
        Fullstack Developer olmaya calisiyorum bu yolda ögrenmeye devam ediyorum
      </p>
      <h2 className='mt-24 font-bold dark:text-gray-300 text-3xl'>
        Web Geliştirme Araçlarım
      </h2>

      <div className='mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8'>
        {projects.map((project) => (
          <Link
            key={project._id}
            href={`/${project.slug}`}
            className='hover:underlin'>
            <div className='relative w-32 h-32'>
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
