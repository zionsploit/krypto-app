import 'animate.css'
import dynamic from 'next/dynamic'


const Layout = dynamic(() => import('../components/Layout').then((mod) => mod.Layout), { loading: () => <p>...</p>, ssr: false })

export default function Home() {
  return (
    <>
      <Layout />
    </>
  )
}
