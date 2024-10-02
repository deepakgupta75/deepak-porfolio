// import './App.css'
// import { Button } from './components/ui/button'
import Component from './components/component'
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from "@/components/theme-provider"


// Define the App component with React.FC (Functional Component) type
const App: React.FC = () => {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">

    <Router>
      <Component />
    </Router>
    </ThemeProvider>

  )
}

export default App
