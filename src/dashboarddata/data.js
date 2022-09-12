
// Sidebar imports
import {
    UilEstate,
    UilClipboardAlt,
    UilUsersAlt,
    UilPackage,
    UilChart,
    UilUsdSquare, UilMoneyWithdrawal
   // UilSignOutAlt,UilMoon,UilSun
  } from "@iconscout/react-unicons";

  import img1 from '../imgs/img1.png';
  import img2 from '../imgs/img2.png';
  import img3 from '../imgs/img3.png';

  //Sidebar data
  export const SidebarData = [
    {
        icon:UilEstate ,
        title:'Dashboard'
    },
    {
        icon:UilClipboardAlt ,
        title:'Orders'
    },
    {
        icon:UilUsersAlt,
        title:'Customers'
    },
    {
        icon:UilPackage ,
        title:'Products'
    },
    {
        icon:UilChart ,
        title:'Analytics'
    }
  ]

/* Cards Data */
export const cardsData = [
  {
    title: 'Sales',
    color : {
        background:' linear-gradient(180deg, #BB67FF 0%, #C484F3 100%)',
        boxShadow: '0px 10px 20px 0px #e0c6f5'
    },
    png: UilUsdSquare,
    barValue: 70,
    value:'25,970',
    series : [
    {
        name: 'Sales',
        data: [31, 40, 28, 51, 42, 109, 100]
    },
],
  },
  {
    title: 'Revenue',
    color : {
        background:'linear-gradient(180deg,#ff919d 0%,  #fc929d 100%)',
        boxShadow: ' 0px 10px 20px 0px #fdc0c7'
    },
    png: UilMoneyWithdrawal,
    barValue: 80,
    value:'14,270',
    series : [
        {
        name: 'Revenue',
        data: [10, 100, 50, 70, 80, 30, 40]
    },
],
  },
  {
    title: 'Expenses',
    color : {
        background:'linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)',
        boxShadow: '0px 10px 20px 0px #f9d59b'
    },
    png: UilClipboardAlt,
    barValue: 60,
    value:'4,270',
    series : [
    {
        name: 'Expenses',
        data: [10, 25, 15, 30, 12, 15, 20]
    },
],
  }
]

// Updates data
export const updateData = [
    {
        img:img1,
        name:'Andrew Thomas',
        not:' has ordered an Apple smart watch 2500mh battery',
        time:'25 seconds ago' 
    } ,
    {
        img:img2,
        name:'James Bond',
        not:' has received Samsung gadget for charging battery',
        time:'30 minutes ago' 
    } ,
    {
        img:img3,
        name:'Iron Man',
        not:' has ordered an Apple smart watch,samsung gear 2500mh battery',
        time:'2 hours ago' 
    } ,
]