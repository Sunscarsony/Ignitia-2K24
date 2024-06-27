export const metadata = {
  title: 'Dashboard | Ignitia 2k24',
  description: 'Ignitia by PSIT',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
    </>
  )
}
