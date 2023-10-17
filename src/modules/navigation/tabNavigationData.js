// import Home from '../home/Home';
// import Search from '../search/Search';
// import Saved from '../saved/Saved';
// import Account from '../account/Account'
// import NavigatorView from './RootNavigation' 
// import SearchLocality from '../search/SearchLocality';

import Splash from "../Splash/Splash";
import Home from "../home/Home";


const homeIcon = require('@images/home.png');
const searchIcon = require('@images/search.png');
const groupIcon = require('@images/group.png');
const userIcon = require('@images/user.png');
// const heartIcon = require('@images/heart.png');
// const accountIcon = require('@images/account.png');




const tabNavigationData = [
  {
    name: 'Matrimony',
    component: Home,
    icon: homeIcon,
  },
  {
    name: 'Search',
    component: Home,
    icon: searchIcon,
  },
  {
    name: 'Community',
    component: Home,
    icon: groupIcon,
  },
  {
    name: 'Profile',
    component: Home,
    icon: userIcon,
  },
  // {
  //   name:"Search",
  //   component: SearchLocality,
  //   icon: searchIcon,
  // },
  // {
  //   name:"Saved",
  //   component:Saved,
  //   icon: heartIcon,
  // },
  // {
  //   name:"Account",
  //   component:Account,
  //   icon: accountIcon,
  // }
  
];

export default tabNavigationData;