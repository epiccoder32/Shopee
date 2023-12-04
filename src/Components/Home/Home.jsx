import React, { useState,useEffect } from 'react'
import Category from './Category/Category'
import Category1Img from '../../Assets/category/cat-1.jpg'
import Category2Img from '../../Assets/category/cat-2.jpg'
import Category3Img from '../../Assets/category/cat-3.jpg'
import Category4Img from '../../Assets/category/cat-4.jpg'
import earpod1 from '../../Assets/products/earbuds-prod-1.webp'
import earpod2 from '../../Assets/products/earbuds-prod-2.webp'
import earpod3 from '../../Assets/products/earbuds-prod-3.webp'
import earpod4 from '../../Assets/products/earbuds-prod-4.webp'
import earpod5 from '../../Assets/products/earbuds-prod-5.webp'
import headphone1 from '../../Assets/products/headphone-prod-1.webp'
import headphone2 from '../../Assets/products/headphone-prod-2.webp'
import headphone3 from '../../Assets/products/headphone-prod-3.webp'
import headphone4 from '../../Assets/products/headphone-prod-4.webp'
import headphone5 from '../../Assets/products/headphone-prod-5.webp'
import headphone6 from '../../Assets/products/headphone-prod-6.webp'
import Speaker1 from '../../Assets/products/speaker-prod-1.webp'
import Speaker2 from '../../Assets/products/speaker-prod-2.webp'
import Speaker3 from '../../Assets/products/speaker-prod-3.webp'
import Speaker4 from '../../Assets/products/speaker-prod-4.webp'
import Speaker5 from '../../Assets/products/speaker-prod-5.webp'
import watch1 from '../../Assets/products/watch-prod-1.webp'
import watch2 from '../../Assets/products/watch-prod-2.webp'
import watch3 from '../../Assets/products/watch-prod-3.webp'





import { fetchDataFromApi } from '../../utis/api'
import './home.scss'
import Banner from './Banner/Banner'
import Newsletter from '../Footer/Newsletter/Newsletter'
import Products from '../Products/Products'
import { useContextProvider } from '../../utis/context'

