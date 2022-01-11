import { NftGallery } from "react-nft-gallery"
import { Navbar } from "./Navbar"

export const GalleryLayout = () => {
    return (
        <div>
            <Navbar />
            <div className="mt-5">
                <NftGallery darkMode={true} metadataIsVisible={true} hasLoadMoreButton={true} />
            </div>
        </div>
    )
}
