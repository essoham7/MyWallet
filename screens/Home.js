import React from 'react'
import { 
    SafeAreaView,
     View,
     Text,
     Image,
     FlatList,
     TouchableOpacity
 } from 'react-native'

 import { COLORS, SIZES, FONTS, icons, Images } from '../constants';

const Home = () => {

    const featuresData = [ 
        {
            id: 1,
            icon: icons.reload,
            color: COLORS.purple,
            backgroundColor: COLORS.lightpurple,
            description: "Top Up"
        },
        {
            id: 2,
            icon: icons.send,
            color: COLORS.yellow,
            backgroundColor: COLORS.lightyellow,
            description: "Transfer"
        },
        {
            id: 3,
            icon: icons.internet,
            color: COLORS.primary,
            backgroundColor: COLORS.lightGreen,
            description: "Internet"
        },
        {
            id: 4,
            icon: icons.wallet,
            color: COLORS.red,
            backgroundColor: COLORS.lightRed,
            description: "Wallet"
        },
        {
            id: 5,
            icon: icons.bill,
            color: COLORS.yellow,
            backgroundColor: COLORS.lightyellow,
            description: "Bill"
        },
        {
            id: 6,
            icon: icons.game,
            color: COLORS.primary,
            backgroundColor: COLORS.lightGreen,
            description: "Games"
        },
        {
            id: 7,
            icon: icons.phone,
            color: COLORS.red,
            backgroundColor: COLORS.lightRed,
            description: "Mobile Prepaid"
        },
        {
            id: 8,
            icon: icons.more,
            color: COLORS.purple,
            backgroundColor: COLORS.lightpurple,
            description: "More"
        },
    ]

    const specialPromoData = [
        {
            id: 1,
            img: Images.promoBanner,
            title: "Bonus Cashback1",
            description: "Don't miss it. Grab it now!"
        },
        {
            id: 2,
            img: Images.promoBanner,
            title: "Bonus Cashback2",
            description: "Don't miss it. Grab it now!"
        },
        {
            id: 3,
            img: Images.promoBanner,
            title: "Bonus Cashback3",
            description: "Don't miss it. Grab it now!"
        },
        {
            id: 4,
            img: Images.promoBanner,
            title: "Bonus Cashback4",
            description: "Don't miss it. Grab it now!"
        },
    ]

    const [ features, setFeatures] = React.useState(featuresData)
    const [ specialPromos, setSpecialPromos] = React.useState(specialPromoData)

    function renderPromos() {

        const renderItem = ({item}) => (
            <TouchableOpacity
                   style={{
                       marginVertical: SIZES.base,
                       width: SIZES.width / 2.5
                   }}
                      onPress={() => console.log(item.title)}>

                      <View 
                         style={{
                            height: 80,
                            borderTopLeftRadius: 20,
                            borderTopRightRadius: 20,
                            backgroundColor: COLORS.primary 
                         }}>
                             <Image source={Images.promoBanner}
                                    resizeMode='cover'
                                    style={{
                                         width: "100%",
                                         height: "100%",
                                         borderTopLeftRadius: 20,
                                         borderBottomRightRadius: 20
                                    }}  
                                    />
                         </View>

            </TouchableOpacity>
        )
        return(
            <FlatList
                 contentContainerStyle={{ paddingHorizontal: SIZES.padding * 3}}
                 numColumns={2}
                 columnWrapperStyle={{justifyContent: 'space-between'}}
                 data={specialPromos}
                 keyExtractor={item => `${item.id}` }
                 renderItem={renderItem}
                 showsHorizontalScrollIndicator={false}
                 />
        )
    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
                {renderPromos()}
        </SafeAreaView>
    )
};

export default Home;
