import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { WebView } from "react-native-webview";

export default function App() {
  const runFirst = `
    window.document.cookie = "Cookie_1=teste"
  `;
  return (
    <View style={styles.container}>
      <WebView
        style={styles.container}
        sharedCookiesEnabled
        thirdPartyCookiesEnabled
        injectedJavaScriptBeforeContentLoaded={runFirst}
        source={{
          uri: "https://poc-webview-one.vercel.app/",
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
