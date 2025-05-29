import React, { useState } from 'react';
import WelcomeScreen from './WelcomeScreen';
import InitialScanProgress from './InitialScanProgress';
import AssetOverview from './AssetOverview';

enum AppScreen {
  WELCOME,
  SCANNING,
  OVERVIEW
}

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<AppScreen>(AppScreen.WELCOME);

  const handleContinue = () => {
    setCurrentScreen(AppScreen.SCANNING);
    
    // Simulate scan completion after 3 seconds
    setTimeout(() => {
      setCurrentScreen(AppScreen.OVERVIEW);
    }, 1000);
  };

  return (
    <div className="app-container">
      {currentScreen === AppScreen.WELCOME && (
        <WelcomeScreen onContinue={handleContinue} />
      )}
      {currentScreen === AppScreen.SCANNING && (
        <InitialScanProgress progress={75} />
      )}
      {currentScreen === AppScreen.OVERVIEW && (
        <AssetOverview />
      )}
    </div>
  );
};

export default App;
