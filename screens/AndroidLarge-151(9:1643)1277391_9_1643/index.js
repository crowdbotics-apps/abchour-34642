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
        style={styles.ImageBackground_9_1644}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3651/1024/3f7cc9ed76323de3c883d7270c2bd132"
        }}
        style={styles.ImageBackground_9_1645}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/84ed/1bf9/f608aaf0213e0977ffc11eda32d9d024"
        }}
        style={styles.ImageBackground_9_1646}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/13fc/444e/72c355531f0f7de00e7761e3497d6d41"
        }}
        style={styles.ImageBackground_9_1647}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6627/af0c/a6101c43a6749e2d8bdf0635fee393ad"
        }}
        style={styles.ImageBackground_9_1648}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/778f/cd49/9d77bdfb37f615800069f092604d8410"
        }}
        style={styles.ImageBackground_9_1649}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9d65/21d6/d65c3883e5c8d957534604a262d2d58c"
        }}
        style={styles.ImageBackground_9_1650}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1aab/5976/7339b6994fb9f7e96a9890725f0c7421"
        }}
        style={styles.ImageBackground_9_1651}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c8ea/bb0b/74cf465798fe0579d7c25aa45488fe50"
        }}
        style={styles.ImageBackground_9_1652}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d6d3/33f8/d7ec44534b9955a4b3cfe1fba0ac97e7"
        }}
        style={styles.ImageBackground_9_1653}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c022/9f5c/833a726477a8637c01a2a1467e36492c"
        }}
        style={styles.ImageBackground_9_1654}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b6d2/3219/4005c1c02dfe524706757b8947b78a88"
        }}
        style={styles.ImageBackground_9_1655}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4afd/33ef/23eafe4076454bf97f6d9312a678c555"
        }}
        style={styles.ImageBackground_9_1656}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4afd/33ef/23eafe4076454bf97f6d9312a678c555"
        }}
        style={styles.ImageBackground_9_1657}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4afd/33ef/23eafe4076454bf97f6d9312a678c555"
        }}
        style={styles.ImageBackground_9_1658}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4afd/33ef/23eafe4076454bf97f6d9312a678c555"
        }}
        style={styles.ImageBackground_9_1659}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4afd/33ef/23eafe4076454bf97f6d9312a678c555"
        }}
        style={styles.ImageBackground_9_1660}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4afd/33ef/23eafe4076454bf97f6d9312a678c555"
        }}
        style={styles.ImageBackground_9_1661}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4afd/33ef/23eafe4076454bf97f6d9312a678c555"
        }}
        style={styles.ImageBackground_9_1662}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4afd/33ef/23eafe4076454bf97f6d9312a678c555"
        }}
        style={styles.ImageBackground_9_1663}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4afd/33ef/23eafe4076454bf97f6d9312a678c555"
        }}
        style={styles.ImageBackground_9_1664}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4afd/33ef/23eafe4076454bf97f6d9312a678c555"
        }}
        style={styles.ImageBackground_9_1665}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4afd/33ef/23eafe4076454bf97f6d9312a678c555"
        }}
        style={styles.ImageBackground_9_1666}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4afd/33ef/23eafe4076454bf97f6d9312a678c555"
        }}
        style={styles.ImageBackground_9_1667}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_1668}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_1669}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_1670}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_1671}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_1672}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_1673}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_1674}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_1675}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_1676}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_1677}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_1678}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_1679}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_1680}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_1681}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_1682}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_1683}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_1684}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_1685}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_1686}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_1687}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_1688}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_1689}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_1690}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_1691}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_1692}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_1693}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_1694}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_1695}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_1696}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_1697}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_1698}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_1699}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_1700}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_1701}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_1702}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_1703}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_1704}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_1705}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_1706}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_1707}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_1708}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_1709}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_1710}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/61ef/47e6/c04dce5a38831773ea07342743f001b1"
        }}
        style={styles.ImageBackground_9_1711}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_1712}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_1713}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_1714}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_1715}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e522/592a/7519b414e3563b4dfed993b198f98fa6"
        }}
        style={styles.ImageBackground_9_1716}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dc0e/27ee/02e2bd46e1ea9260fd24de3651545656"
        }}
        style={styles.ImageBackground_9_1717}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4dc1/962c/98d16d030427828cebb365eb9856f38b"
        }}
        style={styles.ImageBackground_9_1718}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b42e/0829/e2e3b753d7054ff559b4007dc612eb66"
        }}
        style={styles.ImageBackground_9_1719}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/75de/60fc/c40dca7244c59a5351b96209e2b93117"
        }}
        style={styles.ImageBackground_9_1720}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2e64/d2a7/a2024b01c82aa442d01c99471f406046"
        }}
        style={styles.ImageBackground_9_1721}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4969/0137/ab21be56d2903ebcb8a11e33bbc5c124"
        }}
        style={styles.ImageBackground_9_1722}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/20c0/47ad/57a939722f77ba672f23179ac7ba63ad"
        }}
        style={styles.ImageBackground_9_1723}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bbc5/60b1/c6d23a543fc0e719f73db1b38ce0f4d7"
        }}
        style={styles.ImageBackground_9_1724}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bbc5/60b1/c6d23a543fc0e719f73db1b38ce0f4d7"
        }}
        style={styles.ImageBackground_9_1725}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2651/cd68/4efad446151c641652fcaa71d2c68a08"
        }}
        style={styles.ImageBackground_9_1726}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3e02/2f53/b1eff4df7d615ee0955cc750ed83598d"
        }}
        style={styles.ImageBackground_9_1727}
      />
      <View style={styles.View_9_1728}>
        <Text style={styles.Text_9_1728}>ALPHABETS </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b1d/e672/5d0f93cb82e6bb68ef4c6a8c48d224ec"
        }}
        style={styles.ImageBackground_9_1729}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f76d/1738/562bf6f9d9966d9262b20b6bf8afda17"
        }}
        style={styles.ImageBackground_9_1732}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b6aa/42a3/23f357391fbc4d9cf2d72767f7436440"
        }}
        style={styles.ImageBackground_9_1735}
      />
      <TouchableOpacity
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3599/08ff/c6559979c4aecc53a5b92e01eeda7a6a"
        }}
        style={styles.TouchableOpacity_9_1739}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("9_1452"))
        }
      />
      <TouchableOpacity
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2264/3d60/f97978805969e9eb9f9eb80797274c62"
        }}
        style={styles.TouchableOpacity_9_1743}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("9_1834"))
        }
      />
      <View style={styles.View_9_22120}>
        <View style={styles.View_9_22121}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/87cd/f06c/4b2d4eb337b3ebf45f77112534173553"
            }}
            style={styles.ImageBackground_9_22122}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8be1/25fb/56870b384ad1fc918c08c9c712f4c1f8"
            }}
            style={styles.ImageBackground_9_22123}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cc0f/97dd/6390bfe45ad77611d498895b22f966cf"
            }}
            style={styles.ImageBackground_9_22124}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2614/1409/dfe896e9037c63c00d67abc25b04eb80"
            }}
            style={styles.ImageBackground_9_22125}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1678/cba7/d4c901d6a38f6ff1939680562782f9e9"
            }}
            style={styles.ImageBackground_9_22126}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/610c/8473/d275f33d48c78e6dce94a4b1b23f0ba8"
            }}
            style={styles.ImageBackground_9_22127}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cbfd/ab80/48c40e86ad124950114d945ce03fbc23"
            }}
            style={styles.ImageBackground_9_22128}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/219f/e2a5/66733c143c0a3adfe0314371de7b6e55"
            }}
            style={styles.ImageBackground_9_22129}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7218/2dd9/4ee28729246b8abd078397612aa64b18"
            }}
            style={styles.ImageBackground_9_22130}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/610c/8473/d275f33d48c78e6dce94a4b1b23f0ba8"
            }}
            style={styles.ImageBackground_9_22131}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3b11/12ec/71866a4bf9c0f5ee69273dea072a2473"
            }}
            style={styles.ImageBackground_9_22132}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0678/f1a5/c52e76f76ab18269bab0604dd257f3a3"
            }}
            style={styles.ImageBackground_9_22133}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bb78/f3de/5cceb13a1a4b0f22945a891f19995639"
            }}
            style={styles.ImageBackground_9_22134}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5745/4478/52e8d9d00d88643db0ab4a1f845d782b"
            }}
            style={styles.ImageBackground_9_22135}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ae4e/6f15/68ec4b643fc9c1a6347ef65f4f0edcac"
            }}
            style={styles.ImageBackground_9_22136}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6924/40ea/57090b7e755ee16b8eb1c6eac0ccdcad"
            }}
            style={styles.ImageBackground_9_22137}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9979/c9e0/c460d08e8bbe556bae751e8a24c7d85c"
            }}
            style={styles.ImageBackground_9_22138}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4425/f153/aa994c316e54853ce0324dd1107f1d99"
            }}
            style={styles.ImageBackground_9_22139}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/038e/f4af/28e3f53afedae8c054aefd197e2f7eca"
            }}
            style={styles.ImageBackground_9_22140}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/87dc/7977/38739e80e8a994c865f67f052dba4931"
            }}
            style={styles.ImageBackground_9_22141}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fc6a/3e27/8f8649a42cd4f2912f1537e83b6939ad"
            }}
            style={styles.ImageBackground_9_22142}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9d15/afd3/3fe8fa6172a8032c55f59a8d4e0c2279"
            }}
            style={styles.ImageBackground_9_22143}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/01ca/46e4/a729fa00619be7bc475e37b060d3c578"
            }}
            style={styles.ImageBackground_9_22144}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e891/a925/b65093ba56ea14665f634f9963bf87df"
            }}
            style={styles.ImageBackground_9_22145}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/03ac/cccd/1044bb2ac4f05e1843201dfe768c93fb"
            }}
            style={styles.ImageBackground_9_22146}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b5ad/14e4/dae6365b5418164cddce2b1badc43fcc"
            }}
            style={styles.ImageBackground_9_22147}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ae68/99f9/7e9686ff1f4523f82caa2195efa3b834"
            }}
            style={styles.ImageBackground_9_22148}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f6c3/185e/005272e65ae9b18c305fc364e2defda6"
            }}
            style={styles.ImageBackground_9_22149}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b409/2e51/c218f38ea70fad28ebe4eeb1ee9264f4"
            }}
            style={styles.ImageBackground_9_22150}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a90d/6f53/2f34f45ea6f10c6e9f64474f2174045b"
            }}
            style={styles.ImageBackground_9_22151}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e27c/2545/3222dffeddb619e25a22e64bd7ef856e"
            }}
            style={styles.ImageBackground_9_22152}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b891/85f8/1417a556255a5a3d108da04ccfdce9e4"
            }}
            style={styles.ImageBackground_9_22153}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/96de/03a1/c003804e34a96f59b1c56f5f8c975bb4"
            }}
            style={styles.ImageBackground_9_22154}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e11a/c1e6/d935e934363f34e8b3663b450e810b77"
            }}
            style={styles.ImageBackground_9_22155}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aabb/2b93/86e81765354dd02df22403f6bd99719a"
            }}
            style={styles.ImageBackground_9_22156}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d29b/42f8/1a30d71b7ac27b5fbefee18039b31daa"
            }}
            style={styles.ImageBackground_9_22157}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/223a/6816/4504814fa47dff58f510a6e96364d849"
            }}
            style={styles.ImageBackground_9_22158}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dd40/b3f4/71ec5d8f781b288520c8362a861b044d"
            }}
            style={styles.ImageBackground_9_22159}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d526/ee71/fd48395c18be883e31314634f8445fbb"
            }}
            style={styles.ImageBackground_9_22160}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3bbb/f422/9cff0e2e274a8ec37cb9ca7147cc8641"
            }}
            style={styles.ImageBackground_9_22161}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/55db/d532/188e1096a7dd7c3f333128fb8cf4ad1e"
            }}
            style={styles.ImageBackground_9_22162}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7008/ef06/0a790e3fc82ac185d519f122fde495f0"
            }}
            style={styles.ImageBackground_9_22163}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/341a/d047/17fcd380c41062d478577ce79c1ba7d2"
            }}
            style={styles.ImageBackground_9_22164}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bb47/b38a/2ee7e19225bc49b2948bb4fac2838c64"
            }}
            style={styles.ImageBackground_9_22165}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8824/4f51/f74dd0e5be6326e8de5dfe5ff60504e1"
            }}
            style={styles.ImageBackground_9_22166}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bbc3/e673/5a9c2fbf249335c8ec26ede499fd2d06"
            }}
            style={styles.ImageBackground_9_22167}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eb2c/38d9/393e1e24fad3c7269297abea98180a6c"
            }}
            style={styles.ImageBackground_9_22168}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/17b2/12cf/dc89b49edbe7c7112d1dfe3d286522d0"
            }}
            style={styles.ImageBackground_9_22169}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b7ac/73b7/c583d10833da260753af47e85dd36306"
            }}
            style={styles.ImageBackground_9_22170}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1f0f/d080/59024be3843e190eb823415376a1a2a3"
            }}
            style={styles.ImageBackground_9_22171}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c7a9/41f9/d4e53ab378ea62a69c2d8878e4d30487"
            }}
            style={styles.ImageBackground_9_22172}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a8d7/a2f5/f09f84bcc3062df0253160cef4784def"
            }}
            style={styles.ImageBackground_9_22173}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f495/c434/c063dcb06c303b1f4e223cf8ff751504"
            }}
            style={styles.ImageBackground_9_22174}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a9cc/b0eb/67b458374893c6dcd8f0a817fba385f4"
            }}
            style={styles.ImageBackground_9_22175}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8320/f6c5/380812625b37222a20b888cb7c1963d4"
            }}
            style={styles.ImageBackground_9_22176}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9137/7e26/d1498708c4b1087bba67adc1e53e1734"
            }}
            style={styles.ImageBackground_9_22177}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a2b5/6aca/e559559208b0c33813289f9a0d32ead7"
            }}
            style={styles.ImageBackground_9_22178}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3ab5/8ef7/7f06889c2b0d7aab6363bb7f53ef8194"
            }}
            style={styles.ImageBackground_9_22180}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/50bf/3fa2/6900301e7967ebdaf80a41bc8ecfacc5"
            }}
            style={styles.ImageBackground_9_22182}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8809/323c/43e806106f7bf31f42425b43ad365f32"
            }}
            style={styles.ImageBackground_9_22184}
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 173, 238, 1)" },
  View_2: { height: hp("109%") },
  ImageBackground_9_1644: {
    width: wp("91%"),
    height: hp("11%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_9_1645: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_9_1646: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_9_1647: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_9_1648: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  ImageBackground_9_1649: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  ImageBackground_9_1650: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  ImageBackground_9_1651: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_9_1652: {
    width: wp("12%"),
    height: hp("2%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_9_1653: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_9_1654: {
    width: wp("14%"),
    height: hp("7%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_9_1655: {
    width: wp("15%"),
    height: hp("7%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_9_1656: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_9_1657: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_9_1658: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_9_1659: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%")
  },
  ImageBackground_9_1660: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_9_1661: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%")
  },
  ImageBackground_9_1662: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_9_1663: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  ImageBackground_9_1664: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_9_1665: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%")
  },
  ImageBackground_9_1666: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_9_1667: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%")
  },
  ImageBackground_9_1668: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_9_1669: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_9_1670: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  ImageBackground_9_1671: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_9_1672: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  ImageBackground_9_1673: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_9_1674: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_9_1675: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%")
  },
  ImageBackground_9_1676: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_9_1677: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  ImageBackground_9_1678: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_9_1679: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  ImageBackground_9_1680: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_9_1681: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%")
  },
  ImageBackground_9_1682: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_9_1683: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%")
  },
  ImageBackground_9_1684: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_9_1685: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  ImageBackground_9_1686: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_9_1687: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  ImageBackground_9_1688: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_9_1689: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  ImageBackground_9_1690: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_9_1691: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  ImageBackground_9_1692: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_9_1693: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  ImageBackground_9_1694: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_9_1695: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  ImageBackground_9_1696: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_9_1697: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  ImageBackground_9_1698: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_9_1699: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  ImageBackground_9_1700: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_9_1701: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%")
  },
  ImageBackground_9_1702: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_9_1703: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%")
  },
  ImageBackground_9_1704: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_9_1705: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  ImageBackground_9_1706: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_9_1707: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  ImageBackground_9_1708: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_9_1709: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%")
  },
  ImageBackground_9_1710: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  ImageBackground_9_1711: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_9_1712: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  ImageBackground_9_1713: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_9_1714: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_9_1715: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_9_1716: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_9_1717: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_9_1718: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_9_1719: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_9_1720: {
    width: wp("3%"),
    height: hp("0%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_9_1721: {
    width: wp("2%"),
    height: hp("0%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_9_1722: {
    width: wp("2%"),
    height: hp("0%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_9_1723: {
    width: wp("2%"),
    height: hp("0%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_9_1724: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_9_1725: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_9_1726: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_9_1727: {
    width: wp("7%"),
    height: hp("1%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  View_9_1728: {
    width: wp("61%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    justifyContent: "flex-start"
  },
  Text_9_1728: {
    color: "rgba(35, 31, 32, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_9_1729: {
    width: wp("12%"),
    height: hp("6%"),
    top: hp("101%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_9_1732: {
    width: wp("12%"),
    height: hp("6%"),
    top: hp("101%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%")
  },
  ImageBackground_9_1735: {
    width: wp("12%"),
    height: hp("6%"),
    top: hp("101%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70%")
  },
  TouchableOpacity_9_1739: {
    width: wp("10%"),
    height: hp("5%"),
    top: hp("84%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%")
  },
  TouchableOpacity_9_1743: {
    width: wp("10%"),
    height: hp("5%"),
    top: hp("84%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%")
  },
  View_9_22120: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("59%"),
    minHeight: hp("59%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("23%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_9_22121: {
    width: wp("86%"),
    height: hp("59%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_22122: {
    width: wp("84%"),
    height: hp("58%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_9_22123: {
    width: wp("86%"),
    height: hp("59%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_22124: {
    width: wp("18%"),
    height: hp("15%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_9_22125: {
    width: wp("14%"),
    height: hp("9%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%")
  },
  ImageBackground_9_22126: {
    width: wp("5%"),
    height: hp("4%"),
    top: hp("51%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  ImageBackground_9_22127: {
    width: wp("6%"),
    height: hp("4%"),
    top: hp("51%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%")
  },
  ImageBackground_9_22128: {
    width: wp("2%"),
    height: hp("5%"),
    top: hp("50%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%")
  },
  ImageBackground_9_22129: {
    width: wp("2%"),
    height: hp("5%"),
    top: hp("50%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%")
  },
  ImageBackground_9_22130: {
    width: wp("5%"),
    height: hp("4%"),
    top: hp("51%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%")
  },
  ImageBackground_9_22131: {
    width: wp("6%"),
    height: hp("4%"),
    top: hp("51%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%")
  },
  ImageBackground_9_22132: {
    width: wp("5%"),
    height: hp("5%"),
    top: hp("51%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%")
  },
  ImageBackground_9_22133: {
    width: wp("5%"),
    height: hp("5%"),
    top: hp("51%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%")
  },
  ImageBackground_9_22134: {
    width: wp("5%"),
    height: hp("5%"),
    top: hp("50%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%")
  },
  ImageBackground_9_22135: {
    width: wp("5%"),
    height: hp("5%"),
    top: hp("50%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%")
  },
  ImageBackground_9_22136: {
    width: wp("5%"),
    height: hp("4%"),
    top: hp("51%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49%")
  },
  ImageBackground_9_22137: {
    width: wp("6%"),
    height: hp("4%"),
    top: hp("51%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%")
  },
  ImageBackground_9_22138: {
    width: wp("5%"),
    height: hp("4%"),
    top: hp("51%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%")
  },
  ImageBackground_9_22139: {
    width: wp("5%"),
    height: hp("4%"),
    top: hp("51%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%")
  },
  ImageBackground_9_22140: {
    width: wp("5%"),
    height: hp("4%"),
    top: hp("50%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61%")
  },
  ImageBackground_9_22141: {
    width: wp("5%"),
    height: hp("4%"),
    top: hp("50%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61%")
  },
  ImageBackground_9_22142: {
    width: wp("6%"),
    height: hp("5%"),
    top: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%")
  },
  ImageBackground_9_22143: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%")
  },
  ImageBackground_9_22144: {
    width: wp("11%"),
    height: hp("5%"),
    top: hp("44%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%")
  },
  ImageBackground_9_22145: {
    width: wp("9%"),
    height: hp("5%"),
    top: hp("44%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%")
  },
  ImageBackground_9_22146: {
    width: wp("14%"),
    height: hp("5%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%")
  },
  ImageBackground_9_22147: {
    width: wp("74%"),
    height: hp("26%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_9_22148: {
    width: wp("74%"),
    height: hp("26%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_9_22149: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%")
  },
  ImageBackground_9_22150: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%")
  },
  ImageBackground_9_22151: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_9_22152: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("40%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_9_22153: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("41%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_9_22154: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("44%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_9_22155: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_9_22156: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  ImageBackground_9_22157: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_9_22158: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_9_22159: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_9_22160: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_9_22161: {
    width: wp("7%"),
    height: hp("2%"),
    top: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  ImageBackground_9_22162: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%")
  },
  ImageBackground_9_22163: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%")
  },
  ImageBackground_9_22164: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%")
  },
  ImageBackground_9_22165: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("48%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%")
  },
  ImageBackground_9_22166: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%")
  },
  ImageBackground_9_22167: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("48%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%")
  },
  ImageBackground_9_22168: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%")
  },
  ImageBackground_9_22169: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70%")
  },
  ImageBackground_9_22170: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%")
  },
  ImageBackground_9_22171: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62%")
  },
  ImageBackground_9_22172: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64%")
  },
  ImageBackground_9_22173: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72%")
  },
  ImageBackground_9_22174: {
    width: wp("16%"),
    height: hp("8%"),
    top: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%")
  },
  ImageBackground_9_22175: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%")
  },
  ImageBackground_9_22176: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%")
  },
  ImageBackground_9_22177: {
    width: wp("20%"),
    height: hp("7%"),
    top: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%")
  },
  ImageBackground_9_22178: {
    width: wp("23%"),
    height: hp("5%"),
    top: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%")
  },
  ImageBackground_9_22180: {
    width: wp("32%"),
    height: hp("4%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%")
  },
  ImageBackground_9_22182: {
    width: wp("12%"),
    height: hp("15%"),
    top: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_9_22184: {
    width: wp("36%"),
    height: hp("16%"),
    top: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