export default function Home() {
  useEffect(()=>{
    getCategories();
    getProducts()
},[])

const {setCategories}=useContextProvider();
const {setProducts}=useContextProvider();

const getCategories=()=>{
    const categories={
      data:[{id:1,img:Category1Img},{id:2,img:Category2Img},{id:3,img:Category3Img},{id:4,img:Category4Img}]
    };
    setCategories(categories);
    
}
const getProducts=()=>{
  const products={
    data:[{id:1,img:watch1,categoryid:3, name:'boAt Wave Neo | 1.69" HD Display, Upto 7 Days Battery Life, IP68 Sweat', 
  price:'1799',des:'Introducing a #NeoWay to live smart and stylish – the all-new Watch Wave Neo. Check everything that you need in a smartwatch and then get some more. Packed with a 1.69 inches screen, 550 nits brightness & 2.5D Curved Display – Watch Wave Neo will make your world better & brighter.'},
  {id:2,img:watch2,categoryid:3, name:'boAt Iris | Round Dial Smart Watch with 1.39" AMOLED Display, Multiple Watch Faces', 
  price:'4499',des:'Shoutout to all who see the glass half full. It is time to switch over to the bright side. Watch Iris will get you through the week with a 7-day battery backup. Thrive through your success with all the important notifications on your smartwatch. The timeless look comes with multiple watch faces and strap options to go with all versions of your style. Nail every sport you play with 8 active sports modes tracking your performance. Don’t worry about sweat and water, it is IP68. Being healthy is an imperative when your watch has a heart rate monitor, oxygen level monitor, sedentary reminder tracking your health 24x7. Pump up your style!'},
  {
    id:3,img:watch3,categoryid:3, 
    name:'boAt Vertex | Smartwatch with Fitness Trackers, 1.69" HD Display, Sleep Tracking, 100+ Watch Faces', 
    price:'2299',
    des:'When you can be at the apex of your health, why compromise? Meet Watch Vertex, our all-new smartwatch that’s built to improve your lifestyle and push you closer towards your fitness goals. Its large 1.69 inch full capacitive touch display allows you to control everything. Fitness features, including heart rate & SpO2 tracker, health ecosystem, sleep tracker, and more, ensure you get the support you need on your fitness journey. Enjoy going on hikes? Vertex is the perfect travel partner with its extra long battery of up to 10 days. Hustle your journey to the top with Vertex.'
  },
  {
    id:4,img:headphone1,categoryid:1, 
    name:'boAt Rockerz 450 DC edition | Wireless Headphone with 40mm Dynamic Driver', 
    price:'1999',
    des:'There is no better justice to your playlist & binging than Rockerz 450 boAt | DC edition. If low battery is your enemy, the 15HRS non-stop playback is here to rightfully combat that. Feel the power rising up in your veins as you indulge in your playlist with its 40mm dynamic drivers. Make adaptiveness your superpower just like the adaptive headband of Rockerz 450. Get ready to rule with #DCYou.'
  },
  {
    id:5,img:headphone2,categoryid:1, 
    name:'Rockerz 550 Over Ear Bluetooth Headphone', 
    price:'1799',
    des:'boAt Rockerz 550 is an over-ear wireless headset that has been ergonomically designed to meet the needs of music lovers. The headphones come equipped with the latest Bluetooth v5.0 for instant wireless connectivity. Its powerful 500mAh battery provides playtime of up to 20 hours for an extended audio bliss. Its 50mm dynamic drivers help supply immersive musical experience to the user with immersive sound. The user can utilize the headset via dual connectivity in the form of Bluetooth and AUX    '
  },
  {
    id:6,img:headphone3,categoryid:1, 
    name:'boAt Rockerz 518 Wireless Headphone', 
    price:'1599',
    des:'Now just stop worrying about Wires hanging from here and there. Pair with any Bluetooth device, connect and play. Dead Batteries can kill your vibe. boAt Rockerz 518 is designed to play Up to 20 hours. Dont just be loud, be loud and clear. We assure you have not heard such powerful bass and vocal clarity from a wireless comfortable headphone with Extra Comfort Ear cups. The boAt Super Bass Rockerz 518 Wireless Headphones will make your listening experience personal and for real. So, just plug it in and Plug into Nirvana. '
  },
  {
    id:7,img:headphone4,categoryid:1, 
    name:'Rockerz 400', 
    price:'1299',
    des:'Lets put an end to your worries about wires hanging and getting tangled with BoAt Rockerz 400 and connect with any Bluetooth device, connect and play. Dead batteries can kill your vibe. boAt Rockerz bluetooth headphones are designed to play Up to 8 hours. It has a High Definition Sound. Dont just be loud, be loud and clear. We guarantee you have not heard such powerful bass and vocal clarity from a wireless headphone. The boAt Super Bass Rockerz 400 wireless headphones will make your listening experience personal and for real. Plug it in and Plug into Nirvana.'
  },
  
  {
    id:9,img:headphone5,categoryid:1, 
    name:'Trebel Rockerz 550 Wireless Bluetooth Headphones', 
    price:'1799',
    des:'Ladies, the time hath come to reach the wall of fame. Make your hustle shine like a diamond with TRebel Rockerz 550 — an audio partner that’s made to suit your vibe. Let your hustle never stop with its 20 hours of powerful playback and never settle for less with the sheer audio power of 50mm Dynamic Drivers. Block the voices that don’t matter with its physical noise isolation. With a 500mAh battery, TRebel Rockerz 550 will be your cheerleader through thick & thin. There’s no point in waiting — match your mood with the best wireless headphones for women.'
  },
  {
    id:10,img:headphone6,categoryid:1, 
    name:'Rockerz 450 Superman DC Edition - Wireless Bluetooth Headphone', 
    price:'1999',
    des:'There is no better justice to your playlist than Rockerz 450 boAt | DC edition. If low battery is your enemy, the 15HRS non-stop playback is here to rightfully combat that. Feel the power rising up in your veins, just like the sun powers the Man of Steel, as you indulge in your playlist with its 40mm dynamic drivers. Be your own hero as you get ready to rule with #DCYOU.'
  },
  {
    id:10,img:Speaker1,categoryid:2, 
    name:'Stone 1500F | 14W boAt Signature Sound with Passive Bass Radiator', 
    price:'3999',
    des:'Add life to all your parties with the ultimate jukebox - Stone 1200F bluetooth speaker. It’s powered by 14W boAt Signature Sound with Passive Bass Radiator that’s built to add spark to all your plans. The RGB LED lights are perfect to set the perfect vibe for a casual chilling session with your best buds. You can take it along everywhere you go with its 360-degree ergonomic design, shoulder strap and IPX7 Water & Splash Resistance that protects it even when outdoors.'
  },
  {
    id:11,img:Speaker2,categoryid:2, 
    name:'Stone 352 - Wireless Portable Bluetooth Speaker', 
    price:'1699',
    des:'Be the life of every party as you carry the ultra-portable Stone 352 with you, wherever you go. Its 10W Stereo boAt Signature Sound will make you vibe with full force as every beat becomes clear. Too bored partying within four walls? No problem! Shield your good times as the dynamic Stone 352 is equipped with IPX7 Splash & Water Shield— rain or poolside we got you covered! Party from dusk till dawn with its 12H nonstop playtime & double the impact as you connect 2 Stone 352s via the TWS feature. So get your gang & set to groove!'
  },
  {
    id:12,img:Speaker3,categoryid:2, 
    name:'Stone 1000v2', 
    price:'2999',
    des:'Powerful and Precise. Stone 1000v2 is the premier wireless speaker that provides the best audio in the business. With its 14W stereo sound, get a boogie on and party all night. Stone 1000v2 also comes packed with state-of-the-art specs to keep you engrossed and engaged through it all!.    '
  },
  {
    id:13,img:Speaker4,categoryid:2, 
    name:'boAt Stone 500 - Portable Bluetooth Speaker', 
    price:'1999',
    des:'Become the life of every party with Stone 500. Experience 10W RMS stereo sound and groove with your gang on your favourite tunes. Double the thump with its TWS functionality that lets you connect & play 2 Stone 500 together. The dynamic RGB lights will add to the vibe of your party as you get transported to a club setting. Its universal connectivity with multiple connectivity modes —Bluetooth v5.0, AUX, USB and FM mode. With a Type-C charging interface & instant voice assistant, this wireless speaker will make your life easier as you enjoy the sound of your choice. With Stone 500, it is time to #BeTheLimelight.    '
  },
  {
    id:14,img:Speaker5,categoryid:2, 
    name:'boAt Party Pal 50 - Bluetooth Speaker', 
    price:'3799',
    des:'Become the life of every party with Stone 500. Experience 10W RMS stereo sound and groove with your gang on your favourite tunes. Double the thump with its TWS functionality that lets you connect & play 2 Stone 500 together. The dynamic RGB lights will add to the vibe of your party as you get transported to a club setting. Its universal connectivity with multiple connectivity modes —Bluetooth v5.0, AUX, USB and FM mode. With a Type-C charging interface & instant voice assistant, this wireless speaker will make your life easier as you enjoy the sound of your choice. With Stone 500, it is time to #BeTheLimelight.    '
  },
  {
    id:15,img:earpod1,categoryid:4, 
    name:'TRebel Airdopes 141 | 8mm drivers, Upto 42 Hours Total Playback, ENxTM Technology, ASAPTM Charge    ', 
    price:'1499',
    des:'Hello sassy and fierce ladies! We see you soaring high for your dreams, and we want to support them. Let TRebel Airdopes 141 be your biggest cheerleader while you win the world with your go-getter attitude! Shun their opinions by indulging in your rhythm with the 8mm Dynamic Drivers. Ace those business calls with its ENx™ Technology that makes you heard every time. ASAP™ Charge empowers you with 75 minutes of playback with just 5 minutes of charging. IPX4 makes it easier to roll in the good times as you rock that sweat, changing your lifestyle. Connect instantly with its IWP™ Technology & keep everything under control with its Quick Response Touch.    '
  },
  {
    id:16,img:earpod2,categoryid:4, 
    name:'Airdopes 131 DC Edition with 13 mm Drivers, Type-C Carry Case, 12 hours Nonstop Music    ', 
    price:'1399',
    des:'Sleek. Comfortable. Stylish. And a splash of amazing acoustic powers. Airdopes 131 true wireless earbuds are equipped with 13mm drivers that offer you beyond the ordinary sound. Keep going on for long like the DC heroes with its 12 hours of capacity. Plug-in be prepared to be awe struck    '
  },
  {
    id:17,img:earpod3,categoryid:4, 
    name:'boAt Airdopes 141 Pro | 12mm Drivers, Upto 45 Hours Playback, Quad Mics with ENx™️ Technology    ', 
    price:'1499',
    des:'Take a step up on your listening experience with boAt Airdopes 141 Pro. Start playing your tracks on our best wireless earbuds and dont stop with a total playback of 45 hours. Never miss a beat with boAt Signature Sound on our all-new boAt Airdopes so that every song that you listen to shines through. Plug-in and live the sound.' 
  },
  {
    id:18,img:earpod4,categoryid:4, 
    name:'boAt Airdopes 441 | Wireless Earbuds with 6mm Driver For Immersive Sound', 
    price:'2499',
    des:'Plug Into Nirvana with boAt Airdopes 441 TWS earbuds to enjoy your music in a truly wireless way. It has the IWP (Insta Wake N’ Pair) Technology, meaning as soon as one opens the charging case lid, the best earbuds power on and enter connection mode. The TWS Airdopes 441 come equipped with 6mm drivers for immersive sound. It offers a seamless user experience via its capacitive touch controls    '
  },
  {
    id:19,img:earpod5,categoryid:4, 
    name:'boAt TRebel Airdopes 402 | In-Ear Earbuds With 10mm Driver, IPX4 Sweat    ', 
    price:'2499',
    des:'The time hath come for you, my ladies, to walk with elegance dripping with every step you take. Let the royal shine and distinguish yourself from the crowd with boAt Airdopes 402, designed solely to compliment you and your personality. These are the best women wireless earbuds that come in shades matching your moods! Connect and experience the magic of Nirvana with total 30 hours of playtime and Bluetooth V5.2 that never lets you down. Let yourself loose and free, choosing for your own self, with this immersive audio built just to make you experience the unreal boAt signature sound. Weighing as light as opinions should, TRebel Airdopes 402 with its 450mAh battery charging case will assist you in blocking the outside world for a long time.    '
  },


  
]

}
setProducts(products)
return products
  }

  
  return (
    <div className='homepage'>
     <Banner/>
      <div className='main-content'>
        <div className='layout'>
        <Category/>
        <Products/>
      </div>
      </div>
    </div>
  )
}
