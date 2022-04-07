import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/43b1/d11d/91af5ffac132154ea57debfd57d4f56e"
        }}
        style={styles.ImageBackground_9_1835}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3651/1024/3f7cc9ed76323de3c883d7270c2bd132"
        }}
        style={styles.ImageBackground_9_1836}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/84ed/1bf9/f608aaf0213e0977ffc11eda32d9d024"
        }}
        style={styles.ImageBackground_9_1837}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/13fc/444e/72c355531f0f7de00e7761e3497d6d41"
        }}
        style={styles.ImageBackground_9_1838}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6627/af0c/a6101c43a6749e2d8bdf0635fee393ad"
        }}
        style={styles.ImageBackground_9_1839}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/778f/cd49/9d77bdfb37f615800069f092604d8410"
        }}
        style={styles.ImageBackground_9_1840}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9d65/21d6/d65c3883e5c8d957534604a262d2d58c"
        }}
        style={styles.ImageBackground_9_1841}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1aab/5976/7339b6994fb9f7e96a9890725f0c7421"
        }}
        style={styles.ImageBackground_9_1842}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c8ea/bb0b/74cf465798fe0579d7c25aa45488fe50"
        }}
        style={styles.ImageBackground_9_1843}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d6d3/33f8/d7ec44534b9955a4b3cfe1fba0ac97e7"
        }}
        style={styles.ImageBackground_9_1844}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c022/9f5c/833a726477a8637c01a2a1467e36492c"
        }}
        style={styles.ImageBackground_9_1845}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/638d/c7b8/b8985444b502091c3eaf33d0282c4dc4"
        }}
        style={styles.ImageBackground_9_1846}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4afd/33ef/23eafe4076454bf97f6d9312a678c555"
        }}
        style={styles.ImageBackground_9_1847}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4afd/33ef/23eafe4076454bf97f6d9312a678c555"
        }}
        style={styles.ImageBackground_9_1848}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4afd/33ef/23eafe4076454bf97f6d9312a678c555"
        }}
        style={styles.ImageBackground_9_1849}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4afd/33ef/23eafe4076454bf97f6d9312a678c555"
        }}
        style={styles.ImageBackground_9_1850}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4afd/33ef/23eafe4076454bf97f6d9312a678c555"
        }}
        style={styles.ImageBackground_9_1851}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4afd/33ef/23eafe4076454bf97f6d9312a678c555"
        }}
        style={styles.ImageBackground_9_1852}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4afd/33ef/23eafe4076454bf97f6d9312a678c555"
        }}
        style={styles.ImageBackground_9_1853}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4afd/33ef/23eafe4076454bf97f6d9312a678c555"
        }}
        style={styles.ImageBackground_9_1854}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4afd/33ef/23eafe4076454bf97f6d9312a678c555"
        }}
        style={styles.ImageBackground_9_1855}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4afd/33ef/23eafe4076454bf97f6d9312a678c555"
        }}
        style={styles.ImageBackground_9_1856}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4afd/33ef/23eafe4076454bf97f6d9312a678c555"
        }}
        style={styles.ImageBackground_9_1857}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4afd/33ef/23eafe4076454bf97f6d9312a678c555"
        }}
        style={styles.ImageBackground_9_1858}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_1859}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_1860}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_1861}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_1862}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_1863}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_1864}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_1865}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_1866}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_1867}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_1868}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_1869}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_1870}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_1871}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_1872}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_1873}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_1874}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_1875}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_1876}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_1877}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_1878}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_1879}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_1880}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_1881}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_1882}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_1883}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_1884}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_1885}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_1886}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_1887}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_1888}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_1889}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_1890}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_1891}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_1892}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_1893}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_1894}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_1895}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_1896}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_1897}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_1898}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_1899}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_1900}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_1901}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/61ef/47e6/c04dce5a38831773ea07342743f001b1"
        }}
        style={styles.ImageBackground_9_1902}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_1903}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_1904}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_1905}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_1906}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e522/592a/7519b414e3563b4dfed993b198f98fa6"
        }}
        style={styles.ImageBackground_9_1907}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dc0e/27ee/02e2bd46e1ea9260fd24de3651545656"
        }}
        style={styles.ImageBackground_9_1908}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4dc1/962c/98d16d030427828cebb365eb9856f38b"
        }}
        style={styles.ImageBackground_9_1909}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b42e/0829/e2e3b753d7054ff559b4007dc612eb66"
        }}
        style={styles.ImageBackground_9_1910}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/75de/60fc/c40dca7244c59a5351b96209e2b93117"
        }}
        style={styles.ImageBackground_9_1911}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2e64/d2a7/a2024b01c82aa442d01c99471f406046"
        }}
        style={styles.ImageBackground_9_1912}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4969/0137/ab21be56d2903ebcb8a11e33bbc5c124"
        }}
        style={styles.ImageBackground_9_1913}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/20c0/47ad/57a939722f77ba672f23179ac7ba63ad"
        }}
        style={styles.ImageBackground_9_1914}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bbc5/60b1/c6d23a543fc0e719f73db1b38ce0f4d7"
        }}
        style={styles.ImageBackground_9_1915}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bbc5/60b1/c6d23a543fc0e719f73db1b38ce0f4d7"
        }}
        style={styles.ImageBackground_9_1916}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2651/cd68/4efad446151c641652fcaa71d2c68a08"
        }}
        style={styles.ImageBackground_9_1917}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3e02/2f53/b1eff4df7d615ee0955cc750ed83598d"
        }}
        style={styles.ImageBackground_9_1918}
      />
      <View style={styles.View_9_1919}>
        <Text style={styles.Text_9_1919}>ALPHABETS </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b1d/e672/5d0f93cb82e6bb68ef4c6a8c48d224ec"
        }}
        style={styles.ImageBackground_9_1920}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f76d/1738/562bf6f9d9966d9262b20b6bf8afda17"
        }}
        style={styles.ImageBackground_9_1923}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b6aa/42a3/23f357391fbc4d9cf2d72767f7436440"
        }}
        style={styles.ImageBackground_9_1926}
      />
      <TouchableOpacity
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3599/08ff/c6559979c4aecc53a5b92e01eeda7a6a"
        }}
        style={styles.TouchableOpacity_9_1930}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("9_1643"))
        }
      />
      <TouchableOpacity
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2264/3d60/f97978805969e9eb9f9eb80797274c62"
        }}
        style={styles.TouchableOpacity_9_1934}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("9_13806"))
        }
      />
      <View style={styles.View_9_22186}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6239/28f4/66403418dc43f554efa5b5c35e0ed108"
          }}
          style={styles.ImageBackground_9_22187}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 173, 238, 1)" },
  View_2: { height: hp("109%") },
  ImageBackground_9_1835: {
    width: wp("91%"),
    height: hp("11%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_9_1836: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_9_1837: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_9_1838: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_9_1839: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  ImageBackground_9_1840: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  ImageBackground_9_1841: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  ImageBackground_9_1842: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_9_1843: {
    width: wp("12%"),
    height: hp("2%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_9_1844: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_9_1845: {
    width: wp("14%"),
    height: hp("7%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_9_1846: {
    width: wp("15%"),
    height: hp("7%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_9_1847: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_9_1848: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_9_1849: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_9_1850: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%")
  },
  ImageBackground_9_1851: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_9_1852: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%")
  },
  ImageBackground_9_1853: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_9_1854: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  ImageBackground_9_1855: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_9_1856: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%")
  },
  ImageBackground_9_1857: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_9_1858: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%")
  },
  ImageBackground_9_1859: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_9_1860: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_9_1861: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  ImageBackground_9_1862: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_9_1863: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  ImageBackground_9_1864: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_9_1865: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_9_1866: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%")
  },
  ImageBackground_9_1867: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_9_1868: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  ImageBackground_9_1869: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_9_1870: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  ImageBackground_9_1871: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_9_1872: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%")
  },
  ImageBackground_9_1873: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_9_1874: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%")
  },
  ImageBackground_9_1875: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_9_1876: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  ImageBackground_9_1877: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_9_1878: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  ImageBackground_9_1879: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_9_1880: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  ImageBackground_9_1881: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_9_1882: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  ImageBackground_9_1883: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_9_1884: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  ImageBackground_9_1885: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_9_1886: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  ImageBackground_9_1887: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_9_1888: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  ImageBackground_9_1889: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_9_1890: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  ImageBackground_9_1891: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_9_1892: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%")
  },
  ImageBackground_9_1893: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_9_1894: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%")
  },
  ImageBackground_9_1895: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_9_1896: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  ImageBackground_9_1897: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_9_1898: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  ImageBackground_9_1899: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_9_1900: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%")
  },
  ImageBackground_9_1901: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  ImageBackground_9_1902: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_9_1903: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  ImageBackground_9_1904: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_9_1905: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_9_1906: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_9_1907: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_9_1908: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_9_1909: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_9_1910: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_9_1911: {
    width: wp("3%"),
    height: hp("0%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_9_1912: {
    width: wp("2%"),
    height: hp("0%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_9_1913: {
    width: wp("2%"),
    height: hp("0%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_9_1914: {
    width: wp("2%"),
    height: hp("0%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_9_1915: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_9_1916: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_9_1917: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_9_1918: {
    width: wp("7%"),
    height: hp("1%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  View_9_1919: {
    width: wp("61%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    justifyContent: "flex-start"
  },
  Text_9_1919: {
    color: "rgba(35, 31, 32, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_9_1920: {
    width: wp("12%"),
    height: hp("6%"),
    top: hp("101%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_9_1923: {
    width: wp("12%"),
    height: hp("6%"),
    top: hp("101%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%")
  },
  ImageBackground_9_1926: {
    width: wp("12%"),
    height: hp("6%"),
    top: hp("101%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70%")
  },
  TouchableOpacity_9_1930: {
    width: wp("10%"),
    height: hp("5%"),
    top: hp("84%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%")
  },
  TouchableOpacity_9_1934: {
    width: wp("10%"),
    height: hp("5%"),
    top: hp("84%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%")
  },
  View_9_22186: {
    width: wp("86%"),
    height: hp("59%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_9_22187: {
    width: wp("86%"),
    height: hp("59%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
