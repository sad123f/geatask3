import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.masahpro.app',
  appName: 'مساح برو',
  webDir: 'dist',
  server: {
    androidScheme: 'https',
    cleartext: true,
    allowNavigation: [
      'localhost',
      '*.masahpro.com'
    ]
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: "#10B981",
      showSpinner: true,
      spinnerColor: "#ffffff",
      androidSpinnerStyle: "large",
      androidScaleType: "CENTER_CROP"
    }
  },
  android: {
    allowMixedContent: true,
    captureInput: true,
    webContentsDebuggingEnabled: true
  }
};

export default config;