export default function PaddingContainer({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className='max-w-7xlxl mx-auto px-4 sm:px-0'>{children}</div>
}
