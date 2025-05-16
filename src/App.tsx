import { Center, ChakraProvider, createSystem, defaultConfig, defineConfig, VStack, } from '@chakra-ui/react'
import './App.css'
import HeroSection from './components/HeroSection'
import { useColorMode } from './components/ui/color-mode'
import { useEffect, useRef } from 'react'
import OurJourney from './components/OurJourney'
import MeetTheTeam from './components/MeetTheTeam'
import padding from './components/ui/padding'
import LetsTalk from './components/LetsTalk'

const config = defineConfig({
  theme: {
    tokens: {
      colors: {},
      fonts: {
        body: { value: "Arial, Helvetica, sans-serif" },
        heading: { value: "Arial, Helvetica, sans-serif" }
      },
      letterSpacings: {
        default: { value: "5em" },
      }
    },
  },
})

const system = createSystem(defaultConfig, config)

function App() {
  const { toggleColorMode } = useColorMode();

  /* Temporary */
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.key.toLowerCase() === "j") {
        event.preventDefault();
        toggleColorMode();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  const ourJourneyRef = useRef<HTMLDivElement>(null);

  return (
    <ChakraProvider value={system}>
      <HeroSection onNext={() => ourJourneyRef.current?.scrollIntoView({ behavior: "smooth" })} />
      <VStack
        ref={ourJourneyRef}
        alignItems="left"
        p={padding}
        gap={padding}>
        <OurJourney />
        <MeetTheTeam />
        <LetsTalk />
        <Center as="footer" color="fg.muted" fontSize={["sm", "md"]}>
          &copy; {new Date().getFullYear()} DIAGNOSYNC LIMITED
        </Center>
      </VStack>
    </ChakraProvider>
  )
}

export default App
