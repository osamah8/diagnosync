import { ChakraProvider, createSystem, defaultConfig, defineConfig, } from '@chakra-ui/react'
import './App.css'
import HeroSection from './components/HeroSection'
import { useColorMode } from './components/ui/color-mode'
import { useEffect } from 'react'

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

  return (
    <ChakraProvider value={system}>
      <HeroSection />
    </ChakraProvider>
  )
}

export default App
