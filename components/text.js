import Me from '../assets/me2.jpg'

const English = {
    banner: ['About','Portfolio','Websites','Games','Research','Contact'],
    blurb: ['About blurb','Portfolio blurb','Websites blurb','Games blurb','Research blurb','Contact blurb'],
    images: [[Me,Me],[Me,Me],[Me,Me],[Me,Me],[Me,Me],[Me,Me]],
    imageText: [['about image 1', 'about image 2'], ['portfolio image 1', 'portfolio image 2'], 
    ['websites image 1', 'websites image 2'], ['games image 1', 'games image 2'],
    ['research image 1', 'research image 2'],['contact image 1', 'contact image 2']]
}
const Japanese = {
    aboutBanner: 'About',
    aboutBlurb: 'About blurb',
    aboutImageText: ['text1'],
    portfolioBanner: 'Portfolio',
    portfolioBlurb: 'Portfolio blurb',
    portfolioImageText: ['text1'],
    websitesBanner: 'Websites',
    websitesBlurb: 'Websites blurb',
    websitesImageText: ['text1'],
    gamesBanner: 'Games',
    gamesBlurb: 'Games blurb',
    gamesImageText: ['text1'],
    researchBanner: 'Research',
    researchBlurb: 'Research blurb',
    researchImageText: ['text1'],
    contactBanner: 'Contact',
    contactBlurb: 'Contact blurb',
    contactImageText: ['text1'],
}

//make section layout component, put banners in same array, blurbs in same array, etc...

export {English, Japanese}