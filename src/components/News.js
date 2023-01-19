import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
articles=[
    {
    "source": {
    "id": null,
    "name": "Lifehacker.com"
    },
    "author": "Jake Peterson",
    "title": "The Easiest Ways to Sync iMessages Across All Your Devices",
    "description": "I recently picked up a new iPhone, and for the most part, I love it. What I didn’t love was not having my iMessages on my new iPhone synced up with my other Apple devices. Sure, my new phone had my most recent messages, but from there, things got weird. For e…",
    "url": "https://lifehacker.com/the-easiest-ways-to-sync-imessages-across-all-your-devi-1850002677",
    "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/34be078e9c1af8f1a3cf54b3001ac49d.jpg",
    "publishedAt": "2023-01-19T14:00:00Z",
    "content": "I recently picked up a new iPhone, and for the most part, I love it. What I didnt love was not having my iMessages on my new iPhone synced up with my other Apple devices. Sure, my new phone had my mo… [+3582 chars]"
    },
    {
    "source": {
    "id": "engadget",
    "name": "Engadget"
    },
    "author": "Will Shanklin",
    "title": "Apple's new 14-inch MacBook Pro gets its first discount on Amazon",
    "description": "We’re already seeing the first discounts on the new 14-inch MacBook Pro, which Apple announced earlier this week. Amazon has the entry-level MacBook Pro with the M2 Pro chip for $50 off ($1,950). Meanwhile, Best Buy is tying pre-order discounts to its TotalTe…",
    "url": "https://www.engadget.com/14-inch-macbook-pro-apple-deals-discount-amazon-best-buy-172511277.html",
    "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2023-01/53be1ae0-981b-11ed-bf86-2608dca1d7e6",
    "publishedAt": "2023-01-19T17:25:11Z",
    "content": "Were already seeing the first discounts on the new 14-inch MacBook Pro, which Apple announced earlier this week. Amazon has the entry-level MacBook Pro with the M2 Pro chip for $50 off ($1,950). Mean… [+1486 chars]"
    },
    {
    "source": {
    "id": "reuters",
    "name": "Reuters"
    },
    "author": null,
    "title": "Society Watch: Can a focus on education save the S in ESG? - Reuters",
    "description": "Sandwiched between the reporting behemoths of environment and governance, the social pillar of an organisation’s ESG strategy has always proved something of an enigma. Important yes, but what does it actually stand for, and how can companies demonstrate they …",
    "url": "https://www.reuters.com/business/sustainable-business/society-watch-can-focus-education-save-s-esg-2023-01-19/",
    "urlToImage": "https://www.reuters.com/resizer/PYbk6sUGY2pAqN17HkneW7QblOE=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/ATQ3QYJZ3VLG5KUKJOJIZEYWPA.jpg",
    "publishedAt": "2023-01-19T15:36:00Z",
    "content": "January 10 - Sandwiched between the reporting behemoths of environment and governance, the social pillar of an organisations ESG strategy has always proved something of an enigma. Important yes, but … [+7317 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Android Central"
    },
    "author": "derrek.lee@futurenet.com (Derrek Lee)",
    "title": "Samsung and Apple duked it out for the top spot in 2022 amid a shrinking market",
    "description": "The latest report on smartphone shipments in 2022 show highlight tough economic times for OEMs.",
    "url": "https://www.androidcentral.com/phones/smartphone-market-share-2022",
    "urlToImage": "https://cdn.mos.cms.futurecdn.net/c3bTdgetMPKi6PMM2CdtLU-1200-80.jpg",
    "publishedAt": "2023-01-19T01:19:50Z",
    "content": "<ul><li>The latest report shows smartphone shipments fell by 17% in 2022.</li><li>Apple managed to gain the top spot in Q2 2022, no doubt thanks to the iPhone 14 series.</li><li>Samsung shipped the m… [+2170 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Android Central"
    },
    "author": "shruti.shekar@futurenet.com (Shruti Shekar)",
    "title": "ChatGPT could help Google more than Microsoft, ironically",
    "description": "Analysts examine what it would mean if Microsoft decides to integrate ChatGPT with Bing and if that will create true competition with Google.",
    "url": "https://www.androidcentral.com/apps-software/chatgpt-could-help-google-more-than-microsoft",
    "urlToImage": "https://cdn.mos.cms.futurecdn.net/GdaC5YNFNmidmnbFqmdC7F-1200-80.jpg",
    "publishedAt": "2023-01-19T14:03:31Z",
    "content": "ChatGPT has taken the tech world by storm, and it’s gotten Microsoft thinking about integrating the AI chatbot into its Bing search. However, some analysts say Google is way ahead of ChatGPT, and if … [+6383 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "The Guardian"
    },
    "author": "Peter Bradshaw",
    "title": "Will All Quiet on the Western Front really conquer all at the Baftas?",
    "description": "The German-language Netflix film has 14 nominations, and great resonance with the Ukraine war, but I suspect a good number of the gongs will go elsewhere<ul><li>The full list of Baftas 2023 nominations</li></ul>The Baftas have delivered a very unusual outlier…",
    "url": "https://www.theguardian.com/film/2023/jan/19/all-quiet-on-the-western-front-netflix-baftas-nominations",
    "urlToImage": "https://i.guim.co.uk/img/media/cc8107abedb73693a53324af6c351bb5516f723f/0_86_6048_3628/master/6048.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctb3BpbmlvbnMucG5n&enable=upscale&s=682d00b7ff5e35d3c20da8e0d601bcef",
    "publishedAt": "2023-01-19T13:22:09Z",
    "content": "The Baftas have delivered a very unusual outlier to what we all thought was the accepted general drift of this years award season. Its certainly a departure from English-speaking Hollywood, though pe… [+3700 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "MacRumors"
    },
    "author": "Joe Rossignol",
    "title": "iOS 16.3 Code Reveals Apple Continues to Work on Classical Music App",
    "description": "Apple continues to work on a standalone classical music app, according to hidden code changes discovered by @iSWUpdates in the iOS 16.3 Release Candidate today. The software update is in the final stage of beta testing and is expected to be released to the pu…",
    "url": "https://www.macrumors.com/2023/01/19/ios-16-3-code-apple-music-classical/",
    "urlToImage": "https://images.macrumors.com/t/FhOW85qUG3EZBw65R3J6aWTQMFI=/1600x/article-new/2021/08/apple-music.jpg",
    "publishedAt": "2023-01-19T14:48:39Z",
    "content": "Apple continues to work on a standalone classical music app, according to hidden code changes discovered by @iSWUpdates in the iOS 16.3 Release Candidate today. The software update is in the final st… [+1453 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "MacRumors"
    },
    "author": "Joe Rossignol",
    "title": "Apple Announcements Recap: New MacBook Pro, Mac Mini, HomePod, and More",
    "description": "Apple made some rare January product announcements this week, introducing updated 14-inch and 16-inch MacBook Pro models, an updated Mac mini, a second-generation full-size HomePod, and a new Unity band for the Apple Watch in celebration of Black History Mont…",
    "url": "https://www.macrumors.com/2023/01/19/new-macs-and-homepod-recap/",
    "urlToImage": "https://images.macrumors.com/t/PIIG5xXvpJK70CLJ4PWZeq6EOOg=/2500x/article-new/2023/01/M2-Mini-MacBook-Pros-HomePod-Unity-Apple-Watch-Feature-1.jpg",
    "publishedAt": "2023-01-19T17:07:45Z",
    "content": "Apple made some rare January product announcements this week, introducing updated 14-inch and 16-inch MacBook Pro models, an updated Mac mini, a second-generation full-size HomePod, and a new Unity b… [+4029 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "MacRumors"
    },
    "author": "Sami Fathi",
    "title": "Everything That's Changed in the New 2023 HomePod",
    "description": "Apple this week unexpectedly announced the second-generation full-sized HomePod, around two years after it discontinued the original smart speaker.\n\n\n\n\n\nThe upgraded HomePod, priced at $299, joins the HomePod mini in Apple's line of TV and Home products with …",
    "url": "https://www.macrumors.com/2023/01/19/new-things-for-the-2023-homepod/",
    "urlToImage": "https://images.macrumors.com/t/Ecb77kW-qa6UYBY4QDYNSeb7pgQ=/1960x/article-new/2023/01/HomePod-2023.jpg",
    "publishedAt": "2023-01-19T09:45:08Z",
    "content": "Apple this week unexpectedly announced the second-generation full-sized HomePod, around two years after it discontinued the original smart speaker.\r\nThe upgraded HomePod, priced at $299, joins the Ho… [+3867 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "MacRumors"
    },
    "author": "Joe Rossignol",
    "title": "New MacBook Air With 3nm M3 Chip Rumored to Launch in Second Half of 2023",
    "description": "Apple plans to release a new MacBook Air in the second half of 2023, and it may be equipped with a 3nm chip, according to a report today from Taiwanese publication DigiTimes. This chip would likely be Apple's next-generation M3 chip, which would offer faster …",
    "url": "https://www.macrumors.com/2023/01/18/macbook-air-3nm-chip-2023-rumor/",
    "urlToImage": "https://images.macrumors.com/t/-BtwaFh2UjQ4OYXvwZ34U3u-Fhg=/2375x/article-new/2022/07/MacBook-Air-M2-Chip-Purple-Feature.jpg",
    "publishedAt": "2023-01-19T04:42:09Z",
    "content": "Apple plans to release a new MacBook Air in the second half of 2023, and it may be equipped with a 3nm chip, according to a report today from Taiwanese publication DigiTimes. This chip would likely b… [+1792 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "MacRumors"
    },
    "author": "Mitchel Broussard",
    "title": "Deals: Apple's New MacBook Pro Gets First Discounts on Amazon and Expercom",
    "description": "Apple just announced new models of the 14-inch and 16-inch MacBook Pro with faster M2 Pro and M2 Max chips, and Amazon and Expercom are already offering savings on the new notebooks. At Amazon you can get a straight cash discount and at Expercom you can save …",
    "url": "https://www.macrumors.com/2023/01/19/deals-apples-new-macbook-pro/",
    "urlToImage": "https://images.macrumors.com/t/_KsVTJXVWpAN9CrUxwBKqe4qf6M=/2500x/article-new/2023/01/new-macbook-pro-pink.jpg",
    "publishedAt": "2023-01-19T15:31:28Z",
    "content": "Apple just announced new models of the 14-inch and 16-inch MacBook Pro with faster M2 Pro and M2 Max chips, and Amazon and Expercom are already offering savings on the new notebooks. At Amazon you ca… [+2102 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "CNET"
    },
    "author": "Alix Langone",
    "title": "Apple Is Reportedly Developing More Smart Home Products - CNET",
    "description": "A smart display that can control thermostats and lights is reportedly in the works.",
    "url": "https://www.cnet.com/tech/apple-is-reportedly-developing-more-smart-home-products/",
    "urlToImage": "https://www.cnet.com/a/img/resize/93848332984a8c0e1a3c4c9acc18ccd7a7f0cbec/hub/2022/06/06/0a691932-5528-436c-a3ac-dcdfbc985fd7/apple-event-060622-67.jpg?auto=webp&fit=crop&height=630&width=1200",
    "publishedAt": "2023-01-19T02:14:32Z",
    "content": "Apple is developing new smart home products in an effort to grow its footprint in the smart home market, Bloomberg reported on Wednesday. \r\nThe new products will range from a speedier Apple TV set to… [+982 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "MacRumors"
    },
    "author": "Tim Hardwick",
    "title": "Apple Increases HomePod Mini Price in Several European Countries",
    "description": "Following its new HomePod announcement on Wednesday, Apple has quietly bumped up the price of its HomePod mini in several European countries.\n\n\n\n\n\nIn the European Union, Apple has added €10 to the original €99 price in Austria, Ireland, France, Germany, Italy…",
    "url": "https://www.macrumors.com/2023/01/19/apple-hikes-homepod-mini-price-europe/",
    "urlToImage": "https://images.macrumors.com/t/kQ0rks2mmX--3lnU0mUhIOht5Hc=/2158x/article-new/2021/10/homepod-mini-five-colors.jpg",
    "publishedAt": "2023-01-19T15:40:04Z",
    "content": "Following its new HomePod announcement on Wednesday, Apple has quietly bumped up the price of its HomePod mini in several European countries.\r\nIn the European Union, Apple has added 10 to the origina… [+863 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "MacRumors"
    },
    "author": "Sami Fathi",
    "title": "Apple Supplier Preparing to Begin Shipments of Lenses for Apple's Upcoming AR/VR Headset",
    "description": "An Apple supplier is looking to begin shipments of lenses to be used in Apple’s upcoming AR/VR headset as soon as next month, according to a report today by DigiTimes. \n\n\n\nConcept render based on purported leaked information by Ian Zelbo\n\nThe report states th…",
    "url": "https://www.macrumors.com/2023/01/19/apple-headset-shipments-lens/",
    "urlToImage": "https://images.macrumors.com/t/5FCFjsNQJCL9dBjMtKcEdpAOaas=/1600x/article-new/2021/12/apple-ar-headset-concept-2.jpeg",
    "publishedAt": "2023-01-19T07:29:59Z",
    "content": "An Apple supplier is looking to begin shipments of lenses to be used in Apples upcoming AR/VR headset as soon as next month, according to a report today by DigiTimes. \r\nThe report states that Genius … [+1579 chars]"
    },
    {
    "source": {
    "id": "business-insider",
    "name": "Business Insider"
    },
    "author": "bnolan@insider.com (Beatrice Nolan)",
    "title": "Police raided a gym after Siri called emergency services because it misheard a boxing instructor's words, owner says",
    "description": "A trainer triggered the Siri feature on his Apple Watch after he shouted: \"1, 1-2\" and \"nice\" or \"good shot,\" per the gym owner.",
    "url": "https://www.businessinsider.com/siri-apple-police-raid-gym-emergency-services-2023-1",
    "urlToImage": "https://i.insider.com/63c938682a1e600018b8ab9a?width=1200&format=jpeg",
    "publishedAt": "2023-01-19T12:35:49Z",
    "content": "Siri, Apple's virtual assistant, called the emergency services after it misheard a Muay Thai fighter and boxing instructor during a training session, a gym owner said. \r\nA trainer at the gym, which i… [+1464 chars]"
    },
    {
    "source": {
    "id": "business-insider",
    "name": "Business Insider"
    },
    "author": "gkay@insider.com (Grace Kay,Aaron Mok)",
    "title": "Steve Jobs' nepo babies: From a model to a secret daughter, here's everything we know about the Apple cofounder's kids",
    "description": "Steve Jobs left most of his money to his wife when he died in 2011, but that doesn't mean his children haven't benefitted from their famous last name.",
    "url": "https://www.businessinsider.com/steve-jobs-billionaire-family-nepo-baby-eve-reed-secret-daughter-2023-1",
    "urlToImage": "https://i.insider.com/63c7198f297d7e001963d12b?width=1200&format=jpeg",
    "publishedAt": "2023-01-19T16:02:16Z",
    "content": "Steve Jobs is arguably the most influential tech leader in the history of modern computing. \r\nIn 1976, after he dropped out of college, Jobs cofounded Apple with his high-school friend, Steve Wozniak… [+10256 chars]"
    },
    {
    "source": {
    "id": "business-insider",
    "name": "Business Insider"
    },
    "author": "sacevedo@insider.com (Sophia Acevedo, CEPF)",
    "title": "14 best high-interest CDs and savings accounts today: Earn 5% APY on a 6-month CD",
    "description": "The best high-interest CDs and savings accounts today are primarily available at online financial institutions. See our list for options.",
    "url": "https://www.businessinsider.com/personal-finance/todays-best-high-interest-accounts-january-19-2023-1",
    "urlToImage": "https://i.insider.com/631f4dfae8b500001850cf8d?width=1200&format=jpeg",
    "publishedAt": "2023-01-19T17:27:18Z",
    "content": "Insider's experts choose the best products and services to help make smart decisions with your money (heres how). In some cases, we receive a commission from our partners, however, our opinions are o… [+17182 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Entrepreneur"
    },
    "author": "Emily Washcovick",
    "title": "Building Community and Creating Repeat Customers in the Fitness Industry",
    "description": "With a team of instructors who focus on personalized experiences, Chrome Cycle has built a community of loyal customers.",
    "url": "https://www.entrepreneur.com/growing-a-business/building-community-and-creating-repeat-customers-in-the/443246",
    "urlToImage": "https://assets.entrepreneur.com/content/3x2/2000/1674083394-EntrepreneurBTRChromeCycle.png",
    "publishedAt": "2023-01-19T14:38:39Z",
    "content": "Behind the Review host and Yelp's Small Business Expert, Emily Washcovick, shares a look at this week's episode of the podcast.\r\nChrome Cycle\r\nMany entrepreneurs leave the corporate world to find bet… [+5177 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Yahoo Entertainment"
    },
    "author": "Steve Dent",
    "title": "Apple may release an ‘iPad-based’ smart home device to compete with Nest Hub and Echo Show - Yahoo News Canada",
    "description": "<ol><li>Apple may release an ‘iPad-based’ smart home device to compete with Nest Hub and Echo Show  Yahoo News Canada\r\n</li><li>Apple to Expand Smart-Home Lineup, Taking On Amazon and Google  Bloomberg\r\n</li><li>Apple Working on iPad-Like Display for Controll…",
    "url": "https://ca.news.yahoo.com/apple-may-release-a-smart-home-i-pad-device-to-compete-with-nest-hub-and-echo-show-091946916.html",
    "urlToImage": "https://s.yimg.com/ny/api/res/1.2/m3boPZA0dA4_OE5bPEIfRg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2023-01/71108db0-97d2-11ed-bf6b-f6c24f148895",
    "publishedAt": "2023-01-19T09:19:46Z",
    "content": "Apple is reportedly working on an iPad-like smart home device designed to compete against Amazon's Echo Show and Google's Nest Hub products, according to Bloomberg. It would reportedly be \"essentiall… [+1842 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Hipertextual"
    },
    "author": "Rubén Chicharro",
    "title": "Siri provoca por error un operativo de 15 policías en Australia",
    "description": "Jamie Alleyne, un entrenador de boxeo afincado en Sidney, Australia, vivió momentos de pánico después de que una llamada accidental a través de Siri enviara a 15 agentes armados a su gimnasio cuando estaba entrenando a uno de sus clientes. El entrenador, de 3…",
    "url": "http://hipertextual.com/2023/01/siri-provoca-por-error-un-operativo-de-15-policias-en-australia",
    "urlToImage": "https://imgs.hipertextual.com/wp-content/uploads/2023/01/agentes-policia-001.jpg",
    "publishedAt": "2023-01-19T14:59:43Z",
    "content": "Jamie Alleyne, un entrenador de boxeo afincado en Sidney, Australia, vivió momentos de pánico después de que una llamada accidental a través de Siri enviara a 15 agentes armados a su gimnasio cuando … [+1852 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Hipertextual"
    },
    "author": "Rubén Chicharro",
    "title": "Cómo activar el sensor de humedad y temperatura que esconde el HomePod mini",
    "description": "Una de las principales novedades del HomePod de segunda generación, también está disponible en el HomePod mini, aunque de forma oculta. Ambos altavoces, en concreto, cuentan con un sensor de humedad y temperatura, para así permitir que Siri nos proporcione un…",
    "url": "http://hipertextual.com/2023/01/como-activar-el-sensor-de-humedad-y-temperatura-que-esconde-el-homepod-mini",
    "urlToImage": "https://imgs.hipertextual.com/wp-content/uploads/2021/06/HomePod-Mini-Review-7-scaled-1.jpg",
    "publishedAt": "2023-01-19T14:00:57Z",
    "content": "Una de las principales novedades del HomePod de segunda generación, también está disponible en el HomePod mini, aunque de forma oculta. Ambos altavoces, en concreto, cuentan con un sensor de humedad … [+2143 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Hipertextual"
    },
    "author": "Alberto Martín",
    "title": "Un desarrollador usa GPT-3 para hacer más inteligente a Siri",
    "description": "Oscar Gutiérrez\r\n\n\" data-medium-file=\"https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2018/03/siri.jpg?fit=800%2C526&quality=60&strip=all&ssl=1\" data-large-file=\"https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2018/03/siri.jpg?fit=780%2C…",
    "url": "http://hipertextual.com/2023/01/gpt-3-para-hacer-mas-inteligente-a-siri",
    "urlToImage": "https://imgs.hipertextual.com/wp-content/uploads/2018/03/siri.jpg",
    "publishedAt": "2023-01-19T14:04:08Z",
    "content": "Los asistentes virtuales de los móviles (o de los altavoces inteligentes) están muy lejos de las posibilidades que ofrecen servicios como GPT-3. Lógicamente, son utilidades diferentes que cubren nece… [+2210 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Xataka.com"
    },
    "author": "Ricardo Aguilar",
    "title": "Apple trabaja en sus propios dispositivos de hogar para competir con Amazon y Google, según Gurman",
    "description": "Apple está dando pasos agigantados para que su [ecosistema](Apple lleva años buscando la autosuficiencia en el diseño de sus componentes. Ya le queda poco para lograrlo) dependa cada vez menos de terceros. En la línea del hogar, ayer mismo resucitaron el Home…",
    "url": "https://www.xataka.com/componentes/apple-trabaja-sus-propios-dispositivos-hogar-para-competir-amazon-google-gurman",
    "urlToImage": "https://i.blogs.es/574255/1366_2000/840_560.jpg",
    "publishedAt": "2023-01-19T07:50:59Z",
    "content": "Apple está dando pasos agigantados para que su [ecosistema](Apple lleva años buscando la autosuficiencia en el diseño de sus componentes. Ya le queda poco para lograrlo) dependa cada vez menos de ter… [+1577 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Xataka.com"
    },
    "author": "Manu García (Visnuh)",
    "title": "Siete mejores ofertas en las Semanas Outlet de MediaMarkt: smart TVs, barras de sonido, portátiles o smartwatches rebajados",
    "description": "Siguen en marcha las Semanas Outlet de MediaMarkt y ya tenemos nuevas ofertas a tener en cuenta. De entre ellas hemos elegido las más interesantes, que te pueden ayudar a equiparte con smart TVs, barras de sonido, portátiles o relojes inteligentes a precios m…",
    "url": "https://www.xataka.com/seleccion/siete-mejores-ofertas-semanas-outlet-mediamarkt-smart-tvs-barras-sonido-portatiles-smartwatches-rebajados",
    "urlToImage": "https://i.blogs.es/994b8f/mediamarkt/840_560.jpg",
    "publishedAt": "2023-01-19T09:25:35Z",
    "content": "Siguen en marcha las Semanas Outlet de MediaMarkt y ya tenemos nuevas ofertas a tener en cuenta. De entre ellas hemos elegido las más interesantes, que te pueden ayudar a equiparte con smart TVs, bar… [+4885 chars]"
    },
    {
    "source": {
    "id": "fox-news",
    "name": "Fox News"
    },
    "author": "Kurt Knutsson, CyberGuy Report",
    "title": "The cheapest printer ink and how to make cartridges last longer",
    "description": "Buying ink cartridges can be pricey depending on how much you use your printer. Kurt \"CyberGuy\" Knutsson shows you some best options on printers, ink and toner.",
    "url": "https://www.foxnews.com/tech/cheapest-printer-ink-make-cartridges-last-longer",
    "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2023/01/1-wolteeva_pixabay.jpg",
    "publishedAt": "2023-01-19T16:00:27Z",
    "content": "We all know the pain of buying ink cartridges. They are expensive ridiculously expensive  $16 to $227, depending on the brand. In some cases, replacement cartridges seem as pricey as the actual print… [+8524 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Digital Trends"
    },
    "author": "Alex Blake",
    "title": "A brand-new M3 MacBook Air could be just months away",
    "description": "Apple’s next-gen M3 chip may arrive by the second half of 2023 in a new MacBook Air laptop. That’s according to a new report, but how accurate are the claims?",
    "url": "https://www.digitaltrends.com/computing/apple-m3-macbook-air-second-half-2023/",
    "urlToImage": "https://www.digitaltrends.com/wp-content/uploads/2022/06/MacBook-Air-M1-Gold-on-Table.jpg?resize=1200%2C630&p=1",
    "publishedAt": "2023-01-19T11:39:19Z",
    "content": "Apple has only just launched its M2 Pro and M2 Max chips inside new MacBook Pro laptops, but some people are already looking to the future. And according to a new report, next-generation Apple silico… [+2355 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Computerhistory.org"
    },
    "author": null,
    "title": "Lisa Source Code Release",
    "description": "CHM publicly releases the source code to Apple's Lisa computer, including its system and applications software.",
    "url": "https://computerhistory.org/blog/the-lisa-apples-most-influential-failure/",
    "urlToImage": "https://computerhistory.org/wp-content/uploads/2022/11/LisaRedo3-resize.jpg",
    "publishedAt": "2023-01-19T14:41:17Z",
    "content": "Happy 40th Birthday to Lisa! The Apple Lisa computer, that is. In celebration of this milestone, CHM has received permission from Apple to release the source code to the Lisa software, including its … [+12611 chars]"
    },
    {
    "source": {
    "id": "vice-news",
    "name": "Vice News"
    },
    "author": "Ricardo Contreras, Patrick Klepek",
    "title": "How Microsoft's Past Behavior Complicates Its Acquisition Plans",
    "description": "Monopoly expert Matt Stoller joins us to discuss why Microsoft is facing unexpected resistance to its mega-acquisition.",
    "url": "https://www.vice.com/en/article/88qpea/how-microsofts-past-behavior-complicates-its-acquisition-plans",
    "urlToImage": "https://video-images.vice.com/articles/63c70b6dc2048b9c6b977c60/lede/1674079047729-pirates-silicon.jpeg?image-resize-opts=Y3JvcD0xeHc6MXhoO2NlbnRlcixjZW50ZXImcmVzaXplPTEyMDA6KiZyZXNpemU9MTIwMDoq",
    "publishedAt": "2023-01-19T14:00:00Z",
    "content": "Last week the FTC surprised everyone when they actually took action towards stopping the Microsoft/Activision merger. So much so that Rob had to reach out to an expert to get into the nitty gritty ab… [+1356 chars]"
    },
    {
    "source": {
    "id": "vice-news",
    "name": "Vice News"
    },
    "author": "Ricardo Contreras, Patrick Klepek",
    "title": "Robert Ashley on the Return of 'A Life Well Wasted'",
    "description": "Why one of the most beloved podcasts in games went on hiatus for a decade.",
    "url": "https://www.vice.com/en/article/akemag/robert-ashley-on-the-return-of-a-life-well-wasted",
    "urlToImage": "https://video-images.vice.com/articles/63c70ddd88458c25f0a7e572/lede/1673989924418-alww-feed-logo.jpeg?image-resize-opts=Y3JvcD0xeHc6MC41NjE4eGg7MHh3LDAuMjQzN3hoJnJlc2l6ZT0xMjAwOiomcmVzaXplPTEyMDA6Kg",
    "publishedAt": "2023-01-19T17:00:00Z",
    "content": "It’s the holiday season and we here at Waypoint are giving y’all our first gift! We’ve had the chance to interview Robert Ashley, creator of one of the seminal video game podcasts: A Life Well Wasted… [+1271 chars]"
    },
    {
    "source": {
    "id": "vice-news",
    "name": "Vice News"
    },
    "author": "Matthew Gault, Jordan Pearson",
    "title": "CYBER: Replika, the AI Chatbot Users Say Is Sexually Harassing Them",
    "description": "For some longtime users, the chatbot app has gone from helpful companion to unbearably sexually aggressive.",
    "url": "https://www.vice.com/en/article/z34d5y/cyber-replika-the-ai-chatbot-users-say-is-sexually-harassing-them",
    "urlToImage": "https://video-images.vice.com/articles/63c86540595ae087b4b43def/lede/1674077771489-1673476184967-untitled-design-10.jpeg?image-resize-opts=Y3JvcD0wLjk5ODUxODUxODUxODUxODV4dzoxeGg7Y2VudGVyLGNlbnRlciZyZXNpemU9MTIwMDoqJnJlc2l6ZT0xMjAwOio",
    "publishedAt": "2023-01-19T14:00:00Z",
    "content": "Replika is a chatbot that you can find on the App Store. It bills itself as a companion that can, if you pay, become something more. The ads on the internet offer a repertoire of sexually suggestive … [+832 chars]"
    },
    {
    "source": {
    "id": "vice-news",
    "name": "Vice News"
    },
    "author": "Anna Merlan, Tim Marchman, Jason Koebler",
    "title": "An AI Chatbot Connects You With Pol Pot, Jeffrey Epstein, and Jesus in the Afterlife",
    "description": "“I think from an educational standpoint this would be really useful, particularly for young students,” the developer told Motherboard.",
    "url": "https://www.vice.com/en/article/3ad9ww/an-ai-chatbot-connects-you-with-pol-pot-jeffrey-epstein-and-jesus-in-the-afterlife",
    "urlToImage": "https://video-images.vice.com/articles/63c96119595ae087b4b49684/lede/1674142375484-groupchat.jpeg?image-resize-opts=Y3JvcD0xeHc6MC44OTg5eGg7MHh3LDAuMDEyMnhoJnJlc2l6ZT0xMjAwOiomcmVzaXplPTEyMDA6Kg",
    "publishedAt": "2023-01-19T15:44:28Z",
    "content": "If you want to talk to Adolf Hitler, that'll cost you 500 coins, or $15.99. But on Historical Figures—an app that uses AI technology to allow you to have simulated conversations with prominent people… [+12170 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "heise online"
    },
    "author": "Ben Schwan",
    "title": "Mehr Smart-Home-Geräte von Apple: iPad-artiger Controller, neues Apple TV",
    "description": "Apple will sein Angebot an HomeKit-fähigen Produkten offenbar erweitern. Dazu gehört offenbar eine ganz neue Gerätekategorie.",
    "url": "https://www.heise.de/news/Mehr-Smart-Home-Geraete-von-Apple-iPad-artiger-Controller-neues-Apple-TV-7463699.html",
    "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/3/6/8/1/9/4/7/homekit-9e68380798906c74.png",
    "publishedAt": "2023-01-19T11:08:00Z",
    "content": "Apple plant offenbar die Erweiterung seines Angebots an Smart-Home-Steuerzentralen. Neben HomePod und Apple TV soll demnächst ein \"Smart Display\" stehen. Außerdem ist für 2024 eine neue Multimediabox… [+2168 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "heise online"
    },
    "author": "Leo Becker",
    "title": "Apple-Preise in Europa: Auch HomePod mini und iMac M1 werden teurer",
    "description": "Apple hat weitere Preiserhöhungen bei bestehenden Modellreihen vorgenommen. Im Handel sind HomePod mini und iMac teils noch günstiger zu finden.",
    "url": "https://www.heise.de/news/Apple-Preise-in-Europa-Auch-HomePod-mini-und-iMac-M1-werden-teurer-7464710.html",
    "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/3/6/8/2/4/9/5/Bildschirm_foto_2023-01-19_um_17.35.13-424f4e3e4926cf4e.png",
    "publishedAt": "2023-01-19T16:54:00Z",
    "content": "Apple hat den Preis von HomePod mini und iMac M1 still erhöht. Parallel zur Vorstellung des neuen HomePod 2 am Mittwoch setzte der Hersteller die Preise für die kleinere Mini-Version in mehreren euro… [+1739 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "heise online"
    },
    "author": "Ben Schwan",
    "title": "Prognosen für 2024: Mac mini weiter im alten Design – und 3-nm-SoCs im Mac",
    "description": "Ein bekannter Analyst glaubt, dass Apple den Formfaktor des Mac mini ins 14. Jahr schicken wird. Auch zu den kommenden M3-SoCs gibt es erste Infos.",
    "url": "https://www.heise.de/news/Prognosen-fuer-2024-Mac-mini-weiter-im-alte-Design-und-3-nm-SoCs-im-Mac-7462962.html",
    "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/3/6/8/1/5/5/3/macminisw-d670c63378addd25.jpg",
    "publishedAt": "2023-01-19T09:30:00Z",
    "content": "Angestaubt ist eigentlich kein Ausdruck: Kein Mac kommt mit einem älteren Formfaktor als der Mac mini. Seit sage und schreibe Sommer 2010 nutzt Apple bereits das sogenannte Unibody-Design für den Kom… [+2054 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "heise online"
    },
    "author": "Ben Schwan",
    "title": "Apples Intel-Epoche ist vorbei – fast",
    "description": "Mit Erscheinen der neuen MacBook-Pro- und Mac-mini-Modelle hat Apple eine weitere Intel-Maschine aus dem Programm gestrichen. Nur noch ein Rechner ist übrig.",
    "url": "https://www.heise.de/news/Apples-Intel-Epoche-ist-vorbei-fast-7462966.html",
    "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/3/6/8/1/5/5/5/Intel-Xeon-SP-CLX-ce64e9fda213b9d5.jpg",
    "publishedAt": "2023-01-19T10:28:00Z",
    "content": "Am Dienstag hat Apple neue Mac-mini- und MacBook-Pro-Maschinen mit M2-SoCs eingeführt und sich damit weiter dem Ende der Intel-Ära genähert. Denn gleichzeitig verschwand auch ein seit langem verfügba… [+1942 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "heise online"
    },
    "author": "Nico Jurran",
    "title": "heise+ | Videostreaming-Dienste im Vergleich: Von Amazon bis Wow",
    "description": "Mehr Dienste, mehr Tarife, mehr Werbung: Netflix, Sky & Co. ändern in jüngster Zeit viel. Und weitere Veränderungen stehen an, selten zum Vorteil der Kunden.",
    "url": "https://www.heise.de/ratgeber/Videostreaming-Dienste-im-Vergleich-Von-Amazon-bis-Wow-7455708.html",
    "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/3/6/7/7/6/6/5/video1_nij_a-9348fbda674642de.jpg",
    "publishedAt": "2023-01-19T10:30:00Z",
    "content": "Inhaltsverzeichnis\r\nKönnen Sie auf Anhieb sagen, wie viele Videostreamingdienste man in Deutschland mittlerweile abonnieren kann? Tatsächlich fällt die Antwort schwer selbst wenn man Special-Interest… [+1931 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "heise online"
    },
    "author": "Isabel Grünewald",
    "title": "Kurz informiert: Zementwerk, HomePod mini, Cyber-Betrug, Prime Music Unlimited",
    "description": "Unser werktäglicher News-Überblick fasst die wichtigsten Nachrichten des Tages kurz und knapp zusammen.",
    "url": "https://www.heise.de/news/Kurz-informiert-Zementwerk-HomePod-mini-Cyber-Betrug-Prime-Music-Unlimited-7464003.html",
    "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/3/6/8/2/1/1/3/Thumb_KurzInformiert2022_4Themen_Kopie_2-91fb95ffc6db0d84.png",
    "publishedAt": "2023-01-19T16:00:00Z",
    "content": "Inhaltsverzeichnis\r\nBis 2029 soll das Zementwerk im Schleswig-Holsteinischen Lägerdorf als erstes weltweit klimaneutral werden. Die EU fördert dies mit 109 Millionen Euro und auch der Betreiber Holci… [+3082 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "9to5Mac"
    },
    "author": "Ben Lovejoy",
    "title": "Class action privacy lawsuit #3 for Apple over iPhone data collection",
    "description": "Apple is facing a third class action privacy lawsuit, after the company was found to be collecting analytics data from iPhone users even after they refused permission.\nApple insists that all developers ask permission to collect analytics data, but security re…",
    "url": "https://9to5mac.com/2023/01/19/class-action-privacy-lawsuit/",
    "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/01/Class-action-privacy-lawsuit.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    "publishedAt": "2023-01-19T15:22:43Z",
    "content": "Apple is facing a third class action privacy lawsuit, after the company was found to be collecting analytics data from iPhone users even after they refused permission.\r\nApple insists that all develop… [+2408 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "9to5Mac"
    },
    "author": "Michael Potuck",
    "title": "SmartGym for iOS and Apple Watch gets redesigned routines, new widget and shortcuts, more",
    "description": "SmartGym for iPhone, iPad, Mac, and Apple Watch had a big year in 2022 with some impressive updates and even won an Apple Editors’ Choice Award. Out today with its first major update for 2023, Smart Gym now has redesigned routines and exercises, a new Monthly…",
    "url": "https://9to5mac.com/2023/01/19/smartgym-for-ios-and-apple-watch-update/",
    "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/01/smartgym-update.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    "publishedAt": "2023-01-19T17:12:19Z",
    "content": "SmartGym for iPhone, iPad, Mac, and Apple Watch had a big year in 2022 with some impressive updates and even won an Apple Editors’ Choice Award. Out today with its first major update for 2023, Smart … [+2794 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "9to5Mac"
    },
    "author": "Ben Lovejoy",
    "title": "The new HomePod is basically the old HomePod – with new hope",
    "description": "Apple still manages the occasional surprise, and yesterday was an interesting example. Almost two years after discontinuing the original HomePod, Apple launched a new HomePod.\nOr, rather, it basically re-released the original HomePod, at the same price the co…",
    "url": "https://9to5mac.com/2023/01/19/the-new-homepod/",
    "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/01/The-new-HomePod.jpeg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    "publishedAt": "2023-01-19T13:22:57Z",
    "content": "Apple still manages the occasional surprise, and yesterday was an interesting example. Almost two years after discontinuing the original HomePod, Apple launched a new HomePod.\r\nOr, rather, it basical… [+3277 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "9to5Mac"
    },
    "author": "Arin Waichulis",
    "title": "On this day in history: Before the Macintosh, Apple Computer introduced the ill-fated Lisa",
    "description": "On this day, in 1983, Apple Computer introduced the Lisa. One of the first personal computers to implement two new leading-edge ideas – a GUI (Graphical User Interface) and a mouse. But its ill-fated $10,000 price tag doomed it from the start.\n more…\nThe post…",
    "url": "https://9to5mac.com/2023/01/19/on-this-day-in-history-before-the-macintosh-apple-computer-introduced-the-ill-fated-lisa/",
    "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/01/lisa.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    "publishedAt": "2023-01-19T14:53:21Z",
    "content": "On this day, in 1983, Apple Computer introduced the Lisa. One of the first personal computers to implement two new leading-edge ideas a GUI (Graphical User Interface) and a mouse. But its ill-fated $… [+2162 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "9to5Mac"
    },
    "author": "Ben Lovejoy",
    "title": "iPhone 14 horizontal lines upon waking? Fix coming in iOS 16.3 [U]",
    "description": "Update: The release notes for iOS 16.3 say that they fix the issue:\n\nFixes an issue where horizontal lines may temporarily appear while waking up iPhone 14 Pro Max\r\n\n\nThe update is already available to developers and beta testers, and will roll out to everyon…",
    "url": "https://9to5mac.com/2023/01/19/iphone-14-horizontal-lines/",
    "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/12/iPhone-14-horizontal-lines.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    "publishedAt": "2023-01-19T11:35:26Z",
    "content": "Update: The release notes for iOS 16.3 say that they fix the issue:\r\nFixes an issue where horizontal lines may temporarily appear while waking up iPhone 14 Pro Max\r\nThe update is already available to… [+2906 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "9to5Mac"
    },
    "author": "Rikka Altland",
    "title": "Deals: Apple Magic Keyboard with Touch ID hits $140, iPhone accessories from Anker and Zagg, more",
    "description": "All of today’s best deals are ripe for the picking this Thursday, with a rare price cut on Apple’s latest Magic Keyboard arriving with Touch ID in tow at $140. That’s alongside the colorful Anker Nano Pro 20W USB-C charger which is even more popular now that …",
    "url": "https://9to5mac.com/2023/01/19/apple-magic-keyboard-touch-id-anker-sale/",
    "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/01/apple-magic-keyboard-anker-charger.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    "publishedAt": "2023-01-19T16:50:35Z",
    "content": "All of today’s best deals are ripe for the picking this Thursday, with a rare price cut on Apples latest Magic Keyboard arriving with Touch ID in tow at $140. That’s alongside the colorful Anker Nano… [+3772 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "9to5Mac"
    },
    "author": "Seth Kurkowski",
    "title": "9to5Mac Daily: January 19, 2023 – New HomePod 2, iOS 16.3 details",
    "description": "Listen to a recap of the top stories of the day from 9to5Mac. 9to5Mac Daily is available on iTunes and Apple’s Podcasts app, Stitcher, TuneIn, Google Play, or through our dedicated RSS feed for Overcast and other podcast players.\nSponsored by Ulysses: The ult…",
    "url": "https://9to5mac.com/2023/01/19/9to5mac-daily-january-19-2023/",
    "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2021/12/9to5Mac-Daily-art-lead.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    "publishedAt": "2023-01-19T16:53:41Z",
    "content": "Listen to a recap of the top stories of the day from 9to5Mac. 9to5Mac Daily is available on iTunes and Apples Podcasts app, Stitcher, TuneIn, Google Play, or through our dedicated RSS feed for Overca… [+1020 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "9to5Mac"
    },
    "author": "Ben Lovejoy",
    "title": "UK price of the HomePod mini quietly increased as new HomePod launched",
    "description": "Yesterday’s (re)launch of the new HomePod was a pleasant surprise, but for those in the UK it was accompanied by a less-pleasant one: the UK price of the HomePod mini has risen by a tenner. And that wasn’t all … \n more…\nThe post UK price of the HomePod mini q…",
    "url": "https://9to5mac.com/2023/01/19/uk-price-of-the-homepod/",
    "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/01/UK-price-of-the-HomePod-mini.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    "publishedAt": "2023-01-19T14:38:56Z",
    "content": "Yesterday’s (re)launch of the new HomePod was a pleasant surprise, but for those in the UK it was accompanied by a less-pleasant one: the UK price of the HomePod mini has risen by a tenner. And that … [+1457 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "9to5Mac"
    },
    "author": "Michael Potuck",
    "title": "Pok Pok Playroom award-winning iOS app for kids gets Lunar New Year update",
    "description": "Kicking off the calendar year with its first big update, popular iOS app for kids Pok Pok Playroom has received new content to learn about and celebrate the Lunar New Year. Pok Pok Playroom is a fantastic app for young kids that’s designed for open-ended expl…",
    "url": "https://9to5mac.com/2023/01/19/pok-pok-playroom-for-kids-lunar-new-year-update/",
    "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/01/pok-pok-lunar-new-year.jpeg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    "publishedAt": "2023-01-19T15:04:10Z",
    "content": "Kicking off the calendar year with its first big update, popular iOS app for kids Pok Pok Playroom has received new content to learn about and celebrate the Lunar New Year.\r\nPok Pok Playroom is a fan… [+1065 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "9to5Mac"
    },
    "author": "Ben Lovejoy",
    "title": "2023 Mac mini Geekbench scores show dramatic multi-core improvements over M1 model",
    "description": "We didn’t have long to wait for 2023 Mac mini Geekbench scores, for both M2 and M2 Pro variants. As you’d expect, they show pretty dramatic performance gains over the M1 model launched back in November of 2020.\nThe base model M2 machine gets a relatively mode…",
    "url": "https://9to5mac.com/2023/01/19/2023-mac-mini-geekbench/",
    "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/01/2023-Mac-mini-Geekbench.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    "publishedAt": "2023-01-19T12:24:17Z",
    "content": "We didn’t have long to wait for 2023 Mac mini Geekbench scores, for both M2 and M2 Pro variants. As you’d expect, they show pretty dramatic performance gains over the M1 model launched back in Novemb… [+3098 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "9to5Mac"
    },
    "author": "Filipe Espósito",
    "title": "Dropbox users complain about broken AirDrop support on macOS Ventura",
    "description": "Multiple users of the popular cloud file platform Dropbox have been complaining about a new bug that causes AirDrop to no longer work for Dropbox files on macOS Ventura. The complaints follow the release of a new update to the Dropbox app for Mac that enables…",
    "url": "https://9to5mac.com/2023/01/18/dropbox-macos-airdrop-bug-update/",
    "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/01/dropbox-macOS.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    "publishedAt": "2023-01-19T00:19:40Z",
    "content": "Multiple users of the popular cloud file platform Dropbox have been complaining about a new bug that causes AirDrop to no longer work for Dropbox files on macOS Ventura. The complaints follow the rel… [+2081 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "9to5Mac"
    },
    "author": "Ben Lovejoy",
    "title": "Siri GPT-3 combo aims to create a truly smart voice assistant [Video]",
    "description": "A web developer has created a Siri GPT-3 mashup that is intended to demonstrate the potential for a truly smart voice assistant.\nThe AI system was able to make sense of conversational speech – including some in which the required action was implied rather tha…",
    "url": "https://9to5mac.com/2023/01/19/siri-gpt-3/",
    "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/01/Siri-GPT-3.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    "publishedAt": "2023-01-19T14:11:00Z",
    "content": "A web developer has created a Siri GPT-3 mashup that is intended to demonstrate the potential for a truly smart voice assistant.\r\nThe AI system was able to make sense of conversational speech includi… [+3155 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Android Police"
    },
    "author": "Rajesh Pandey",
    "title": "Google Messages can now keep group chats with up to 100 people private and secure",
    "description": "Your chats will remain private as long as your group contains up to 100 people",
    "url": "https://www.androidpolice.com/google-messages-keep-group-chats-100-people-private-secure/",
    "urlToImage": "https://static1.anpoimages.com/wordpress/wp-content/uploads/2023/01/google-messages-2023-ap-hero.jpg",
    "publishedAt": "2023-01-19T09:38:55Z",
    "content": "Google is heavily pushing RCS as the next big thing to replace text messaging in the US. To win over users and to persuade Apple to adopt RCS for iMessage, Google added end-to-end encryption (E2EE) f… [+1638 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Android Police"
    },
    "author": "Will Sattelberg",
    "title": "Google Pixel 8 & 8 Pro: News, price, release date, and all the leaks",
    "description": "After the Pixel 7 blew us away, what's next for our favorite Android phones?",
    "url": "https://www.androidpolice.com/google-pixel-8/",
    "urlToImage": "https://static1.anpoimages.com/wordpress/wp-content/uploads/2022/10/google-pixel-7-pro-hazel-6.jpg",
    "publishedAt": "2023-01-19T13:00:15Z",
    "content": "After months of leaks and speculation, the Google Pixel 7 and Google Pixel 7 Pro arrived on the market in style. Google took the lessons it learned from its first-gen Tensor-powered devices and launc… [+6100 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Genbeta.com"
    },
    "author": "José Alberto Lizana",
    "title": "Netflix tiene un problema: el 60% de los españoles comparten su cuenta y la abandonarían si se lo impiden",
    "description": "El hecho de tener una cuenta compartida entre varias personas es algo que hemos hecho todos para poder pagar dinero. Pero Netflix obviamente esto no le interesa, ya que está perdiendo dinero al no contar con más suscripciones individuales, y encima están baja…",
    "url": "https://www.genbeta.com/multimedia/netflix-tiene-problema-60-espanoles-comparten-su-cuenta-abandonarian-se-impiden",
    "urlToImage": "https://i.blogs.es/f24078/alexander-shatov-uvfvfrp4x4e-unsplash/840_560.jpg",
    "publishedAt": "2023-01-19T16:45:34Z",
    "content": "El hecho de tener una cuenta compartida entre varias personas es algo que hemos hecho todos para poder pagar dinero. Pero Netflix obviamente esto no le interesa, ya que está perdiendo dinero al no co… [+2647 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Autoblog"
    },
    "author": "Ronan Glon",
    "title": "Porsche expands its range of infotainment system retrofit kits",
    "description": "Filed under:\n Porsche,Infotainment\n Continue reading Porsche expands its range of infotainment system retrofit kits\nPorsche expands its range of infotainment system retrofit kits originally appeared on Autoblog on Thu, 19 Jan 2023 10:15:00 EST. Please see our…",
    "url": "https://www.autoblog.com/2023/01/19/porsche-infotainment-retrofit-911-cayman-boxster-cayenne/",
    "urlToImage": "https://o.aolcdn.com/images/dims3/GLOB/legacy_thumbnail/1062x597/format/jpg/quality/100/https://s.aolcdn.com/os/ab/_cms/2023/01/19090356/PCCM_Plus_987_Boxster_Start_Android_high.jpg",
    "publishedAt": "2023-01-19T15:15:00Z",
    "content": "Porsche's Classic division is expanding its catalog of infotainment system retrofit kits. The company now offers devices that are compatible with 997-generation 911 models and 987-generation Cayman a… [+1454 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Wikihow.com"
    },
    "author": "Josef Storzi",
    "title": "How to Set Up Voicemail on an iPhone",
    "description": "Easily receive and check voicemails on your iPhone with this simple guide\nDo you want to start using voicemail on your iPhone? With iPhone's Visual Voicemail format, you can easily set up voicemail in a few simple steps. You'll just need a voicemail password …",
    "url": "https://www.wikihow.com/Set-Up-Voicemail-on-an-iPhone",
    "urlToImage": "https://www.wikihow.com/images/5/54/Set-Up-Voicemail-on-an-iPhone-Step-17-Version-2.jpg",
    "publishedAt": "2023-01-19T16:00:00Z",
    "content": "This article was co-authored by Josef Storzi and by wikiHow staff writer, Rain Kengly. Josef Storzi is an Apple and Mobile Phone Repair Specialist and the Owner of Imobile LA, a mobile phone repair c… [+484 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Thekitchn.com"
    },
    "author": "Su-Jit Lin",
    "title": "I Tried Dozens of New Groceries Hitting Shelves This January — These Are the 12 I’m Most Excited About",
    "description": "Including a trio of cereals, plant-based frozen meals, pepperoni ravioli, and more.\nREAD MORE...",
    "url": "https://www.thekitchn.com/best-new-groceries-january-2023-23497889",
    "urlToImage": "https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fill,g_auto,w_1500,ar_3:2/k%2FDesign%2F2023-01%2Fgrocery-spotter%2Fgrocery-spotter-lead-jan10",
    "publishedAt": "2023-01-19T15:30:00Z",
    "content": "We independently select these products—if you buy from one of our links, we may earn a commission. All prices were accurate at the time of publishing.\r\nIts a fresh new year. And if this month is any … [+8188 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "AppleInsider"
    },
    "author": "news@appleinsider.com (Amber Neely)",
    "title": "Apple announces premiere dates for more Apple TV+ shows",
    "description": "Apple has announced premiere dates for additional Apple TV+ offerings available this spring, including the return of \"The Afterparty\" and \"Schmigadoon!\"Image Credit: AppleApple TV+ spring lineup continues as \"Schmigadoon!,\" \"City on Fire,\" \"The Last Thing He …",
    "url": "https://appleinsider.com/articles/23/01/19/apple-announces-premiere-dates-for-more-apple-tv-shows",
    "urlToImage": "https://photos5.appleinsider.com/gallery/52547-104937-011823_ATV_award_winning_musical_comedy_schmigadoon_takes_the_stage_for_season_two_Big_Image_01_big_image_postjpglarge_2x-xl.jpg",
    "publishedAt": "2023-01-19T00:46:17Z",
    "content": "Image Credit: Apple\r\nAppleInsider may earn an affiliate commission on purchases made through links on our site.\r\nApple has announced premiere dates for additional Apple TV+ offerings available this s… [+2236 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "AppleInsider"
    },
    "author": "news@appleinsider.com (William Gallagher)",
    "title": "Apple Lisa changed computing 40 years ago, but the world didn't notice",
    "description": "Just about everything the Mac brought to technology was already there a year before with the failed Apple Lisa, that launched on January 19, 1983.Steve Jobs with an Apple LisaIt wasn't a public launch, it wasn't anything like the kind of presentation you now …",
    "url": "https://appleinsider.com/articles/23/01/19/apple-lisa-changed-computing-40-years-ago-but-the-world-didnt-notice",
    "urlToImage": "https://photos5.appleinsider.com/gallery/52516-104958-000-lead-Steve-Jobs-at-Lisa-xl.jpg",
    "publishedAt": "2023-01-19T12:40:19Z",
    "content": "Steve Jobs with an Apple Lisa\r\nAppleInsider may earn an affiliate commission on purchases made through links on our site.\r\nJust about everything the Mac brought to technology was already there a year… [+11050 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "AppleInsider"
    },
    "author": "news@appleinsider.com (Charles Martin)",
    "title": "Element Case Special Ops Apple Watch band review: For those who like to play rough",
    "description": "The Element Case Special Ops Apple Watch band brings military style, extra protection to a case-and-band combo for the Apple Watch Series 7 and 8.Those living an active outdoor lifestyle often want to have some extra protection for their Apple Watch. Although…",
    "url": "https://appleinsider.com/articles/23/01/19/element-case-special-ops-apple-watch-band-review-for-those-who-like-to-play-rough",
    "urlToImage": "https://photos5.appleinsider.com/gallery/52470-104812-IMG_0455-xl.jpg",
    "publishedAt": "2023-01-19T14:01:28Z",
    "content": "AppleInsider may earn an affiliate commission on purchases made through links on our site.\r\nThe Element Case Special Ops Apple Watch band brings military style, extra protection to a case-and-band co… [+5370 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "AppleInsider"
    },
    "author": "news@appleinsider.com (Wesley Hilliard)",
    "title": "M3 MacBook Air reportedly hits store shelves by end of 2023",
    "description": "A new and questionable report suggests that Apple's next MacBook Air running the M3 processor is coming in the second half of 2023.Apple could bring M3 to MacBook Air sooner than expectedThe MacBook Air was only just refreshed during WWDC 2022 in June, but ru…",
    "url": "https://appleinsider.com/articles/23/01/19/m3-macbook-air-reportedly-hits-store-shelves-by-end-of-2023",
    "urlToImage": "https://photos5.appleinsider.com/gallery/52556-104973-M2-MBA-closed-xl.jpg",
    "publishedAt": "2023-01-19T16:26:50Z",
    "content": "Apple could bring M3 to MacBook Air sooner than expected\r\nAppleInsider may earn an affiliate commission on purchases made through links on our site.\r\nA new and questionable report suggests that Apple… [+1931 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "AppleInsider"
    },
    "author": "news@appleinsider.com (William Gallagher)",
    "title": "Beta iOS 16.3 code shows Apple Music Classical is still coming",
    "description": "Although not announced for iOS 16.3, there is more Apple Music Classical code within the beta release, and it's being changed as the service gets closer.Apple's recent developer beta of iOS 16.3 was a release candidate, and it's expected to be issued publicly…",
    "url": "https://appleinsider.com/articles/23/01/19/beta-ios-163-code-shows-apple-music-classical-is-still-coming",
    "urlToImage": "https://photos5.appleinsider.com/gallery/47795-93373-000-lead-Apple-Classical-xl.jpg",
    "publishedAt": "2023-01-19T15:15:35Z",
    "content": "AppleInsider may earn an affiliate commission on purchases made through links on our site.\r\nAlthough not announced for iOS 16.3, there is more Apple Music Classical code within the beta release, and … [+1034 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "AppleInsider"
    },
    "author": "news@appleinsider.com (Andrew Orr)",
    "title": "Apple shipped seven million Macs despite market drop in 2022",
    "description": "Global PC shipments fell 27.8% in quarter four of 2022, but Apple weathered the market plunge with only a minor decline.M2 MacBook AirMacroeconomic headwinds such as increasing inflation and low consumer demand contributed to the drop down to 65.2 million PC …",
    "url": "https://appleinsider.com/articles/23/01/19/apple-shipped-seven-million-macs-despite-market-drop-in-2022",
    "urlToImage": "https://photos5.appleinsider.com/gallery/52552-104960-M2-MacBook-Air-xl.jpg",
    "publishedAt": "2023-01-19T14:35:19Z",
    "content": "M2 MacBook Air\r\nAppleInsider may earn an affiliate commission on purchases made through links on our site.\r\nGlobal PC shipments fell 27.8% in quarter four of 2022, but Apple weathered the market plun… [+1891 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "AppleInsider"
    },
    "author": "news@appleinsider.com (Wesley Hilliard)",
    "title": "What you need to know about virtual reality in 2023",
    "description": "New technologies are coming in virtual reality headsets, and terms are getting bandied about like everybody already knows what they are. Here are most of the terms you're hearing, and what they meanApple is expected to introduce its own VR headset in 2023Rumo…",
    "url": "https://appleinsider.com/inside/apple-vr/tips/what-you-need-to-know-about-virtual-reality-in-2023",
    "urlToImage": "https://photos5.appleinsider.com/gallery/52426-104788-Apple-VR-table-xl.jpg",
    "publishedAt": "2023-01-19T17:31:02Z",
    "content": "Apple is expected to introduce its own VR headset in 2023\r\nAppleInsider may earn an affiliate commission on purchases made through links on our site.\r\nNew technologies are coming in virtual reality h… [+10000 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "AppleInsider"
    },
    "author": "news@appleinsider.com (Chip Loder)",
    "title": "How to store extended file attributes in iCloud",
    "description": "Apple's iCloud file storage service is a handy way to store and share files, but it can remove important file attributes during sync. Here's how to fix that.Apple's macOS and some other operating systems store descriptive information about files known as meta…",
    "url": "https://appleinsider.com/inside/icloud/tips/how-to-store-extended-file-attributes-in-icloud",
    "urlToImage": "https://photos5.appleinsider.com/gallery/52176-104948-lede-xl.jpg",
    "publishedAt": "2023-01-19T12:16:35Z",
    "content": "AppleInsider may earn an affiliate commission on purchases made through links on our site.\r\nApple's iCloud file storage service is a handy way to store and share files, but it can remove important fi… [+9515 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "AppleInsider"
    },
    "author": "news@appleinsider.com (Christine McKee)",
    "title": "Amazon already dropped the price on Apple's 2023 MacBook Pro 14-inch",
    "description": "Despite being announced this week, Apple resellers, including Amazon, are already offering discounts on the M2 Pro 14-inch MacBook Pro.Save on Apple's new MacBook Pro.Amazon has issued a $50 price cut on Apple's standard 2023 MacBook Pro 14-inch this Thursday…",
    "url": "https://appleinsider.com/articles/23/01/19/amazon-already-dropped-the-price-on-apples-2023-macbook-pro-14-inch",
    "urlToImage": "https://photos5.appleinsider.com/gallery/52553-104963-2023-macbook-pro-14-inch-amazon-xl.jpg",
    "publishedAt": "2023-01-19T14:57:58Z",
    "content": "Save on Apple's new MacBook Pro.\r\nAppleInsider may earn an affiliate commission on purchases made through links on our site.\r\nDespite being announced this week, Apple resellers, including Amazon, are… [+891 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "AppleInsider"
    },
    "author": "news@appleinsider.com (William Gallagher)",
    "title": "Fix for iPhone 14 Pro Max horizontal lines bug is in iOS 16.3",
    "description": "The forthcoming iOS 16.3 is now confirmed to fix an issue where some iPhone 14 Pro Max users were seeing one or many yellow lines at startup.iOS 16.3 fixes the horizontal lines bugAs previously reported, the horizontal lines were appearing for an unknown numb…",
    "url": "https://appleinsider.com/articles/23/01/19/fix-for-iphone-14-pro-max-horizontal-lines-bug-is-in-ios-163",
    "urlToImage": "https://photos5.appleinsider.com/gallery/52383-104446-iOS-16-logo-xl.jpg",
    "publishedAt": "2023-01-19T13:11:05Z",
    "content": "iOS 16.3 fixes the horizontal lines bug\r\nAppleInsider may earn an affiliate commission on purchases made through links on our site.\r\nThe forthcoming iOS 16.3 is now confirmed to fix an issue where so… [+826 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "AppleInsider"
    },
    "author": "news@appleinsider.com (William Gallagher)",
    "title": "JP Morgan cuts AAPL target price because of tough holiday earnings",
    "description": "Citing continuing supply issues and falling demand, investment analyst firm JP Morgan has lowered its AAPL target price to $180.iPhone 14 ProIn December 2022, JP Morgan lowered its target from $200 to $190, specifically on concerns around the availability of …",
    "url": "https://appleinsider.com/articles/23/01/19/jp-morgan-cuts-aapl-target-price-because-of-tough-holiday-earnings",
    "urlToImage": "https://photos5.appleinsider.com/gallery/51248-101265-50854-100402-iphone_14_pro_max_sensor_housing-xl-xl.jpg",
    "publishedAt": "2023-01-19T12:22:14Z",
    "content": "iPhone 14 Pro\r\nAppleInsider may earn an affiliate commission on purchases made through links on our site.\r\nCiting continuing supply issues and falling demand, investment analyst firm JP Morgan has lo… [+2114 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "AppleInsider"
    },
    "author": "news@appleinsider.com (William Gallagher)",
    "title": "First M2 Pro benchmarks show dramatic improvement over even M1 Max",
    "description": "Geekbench results seemingly for the M2 Pro Mac mini are of course better than for the M1 version, but they also greatly exceed the M1 Max figures.Apple has not yet shipped the Mac mini with M2 Pro, but Geekbench now includes an entry for device identified as …",
    "url": "https://appleinsider.com/articles/23/01/19/first-m2-pro-benchmarks-show-dramatic-improvement-over-even-m1-max",
    "urlToImage": "https://photos5.appleinsider.com/gallery/52502-104865-000-lead-Mac-mini-xl.jpg",
    "publishedAt": "2023-01-19T11:46:49Z",
    "content": "AppleInsider may earn an affiliate commission on purchases made through links on our site.\r\nGeekbench results seemingly for the M2 Pro Mac mini are of course better than for the M1 version, but they … [+1332 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "AppleInsider"
    },
    "author": "news@appleinsider.com (Jess Pingrey)",
    "title": "Daily Deals Jan. 19: $50 off 2023 14-inch MacBook Pro, Google Nest Doorbell for $80, Apple Watch Series 8 for $88 & more",
    "description": "Some of the most valuable deals we discovered today include 47% off a Samsung Trio Wireless Charging Pad, 25% off a 10.2\" iPad with Keyboard and Tempered Glass Kit, 40% off a Shark AI Robot Vacuum, and up to 35% off Sony TVs, soundbars, and speakers.Get a Goo…",
    "url": "https://appleinsider.com/articles/23/01/19/daily-deals-jan-19-50-off-2023-14-inch-macbook-pro-google-nest-doorbell-for-80-apple-watch-series-8-for-88-more",
    "urlToImage": "https://photos5.appleinsider.com/gallery/52511-104936-daily-deals-Jan-19-xl.jpg",
    "publishedAt": "2023-01-19T14:26:23Z",
    "content": "Get a Google Nest Doorbell for $80\r\nAppleInsider may earn an affiliate commission on purchases made through links on our site.\r\nSome of the most valuable deals we discovered today include 47% off a S… [+3253 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Macworld"
    },
    "author": "Roman Loyola, Jason Cross, Michael Simon",
    "title": "The big deal about the new Mac mini, 14- and 16-inch MacBook Pro, HomePod",
    "description": "In the recent history of Apple, January is often a quiet month for product releases. But not this year! We’ve got new MacBook Pros, new Mac minis, and new M2 chips, and we’re talking about them all on this episode of the Macworld Podcast!  \r\n\n\n\n\nThis is episo…",
    "url": "https://www.macworld.com/article/1475813/big-deal-new-m2-mac-mini-macbook-pro.html",
    "urlToImage": "https://www.macworld.com/wp-content/uploads/2023/01/M2-pro-macs.jpg?quality=50&strip=all&w=1024",
    "publishedAt": "2023-01-19T08:30:00Z",
    "content": "Skip to contentType your search and hit enter\r\nWhen you purchase through links in our articles, we may earn a small commission. This doesn't affect our editorial independence\r\n.\r\nIn the recent histor… [+29153 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "CNET"
    },
    "author": "Meara Isenberg",
    "title": "'Scream 6' Trailer Sets Ghostface Loose in New York City - CNET",
    "description": "The movie, starring Jenna Ortega and Courteney Cox, is out in March.",
    "url": "https://www.cnet.com/culture/entertainment/scream-6-trailer-sets-ghostface-loose-in-new-york-city/",
    "urlToImage": "https://www.cnet.com/a/img/resize/bb87e7390de975e6f6dc5f1f1d0b2351eb39c639/hub/2023/01/19/a04030c0-9fac-43fa-a8df-ab4faecd0a58/scr6-05714r.jpg?auto=webp&fit=crop&height=630&width=1200",
    "publishedAt": "2023-01-19T14:05:00Z",
    "content": "New York City is Ghostface's playground in the first full trailer for Scream 6 -- or Scream VI -- released Thursday.\r\nThe chilling preview sees returning cast members Melissa Barrera and Wednesday's … [+1322 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "CNET"
    },
    "author": "Adrian Marlow",
    "title": "Woot Has Grade A Refurbished iPhone SE Models From $300 for a Limited Time - CNET",
    "description": "This 2022 iPhone SE is a solid budget-friendly option in nearly new condition.",
    "url": "https://www.cnet.com/deals/woot-refurb-iphone-se-2022-from-300/",
    "urlToImage": "https://www.cnet.com/a/img/resize/1b2c0c956e1e23920a06ef3b6c1ed4385cda16eb/hub/2022/11/17/28374631-092c-4eb7-a8c1-7514e442997b/apple-iphonese-color-lineup-4up.jpg?auto=webp&fit=crop&height=630&width=1200",
    "publishedAt": "2023-01-19T13:19:31Z",
    "content": "Looking for a great phone on a limited budget? There are plenty of cheap phones on the market but Apple's iPhone SE is certainly the most affordable way to get an iPhone. And right now you can get yo… [+1553 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Yanko Design"
    },
    "author": "Srishti Mitra",
    "title": "This all-black glass home was designed to wrap around an apple tree",
    "description": "This all-black glass home was designed to wrap around an apple treeSt.Donat is a rural area near Montreal that is often frequented as a popular getaway destination for the weekends. Montreal-based studio ACDF Architecture designed a...",
    "url": "https://www.yankodesign.com/2023/01/19/this-all-black-glass-home-was-designed-to-wrap-around-an-apple-tree/",
    "urlToImage": "https://www.yankodesign.com/images/design_news/2023/01/the-apple-tree-house/the_apple_tree_house_yanko_design_01.jpg",
    "publishedAt": "2023-01-19T12:40:59Z",
    "content": "St.Donat is a rural area near Montreal that is often frequented as a popular getaway destination for the weekends. Montreal-based studio ACDF Architecture designed a low-slung contemporary home that … [+2211 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Windows Central"
    },
    "author": "jez@windowscentral.com (Jez Corden)",
    "title": "Reacting to the Microsoft layoffs",
    "description": "As Microsoft moves to reduce a massive 10,000 employees from its global workforce, staff both past and present are reacting with anger and lamentations. When will the uncertainty end?",
    "url": "https://www.windowscentral.com/microsoft/from-the-editors-desk-reacting-to-microsofts-layoffs",
    "urlToImage": "https://cdn.mos.cms.futurecdn.net/GAFrPEd3spNmETQRbTeffB-1200-80.jpg",
    "publishedAt": "2023-01-19T13:32:19Z",
    "content": "This week, Microsoft joined other tech firms like Amazon and Meta in laying off thousands of employees from its global workforce. The cuts have sent shockwaves through the tech world, and many staff … [+12000 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Journal du geek"
    },
    "author": "Thomas Estimbre",
    "title": "Apple TV : Apple fait tout pour décourager les utilisateurs Android",
    "description": "Avec la dernière mise à jour de tvOS, Apple fait évoluer les conditions d’utilisations d’iCloud. Pour les accepter, il faut se munir d’un iPhone ou iPad et cela pose forcément quelques problèmes. Il existe quand même une parade.\nApple TV : Apple fait tout pou…",
    "url": "https://www.journaldugeek.com/2023/01/19/apple-tv-apple-fait-tout-pour-decourager-les-utilisateurs-android/",
    "urlToImage": "https://www.journaldugeek.com/content/uploads/2023/01/apple-tv4k-2022-test.jpg",
    "publishedAt": "2023-01-19T13:30:41Z",
    "content": "Avec la dernière mise à jour de tvOS, Apple fait évoluer les conditions dutilisations diCloud. Pour les accepter, il faut se munir dun iPhone ou iPad et cela pose forcément quelques problèmes. Il exi… [+2667 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Journal du geek"
    },
    "author": "Tristan",
    "title": "Apple lance iOS 16.3, avec quelles nouveautés ?",
    "description": "Apple vient d'annoncer la date de sortie d'iOS 16.3 ainsi que les trois grandes nouveautés de cette version. \nApple lance iOS 16.3, avec quelles nouveautés ?",
    "url": "https://www.journaldugeek.com/2023/01/19/apple-lance-ios-16-3-avec-quelles-nouveautes/",
    "urlToImage": "https://www.journaldugeek.com/content/uploads/2022/09/ios-16-bouton-recherche.jpg",
    "publishedAt": "2023-01-19T14:30:33Z",
    "content": "Apple vient d'annoncer la date de sortie d'iOS 16.3 ainsi que les trois grandes nouveautés de cette version.La semaine a été chargée en annonce du côté de Cupertino. La marque à la pomme a notamment … [+2403 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Journal du geek"
    },
    "author": "Tristan",
    "title": "Apple : le HomePod mini bénéficiait d’une fonctionnalité cachée",
    "description": "Apple vient de lancer un nouveau HomePod et profite de l'occasion pour dévoiler une nouvelle fonctionnalité sur le HomePod mini. \nApple : le HomePod mini bénéficiait d’une fonctionnalité cachée",
    "url": "https://www.journaldugeek.com/2023/01/19/apple-le-homepod-mini-beneficiait-dune-fonctionnalite-cachee/",
    "urlToImage": "https://www.journaldugeek.com/content/uploads/2023/01/apple-homepod-2.jpg",
    "publishedAt": "2023-01-19T16:30:53Z",
    "content": "Apple vient de lancer un nouveau HomePod et profite de l'occasion pour dévoiler une nouvelle fonctionnalité sur le HomePod mini.Le 13 octobre 2020, Apple présente le HomePod mini au cours dun keynote… [+2525 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Journal du geek"
    },
    "author": "Arthur Nicolle",
    "title": "Ted Lasso : la meilleure série Apple TV+ revient très bientôt",
    "description": "Bonne nouvelle pour les abonnés au service de streaming de la Pomme, la mascotte numéro un des programmes originaux signe son retour.\nTed Lasso : la meilleure série Apple TV+ revient très bientôt",
    "url": "https://www.journaldugeek.com/2023/01/19/ted-lasso-la-meilleure-serie-apple-tv-revient-tres-bientot/",
    "urlToImage": "https://www.journaldugeek.com/content/uploads/2023/01/copie-de-ajouter-un-titre-13-1.jpg",
    "publishedAt": "2023-01-19T11:00:03Z",
    "content": "Bonne nouvelle pour les abonnés au service de streaming de la Pomme, la mascotte numéro un des programmes originaux signe son retour.Après de fortes annonces côté hardware avec les nouveaux Macbook P… [+2592 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Journal du geek"
    },
    "author": "Partenaire",
    "title": "Voici les 4 meilleures offres chez Rue du Commerce pendant les soldes",
    "description": "Pour les soldes, Rue du Commerce met les petits plats dans les grands. Des centaines de produits jouissent de réductions hallucinantes pendant encore quelques jours. Ordinateurs, smartphones, téléviseurs… Il y en a pour tous les goûts ! \nVoici les 4 meilleure…",
    "url": "https://www.journaldugeek.com/2023/01/19/voici-les-4-meilleures-offres-chez-rue-du-commerce-pendant-les-soldes/",
    "urlToImage": "https://www.journaldugeek.com/content/uploads/2023/01/soldes-rdc-1400x932-2d.jpg",
    "publishedAt": "2023-01-19T17:17:40Z",
    "content": "Pour les soldes, Rue du Commerce met les petits plats dans les grands. Des centaines de produits jouissent de réductions hallucinantes pendant encore quelques jours. Ordinateurs, smartphones, télévis… [+5574 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Applesfera.com"
    },
    "author": "Miguel López",
    "title": "¿Tiene sentido un Google Nest Hub de Apple? Parece que sí, y Gurman cree que lo veremos",
    "description": "La sorpresiva llegada de los nuevos HomePod puede ser la punta de un iceberg que puede reflotar durante los próximos meses. Mark Gurman ha afirmado desde Bloomberg que Apple prepara otro dispositivo que ampliaría su gama de productos para el hogar.\n<!-- BREAK…",
    "url": "https://www.applesfera.com/rumores/tiene-sentido-google-nest-hub-apple-parece-que-gurman-cree-que-veremos",
    "urlToImage": "https://i.blogs.es/c39d73/1366_2000/840_560.jpeg",
    "publishedAt": "2023-01-19T14:32:00Z",
    "content": "La sorpresiva llegada de los nuevos HomePod puede ser la punta de un iceberg que puede reflotar durante los próximos meses. Mark Gurman ha afirmado desde Bloomberg que Apple prepara otro dispositivo … [+1091 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Applesfera.com"
    },
    "author": "David Bernal Raspall",
    "title": "Apple actualiza el firmware de todos los AirPods: así podemos comprobar que ya lo hemos instalado",
    "description": "Apple ha lanzado actualizaciones de firmware para todos los modelos de AirPods: los AirPods, los AirPods Pro y los AirPods Max. Ahora mismo desconocemos qué novedades exactas se incluyen en la actualización, pero dada la llegada inminente de iOS 16.3 y del re…",
    "url": "https://www.applesfera.com/accesorios/apple-actualiza-firmware-todos-airpods-asi-podemos-comprobar-que-hemos-instalado",
    "urlToImage": "https://i.blogs.es/d60dcc/hero/840_560.jpeg",
    "publishedAt": "2023-01-19T07:54:20Z",
    "content": "Apple ha lanzado actualizaciones de firmware para todos los modelos de AirPods: los AirPods, los AirPods Pro y los AirPods Max. Ahora mismo desconocemos qué novedades exactas se incluyen en la actual… [+2301 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Applesfera.com"
    },
    "author": "David Bernal Raspall",
    "title": "iOS 16.3 es inminente y esconde una novedad importantísima para nuestro iPhone",
    "description": "Tras la oleada de novedades del martes, en forma de nuevos Mac mini M2 y MacBook Pro M2, de la sorpresa de ayer en forma de un nuevo HomePod, de descubrir que nuestros HomePod mini tienen un termómetro que ya podemos activar y de actualizar el firmware de tod…",
    "url": "https://www.applesfera.com/seguridad/ios-16-3-inminente-esconde-novedad-importantisima-para-nuestro-iphone",
    "urlToImage": "https://i.blogs.es/c01728/hero2/840_560.jpeg",
    "publishedAt": "2023-01-19T11:01:36Z",
    "content": "Tras la oleada de novedades del martes, en forma de nuevos Mac mini M2 y MacBook Pro M2, de la sorpresa de ayer en forma de un nuevo HomePod, de descubrir que nuestros HomePod mini tienen un termómet… [+2704 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Applesfera.com"
    },
    "author": "Isra Fdez",
    "title": "¿Un iPhone con tapa? Vuelve la moda de los teléfonos concha por una buena razón",
    "description": "Regreso a 1999. El fin de una era. 'Matrix' recién estrenada en los cines de medio mundo. Keanu Reeves desplegando la tapa de ese Nokia 8110 modificado que se acabaría convirtiendo en toda una revolución en ventas. Estamos en pleno 2023 y la venta de smartpho…",
    "url": "https://www.applesfera.com/curiosidades/iphone-tapa-vuelve-moda-telefonos-concha-buena-razon",
    "urlToImage": "https://i.blogs.es/4a8f9c/iphone-con-concha/840_560.jpeg",
    "publishedAt": "2023-01-19T12:01:36Z",
    "content": "Regreso a 1999. El fin de una era. 'Matrix' recién estrenada en los cines de medio mundo. Keanu Reeves desplegando la tapa de ese Nokia 8110 modificado que se acabaría convirtiendo en toda una revolu… [+2767 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Applesfera.com"
    },
    "author": "David Bernal Raspall",
    "title": "Esto es todo lo que perdemos si desactivamos el Wi-Fi del iPhone",
    "description": "¿Debemos desactivar el Wi-Fi de nuestro iPhone? Algunos dicen que sí, otros dicen que no, y algunos más dicen que depende. Y lo cierto es que sí depende, pues en algunos entornos y especialmente si necesitamos conservar al máximo la batería puede ser buena id…",
    "url": "https://www.applesfera.com/tutoriales/esto-todo-que-perdemos-desactivamos-wi-fi-iphone",
    "urlToImage": "https://i.blogs.es/0b2e2d/hero/840_560.jpeg",
    "publishedAt": "2023-01-19T15:01:36Z",
    "content": "¿Debemos desactivar el Wi-Fi de nuestro iPhone? Algunos dicen que sí, otros dicen que no, y algunos más dicen que depende. Y lo cierto es que sí depende, pues en algunos entornos y especialmente si n… [+2373 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Applesfera.com"
    },
    "author": "David Bernal Raspall",
    "title": "El HomePod mini tiene un termómetro y un sensor de humedad que ya podemos activar, aunque lo mejor es esperar al lunes",
    "description": "Una de las novedades de los recién presentados HomePod es la inclusión de un sensor de temperatura y humedad que podemos utilizar para conocer las condiciones de nuestro hogar desde la app Casa. Una novedad que, por extraño que parezca, también llega al HomeP…",
    "url": "https://www.applesfera.com/tutoriales/homepod-mini-tiene-termometro-sensor-humedad-que-podemos-activar-mejor-esperar-al-lunes",
    "urlToImage": "https://i.blogs.es/68a4e1/hero/840_560.jpeg",
    "publishedAt": "2023-01-19T07:33:46Z",
    "content": "Una de las novedades de los recién presentados HomePod es la inclusión de un sensor de temperatura y humedad que podemos utilizar para conocer las condiciones de nuestro hogar desde la app Casa. Una … [+2797 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Applesfera.com"
    },
    "author": "Isra Fdez",
    "title": "¿Me compro un Mac Mini M2 Pro o espero a un Mac Studio renovado?",
    "description": "El debate está servido. Los nuevos Mac Mini con procesadores M2 y M2 Pro lo tienen todo para triunfar: son baratos, solventes y la solución lógica para quien busca \"potencia suficiente pero no demasiada\". Yo mismo llevo 48 horas devanándome la cabeza sin acla…",
    "url": "https://www.applesfera.com/sobremesa/me-compro-mac-mini-m2-pro-espero-a-mac-studio-renovado",
    "urlToImage": "https://i.blogs.es/af2ba9/hero2/840_560.jpeg",
    "publishedAt": "2023-01-19T09:01:38Z",
    "content": "El debate está servido. Los nuevos Mac Mini con procesadores M2 y M2 Pro lo tienen todo para triunfar: son baratos, solventes y la solución lógica para quien busca \"potencia suficiente pero no demasi… [+4628 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Applesfera.com"
    },
    "author": "Isra Fdez",
    "title": "Pasaba tanta hambre que canjeaba latas por cupones de comida: la peor etapa de Steve Jobs",
    "description": "Con 25 años ya poseía una fortuna valorada en 100 millones de dólares. Con 30 tenía que esconder el Porsche 911 para convencer a los accionistas. A lo largo de su carrera, Steve Jobs acumuló un valor patrimonial de uno 7 mil millones de dólares. Sin embargo, …",
    "url": "https://www.applesfera.com/curiosidades/pasaba-tanta-hambre-que-canjeaba-latas-cupones-comida-peor-etapa-steve-jobs",
    "urlToImage": "https://i.blogs.es/5cb877/portadilla-steve-jobs/840_560.jpeg",
    "publishedAt": "2023-01-19T17:01:38Z",
    "content": "Con 25 años ya poseía una fortuna valorada en 100 millones de dólares. Con 30 tenía que esconder el Porsche 911 para convencer a los accionistas. A lo largo de su carrera, Steve Jobs acumuló un valor… [+3084 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "MakeUseOf"
    },
    "author": "Alvin Wanjala",
    "title": "Can You Change the iOS Text Color on an iPhone?",
    "description": "You probably want to change the default text color on your iPhone, but can you? Read this to find out.",
    "url": "https://www.makeuseof.com/how-to-change-ios-text-color/",
    "urlToImage": "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2022/10/iPhone-updated-to-iOS-16.jpg",
    "publishedAt": "2023-01-19T11:46:15Z",
    "content": "Apple has slowly but steadily added customization in iOS, especially on the Home Screen, which has been exclusive to Android users for a long time. With Apple gradually enabling customization on the … [+2069 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "MakeUseOf"
    },
    "author": "Kelvin Ekun",
    "title": "Can’t Log Into Your Mac? Try These 4 Tips",
    "description": "Instead of panicking, follow these troubleshooting steps and regain access to your Mac.",
    "url": "https://www.makeuseof.com/fix-unable-to-log-into-mac/",
    "urlToImage": "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2023/01/young-woman-sitting-in-front-of-a-macbook.jpg",
    "publishedAt": "2023-01-19T12:15:15Z",
    "content": "The first step to working on your Mac is to log into it. However, it becomes frustrating and time-consuming if you cannot log into your Mac. Being unable to log into your Mac is a common issue many M… [+3530 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "MakeUseOf"
    },
    "author": "Christian Cawley",
    "title": "What Is CES, What Happens There, and What Products Were Unveiled at CES 2023?",
    "description": "We answer all your questions about CES and look forward to new products in 2023.",
    "url": "https://www.makeuseof.com/what-is-ces-what-happens-what-products-were-unveiled-ces-2023/",
    "urlToImage": "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2023/01/rup-ces-las-vegas-gavin-phillips.jpg",
    "publishedAt": "2023-01-19T11:30:15Z",
    "content": "You've seen the name \"CES\" in the papers and on TV reports, but what is it all about, really? Why do technology journalists attend every year, and what are big companies like Samsung, Lenovo, etc. do… [+546 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Theregister.com"
    },
    "author": "Simon Sharwood",
    "title": "Punch-drunk Apple Watch called 15 cops to a boxing workout when it heard 'shots'",
    "description": "Hey Siri, did you know know that swatting is a bug, not a feature?\nAn Australian personal trainer's Apple Watch inadvertently summoned 15 police to a suspected shooting that was nothing of the sort.…",
    "url": "https://www.theregister.com/2023/01/19/apple_watch_called_police/",
    "urlToImage": "https://regmedia.co.uk/2018/02/25/shutterstock_punch.jpg",
    "publishedAt": "2023-01-19T13:15:09Z",
    "content": "An Australian personal trainer's Apple Watch inadvertently summoned 15 police to a suspected shooting that was nothing of the sort.\r\nSydney man Jamie Alleyne was running a boxing class, with a client… [+1124 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Phandroid - News for Android"
    },
    "author": "Mike Viray",
    "title": "Samsung Wallet is Coming to More Regions, Expanding its User Base",
    "description": "Samsung users in more regions will finally have access to the app.\nThe post Samsung Wallet is Coming to More Regions, Expanding its User Base first appeared on Phandroid.",
    "url": "https://phandroid.com/2023/01/19/samsung-wallet-is-coming-to-more-regions-expanding-its-user-base/",
    "urlToImage": "https://phandroid.com/wp-content/uploads/2022/06/samsung-wallet-640x360.jpg",
    "publishedAt": "2023-01-19T15:20:40Z",
    "content": "A while back, Samsung introduced its revamped version of its “Wallet” software feature, will let Samsung Galaxy users organize their digital keys, boarding passes, and more through a single applicati… [+1255 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "DIYphotography"
    },
    "author": "Alex Baker",
    "title": "New M2 Chips revealed as Apple launches updates to MacBook Pro & Mac mini",
    "description": "Apple has just introduced two new updated computers sporting brand new M2 chips, the M2 Pro and M2 Max, two next-gen SoCs (system on a chip). The chips are being used in the 14 and 16 inch MacBook Pro and Mac Mini computers. The chips are the next generation …",
    "url": "https://www.diyphotography.net/new-m2-chips-revealed-as-apple-launches-updates-to-macbook-pro-mac-mini/",
    "urlToImage": "https://www.diyphotography.net/wp-content/uploads/2023/01/Apple-MacBook-Pro-M2-Pro-and-M2-Max-2-up-230117.webp",
    "publishedAt": "2023-01-19T07:32:29Z",
    "content": "Apple has just introduced two new updated computers sporting brand new M2 chips, the M2 Pro and M2 Max, two next-gen SoCs (system on a chip). The chips are being used in the 14 and 16 inch MacBook Pr… [+2559 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Presse-citron"
    },
    "author": "Setra",
    "title": "Comment Apple veut s’inviter chez vous",
    "description": "Après le lancement du HomePod 2, Apple prépare une plus large offensive sur la maison connectée. Un concurent des Nest Hub de Google et des Echo Show d’Amazon serait bien en préparation.",
    "url": "https://www.presse-citron.net/comment-apple-veut-sinviter-chez-vous/",
    "urlToImage": "https://www.presse-citron.net/app/uploads/2020/11/homepod-mini-iphone-12-pro-max.jpg",
    "publishedAt": "2023-01-19T14:00:49Z",
    "content": "Apple fait partie des leaders sur les marchés des smartphones et des ordinateurs, et domine ceux des montres connectées et des écouteurs sans fil. Mais la firme à des difficultés à concurrencer Amazo… [+2371 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Presse-citron"
    },
    "author": "Presse-citron",
    "title": "Pour fabriquer un iPhone, il faut 10x plus de personnes que pour Android",
    "description": "Ne croyez pas pour autant que c'est ce seul facteur ce qui explique son prix exorbitant, que nenni.",
    "url": "https://www.presse-citron.net/?p=535179",
    "urlToImage": "https://www.presse-citron.net/app/uploads/2018/10/Presse-Citron-2019-1.jpg",
    "publishedAt": "2023-01-19T18:00:58Z",
    "content": "À cause de nombreux soucis de production, les iPhone ont eu du plomb dans l’aile fin 2022. Les modèles les plus populaires sont en effet venus à manquer, ce qui pourrait avoir fait perdre des milliar… [+2691 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Presse-citron"
    },
    "author": "Presse-citron",
    "title": "Marché : un seul fabricant de smartphones résiste encore à la crise",
    "description": "Il est difficile de convaincre les clients quand les prix sont à la hausse, mais Samsung conserve sa position de leader sur douze mois.",
    "url": "https://www.presse-citron.net/marche-seul-fabricant-smartphones-resiste-encore-crise/",
    "urlToImage": "https://www.presse-citron.net/app/uploads/2023/01/logo-apple-metal-mac.jpg",
    "publishedAt": "2023-01-19T13:15:59Z",
    "content": "Le cabinet Canalys vient de publier ses estimations pour le dernier trimestre 2022 en ce qui concerne les ventes mondiales de smartphones. On y découvre que le secteur est en chute libre : -17% d’une… [+2436 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Golem.de"
    },
    "author": "Tobias Költzsch",
    "title": "Apple, Samsung und Co.: Schlechtestes Quartal für Smartphones seit zehn Jahren",
    "description": "Die globalen Smartphone-Verkäufe litten 2022 unter der weltweiten Rezession - das vierte Quartal war das schlechteste in zehn Jahren. (Smartphone, Apple)",
    "url": "https://www.golem.de/sonstiges/zustimmung/auswahl.html?from=https%3A%2F%2Fwww.golem.de%2Fnews%2Fapple-samsung-und-co-schlechtestes-quartal-fuer-smartphones-seit-zehn-jahren-2301-171289.html&referer=https%3A%2F%2Ft.co%2F771562a084",
    "urlToImage": null,
    "publishedAt": "2023-01-19T08:35:02Z",
    "content": "Besuchen Sie Golem.de wie gewohnt mit Werbung und Tracking,\r\n indem Sie der Nutzung aller Cookies zustimmen.\r\n Details zum Tracking finden Sie im Privacy Center.\r\nSkript wurde nicht geladen. Informat… [+607 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Jalopnik"
    },
    "author": "Tom McParland",
    "title": "I Need a Spacious, Reliable, Manual Car Under $15,000! What Should I Buy?",
    "description": "Joe is an engineer from Michigan, and boy does he have a challenging ask for this week. With a $15,000 budget, he wants something reliable, with four-wheel or all-wheel drive, that’s spacious and, most importantly, has three pedals. Also, he wants it to be ne…",
    "url": "https://jalopnik.com/i-need-a-spacious-reliable-manual-car-under-15-000-1850005663",
    "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/20cdff4e2ae1f84faddf1d1b462fa122.jpg",
    "publishedAt": "2023-01-19T16:30:00Z",
    "content": "Joe is an engineer from Michigan, and boy does he have a challenging ask for this week. With a $15,000 budget, he wants something reliable, with four-wheel or all-wheel drive, thats spacious and, mos… [+6913 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Android Authority"
    },
    "author": "Adamya Sharma",
    "title": "Apple is working on an iPad-based stay-at-home Pixel Tablet rival: Report",
    "description": "Apple could be conjuring up an iPad-based smart display that mounts to walls and other things using magnetic fasteners.",
    "url": "https://www.androidauthority.com/apple-ipad-smart-display-3269353/",
    "urlToImage": "https://www.androidauthority.com/wp-content/uploads/2022/12/Apple-iPad-Pro-M2-2022-display-3-scaled.jpeg",
    "publishedAt": "2023-01-19T07:34:51Z",
    "content": "<ul><li>Apple is reportedly working on an iPad-based smart display that can be mounted on walls or other things using magnetic fasteners.</li><li>The device is expected to be smaller and cheaper than… [+1259 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Android Authority"
    },
    "author": "Hadlee Simons",
    "title": "Daily Authority:  Galaxy S23 series info blowout",
    "description": "A Samsung Galaxy S23 series info dump, the cities with the most/least toilets per square kilometer, and more in today's Daily Authority.",
    "url": "https://www.androidauthority.com/daily-authority-january-19-2023-3269338/",
    "urlToImage": "https://www.androidauthority.com/wp-content/uploads/2022/09/GALAXY-S23-ULTRA-5K2-scaled-1.jpg",
    "publishedAt": "2023-01-19T07:19:01Z",
    "content": "Hey there! Ive been contemplating the purchase of a bicycle for a long time now, just so I can get somewhat active again. I thought about an exercise bike too, but why go there when you can get fresh… [+4630 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "The A.V. Club"
    },
    "author": "Saloni Gajjar",
    "title": "Apple TV Plus kicks off 2023 with a first look at its upcoming TV shows",
    "description": "Apple TV+’s streak of (mostly) terrific programming looks promising enough to continue into 2023—at least based on the first look at some of its upcoming TV shows. During the Television Critics Association’s 2023 winter press tour, the streaming platform shar…",
    "url": "https://www.avclub.com/first-look-at-some-of-apple-tv-plus-upcoming-tv-shows-1849998084",
    "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/4c72b74d2b95fc6ae7d2ffdfc2e3937b.png",
    "publishedAt": "2023-01-19T00:05:00Z",
    "content": "Apple TV+s streak of (mostly) terrific programming looks promising enough to continue into 2023at least based on the first look at some of its upcoming TV shows. During the Television Critics Associa… [+4285 chars]"
    }
    ]
    
    constructor(){
        super();
        console.log("I am constructor of news.js");
        this.state={
            articles: this.articles,
            loading: false
        }
    }

async componentDidMount(){
    console.log("Im cdm");
    let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=8f16b307911d4ed48ffc4e20dc33fc49";
    let data=await fetch(url);
    let parsedData=await data.json();
    console.log(parsedData);
    this.setState({articles:parsedData.articles});
}

  render() {
    return (
      <div className='container my-3'>
        <h2>NewsHunt - Top headlines</h2>
        <div className="row">
            {this.state.articles.map((element)=>{
                return <div className="col-md-3" key={element.url}>
                <NewsItem  tittle={element.title} description={element.description} imageUrl={element.urlToImage}  newsUrl={element.url}/>
                </div>
            })}
            
           
        </div>
        
      </div>
    )
  }
}

export default News
