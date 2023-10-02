// import Home from '../home/Home';
// import Search from '../search/Search';
// import Saved from '../saved/Saved';
// import Account from '../account/Account'
// import NavigatorView from './RootNavigation' 
// import SearchLocality from '../search/SearchLocality';

import Splash from "../Splash/Splash";


const homeIcon = require('@images/logoIcon.png');
// const searchIcon = require('@images/search.png');
// const heartIcon = require('@images/heart.png');
// const accountIcon = require('@images/account.png');




const tabNavigationData = [
  {
    name: 'Home',
    component: Splash,
    icon: homeIcon,
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