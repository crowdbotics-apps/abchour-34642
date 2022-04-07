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
        style={styles.ImageBackground_6_3}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3651/1024/3f7cc9ed76323de3c883d7270c2bd132"
        }}
        style={styles.ImageBackground_6_4}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/84ed/1bf9/f608aaf0213e0977ffc11eda32d9d024"
        }}
        style={styles.ImageBackground_6_5}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/13fc/444e/72c355531f0f7de00e7761e3497d6d41"
        }}
        style={styles.ImageBackground_6_6}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6627/af0c/a6101c43a6749e2d8bdf0635fee393ad"
        }}
        style={styles.ImageBackground_6_7}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/778f/cd49/9d77bdfb37f615800069f092604d8410"
        }}
        style={styles.ImageBackground_6_8}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9d65/21d6/d65c3883e5c8d957534604a262d2d58c"
        }}
        style={styles.ImageBackground_6_9}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1aab/5976/7339b6994fb9f7e96a9890725f0c7421"
        }}
        style={styles.ImageBackground_6_10}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c8ea/bb0b/74cf465798fe0579d7c25aa45488fe50"
        }}
        style={styles.ImageBackground_6_11}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d6d3/33f8/d7ec44534b9955a4b3cfe1fba0ac97e7"
        }}
        style={styles.ImageBackground_6_12}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c022/9f5c/833a726477a8637c01a2a1467e36492c"
        }}
        style={styles.ImageBackground_6_13}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b6d2/3219/4005c1c02dfe524706757b8947b78a88"
        }}
        style={styles.ImageBackground_6_14}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4afd/33ef/23eafe4076454bf97f6d9312a678c555"
        }}
        style={styles.ImageBackground_6_15}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4afd/33ef/23eafe4076454bf97f6d9312a678c555"
        }}
        style={styles.ImageBackground_6_16}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4afd/33ef/23eafe4076454bf97f6d9312a678c555"
        }}
        style={styles.ImageBackground_6_17}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4afd/33ef/23eafe4076454bf97f6d9312a678c555"
        }}
        style={styles.ImageBackground_6_18}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4afd/33ef/23eafe4076454bf97f6d9312a678c555"
        }}
        style={styles.ImageBackground_6_19}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4afd/33ef/23eafe4076454bf97f6d9312a678c555"
        }}
        style={styles.ImageBackground_6_20}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4afd/33ef/23eafe4076454bf97f6d9312a678c555"
        }}
        style={styles.ImageBackground_6_21}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4afd/33ef/23eafe4076454bf97f6d9312a678c555"
        }}
        style={styles.ImageBackground_6_22}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4afd/33ef/23eafe4076454bf97f6d9312a678c555"
        }}
        style={styles.ImageBackground_6_23}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4afd/33ef/23eafe4076454bf97f6d9312a678c555"
        }}
        style={styles.ImageBackground_6_24}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4afd/33ef/23eafe4076454bf97f6d9312a678c555"
        }}
        style={styles.ImageBackground_6_25}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4afd/33ef/23eafe4076454bf97f6d9312a678c555"
        }}
        style={styles.ImageBackground_6_26}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_6_27}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_6_28}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_6_29}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_6_30}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_6_31}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_6_32}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_6_33}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_6_34}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_6_35}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_6_36}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_6_37}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_6_38}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_6_39}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_6_40}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_6_41}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_6_42}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_6_43}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_6_44}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_6_45}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_6_46}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_6_47}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_6_48}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_6_49}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_6_50}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_6_51}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_6_52}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_6_53}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_6_54}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_6_55}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_6_56}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_6_57}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_6_58}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_6_59}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_6_60}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_6_61}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_6_62}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_6_63}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_6_64}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_6_65}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_6_66}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_6_67}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_6_68}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_6_69}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/61ef/47e6/c04dce5a38831773ea07342743f001b1"
        }}
        style={styles.ImageBackground_6_70}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_6_71}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_6_72}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_6_73}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a33/f017/457dff2abb5041410d68c63e29233ac8"
        }}
        style={styles.ImageBackground_6_74}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e522/592a/7519b414e3563b4dfed993b198f98fa6"
        }}
        style={styles.ImageBackground_6_75}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dc0e/27ee/02e2bd46e1ea9260fd24de3651545656"
        }}
        style={styles.ImageBackground_6_76}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4dc1/962c/98d16d030427828cebb365eb9856f38b"
        }}
        style={styles.ImageBackground_6_77}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b42e/0829/e2e3b753d7054ff559b4007dc612eb66"
        }}
        style={styles.ImageBackground_6_78}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/75de/60fc/c40dca7244c59a5351b96209e2b93117"
        }}
        style={styles.ImageBackground_6_79}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2e64/d2a7/a2024b01c82aa442d01c99471f406046"
        }}
        style={styles.ImageBackground_6_80}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4969/0137/ab21be56d2903ebcb8a11e33bbc5c124"
        }}
        style={styles.ImageBackground_6_81}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/20c0/47ad/57a939722f77ba672f23179ac7ba63ad"
        }}
        style={styles.ImageBackground_6_82}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bbc5/60b1/c6d23a543fc0e719f73db1b38ce0f4d7"
        }}
        style={styles.ImageBackground_6_83}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bbc5/60b1/c6d23a543fc0e719f73db1b38ce0f4d7"
        }}
        style={styles.ImageBackground_6_84}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2651/cd68/4efad446151c641652fcaa71d2c68a08"
        }}
        style={styles.ImageBackground_6_85}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3e02/2f53/b1eff4df7d615ee0955cc750ed83598d"
        }}
        style={styles.ImageBackground_6_86}
      />
      <View style={styles.View_6_87}>
        <Text style={styles.Text_6_87}>ALPHABETS </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b1d/e672/5d0f93cb82e6bb68ef4c6a8c48d224ec"
        }}
        style={styles.ImageBackground_6_122}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f76d/1738/562bf6f9d9966d9262b20b6bf8afda17"
        }}
        style={styles.ImageBackground_6_125}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b6aa/42a3/23f357391fbc4d9cf2d72767f7436440"
        }}
        style={styles.ImageBackground_6_128}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3599/08ff/c6559979c4aecc53a5b92e01eeda7a6a"
        }}
        style={styles.ImageBackground_9_1254}
      />
      <TouchableOpacity
        style={styles.TouchableOpacity_9_1258}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("9_966"))
        }
      >
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2264/3d60/f97978805969e9eb9f9eb80797274c62"
          }}
          style={styles.ImageBackground_9_1255}
        />
      </TouchableOpacity>
      <View style={styles.View_8_867}>
        <View style={styles.View_8_868}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e25c/536b/4df7b044e42c0ad4d3ea71273bda7e06"
            }}
            style={styles.ImageBackground_8_869}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e2f/ca27/b869cf9db8f2d707e1f8aa5553ed8b2d"
            }}
            style={styles.ImageBackground_8_870}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e80f/beca/2e14a2bb553dbdfa3a77c1841535f213"
            }}
            style={styles.ImageBackground_8_871}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9154/ea18/b85f11238404cba0ad5a5b1ad1df83c1"
            }}
            style={styles.ImageBackground_8_872}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cb92/ee95/fbda58100543789b1eb6858873817f27"
            }}
            style={styles.ImageBackground_8_873}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e8fe/97dc/280b07b3f70db59a0c7f38d684b46544"
            }}
            style={styles.ImageBackground_8_874}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0def/47f5/090844e2569e787d845fb99c47d891d2"
            }}
            style={styles.ImageBackground_8_875}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c764/b99c/a46816a162926773d82c4f84d2c1d8cd"
            }}
            style={styles.ImageBackground_8_876}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7a18/de38/d8be8e4dd3ea739364936c2adbfb66b2"
            }}
            style={styles.ImageBackground_8_877}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d756/0885/74d0dc06614b0b89cdf87d55970a6412"
            }}
            style={styles.ImageBackground_8_878}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f865/e723/876f5ac1bfa40486f81241bd41390e13"
            }}
            style={styles.ImageBackground_8_879}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c113/da1f/16220e47d8cb694f22784f0d90fe498b"
            }}
            style={styles.ImageBackground_8_880}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0b7f/123d/05ad31b60b616fb16f4e8d0db0b7247f"
            }}
            style={styles.ImageBackground_8_881}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dd7f/2035/3d78a6ca6ffab8b026ce4b98606c384a"
            }}
            style={styles.ImageBackground_8_882}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/caf1/0872/4a6dbee24e40dec7292ee2782ff32c4b"
            }}
            style={styles.ImageBackground_8_883}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da6d/b6b1/05e2950e3f04355abbd092615416f368"
            }}
            style={styles.ImageBackground_8_884}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1669/7f79/00a6065d2db7c1f9ae8b6af28e1bc260"
            }}
            style={styles.ImageBackground_8_885}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6e3b/3166/d5bdc2646b0579de45f99bef120aa6d1"
            }}
            style={styles.ImageBackground_8_886}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5d9d/c5a9/33a95c1a2ebc054ee6009fb540b6e705"
            }}
            style={styles.ImageBackground_8_887}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/809f/9047/77aea8c8086849eeeb6c867207f1c56b"
            }}
            style={styles.ImageBackground_8_888}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0b55/8ae8/eefc78b4ce7ac29883efb5cd511b6421"
            }}
            style={styles.ImageBackground_8_889}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9369/a731/57f6e2db63d4a5df64b853aa728ab495"
            }}
            style={styles.ImageBackground_8_890}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e866/67fd/a3166139e17a10bbcad7c38066c17ad7"
            }}
            style={styles.ImageBackground_8_891}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4dd1/8c90/834d2ffe990a473dc4e6a1e1692d888a"
            }}
            style={styles.ImageBackground_8_892}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0ac5/0ef0/68c7423d48e33e8b50beea114f9a21c8"
            }}
            style={styles.ImageBackground_8_893}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cc86/8ce5/f96c1f80ef5262bda7fdf8942007778b"
            }}
            style={styles.ImageBackground_8_894}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f3eb/8ab7/3d077ee0d14471233c578ba7ec579abe"
            }}
            style={styles.ImageBackground_8_895}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/54fe/de8e/b77b223b364456c45c2b8191dd2a68eb"
            }}
            style={styles.ImageBackground_8_896}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7657/334e/bcd6ad3ba086da20fc7e9cb27980c68d"
            }}
            style={styles.ImageBackground_8_897}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b26f/2c5c/3768e6c9846e0a84f57a71b8fa9ea21c"
            }}
            style={styles.ImageBackground_8_898}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2b7d/2f91/8bcdac6bb7f120f6355b657b45e81597"
            }}
            style={styles.ImageBackground_8_899}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ba8a/982f/9e0927d1bdd2002e7ec03122ed1e8ef5"
            }}
            style={styles.ImageBackground_8_901}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bdf2/8cf7/8c1a3eb79c8e95b2c77e00f4dee8699a"
            }}
            style={styles.ImageBackground_8_902}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eba2/5412/de2200ddb7fade2557225eab6b2fd9e8"
            }}
            style={styles.ImageBackground_8_903}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/48e2/1c48/bbd30755778920e0c2e2583ec3e562e9"
            }}
            style={styles.ImageBackground_8_904}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bba0/dd2b/e39d7ca4d09ff91ecf3acbe5e107abf7"
            }}
            style={styles.ImageBackground_8_905}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1c06/653b/e02104414efb90e61e9f22ed2c43d23c"
            }}
            style={styles.ImageBackground_8_906}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/929f/e4c4/2b683bac5cb77dd40a12c89daa7f3008"
            }}
            style={styles.ImageBackground_8_907}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9615/0dfc/5d3b020a5a6fdcd0bf74a66ece10b9cb"
            }}
            style={styles.ImageBackground_8_908}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cd31/b58d/6f6b2ae047d0c7b9d112882506c67010"
            }}
            style={styles.ImageBackground_8_909}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b28f/88e7/5c7c04da05e4741d0617bafa41cebfe8"
            }}
            style={styles.ImageBackground_8_910}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9349/dd3e/68fdde30f296543d0b7a44b4350bb34d"
            }}
            style={styles.ImageBackground_8_911}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3f61/b68e/d6bd088171468c9325922e80958f3f2b"
            }}
            style={styles.ImageBackground_8_912}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/48d5/0b1b/d3d283907c3c70da8310b59b237c69bf"
            }}
            style={styles.ImageBackground_8_913}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b7a4/0e1b/eabe9918e8f934ca1207889471461d4d"
            }}
            style={styles.ImageBackground_8_914}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/df7d/96aa/0ab7e78787e95b7150e843a45d501fcc"
            }}
            style={styles.ImageBackground_8_915}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/814d/dc5b/af5fe394f392d1278231c69d781c05ef"
            }}
            style={styles.ImageBackground_8_916}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f50f/4221/f2a9f7b24fe1e3e28b12bd493b6d7578"
            }}
            style={styles.ImageBackground_8_917}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ed32/9b1e/d4427abc1beae71f2d96445cc61c36a7"
            }}
            style={styles.ImageBackground_8_918}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/58af/e541/4667948ef84164d4fdf3ac27800242a4"
            }}
            style={styles.ImageBackground_8_919}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4586/191d/f61cb267b8689cf9533edd49ff784a62"
            }}
            style={styles.ImageBackground_8_920}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e14b/5b9c/bfcd686df8027d34ad16029e1578c884"
            }}
            style={styles.ImageBackground_8_921}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a5d5/6561/96656dbd31ff209122259e8e98349892"
            }}
            style={styles.ImageBackground_8_922}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0b58/d68f/1decc4140f5794a2583c606d9cbb6c73"
            }}
            style={styles.ImageBackground_8_923}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0af1/2f64/6d503d7976700980173c1e8e2d528e51"
            }}
            style={styles.ImageBackground_8_924}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9f15/63ca/65d3aba8e76da6dceacc595e8585843a"
            }}
            style={styles.ImageBackground_8_925}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f5f4/0a61/188a7bd485e6305f19bfc66f3e3e21cc"
            }}
            style={styles.ImageBackground_8_926}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f5f4/0a61/188a7bd485e6305f19bfc66f3e3e21cc"
            }}
            style={styles.ImageBackground_8_927}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c85c/62ee/4f055ca692c0e308caba6f718dea66cb"
            }}
            style={styles.ImageBackground_8_928}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e8f4/de92/803165206b2d2a8265923b28c7d8d866"
            }}
            style={styles.ImageBackground_8_929}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9586/9cce/2d9222ba838fe53dc5f64646998181c0"
            }}
            style={styles.ImageBackground_8_930}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9586/9cce/2d9222ba838fe53dc5f64646998181c0"
            }}
            style={styles.ImageBackground_8_931}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/982b/26de/b7e882053a0c2b21da5601325b92299d"
            }}
            style={styles.ImageBackground_8_932}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0184/4c46/a477ba017d80a5356067a90ef358581c"
            }}
            style={styles.ImageBackground_8_933}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2c1e/287c/cf3860aabac1133ecc51e95548236ded"
            }}
            style={styles.ImageBackground_8_934}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6af7/5ebf/4ff265c026d468d03c59466e7bfe26ae"
            }}
            style={styles.ImageBackground_8_935}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1540/25b0/9d5943b4d50063dbcef85053b1827be7"
            }}
            style={styles.ImageBackground_8_936}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a6ec/6533/e583045964e8b03b88e01f47fcadcbe5"
            }}
            style={styles.ImageBackground_8_937}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0813/2113/0276148fd1306f291a80655f6e9f3582"
            }}
            style={styles.ImageBackground_8_938}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e5b/3cdd/26c2a6e59c1698cf39bea3e3ff1f4a9d"
            }}
            style={styles.ImageBackground_8_939}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3b3c/8cab/f773a7268ab9195590e08dc68c5fb08b"
            }}
            style={styles.ImageBackground_8_940}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d013/675b/f7969398a49db66a4aac63b614721897"
            }}
            style={styles.ImageBackground_8_941}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3b3c/8cab/f773a7268ab9195590e08dc68c5fb08b"
            }}
            style={styles.ImageBackground_8_942}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3b3c/8cab/f773a7268ab9195590e08dc68c5fb08b"
            }}
            style={styles.ImageBackground_8_943}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c73d/3a41/e2e2ea6b35d9e4a089b4ecd9aeb22830"
            }}
            style={styles.ImageBackground_8_944}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3b3c/8cab/f773a7268ab9195590e08dc68c5fb08b"
            }}
            style={styles.ImageBackground_8_945}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3b3c/8cab/f773a7268ab9195590e08dc68c5fb08b"
            }}
            style={styles.ImageBackground_8_946}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4a16/6669/7a749e14579e4cc91f47a0dd8d267d92"
            }}
            style={styles.ImageBackground_8_947}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c4b1/855a/bd438d7ffa654424ef7b346c16929a53"
            }}
            style={styles.ImageBackground_8_948}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3b3c/8cab/f773a7268ab9195590e08dc68c5fb08b"
            }}
            style={styles.ImageBackground_8_949}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d574/a6c6/c9594080ed98b594520f423baf554fe2"
            }}
            style={styles.ImageBackground_8_950}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c215/f269/1cdfab795b673fcec83c764213998d57"
            }}
            style={styles.ImageBackground_8_951}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/475f/4fb0/2645740ae4216f1015901d299788fb36"
            }}
            style={styles.ImageBackground_8_953}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cd28/0864/12b7eafdb70d00cf070d68d93628f179"
            }}
            style={styles.ImageBackground_8_956}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4e3f/c387/b5c71fdb46d484b34514d885d7209295"
            }}
            style={styles.ImageBackground_8_957}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b8ae/6a02/b94ec321f449ca2a8b14dc31e274b768"
            }}
            style={styles.ImageBackground_8_958}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85b4/29d9/f73df34338c0b2c9929fd8a7516ca5ca"
            }}
            style={styles.ImageBackground_8_959}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b00b/3ec3/90eb084b7e815b0fc4e76e15abe80523"
            }}
            style={styles.ImageBackground_8_960}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/851a/6b8c/0ca56aaf51d272019b152d44d9ec7ccd"
            }}
            style={styles.ImageBackground_8_961}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/700c/e4a5/961d8d2ea9f3ba07ac8314dccde9a7ed"
            }}
            style={styles.ImageBackground_8_962}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c798/14b9/14392291953e6f376d0bc9c1beef060c"
            }}
            style={styles.ImageBackground_8_963}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f538/29df/5d1deeeded5f6cd255cda6b23be088b2"
            }}
            style={styles.ImageBackground_8_964}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7ac2/e8ab/8b60158b25f494d8abaf3b0c49b16fa1"
            }}
            style={styles.ImageBackground_8_965}
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 173, 238, 1)" },
  View_2: { height: hp("109%") },
  ImageBackground_6_3: {
    width: wp("91%"),
    height: hp("11%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_6_4: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_6_5: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_6_6: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_6_7: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  ImageBackground_6_8: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  ImageBackground_6_9: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  ImageBackground_6_10: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_6_11: {
    width: wp("12%"),
    height: hp("2%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_6_12: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_6_13: {
    width: wp("14%"),
    height: hp("7%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_6_14: {
    width: wp("15%"),
    height: hp("7%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_6_15: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_6_16: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_6_17: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_6_18: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%")
  },
  ImageBackground_6_19: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_6_20: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%")
  },
  ImageBackground_6_21: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_6_22: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  ImageBackground_6_23: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_6_24: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%")
  },
  ImageBackground_6_25: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_6_26: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%")
  },
  ImageBackground_6_27: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_6_28: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_6_29: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  ImageBackground_6_30: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_6_31: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  ImageBackground_6_32: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_6_33: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_6_34: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%")
  },
  ImageBackground_6_35: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_6_36: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  ImageBackground_6_37: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_6_38: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  ImageBackground_6_39: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_6_40: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%")
  },
  ImageBackground_6_41: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_6_42: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%")
  },
  ImageBackground_6_43: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_6_44: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  ImageBackground_6_45: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_6_46: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  ImageBackground_6_47: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_6_48: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  ImageBackground_6_49: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_6_50: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  ImageBackground_6_51: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_6_52: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  ImageBackground_6_53: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_6_54: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  ImageBackground_6_55: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_6_56: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  ImageBackground_6_57: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_6_58: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  ImageBackground_6_59: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_6_60: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%")
  },
  ImageBackground_6_61: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_6_62: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%")
  },
  ImageBackground_6_63: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_6_64: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  ImageBackground_6_65: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_6_66: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  ImageBackground_6_67: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_6_68: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%")
  },
  ImageBackground_6_69: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  ImageBackground_6_70: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_6_71: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  ImageBackground_6_72: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_6_73: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_6_74: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_6_75: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_6_76: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_6_77: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_6_78: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_6_79: {
    width: wp("3%"),
    height: hp("0%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_6_80: {
    width: wp("2%"),
    height: hp("0%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_6_81: {
    width: wp("2%"),
    height: hp("0%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_6_82: {
    width: wp("2%"),
    height: hp("0%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_6_83: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_6_84: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_6_85: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_6_86: {
    width: wp("7%"),
    height: hp("1%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  View_6_87: {
    width: wp("61%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    justifyContent: "flex-start"
  },
  Text_6_87: {
    color: "rgba(35, 31, 32, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_6_122: {
    width: wp("12%"),
    height: hp("6%"),
    top: hp("101%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_6_125: {
    width: wp("12%"),
    height: hp("6%"),
    top: hp("101%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%")
  },
  ImageBackground_6_128: {
    width: wp("12%"),
    height: hp("6%"),
    top: hp("101%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70%")
  },
  ImageBackground_9_1254: {
    width: wp("10%"),
    height: hp("5%"),
    top: hp("84%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%")
  },
  TouchableOpacity_9_1258: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%"),
    top: hp("84%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_9_1255: {
    width: wp("10%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_8_867: {
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
  View_8_868: {
    width: wp("86%"),
    height: hp("59%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_8_869: {
    width: wp("84%"),
    height: hp("58%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_8_870: {
    width: wp("86%"),
    height: hp("59%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_8_871: {
    width: wp("23%"),
    height: hp("15%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_8_872: {
    width: wp("13%"),
    height: hp("9%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%")
  },
  ImageBackground_8_873: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%")
  },
  ImageBackground_8_874: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_8_875: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  ImageBackground_8_876: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_8_877: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%")
  },
  ImageBackground_8_878: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_8_879: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_8_880: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%")
  },
  ImageBackground_8_881: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%")
  },
  ImageBackground_8_882: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%")
  },
  ImageBackground_8_883: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%")
  },
  ImageBackground_8_884: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_8_885: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%")
  },
  ImageBackground_8_886: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%")
  },
  ImageBackground_8_887: {
    width: wp("15%"),
    height: hp("7%"),
    top: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%")
  },
  ImageBackground_8_888: {
    width: wp("6%"),
    height: hp("7%"),
    top: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_8_889: {
    width: wp("60%"),
    height: hp("12%"),
    top: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_8_890: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_8_891: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_8_892: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_8_893: {
    width: wp("3%"),
    height: hp("4%"),
    top: hp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_8_894: {
    width: wp("10%"),
    height: hp("1%"),
    top: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%")
  },
  ImageBackground_8_895: {
    width: wp("8%"),
    height: hp("3%"),
    top: hp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%")
  },
  ImageBackground_8_896: {
    width: wp("9%"),
    height: hp("3%"),
    top: hp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%")
  },
  ImageBackground_8_897: {
    width: wp("5%"),
    height: hp("4%"),
    top: hp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%")
  },
  ImageBackground_8_898: {
    width: wp("10%"),
    height: hp("2%"),
    top: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%")
  },
  ImageBackground_8_899: {
    width: wp("60%"),
    height: hp("10%"),
    top: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_8_901: {
    width: wp("72%"),
    height: hp("11%"),
    top: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_8_902: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%")
  },
  ImageBackground_8_903: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%")
  },
  ImageBackground_8_904: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%")
  },
  ImageBackground_8_905: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72%")
  },
  ImageBackground_8_906: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70%")
  },
  ImageBackground_8_907: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%")
  },
  ImageBackground_8_908: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%")
  },
  ImageBackground_8_909: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%")
  },
  ImageBackground_8_910: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%")
  },
  ImageBackground_8_911: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%")
  },
  ImageBackground_8_912: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72%")
  },
  ImageBackground_8_913: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70%")
  },
  ImageBackground_8_914: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%")
  },
  ImageBackground_8_915: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67%")
  },
  ImageBackground_8_916: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%")
  },
  ImageBackground_8_917: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%")
  },
  ImageBackground_8_918: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%")
  },
  ImageBackground_8_919: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%")
  },
  ImageBackground_8_920: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%")
  },
  ImageBackground_8_921: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%")
  },
  ImageBackground_8_922: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%")
  },
  ImageBackground_8_923: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%")
  },
  ImageBackground_8_924: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%")
  },
  ImageBackground_8_925: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%")
  },
  ImageBackground_8_926: {
    width: wp("2%"),
    height: hp("0%"),
    top: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%")
  },
  ImageBackground_8_927: {
    width: wp("2%"),
    height: hp("0%"),
    top: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%")
  },
  ImageBackground_8_928: {
    width: wp("2%"),
    height: hp("0%"),
    top: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%")
  },
  ImageBackground_8_929: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%")
  },
  ImageBackground_8_930: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%")
  },
  ImageBackground_8_931: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%")
  },
  ImageBackground_8_932: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_8_933: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  ImageBackground_8_934: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%")
  },
  ImageBackground_8_935: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  ImageBackground_8_936: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%")
  },
  ImageBackground_8_937: {
    width: wp("12%"),
    height: hp("8%"),
    top: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%")
  },
  ImageBackground_8_938: {
    width: wp("6%"),
    height: hp("7%"),
    top: hp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_8_939: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%")
  },
  ImageBackground_8_940: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62%")
  },
  ImageBackground_8_941: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%")
  },
  ImageBackground_8_942: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%")
  },
  ImageBackground_8_943: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%")
  },
  ImageBackground_8_944: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%")
  },
  ImageBackground_8_945: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%")
  },
  ImageBackground_8_946: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%")
  },
  ImageBackground_8_947: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61%")
  },
  ImageBackground_8_948: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%")
  },
  ImageBackground_8_949: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%")
  },
  ImageBackground_8_950: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%")
  },
  ImageBackground_8_951: {
    width: wp("19%"),
    height: hp("3%"),
    top: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%")
  },
  ImageBackground_8_953: {
    width: wp("44%"),
    height: hp("7%"),
    top: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_8_956: {
    width: wp("6%"),
    height: hp("4%"),
    top: hp("50%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  ImageBackground_8_957: {
    width: wp("2%"),
    height: hp("5%"),
    top: hp("48%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%")
  },
  ImageBackground_8_958: {
    width: wp("2%"),
    height: hp("5%"),
    top: hp("48%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%")
  },
  ImageBackground_8_959: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("48%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%")
  },
  ImageBackground_8_960: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("50%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%")
  },
  ImageBackground_8_961: {
    width: wp("6%"),
    height: hp("5%"),
    top: hp("50%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%")
  },
  ImageBackground_8_962: {
    width: wp("6%"),
    height: hp("4%"),
    top: hp("50%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%")
  },
  ImageBackground_8_963: {
    width: wp("5%"),
    height: hp("4%"),
    top: hp("49%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%")
  },
  ImageBackground_8_964: {
    width: wp("6%"),
    height: hp("4%"),
    top: hp("50%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54%")
  },
  ImageBackground_8_965: {
    width: wp("5%"),
    height: hp("4%"),
    top: hp("49%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
