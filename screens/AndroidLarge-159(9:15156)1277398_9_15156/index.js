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
        style={styles.ImageBackground_9_15157}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3651/1024/3f7cc9ed76323de3c883d7270c2bd132"
        }}
        style={styles.ImageBackground_9_15158}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f724/3fd6/d1d43c4bc9afa7a46b875f3b62447e19"
        }}
        style={styles.ImageBackground_9_15159}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/13fc/444e/72c355531f0f7de00e7761e3497d6d41"
        }}
        style={styles.ImageBackground_9_15160}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6627/af0c/a6101c43a6749e2d8bdf0635fee393ad"
        }}
        style={styles.ImageBackground_9_15161}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/778f/cd49/9d77bdfb37f615800069f092604d8410"
        }}
        style={styles.ImageBackground_9_15162}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9d65/21d6/d65c3883e5c8d957534604a262d2d58c"
        }}
        style={styles.ImageBackground_9_15163}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1aab/5976/7339b6994fb9f7e96a9890725f0c7421"
        }}
        style={styles.ImageBackground_9_15164}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c8ea/bb0b/74cf465798fe0579d7c25aa45488fe50"
        }}
        style={styles.ImageBackground_9_15165}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d6d3/33f8/d7ec44534b9955a4b3cfe1fba0ac97e7"
        }}
        style={styles.ImageBackground_9_15166}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c022/9f5c/833a726477a8637c01a2a1467e36492c"
        }}
        style={styles.ImageBackground_9_15167}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b6d2/3219/4005c1c02dfe524706757b8947b78a88"
        }}
        style={styles.ImageBackground_9_15168}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4afd/33ef/23eafe4076454bf97f6d9312a678c555"
        }}
        style={styles.ImageBackground_9_15169}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4afd/33ef/23eafe4076454bf97f6d9312a678c555"
        }}
        style={styles.ImageBackground_9_15170}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4afd/33ef/23eafe4076454bf97f6d9312a678c555"
        }}
        style={styles.ImageBackground_9_15171}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4afd/33ef/23eafe4076454bf97f6d9312a678c555"
        }}
        style={styles.ImageBackground_9_15172}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4afd/33ef/23eafe4076454bf97f6d9312a678c555"
        }}
        style={styles.ImageBackground_9_15173}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4afd/33ef/23eafe4076454bf97f6d9312a678c555"
        }}
        style={styles.ImageBackground_9_15174}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4afd/33ef/23eafe4076454bf97f6d9312a678c555"
        }}
        style={styles.ImageBackground_9_15175}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4afd/33ef/23eafe4076454bf97f6d9312a678c555"
        }}
        style={styles.ImageBackground_9_15176}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4afd/33ef/23eafe4076454bf97f6d9312a678c555"
        }}
        style={styles.ImageBackground_9_15177}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4afd/33ef/23eafe4076454bf97f6d9312a678c555"
        }}
        style={styles.ImageBackground_9_15178}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4afd/33ef/23eafe4076454bf97f6d9312a678c555"
        }}
        style={styles.ImageBackground_9_15179}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4afd/33ef/23eafe4076454bf97f6d9312a678c555"
        }}
        style={styles.ImageBackground_9_15180}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_15181}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_15182}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_15183}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_15184}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_15185}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_15186}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_15187}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_15188}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_15189}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_15190}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_15191}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_15192}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_15193}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_15194}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_15195}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_15196}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_15197}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_15198}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_15199}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_15200}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_15201}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_15202}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_15203}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_15204}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_15205}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_15206}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_15207}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_15208}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_15209}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_15210}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_15211}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_15212}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_15213}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_15214}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_15215}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_15216}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_15217}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_15218}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_15219}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_15220}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_15221}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_15222}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_15223}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/61ef/47e6/c04dce5a38831773ea07342743f001b1"
        }}
        style={styles.ImageBackground_9_15224}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_15225}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_15226}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_15227}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_9_15228}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e522/592a/7519b414e3563b4dfed993b198f98fa6"
        }}
        style={styles.ImageBackground_9_15229}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dc0e/27ee/02e2bd46e1ea9260fd24de3651545656"
        }}
        style={styles.ImageBackground_9_15230}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4dc1/962c/98d16d030427828cebb365eb9856f38b"
        }}
        style={styles.ImageBackground_9_15231}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b42e/0829/e2e3b753d7054ff559b4007dc612eb66"
        }}
        style={styles.ImageBackground_9_15232}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/75de/60fc/c40dca7244c59a5351b96209e2b93117"
        }}
        style={styles.ImageBackground_9_15233}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2e64/d2a7/a2024b01c82aa442d01c99471f406046"
        }}
        style={styles.ImageBackground_9_15234}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4969/0137/ab21be56d2903ebcb8a11e33bbc5c124"
        }}
        style={styles.ImageBackground_9_15235}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/20c0/47ad/57a939722f77ba672f23179ac7ba63ad"
        }}
        style={styles.ImageBackground_9_15236}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bbc5/60b1/c6d23a543fc0e719f73db1b38ce0f4d7"
        }}
        style={styles.ImageBackground_9_15237}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bbc5/60b1/c6d23a543fc0e719f73db1b38ce0f4d7"
        }}
        style={styles.ImageBackground_9_15238}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2651/cd68/4efad446151c641652fcaa71d2c68a08"
        }}
        style={styles.ImageBackground_9_15239}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3e02/2f53/b1eff4df7d615ee0955cc750ed83598d"
        }}
        style={styles.ImageBackground_9_15240}
      />
      <View style={styles.View_9_15241}>
        <Text style={styles.Text_9_15241}>ALPHABETS </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b1d/e672/5d0f93cb82e6bb68ef4c6a8c48d224ec"
        }}
        style={styles.ImageBackground_9_15242}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f76d/1738/562bf6f9d9966d9262b20b6bf8afda17"
        }}
        style={styles.ImageBackground_9_15245}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b6aa/42a3/23f357391fbc4d9cf2d72767f7436440"
        }}
        style={styles.ImageBackground_9_15248}
      />
      <TouchableOpacity
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3599/08ff/c6559979c4aecc53a5b92e01eeda7a6a"
        }}
        style={styles.TouchableOpacity_9_15252}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("9_15347"))
        }
      />
      <TouchableOpacity
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2264/3d60/f97978805969e9eb9f9eb80797274c62"
        }}
        style={styles.TouchableOpacity_9_15256}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("9_14774"))
        }
      />
      <View style={styles.View_9_22639}>
        <View style={styles.View_9_22640}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e829/05f0/d88241fc5e73d3676211fe5ea40e3d22"
            }}
            style={styles.ImageBackground_9_22641}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ecf8/d131/6eaaccf991abe2c410b02e7d9de0b5bd"
            }}
            style={styles.ImageBackground_9_22642}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/22a4/7cdf/d9892b4ac9d20141e58a1a5ed4fa3eda"
            }}
            style={styles.ImageBackground_9_22643}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2f1a/475a/0b9a0cb12c298787a3c089d8332ea024"
            }}
            style={styles.ImageBackground_9_22644}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f68d/026d/95a14e7841ce691a26975eb654fd6213"
            }}
            style={styles.ImageBackground_9_22645}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/953c/e79a/19e47bef366fe80204a315ff298b0095"
            }}
            style={styles.ImageBackground_9_22646}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f5a6/1c78/313ff43acf8bc9aa70727259c5321b7e"
            }}
            style={styles.ImageBackground_9_22647}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/83c0/c1be/2b0629662ad2b8b01449f2600fe5a6a8"
            }}
            style={styles.ImageBackground_9_22648}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad92/661d/547fb568e9a705a885543fe579d89476"
            }}
            style={styles.ImageBackground_9_22649}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2172/84f0/75790289a234a267f45e308aa73f572c"
            }}
            style={styles.ImageBackground_9_22650}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/27d4/2f9d/2d7e34726eac5363131bc8c7425240cc"
            }}
            style={styles.ImageBackground_9_22651}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4442/9620/fa860e18ee16a06573ee09e3a4cbce4f"
            }}
            style={styles.ImageBackground_9_22653}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4cec/483e/91635a5a928334ecd8cc079e16f69a5f"
            }}
            style={styles.ImageBackground_9_22654}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8af2/4bd3/89d5db2d8c5839e7e919fac4e391e8d1"
            }}
            style={styles.ImageBackground_9_22656}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3b07/5df2/dd43c21f00bfd2d8b712166d53526a2a"
            }}
            style={styles.ImageBackground_9_22658}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cd84/5061/c7aeb0c4ef60ca192d3ec85631982315"
            }}
            style={styles.ImageBackground_9_22659}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e61b/e77a/e1fdb152c33fe0635538bb5c75c29f0c"
            }}
            style={styles.ImageBackground_9_22660}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0df7/bdbd/df733449c4357db4e8a74ad1632ef31d"
            }}
            style={styles.ImageBackground_9_22661}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c3c6/65fe/61a909e25af56120b2c91aec6dd96240"
            }}
            style={styles.ImageBackground_9_22662}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f084/f204/20c10da7005d7262ae8a2b4715cd483b"
            }}
            style={styles.ImageBackground_9_22663}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1873/360e/b55954b8797b78e99a82711e9c04c558"
            }}
            style={styles.ImageBackground_9_22664}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1092/2ec1/5e39569de5952a404bc38d64ed018108"
            }}
            style={styles.ImageBackground_9_22665}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d056/cb29/6350368763e2689b09e34e471750ca5e"
            }}
            style={styles.ImageBackground_9_22666}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dd02/8a65/ffba7346d4d9006855e3e16cde4abfa0"
            }}
            style={styles.ImageBackground_9_22667}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/be05/2acb/050b6a0ed586b8ad11069f42f7532b5b"
            }}
            style={styles.ImageBackground_9_22668}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/293b/faab/bb15e5653a48ddfb64ce87a4328cde0f"
            }}
            style={styles.ImageBackground_9_22669}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5e27/5c24/4f8820bf479f0362373cba371c27ddeb"
            }}
            style={styles.ImageBackground_9_22670}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cd68/09c1/2fa4d4eb60eec14ba5b52e0c4bfb441b"
            }}
            style={styles.ImageBackground_9_22671}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c562/ed26/26f217a62b4f74f60e23ff1e16961525"
            }}
            style={styles.ImageBackground_9_22672}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/db47/1ca0/8cf55870c1db9732aff548267ddeccc5"
            }}
            style={styles.ImageBackground_9_22673}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c708/d2ac/8346870a40654f0f13f3e9f893194ded"
            }}
            style={styles.ImageBackground_9_22674}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b747/7013/4b22c330fc2526476331fe5f8c81a767"
            }}
            style={styles.ImageBackground_9_22675}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bb2a/0558/6576cc4e5124316789d853ebe8075333"
            }}
            style={styles.ImageBackground_9_22676}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7fe4/7382/5f98894db115365086fdd3ed2b1ac699"
            }}
            style={styles.ImageBackground_9_22677}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/49d3/232f/24a20197c3b0f4d647bd30d7b6cdbe18"
            }}
            style={styles.ImageBackground_9_22678}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b48e/ed53/4d6c42df8503d6180c1b878c80fbd06b"
            }}
            style={styles.ImageBackground_9_22679}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/451f/2606/52f417d76172eb1aae6f13fa3c69b27b"
            }}
            style={styles.ImageBackground_9_22680}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aee3/8a85/823f6528604bddcf4184661659aed8ba"
            }}
            style={styles.ImageBackground_9_22681}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3b0f/47bc/f780f3b5b35fd005e1fcd5e946621050"
            }}
            style={styles.ImageBackground_9_22682}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9d85/4530/88ab6ede9d2986a273c3de50ee8a4ad2"
            }}
            style={styles.ImageBackground_9_22683}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fda0/1f4b/0df8cf9ad1ca324293051f8f33f7ccf8"
            }}
            style={styles.ImageBackground_9_22684}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/398d/2a04/cf5a0354937546d4e88ca1d17195fe0e"
            }}
            style={styles.ImageBackground_9_22685}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c233/9329/ef4bb4556408445874ebfe1194cedf2b"
            }}
            style={styles.ImageBackground_9_22686}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1c87/ad39/e999323b05d2d2d2dbdedfc7d88f5818"
            }}
            style={styles.ImageBackground_9_22687}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d5b0/6413/cbe7b2f212f4d67eb0feecccfce62af8"
            }}
            style={styles.ImageBackground_9_22688}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b817/af73/b3b8d3ef6512c5098b339bcd6c852cd9"
            }}
            style={styles.ImageBackground_9_22689}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7f17/482a/204c30b709724a46e47025e1f96500de"
            }}
            style={styles.ImageBackground_9_22690}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eb76/fa3c/bd15d520d8c16dd7dacb1c29a4b55e1f"
            }}
            style={styles.ImageBackground_9_22691}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/081a/b736/52c13b9b62aa4dbfe7b1ecfd2f3d1ab6"
            }}
            style={styles.ImageBackground_9_22692}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aebc/c776/1bc95384da45a81311aae1c33e6a6b68"
            }}
            style={styles.ImageBackground_9_22694}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9316/41c1/45a44e63309bc53269c158b59b33500b"
            }}
            style={styles.ImageBackground_9_22696}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c772/ef0d/186dc5f413ec0899255c7fa21d8f07a8"
            }}
            style={styles.ImageBackground_9_22697}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/385f/2314/7b1ff7a55750f0ec4d464a2d3dca49ad"
            }}
            style={styles.ImageBackground_9_22698}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4cf8/9af1/94bfc446adcd74e813aa5aba89d6d382"
            }}
            style={styles.ImageBackground_9_22699}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/af7b/0846/a976e2150a64a1f9799c7f4203423693"
            }}
            style={styles.ImageBackground_9_22700}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/06d3/4e92/510f6b8277790b756bfa1abbaee56009"
            }}
            style={styles.ImageBackground_9_22701}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/06d3/4e92/510f6b8277790b756bfa1abbaee56009"
            }}
            style={styles.ImageBackground_9_22702}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e068/2af8/b7cb12b52d4b70f9b325fb43bae84c38"
            }}
            style={styles.ImageBackground_9_22703}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/06d3/4e92/510f6b8277790b756bfa1abbaee56009"
            }}
            style={styles.ImageBackground_9_22704}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/06d3/4e92/510f6b8277790b756bfa1abbaee56009"
            }}
            style={styles.ImageBackground_9_22705}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/06d3/4e92/510f6b8277790b756bfa1abbaee56009"
            }}
            style={styles.ImageBackground_9_22706}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa5d/d5cb/65c8bc4a7e8e634d1ba1c82760f4e6f5"
            }}
            style={styles.ImageBackground_9_22707}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d23e/6b33/03707af4aa9f12e07a772ec9e1260436"
            }}
            style={styles.ImageBackground_9_22709}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4d91/c34a/ee403c64522e73c9d9a81050983b2b03"
            }}
            style={styles.ImageBackground_9_22710}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f582/9173/2e8a4ec7d6ebee8d1c2b73ac4787e27c"
            }}
            style={styles.ImageBackground_9_22711}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7e58/fb43/a45255a0de4cb2eaace18882d730a9c6"
            }}
            style={styles.ImageBackground_9_22712}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8e23/3311/025c2f81af6dd70b4ecccac017a718b4"
            }}
            style={styles.ImageBackground_9_22713}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8fd9/41e2/70a2f849994b946285a67e02c722b56a"
            }}
            style={styles.ImageBackground_9_22714}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4b41/9065/09e8acaf69474fd587fd5740144d09e4"
            }}
            style={styles.ImageBackground_9_22715}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a1b1/be10/99b4b41e6d86cb057e61f82eef1c5c35"
            }}
            style={styles.ImageBackground_9_22716}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3e57/da9e/98b37cb23b87cc961506eb5e5fa86827"
            }}
            style={styles.ImageBackground_9_22717}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/196c/c2cc/3a20cd119ba49f8002bfa7c803c00e81"
            }}
            style={styles.ImageBackground_9_22718}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fb87/6f6d/6e8cb2ac97280892eec182e295f2efc6"
            }}
            style={styles.ImageBackground_9_22719}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/13e0/038b/70b0b7316674a0848e07c52a5dcfa50a"
            }}
            style={styles.ImageBackground_9_22720}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9092/0733/abc4a1569ac0511cc52862fa39bf45fe"
            }}
            style={styles.ImageBackground_9_22721}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e8c/36c8/7b8727e4ae5176c9cda940ea2f8e9d4f"
            }}
            style={styles.ImageBackground_9_22722}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/59aa/c8fc/078f35eb95e0802cb0bba0c5865dbb9f"
            }}
            style={styles.ImageBackground_9_22723}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2aae/7672/c332ba5135582aadef00f1ab99bf18b4"
            }}
            style={styles.ImageBackground_9_22724}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5217/dc97/114a6736fbd763964fafa04cc2fd8a2a"
            }}
            style={styles.ImageBackground_9_22725}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4b8a/4fc1/90c97be6e5230727ff8c66ac099ee508"
            }}
            style={styles.ImageBackground_9_22726}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/23ff/789c/60af48c27391f804ed08c9e1ec61ecae"
            }}
            style={styles.ImageBackground_9_22727}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7b94/50cb/f3fe06125474ebea23c855cd63cb9127"
            }}
            style={styles.ImageBackground_9_22728}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ce28/47a1/cb4cab3a0779a3a992a455275d564d4f"
            }}
            style={styles.ImageBackground_9_22730}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d45d/d37f/5c7d5f6a409c99e587d272c6d3c5684f"
            }}
            style={styles.ImageBackground_9_22731}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a065/4746/9101a69a104243a23f8092ef9af27b1d"
            }}
            style={styles.ImageBackground_9_22732}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2dc5/6219/bf24f42d436f39e427a1b5c499bd3eb7"
            }}
            style={styles.ImageBackground_9_22734}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3a5d/7b85/d6a3487f394dd60ed30dc06424ac4bd0"
            }}
            style={styles.ImageBackground_9_22736}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/89d0/438e/32f8a8d4984336bf7a666109ecfa7dda"
            }}
            style={styles.ImageBackground_9_22737}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8f46/3516/d8b232faa5c35bc081de070985174466"
            }}
            style={styles.ImageBackground_9_22739}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c4ed/db22/d9d270b3695a8875ec6d9002656aabea"
            }}
            style={styles.ImageBackground_9_22741}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/78ca/5b32/381a40b086399943ea0ee4434cb81316"
            }}
            style={styles.ImageBackground_9_22743}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fe99/3c51/68463be317a2888068d385910b5e1cc5"
            }}
            style={styles.ImageBackground_9_22745}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8ea0/5033/42f9370463e8fc6abc713ee4db2aaa14"
            }}
            style={styles.ImageBackground_9_22746}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/31a0/efe1/382f5c4b5a984775f4769da894156c5f"
            }}
            style={styles.ImageBackground_9_22747}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c1f2/bd67/335147dfac17fe2760cb45deab63e0cf"
            }}
            style={styles.ImageBackground_9_22748}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0fd6/0f04/97574dffa12817e1a53653f816582b95"
            }}
            style={styles.ImageBackground_9_22749}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/40cf/e9a1/c8cdf0f9202aaf556cb4f820e520eda1"
            }}
            style={styles.ImageBackground_9_22750}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c658/f8c4/bbc1220045ef255c3d7f00c49d1d6375"
            }}
            style={styles.ImageBackground_9_22751}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/01d9/c4f6/65fcf52ca8d990fcf247fe1a4a580217"
            }}
            style={styles.ImageBackground_9_22752}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c725/bd41/3b71eaf8baf0da1594b15475f4d5da6d"
            }}
            style={styles.ImageBackground_9_22753}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1466/dc39/a625bf0e3c7aff0ae7e3e1010844d311"
            }}
            style={styles.ImageBackground_9_22754}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/48df/125c/61bc1e7bd1b80af7cd60e2f430eb167b"
            }}
            style={styles.ImageBackground_9_22755}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8f9e/ecbb/67feb2957b28bd5dd17f2d3783744f04"
            }}
            style={styles.ImageBackground_9_22756}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9dd4/f531/48646032e17ba4a91a490b793275536b"
            }}
            style={styles.ImageBackground_9_22758}
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 173, 238, 1)" },
  View_2: { height: hp("109%") },
  ImageBackground_9_15157: {
    width: wp("91%"),
    height: hp("11%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_9_15158: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_9_15159: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_9_15160: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_9_15161: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  ImageBackground_9_15162: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  ImageBackground_9_15163: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  ImageBackground_9_15164: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_9_15165: {
    width: wp("12%"),
    height: hp("2%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_9_15166: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_9_15167: {
    width: wp("14%"),
    height: hp("7%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_9_15168: {
    width: wp("15%"),
    height: hp("7%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_9_15169: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_9_15170: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_9_15171: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_9_15172: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%")
  },
  ImageBackground_9_15173: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_9_15174: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%")
  },
  ImageBackground_9_15175: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_9_15176: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  ImageBackground_9_15177: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_9_15178: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%")
  },
  ImageBackground_9_15179: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_9_15180: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%")
  },
  ImageBackground_9_15181: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_9_15182: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_9_15183: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  ImageBackground_9_15184: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_9_15185: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  ImageBackground_9_15186: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_9_15187: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_9_15188: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%")
  },
  ImageBackground_9_15189: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_9_15190: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  ImageBackground_9_15191: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_9_15192: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  ImageBackground_9_15193: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_9_15194: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%")
  },
  ImageBackground_9_15195: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_9_15196: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%")
  },
  ImageBackground_9_15197: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_9_15198: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  ImageBackground_9_15199: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_9_15200: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  ImageBackground_9_15201: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_9_15202: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  ImageBackground_9_15203: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_9_15204: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  ImageBackground_9_15205: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_9_15206: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  ImageBackground_9_15207: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_9_15208: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  ImageBackground_9_15209: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_9_15210: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  ImageBackground_9_15211: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_9_15212: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  ImageBackground_9_15213: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_9_15214: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%")
  },
  ImageBackground_9_15215: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_9_15216: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%")
  },
  ImageBackground_9_15217: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_9_15218: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  ImageBackground_9_15219: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_9_15220: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  ImageBackground_9_15221: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_9_15222: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%")
  },
  ImageBackground_9_15223: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  ImageBackground_9_15224: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_9_15225: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  ImageBackground_9_15226: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_9_15227: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_9_15228: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_9_15229: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_9_15230: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_9_15231: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_9_15232: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_9_15233: {
    width: wp("3%"),
    height: hp("0%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_9_15234: {
    width: wp("2%"),
    height: hp("0%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_9_15235: {
    width: wp("2%"),
    height: hp("0%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_9_15236: {
    width: wp("2%"),
    height: hp("0%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_9_15237: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_9_15238: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_9_15239: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_9_15240: {
    width: wp("7%"),
    height: hp("1%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  View_9_15241: {
    width: wp("61%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    justifyContent: "flex-start"
  },
  Text_9_15241: {
    color: "rgba(35, 31, 32, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_9_15242: {
    width: wp("12%"),
    height: hp("6%"),
    top: hp("101%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_9_15245: {
    width: wp("12%"),
    height: hp("6%"),
    top: hp("101%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%")
  },
  ImageBackground_9_15248: {
    width: wp("12%"),
    height: hp("6%"),
    top: hp("101%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70%")
  },
  TouchableOpacity_9_15252: {
    width: wp("10%"),
    height: hp("5%"),
    top: hp("84%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%")
  },
  TouchableOpacity_9_15256: {
    width: wp("10%"),
    height: hp("5%"),
    top: hp("84%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%")
  },
  View_9_22639: {
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
  View_9_22640: {
    width: wp("86%"),
    height: hp("59%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_22641: {
    width: wp("84%"),
    height: hp("58%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_9_22642: {
    width: wp("86%"),
    height: hp("59%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_22643: {
    width: wp("17%"),
    height: hp("15%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_9_22644: {
    width: wp("5%"),
    height: hp("13%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%")
  },
  ImageBackground_9_22645: {
    width: wp("2%"),
    height: hp("5%"),
    top: hp("50%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%")
  },
  ImageBackground_9_22646: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("50%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%")
  },
  ImageBackground_9_22647: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("51%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%")
  },
  ImageBackground_9_22648: {
    width: wp("6%"),
    height: hp("4%"),
    top: hp("51%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%")
  },
  ImageBackground_9_22649: {
    width: wp("5%"),
    height: hp("4%"),
    top: hp("51%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%")
  },
  ImageBackground_9_22650: {
    width: wp("62%"),
    height: hp("14%"),
    top: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_9_22651: {
    width: wp("29%"),
    height: hp("10%"),
    top: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%")
  },
  ImageBackground_9_22653: {
    width: wp("41%"),
    height: hp("19%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%")
  },
  ImageBackground_9_22654: {
    width: wp("25%"),
    height: hp("2%"),
    top: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_9_22656: {
    width: wp("26%"),
    height: hp("4%"),
    top: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%")
  },
  ImageBackground_9_22658: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62%")
  },
  ImageBackground_9_22659: {
    width: wp("1%"),
    height: hp("4%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%")
  },
  ImageBackground_9_22660: {
    width: wp("4%"),
    height: hp("3%"),
    top: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%")
  },
  ImageBackground_9_22661: {
    width: wp("6%"),
    height: hp("1%"),
    top: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%")
  },
  ImageBackground_9_22662: {
    width: wp("8%"),
    height: hp("1%"),
    top: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%")
  },
  ImageBackground_9_22663: {
    width: wp("6%"),
    height: hp("1%"),
    top: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%")
  },
  ImageBackground_9_22664: {
    width: wp("6%"),
    height: hp("0%"),
    top: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70%")
  },
  ImageBackground_9_22665: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71%")
  },
  ImageBackground_9_22666: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71%")
  },
  ImageBackground_9_22667: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%")
  },
  ImageBackground_9_22668: {
    width: wp("4%"),
    height: hp("3%"),
    top: hp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%")
  },
  ImageBackground_9_22669: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%")
  },
  ImageBackground_9_22670: {
    width: wp("0%"),
    height: hp("2%"),
    top: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%")
  },
  ImageBackground_9_22671: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%")
  },
  ImageBackground_9_22672: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%")
  },
  ImageBackground_9_22673: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%")
  },
  ImageBackground_9_22674: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%")
  },
  ImageBackground_9_22675: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%")
  },
  ImageBackground_9_22676: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%")
  },
  ImageBackground_9_22677: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64%")
  },
  ImageBackground_9_22678: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49%")
  },
  ImageBackground_9_22679: {
    width: wp("28%"),
    height: hp("10%"),
    top: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%")
  },
  ImageBackground_9_22680: {
    width: wp("13%"),
    height: hp("5%"),
    top: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%")
  },
  ImageBackground_9_22681: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67%")
  },
  ImageBackground_9_22682: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%")
  },
  ImageBackground_9_22683: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62%")
  },
  ImageBackground_9_22684: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%")
  },
  ImageBackground_9_22685: {
    width: wp("7%"),
    height: hp("5%"),
    top: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%")
  },
  ImageBackground_9_22686: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%")
  },
  ImageBackground_9_22687: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%")
  },
  ImageBackground_9_22688: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%")
  },
  ImageBackground_9_22689: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%")
  },
  ImageBackground_9_22690: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%")
  },
  ImageBackground_9_22691: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%")
  },
  ImageBackground_9_22692: {
    width: wp("27%"),
    height: hp("9%"),
    top: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_9_22694: {
    width: wp("8%"),
    height: hp("2%"),
    top: hp("41%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%")
  },
  ImageBackground_9_22696: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%")
  },
  ImageBackground_9_22697: {
    width: wp("6%"),
    height: hp("1%"),
    top: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%")
  },
  ImageBackground_9_22698: {
    width: wp("7%"),
    height: hp("1%"),
    top: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%")
  },
  ImageBackground_9_22699: {
    width: wp("4%"),
    height: hp("0%"),
    top: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%")
  },
  ImageBackground_9_22700: {
    width: wp("28%"),
    height: hp("10%"),
    top: hp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_9_22701: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%")
  },
  ImageBackground_9_22702: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61%")
  },
  ImageBackground_9_22703: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61%")
  },
  ImageBackground_9_22704: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%")
  },
  ImageBackground_9_22705: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%")
  },
  ImageBackground_9_22706: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%")
  },
  ImageBackground_9_22707: {
    width: wp("20%"),
    height: hp("3%"),
    top: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49%")
  },
  ImageBackground_9_22709: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61%")
  },
  ImageBackground_9_22710: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%")
  },
  ImageBackground_9_22711: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59%")
  },
  ImageBackground_9_22712: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59%")
  },
  ImageBackground_9_22713: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%")
  },
  ImageBackground_9_22714: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%")
  },
  ImageBackground_9_22715: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%")
  },
  ImageBackground_9_22716: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%")
  },
  ImageBackground_9_22717: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%")
  },
  ImageBackground_9_22718: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%")
  },
  ImageBackground_9_22719: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59%")
  },
  ImageBackground_9_22720: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61%")
  },
  ImageBackground_9_22721: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%")
  },
  ImageBackground_9_22722: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%")
  },
  ImageBackground_9_22723: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%")
  },
  ImageBackground_9_22724: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59%")
  },
  ImageBackground_9_22725: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%")
  },
  ImageBackground_9_22726: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%")
  },
  ImageBackground_9_22727: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59%")
  },
  ImageBackground_9_22728: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67%")
  },
  ImageBackground_9_22730: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%")
  },
  ImageBackground_9_22731: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%")
  },
  ImageBackground_9_22732: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%")
  },
  ImageBackground_9_22734: {
    width: wp("14%"),
    height: hp("4%"),
    top: hp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%")
  },
  ImageBackground_9_22736: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%")
  },
  ImageBackground_9_22737: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("45%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%")
  },
  ImageBackground_9_22739: {
    width: wp("20%"),
    height: hp("9%"),
    top: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_9_22741: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("45%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%")
  },
  ImageBackground_9_22743: {
    width: wp("19%"),
    height: hp("7%"),
    top: hp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%")
  },
  ImageBackground_9_22745: {
    width: wp("2%"),
    height: hp("0%"),
    top: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%")
  },
  ImageBackground_9_22746: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%")
  },
  ImageBackground_9_22747: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_9_22748: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  ImageBackground_9_22749: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_9_22750: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%")
  },
  ImageBackground_9_22751: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_9_22752: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_9_22753: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_9_22754: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_9_22755: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%")
  },
  ImageBackground_9_22756: {
    width: wp("10%"),
    height: hp("4%"),
    top: hp("41%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61%")
  },
  ImageBackground_9_22758: {
    width: wp("19%"),
    height: hp("10%"),
    top: hp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
