import type { Metadata } from 'next'
import '@/app/globals.scss'
import 'react-toastify/dist/ReactToastify.css';
import "yet-another-react-lightbox/styles.css";
import Provider from "@/app/Provider";
import NextTopLoader from "nextjs-toploader";

export const metadata: Metadata = {
    title: 'Ignitia 2K24',
    description: 'cultural fest organised by PSIT',
}

export default function RootLayout({ children, }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <head>
                <link
                    rel="stylesheet"
                    type="text/css"
                    charSet="UTF-8"
                    href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
                />
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
                />
                <script async src="https://ignitia.trackerbea.atishir.co/tracker.js" data-trackerbea-server="https://ignitia.trackerbea.atishir.co" data-trackerbea-domain-id="e2a3bff1-0eef-4f35-974d-455958e5eb53" data-trackerbea-opts='{ "detailed": true }'></script>
            </head>
            <body suppressHydrationWarning={true} className={`light`}>
                <NextTopLoader />
                <Provider>
                    {children}
                </Provider>
            </body>
        </html>
    )
}
