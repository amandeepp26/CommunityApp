import { colors, fonts } from '../../styles';
import TabNavigator from './MainTabNavigator';
import MatrimonyRegistration from '../Matrimony/Registration/MatrimonyRegistration';
import Pricing from '../Matrimony/Pricing';
import Search from '../Matrimony/Search';
import MatrimonySearch from '../Matrimony/Search';
import MatrimonyListing from '../Matrimony/MatrimonyListing';
import ChatList from '../Matrimony/chat/ChatList';
import ChatBox from '../Matrimony/chat/ChatBox';
import ProfileDetail from '../Matrimony/ProfileDetail';

// const headerLeftComponent = (props) => {
//   return (
//     <TouchableOpacity
//       onPress={props.onPress}
//       style={{
//         paddingHorizontal: 16,
//         paddingVertical: 12,
//       }}
//     >
//       <Image
//         source={require('../../../assets/images/settings.png')}
//         resizeMode="contain"
//         style={{
//           width: 22,
//           height: 22,
//           tintColor: '#1F1F1F',
//         }}
//       />
//     </TouchableOpacity>
//   )
// }

const logo = require('@images/logoIcon.png')

const StackNavigationData = [
  {
    name: 'Home',
    component: TabNavigator,
    headerLeft: null,
    headerBackground: { source: logo },
    headerTitleStyle: {
      fontFamily: fonts.primaryRegular,
      color: colors.white,
      fontSize: 18,
    },
  },
  {
    name:"MatrimonySubscription",
    component: MatrimonyRegistration
  },
  {
    name:'Pricing',
    component:Pricing
  },
  {
    name:'MatrimonySearch',
    component:MatrimonySearch
  },
  {
    name:'MatrimonyListing',
    component:MatrimonyListing
  },
  {
    name:'ChatList',
    component:ChatList
  },
  {
    name:'ChatBox',
    component:ChatBox
  },
  {
    name:'ProfileDetail',
    component:ProfileDetail
  }
]

export default StackNavigationData;
