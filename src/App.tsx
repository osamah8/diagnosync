import { Center, ChakraProvider, createSystem, defaultConfig, defineConfig, Heading, Text, VStack, } from '@chakra-ui/react'
import './App.css'
import HeroSection, { Diagnosync } from './components/HeroSection'
import { useColorMode } from './components/ui/color-mode'
import { useEffect, useRef, type ElementType } from 'react'
import OurJourney from './components/OurJourney'
import MeetTheTeam from './components/MeetTheTeam'
import padding from './components/ui/padding'
import LetsTalk from './components/LetsTalk'
import { Navigate, Route, Routes, useNavigate } from 'react-router'
import { pageData, type Paragraph } from './data/pageData'
import h2Size from './components/ui/h2Size'
import gap from './components/ui/gap'
import h3Size from './components/ui/h3size'

const config = defineConfig({
  theme: {
    tokens: {
      colors: {},
      fonts: {
        body: { value: 'Arial, Helvetica, sans-serif' },
        heading: { value: 'Arial, Helvetica, sans-serif' }
      },
      letterSpacings: {
        default: { value: '5em' },
      }
    }
  }
})

const system = createSystem(defaultConfig, config)

function App() {
  const { toggleColorMode } = useColorMode();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.altKey && event.key.toLowerCase() === "j") {
        event.preventDefault();
        toggleColorMode();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  const ourJourneyRef = useRef<HTMLDivElement>(null);

  const footer = <Center
    as="footer"
    color="fg.muted"
    fontSize={["sm", "md"]}
    pb={padding}
    pt={padding}>
    &copy; {new Date().getUTCFullYear()} DIAGNOSYNC LIMITED
  </Center>;

  const navigate = useNavigate();

  const renderParagraphs = (paragraphs: Paragraph[], currentLevel: number[] = []) =>
    paragraphs.map((paragraph, index) => {
      const currentLevelLength = currentLevel.length;

      let displayLevel = '';
      currentLevel.forEach(level => displayLevel += level + '.');

      const nextLevel = index + 1;
      displayLevel += nextLevel + '. ';

      return (
        <VStack alignItems="left">
          {paragraph.heading &&
            <Heading
              as={`h${3 + (currentLevelLength)}` as ElementType}
              size={currentLevelLength === 0 ? h3Size : undefined}>
              {displayLevel}{paragraph.heading}
            </Heading>}
          {paragraph.body &&
            <Text>
              {!paragraph.heading && displayLevel}
              {paragraph.body}
            </Text>}
          {paragraph.paragraphs && renderParagraphs(paragraph.paragraphs, [...currentLevel, nextLevel])}
        </VStack>
      );
    });

  return (
    <ChakraProvider value={system}>
      <Routes>
        <Route
          index
          element={
            <>
              <HeroSection onNext={() => ourJourneyRef.current?.scrollIntoView({ behavior: 'smooth' })} />
              <VStack
                ref={ourJourneyRef}
                alignItems="left"
                p={padding}
                gap={padding}>
                <OurJourney />
                <MeetTheTeam />
                <LetsTalk />
                {footer}
              </VStack>
            </>
          } />
        {pageData.map(page =>
          <Route
            path={page.path}
            element={
              <>
                <title>{`${page.title} | Diagnosync`}</title>
                <meta name="description"
                  content={page.description} />
                <VStack
                  alignItems="left"
                  p={padding}
                  gap={padding}>
                  <Diagnosync onClick={() => navigate('/')} />
                  <VStack
                    alignItems="left"
                    gap={gap}>
                    <Heading as="h2" size={h2Size}>{page.title}</Heading>
                    {renderParagraphs(page.paragraphs)}
                  </VStack>
                  {footer}
                </VStack>
              </>
            } />)}
        <Route
          path="404"
          element={
            <>
              <title>404 Not Found | Diagnosync</title>
              <VStack
                alignItems="left"
                p={padding}
                gap={padding}>
                <Diagnosync onClick={() => navigate('/')} />
                <VStack
                  alignItems="left"
                  gap={gap}>
                  <Heading as="h2" size={h2Size}>404 Not Found</Heading>
                </VStack>
              </VStack>
            </>
          } />
        <Route
          path="*"
          element={
            <Navigate
              to="/404"
              replace={true} />
          } />
      </Routes>
    </ChakraProvider>
  )
}

export default App
