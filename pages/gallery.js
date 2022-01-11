import dynamic from "next/dynamic"

const GalleryLayout = dynamic(() => import('../components/GalleryLayout').then((mod) => mod.GalleryLayout), { loading: () => <p>...</p>, ssr: false })
export default function gallery() {
    return (
        <div>
            <GalleryLayout />
        </div>
    )
}
