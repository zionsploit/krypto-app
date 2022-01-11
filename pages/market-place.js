import dynamic from "next/dynamic";

const MarketplaceLayout = dynamic(() => import('../components/MarketplaceLayout').then((e) => e.MarketplaceLayout), { loading: () => <p>...</p>, ssr: false });

export default function marketPlace() {
    return (
        <>
            <MarketplaceLayout />
        </>
    )
}