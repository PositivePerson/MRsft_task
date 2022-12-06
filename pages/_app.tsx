import { AppProps } from 'next/app';
import '../components/globals.css'

interface CustomPageProps {
    props
}

export default function MyApp({ Component, pageProps }: AppProps<CustomPageProps>) {
    return <Component {...pageProps} />
}