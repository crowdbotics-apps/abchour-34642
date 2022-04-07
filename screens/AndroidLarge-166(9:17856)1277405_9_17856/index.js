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
        style={styles.ImageBackground_9_17857}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3651/1024/3f7cc9ed76323de3c883d7270c2bd132"
        }}
        style={styles.ImageBackground_9_17858}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/84ed/1bf9/f608aaf0213e0977ffc11eda32d9d024"
        }}
        style={styles.ImageBackground_9_17859}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/13fc/444e/72c355531f0f7de00e7761e3497d6d41"
        }}
        style={styles.ImageBackground_9_17860}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6627/af0c/a6101c43a6749e2d8bdf0635fee393ad"
        }}
        style={styles.ImageBackground_9_17861}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/778f/cd49/9d77bdfb37f615800069f092604d8410"
        }}
        style={styles.ImageBackground_9_17862}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9d65/21d6/d65c3883e5c8d957534604a262d2d58c"
        }}
        style={styles.ImageBackground_9_17863}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1aab/5976/7339b6994fb9f7e96a9890725f0c7421"
        }}
        style={styles.ImageBackground_9_17864}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c8ea/bb0b/74cf465798fe0579d7c25aa45488fe50"
        }}
        style={styles.ImageBackground_9_17865}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d6d3/33f8/d7ec44534b9955a4b3cfe1fba0ac97e7"
        }}
        style={styles.ImageBackground_9_17866}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c022/9f5c/833a726477a8637c01a2a1467e36492c"
        }}
        style={styles.ImageBackground_9_17867}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b6d2/3219/4005c1c02dfe524706757b8947b78a88"
        }}
        style={styles.ImageBackground_9_17868}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4afd/33ef/23eafe4076454bf97f6d9312a678c555"
        }}
        style={styles.ImageBackground_9_17869}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4afd/33ef/23eafe4076454bf97f6d9312a678c555"
        }}
        style={styles.ImageBackground_9_17870}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4afd/33ef/23eafe4076454bf97f6d9312a678c555"
        }}
        style={styles.ImageBackground_9_17871}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4afd/33ef/23eafe4076454bf97f6d9312a678c555"
        }}
        style={styles.ImageBackground_9_17872}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4afd/33ef/23eafe4076454bf97f6d9312a678c555"
        }}
        style={styles.ImageBackground_9_17873}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4afd/33ef/23eafe4076454bf97f6d9312a678c555"
        }}
        style={styles.ImageBackground_9_17874}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4afd/33ef/23eafe4076454bf97f6d9312a678c555"
        }}
        style={styles.ImageBackground_9_17875}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4afd/33ef/23eafe4076454bf97f6d9312a678c555"
        }}
        style={styles.ImageBackground_9_17876}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4afd/33ef/23eafe4076454bf97f6d9312a678c555"
        }}
        style={styles.ImageBackground_9_17877}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4afd/33ef/23eafe4076454bf97f6d9312a678c555"
        }}
        style={styles.ImageBackground_9_17878}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4afd/33ef/23eafe4076454bf97f6d9312a678c555"
        }}
        style={styles.ImageBackground_9_17879}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4afd/33ef/23eafe4076454bf97f6d9312a678c555"
        }}
        style={styles.ImageBackground_9_17880}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_17881}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_17882}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_17883}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_17884}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_17885}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_17886}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_17887}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_17888}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_17889}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_17890}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_17891}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_17892}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_17893}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_17894}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_17895}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_17896}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_17897}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_17898}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_17899}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_17900}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_17901}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_17902}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_17903}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_17904}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_17905}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_17906}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_17907}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_17908}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_17909}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_17910}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_17911}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_17912}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_17913}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_17914}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_17915}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_17916}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_17917}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_17918}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_17919}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_17920}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_17921}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_17922}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_17923}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/61ef/47e6/c04dce5a38831773ea07342743f001b1"
        }}
        style={styles.ImageBackground_9_17924}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_17925}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_17926}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_17927}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_17928}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e522/592a/7519b414e3563b4dfed993b198f98fa6"
        }}
        style={styles.ImageBackground_9_17929}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dc0e/27ee/02e2bd46e1ea9260fd24de3651545656"
        }}
        style={styles.ImageBackground_9_17930}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4dc1/962c/98d16d030427828cebb365eb9856f38b"
        }}
        style={styles.ImageBackground_9_17931}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b42e/0829/e2e3b753d7054ff559b4007dc612eb66"
        }}
        style={styles.ImageBackground_9_17932}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/75de/60fc/c40dca7244c59a5351b96209e2b93117"
        }}
        style={styles.ImageBackground_9_17933}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2e64/d2a7/a2024b01c82aa442d01c99471f406046"
        }}
        style={styles.ImageBackground_9_17934}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4969/0137/ab21be56d2903ebcb8a11e33bbc5c124"
        }}
        style={styles.ImageBackground_9_17935}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/20c0/47ad/57a939722f77ba672f23179ac7ba63ad"
        }}
        style={styles.ImageBackground_9_17936}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bbc5/60b1/c6d23a543fc0e719f73db1b38ce0f4d7"
        }}
        style={styles.ImageBackground_9_17937}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bbc5/60b1/c6d23a543fc0e719f73db1b38ce0f4d7"
        }}
        style={styles.ImageBackground_9_17938}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2651/cd68/4efad446151c641652fcaa71d2c68a08"
        }}
        style={styles.ImageBackground_9_17939}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3e02/2f53/b1eff4df7d615ee0955cc750ed83598d"
        }}
        style={styles.ImageBackground_9_17940}
      />
      <View style={styles.View_9_17941}>
        <Text style={styles.Text_9_17941}>ALPHABETS </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b1d/e672/5d0f93cb82e6bb68ef4c6a8c48d224ec"
        }}
        style={styles.ImageBackground_9_17942}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/86eb/b0ec/ba5c5cf1ac7b8f676209d985e9adf817"
        }}
        style={styles.ImageBackground_9_17945}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b6aa/42a3/23f357391fbc4d9cf2d72767f7436440"
        }}
        style={styles.ImageBackground_9_17948}
      />
      <TouchableOpacity
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3599/08ff/c6559979c4aecc53a5b92e01eeda7a6a"
        }}
        style={styles.TouchableOpacity_9_17952}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("9_18047"))
        }
      />
      <TouchableOpacity
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2264/3d60/f97978805969e9eb9f9eb80797274c62"
        }}
        style={styles.TouchableOpacity_9_17956}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("9_17474"))
        }
      />
      <View style={styles.View_9_23293}>
        <View style={styles.View_9_23294}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f6fc/3927/69998f9f56d4a43d23c7b95a46b04b51"
            }}
            style={styles.ImageBackground_9_23295}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f55b/0bf2/35fd0164720bc3ff6b7683f47f7673fe"
            }}
            style={styles.ImageBackground_9_23296}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d072/6184/42be3a7ce25946ef5a0b0e2025a29214"
            }}
            style={styles.ImageBackground_9_23297}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/33c8/a421/d23b7bedf26f308e3bef6e43f1c21747"
            }}
            style={styles.ImageBackground_9_23298}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3750/6b5c/0a9410a72618a3ee95da2c44a2fdee0b"
            }}
            style={styles.ImageBackground_9_23299}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4cc5/617d/a2976f2920712003b87d06770c3ba1d0"
            }}
            style={styles.ImageBackground_9_23300}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/446c/fc4e/402762d1eb2b4d1600ae3eec3f79c81d"
            }}
            style={styles.ImageBackground_9_23301}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8b20/447c/fce318e57111844e6caf7498271b461b"
            }}
            style={styles.ImageBackground_9_23302}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/02b9/7c19/6bedf0ce21facd125955374530a40b7f"
            }}
            style={styles.ImageBackground_9_23303}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a710/e143/4e2ca263878d337a965ad8b85cd2b1c6"
            }}
            style={styles.ImageBackground_9_23304}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/54bd/9376/386487a4d60b38001e3c6eff577591ae"
            }}
            style={styles.ImageBackground_9_23305}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5ad9/013b/f48c533b981ba38c9c80a2fb3e6fb35b"
            }}
            style={styles.ImageBackground_9_23306}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c3f6/39d8/b47bcd20b1d5169bf533be016413a52c"
            }}
            style={styles.ImageBackground_9_23307}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/79a6/67e2/a1476e9a3049e17ecc22c7621acddcba"
            }}
            style={styles.ImageBackground_9_23308}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c3f6/39d8/b47bcd20b1d5169bf533be016413a52c"
            }}
            style={styles.ImageBackground_9_23309}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a579/7dfc/e658657885b618b1a068673ddc621576"
            }}
            style={styles.ImageBackground_9_23310}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2d12/a131/a6e17cea2ebd03a5371e9c82c2f5de4d"
            }}
            style={styles.ImageBackground_9_23311}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa4d/15b3/e81d9d05a745eb1869d084dac53da083"
            }}
            style={styles.ImageBackground_9_23312}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/220d/202f/9d71ac4d337cfca03c2925ecdaf0ab11"
            }}
            style={styles.ImageBackground_9_23313}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/25ff/c1e6/3a5ad02b72c955d9db2a5a15eaaef5f4"
            }}
            style={styles.ImageBackground_9_23314}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/42c5/42e3/f41ad396ff7119d5d60e347d2d845fcd"
            }}
            style={styles.ImageBackground_9_23315}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b77b/a639/1f1b02ca0c5a4bdb763bdd3e5d25bf19"
            }}
            style={styles.ImageBackground_9_23316}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8b50/7b2d/0c43892fd9e4bbbdbbf80cbc5d86179d"
            }}
            style={styles.ImageBackground_9_23317}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c6cc/82aa/4a172467691a0492b25725a8a47cc158"
            }}
            style={styles.ImageBackground_9_23318}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bd0d/15a6/52059ef03b8a1edf89ec161b9d6fc08a"
            }}
            style={styles.ImageBackground_9_23319}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8a84/9858/ed003c940f26ec85d386e92ee4c1685b"
            }}
            style={styles.ImageBackground_9_23321}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/64d4/dec4/a0ef0d91d92c19291f2787ee4c55061b"
            }}
            style={styles.ImageBackground_9_23322}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c676/ddc6/f78b4bc0a06324b1b324ddc46fd686c8"
            }}
            style={styles.ImageBackground_9_23323}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b0fe/7639/f036d046508834cd0e2c929e2cc1058f"
            }}
            style={styles.ImageBackground_9_23324}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/25a3/a7ee/11210cb285771ed9544200e77c8d9d56"
            }}
            style={styles.ImageBackground_9_23325}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8177/51c6/25d625ca857e582b973ed6ba5d13d9e1"
            }}
            style={styles.ImageBackground_9_23326}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dae1/a85b/b78a97bca23473d754e485e34e27243f"
            }}
            style={styles.ImageBackground_9_23327}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6e32/1548/e7f0b0ce82ed7d6a91643c23f78c9830"
            }}
            style={styles.ImageBackground_9_23328}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c641/2b2d/67bc35843d3b835fad62e582419d3b31"
            }}
            style={styles.ImageBackground_9_23329}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c560/ab1a/285d3564be58b90d78b914dad1c2950c"
            }}
            style={styles.ImageBackground_9_23330}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5bb1/de7b/ef6e82c18fe1d1bb654c569ea86665b8"
            }}
            style={styles.ImageBackground_9_23331}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/41b1/cd65/470a94a9cd3791d209556886dfd8ac4b"
            }}
            style={styles.ImageBackground_9_23332}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f1be/99ed/a057a4024237872bae24d9aa31be7790"
            }}
            style={styles.ImageBackground_9_23333}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4f7b/8e19/3fa7def90536688d6a7f50ff8fc8d1bc"
            }}
            style={styles.ImageBackground_9_23334}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1e63/6004/a2ef9f46d1e2d40fedee94c2bd1f0691"
            }}
            style={styles.ImageBackground_9_23335}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bf36/646c/813b561921e88129d33aec4bfb6fa129"
            }}
            style={styles.ImageBackground_9_23336}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2611/df16/82b7303c1c494968ba092fab94241838"
            }}
            style={styles.ImageBackground_9_23337}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6d19/a806/9d03f600d1283bfff22bed79d8a868f1"
            }}
            style={styles.ImageBackground_9_23338}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6e32/1548/e7f0b0ce82ed7d6a91643c23f78c9830"
            }}
            style={styles.ImageBackground_9_23339}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c16d/5660/31fc6511b2976290f1cc76f35ba4abf5"
            }}
            style={styles.ImageBackground_9_23340}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eb42/d590/cc0e638935280797e1d4f0557d7874e6"
            }}
            style={styles.ImageBackground_9_23341}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/18ca/4334/28877b148f20ff9802e0fc6ac850a154"
            }}
            style={styles.ImageBackground_9_23342}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/29c5/a001/8d23305e76832c26125c5cd976169ab2"
            }}
            style={styles.ImageBackground_9_23344}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b6d/7005/d0b46f7f4bd2d0575683cb7e76212fc2"
            }}
            style={styles.ImageBackground_9_23345}
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 173, 238, 1)" },
  View_2: { height: hp("109%") },
  ImageBackground_9_17857: {
    width: wp("91%"),
    height: hp("11%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_9_17858: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_9_17859: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_9_17860: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_9_17861: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  ImageBackground_9_17862: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  ImageBackground_9_17863: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  ImageBackground_9_17864: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_9_17865: {
    width: wp("12%"),
    height: hp("2%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_9_17866: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_9_17867: {
    width: wp("14%"),
    height: hp("7%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_9_17868: {
    width: wp("15%"),
    height: hp("7%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_9_17869: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_9_17870: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_9_17871: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_9_17872: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%")
  },
  ImageBackground_9_17873: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_9_17874: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%")
  },
  ImageBackground_9_17875: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_9_17876: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  ImageBackground_9_17877: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_9_17878: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%")
  },
  ImageBackground_9_17879: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_9_17880: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%")
  },
  ImageBackground_9_17881: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_9_17882: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_9_17883: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  ImageBackground_9_17884: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_9_17885: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  ImageBackground_9_17886: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_9_17887: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_9_17888: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%")
  },
  ImageBackground_9_17889: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_9_17890: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  ImageBackground_9_17891: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_9_17892: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  ImageBackground_9_17893: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_9_17894: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%")
  },
  ImageBackground_9_17895: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_9_17896: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%")
  },
  ImageBackground_9_17897: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_9_17898: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  ImageBackground_9_17899: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_9_17900: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  ImageBackground_9_17901: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_9_17902: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  ImageBackground_9_17903: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_9_17904: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  ImageBackground_9_17905: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_9_17906: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  ImageBackground_9_17907: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_9_17908: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  ImageBackground_9_17909: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_9_17910: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  ImageBackground_9_17911: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_9_17912: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  ImageBackground_9_17913: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_9_17914: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%")
  },
  ImageBackground_9_17915: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_9_17916: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%")
  },
  ImageBackground_9_17917: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_9_17918: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  ImageBackground_9_17919: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_9_17920: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  ImageBackground_9_17921: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_9_17922: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%")
  },
  ImageBackground_9_17923: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  ImageBackground_9_17924: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_9_17925: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  ImageBackground_9_17926: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_9_17927: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_9_17928: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_9_17929: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_9_17930: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_9_17931: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_9_17932: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_9_17933: {
    width: wp("3%"),
    height: hp("0%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_9_17934: {
    width: wp("2%"),
    height: hp("0%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_9_17935: {
    width: wp("2%"),
    height: hp("0%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_9_17936: {
    width: wp("2%"),
    height: hp("0%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_9_17937: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_9_17938: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_9_17939: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_9_17940: {
    width: wp("7%"),
    height: hp("1%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  View_9_17941: {
    width: wp("61%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    justifyContent: "flex-start"
  },
  Text_9_17941: {
    color: "rgba(35, 31, 32, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_9_17942: {
    width: wp("12%"),
    height: hp("6%"),
    top: hp("101%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_9_17945: {
    width: wp("12%"),
    height: hp("6%"),
    top: hp("101%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%")
  },
  ImageBackground_9_17948: {
    width: wp("12%"),
    height: hp("6%"),
    top: hp("101%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70%")
  },
  TouchableOpacity_9_17952: {
    width: wp("10%"),
    height: hp("5%"),
    top: hp("84%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%")
  },
  TouchableOpacity_9_17956: {
    width: wp("10%"),
    height: hp("5%"),
    top: hp("84%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%")
  },
  View_9_23293: {
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
  View_9_23294: {
    width: wp("86%"),
    height: hp("59%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_23295: {
    width: wp("84%"),
    height: hp("58%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_9_23296: {
    width: wp("86%"),
    height: hp("59%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_23297: {
    width: wp("17%"),
    height: hp("15%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_9_23298: {
    width: wp("11%"),
    height: hp("10%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%")
  },
  ImageBackground_9_23299: {
    width: wp("5%"),
    height: hp("4%"),
    top: hp("51%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%")
  },
  ImageBackground_9_23300: {
    width: wp("6%"),
    height: hp("4%"),
    top: hp("51%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%")
  },
  ImageBackground_9_23301: {
    width: wp("6%"),
    height: hp("4%"),
    top: hp("51%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%")
  },
  ImageBackground_9_23302: {
    width: wp("5%"),
    height: hp("5%"),
    top: hp("51%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%")
  },
  ImageBackground_9_23303: {
    width: wp("5%"),
    height: hp("4%"),
    top: hp("51%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%")
  },
  ImageBackground_9_23304: {
    width: wp("2%"),
    height: hp("5%"),
    top: hp("50%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%")
  },
  ImageBackground_9_23305: {
    width: wp("2%"),
    height: hp("5%"),
    top: hp("50%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59%")
  },
  ImageBackground_9_23306: {
    width: wp("5%"),
    height: hp("7%"),
    top: hp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%")
  },
  ImageBackground_9_23307: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%")
  },
  ImageBackground_9_23308: {
    width: wp("5%"),
    height: hp("7%"),
    top: hp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%")
  },
  ImageBackground_9_23309: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%")
  },
  ImageBackground_9_23310: {
    width: wp("48%"),
    height: hp("17%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_9_23311: {
    width: wp("13%"),
    height: hp("3%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59%")
  },
  ImageBackground_9_23312: {
    width: wp("25%"),
    height: hp("6%"),
    top: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  ImageBackground_9_23313: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_9_23314: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%")
  },
  ImageBackground_9_23315: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%")
  },
  ImageBackground_9_23316: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%")
  },
  ImageBackground_9_23317: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%")
  },
  ImageBackground_9_23318: {
    width: wp("12%"),
    height: hp("1%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59%")
  },
  ImageBackground_9_23319: {
    width: wp("21%"),
    height: hp("3%"),
    top: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  ImageBackground_9_23321: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59%")
  },
  ImageBackground_9_23322: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%")
  },
  ImageBackground_9_23323: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%")
  },
  ImageBackground_9_23324: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%")
  },
  ImageBackground_9_23325: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%")
  },
  ImageBackground_9_23326: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49%")
  },
  ImageBackground_9_23327: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%")
  },
  ImageBackground_9_23328: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%")
  },
  ImageBackground_9_23329: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%")
  },
  ImageBackground_9_23330: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%")
  },
  ImageBackground_9_23331: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49%")
  },
  ImageBackground_9_23332: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%")
  },
  ImageBackground_9_23333: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%")
  },
  ImageBackground_9_23334: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49%")
  },
  ImageBackground_9_23335: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%")
  },
  ImageBackground_9_23336: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%")
  },
  ImageBackground_9_23337: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%")
  },
  ImageBackground_9_23338: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%")
  },
  ImageBackground_9_23339: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%")
  },
  ImageBackground_9_23340: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%")
  },
  ImageBackground_9_23341: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%")
  },
  ImageBackground_9_23342: {
    width: wp("36%"),
    height: hp("11%"),
    top: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%")
  },
  ImageBackground_9_23344: {
    width: wp("29%"),
    height: hp("10%"),
    top: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_9_23345: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
