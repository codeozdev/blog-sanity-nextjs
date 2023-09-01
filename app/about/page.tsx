import { AiFillGithub, AiOutlineTwitter, AiFillLinkedin } from 'react-icons/ai'
import Link from 'next/link'

export default function About() {
  return (
    <div className='sm:h-[calc(100vh-64px)] flex flex-col  justify-center px-4 sm:px-0 text-center sm:text-start my-3 sm:my-0 gap-4'>
      <div>
        <h1 className='font-bold dark:text-gray-300 text-4xl mb-5'>About</h1>
        <div className='space-y-3 sm:leading-loose'>
          <p>
            Merhaba! Ben{' '}
            <span className='text-green-600 font-bold'> Oğuzhan Uğuz</span>, bir
            Frontend Geliştiriciyim ve web dünyasının büyüsüne kapılmış biriyim.
          </p>
          <p>
            Kullanıcı deneyimini en üst düzeye çıkarmak ve kullanıcıların web
            sitelerini ve uygulamalarını daha etkili bir şekilde kullanmalarına
            yardımcı olmak için tutkulu bir şekilde çalışıyorum.
          </p>
          <p>
            Bu alandaki merakım ve tutkum, her gün yeni şeyler öğrenmeme ve
            projelerimi daha da geliştirmeme yardımcı oluyor. Frontend
            geliştirme yolculuğum, HTML, CSS ve JavaScript ile başladı, ancak
            şimdi bu temelleri modern teknolojiler ve çerçevelerle birleştirerek
            daha karmaşık ve kullanıcı dostu web uygulamaları oluşturma
            aşamasında.
          </p>
          <p>
            Ayrıca, kullanıcı arayüzü tasarımı ve kullanıcı deneyimi konularına
            da büyük bir ilgi duyuyorum ve bu konularda sürekli olarak eğitim
            alıyor ve projeler üretiyorum. Frontend geliştirme dünyası her zaman
            değişiyor ve bu sürekli değişimi yakalamak ve öğrenmek benim için
            heyecan verici bir yolculuk. Sizlerle birlikte bu yolda ilerlemek ve
            yeni projelerde işbirliği yapmak için sabırsızlanıyorum.
          </p>
        </div>
      </div>
      <div className='flex items-center gap-4 justify-center sm:justify-start'>
        <Link
          href='https://github.com/codeozdev?tab=repositories'
          target='_blank'>
          <AiFillGithub className='text-4xl hover:text-red-400' />
        </Link>
        <Link href='https://twitter.com/codeozdev' target='_blank'>
          <AiOutlineTwitter className='text-4xl hover:text-red-400' />
        </Link>
        <Link href='https://www.linkedin.com/in/oguzhanuguz/' target='_blank'>
          <AiFillLinkedin className='text-4xl hover:text-red-400' />
        </Link>
      </div>
    </div>
  )
}
