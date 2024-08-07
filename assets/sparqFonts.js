import { useFonts } from 'expo-font';

// Import font files
const SparqFonts = () => {
  let [fontsLoaded] = useFonts({
    'Inter-Regular': require('./fonts/Inter-Regular.otf'),
    'Inter-Bold': require('./fonts/Inter-Bold.otf'),
    'Inter-SemiBold': require('./fonts/Inter-SemiBold.otf'),
    'Inter-Medium': require('./fonts/Inter-Medium.otf'),
  });

  return fontsLoaded;
};

export default SparqFonts;
