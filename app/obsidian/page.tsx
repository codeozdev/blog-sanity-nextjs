export default function Obsidian() {
  return (
    <div>
      <div className='flex flex-col items-center justify-center mt-20 max-w-2xl mx-auto text-center px-4 sm:px-0'>
        <div>
          <p>
            "Hiçbir şey bilmeden başladığım bu yolda 10. ayımı tamamlıyorum. Bu
            sektörde tanıdığım hiç kimse olmadığı için kimseye bir şey
            danışamadım ve bu yola tek başıma çıktım, şu an ise hala devam
            ediyorum. İnternet üzerinde izlediğim videolar ve dökümanlardan
            öğrendiklerimi sayfalarca not aldım. Hala öğrenmem gereken binlerce
            şey olduğunu biliyorum..."
          </p>
        </div>
        <video
          src='/obsidian.mp4'
          muted
          loop
          autoPlay
          className='sm:absolute sm:top-14 sm:left-0 object-cover z-2 sm:opacity-70 mt-20 sm:mt-0'></video>
      </div>
    </div>
  )
}
