import { View as ViewJfg, Text as TextJfg, StyleSheet as StyleSheetJfg } from "react-native";
import HeaderJfg from "../components/Header";
import FooterJfg from "../components/Footer";
import WelcomeMessageJfg from "../components/WelcomeMessage";

export default function HomeScreenJfg() {
  return (
    <ViewJfg style={stylesJfg.container}>
      <HeaderJfg />
      <ViewJfg style={stylesJfg.body}>
        <WelcomeMessageJfg />
        <TextJfg style={stylesJfg.text}>Welcome to your first screen!</TextJfg>
        <TextJfg style={stylesJfg.text}>This is built using JSX and components.</TextJfg>
      </ViewJfg>
      <FooterJfg />
    </ViewJfg>
  );
}

const stylesJfg = StyleSheetJfg.create({
  container: {
    flex: 1,
  },
  body: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    marginVertical: 5,
  },
});
