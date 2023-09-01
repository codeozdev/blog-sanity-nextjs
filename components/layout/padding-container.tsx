export default function PaddingContainer({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className='max-w-7xlxl mx-auto'>{children}</div>
}
