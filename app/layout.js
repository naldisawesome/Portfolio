import './globals.css';
import { PaletteProvider } from '@/context/PaletteContext';
import BackgroundLayer from '@/components/BackgroundLayer';
import GridBackground from '@/components/GridBackground';
import ParticleCanvas from '@/components/ParticleCanvas';
import CustomCursor from '@/components/CustomCursor';
import PageLoadOverlay from '@/components/PageLoadOverlay';
import Nav from '@/components/Nav';
import ScrollProgress from '@/components/ScrollProgress';

export const metadata = {
  title: 'Reynald Arro — Portfolio',
  description: 'Systems Lead · Full-Stack Dev. Building systems that work.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <PaletteProvider>
          <PageLoadOverlay />
          <CustomCursor />
          <div id="ripple-layer" />
          <GridBackground />
          <BackgroundLayer />
          <ParticleCanvas />
          <ScrollProgress />
          <Nav />
          <div className="page">{children}</div>
        </PaletteProvider>
      </body>
    </html>
  );
}
