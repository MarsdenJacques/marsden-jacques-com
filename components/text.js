import Me from '../assets/me2.jpg'

const English = {
    language: 'English',
    banner: ['About','Portfolio','Websites','Games','Research','Contact'],
    blurb: ['I am a developer of both websites and games, as well as a published researcher in Computer Science. ' + 
    'I am always looking for new opportunities for freelance work or collaborative projects.' + 
    ' Looking forward to hearing from you!',
    'My primary tools are ReactJS with NodeJS for websites and Unity with C# for games and AR, but I am also comfortable with C++, and Python.',
    'The currently hosted websites that I was commissioned to develop, or made as a personal project.',
    'Check out some of my games and game related projects!','Here are my two published papers. My research work is focused on the fields of Combinatorics and Algorithms in Computer Science.',
    'Feel free to get in touch with me on any of these platforms, or email me at: marsdenjacques@gmail.com!'],
    images: [[Me,Me,Me],[Me,Me,Me],[Me,Me,Me],[Me,Me,Me,Me,Me],[Me,Me,Me],[Me,Me]],
    imageText: [['This is me', 'Some images are links! (like this one for my Github)','Here is my resume'], 
    ['I make websites...', 'Games...','And do research!'], 
    ['Hiroshima Art Center homepage made with Gatsby', 'A simple notes and todo app made with NextJS, NodeJS, and MySQL', 'My github.io website playground'], 
    ['A Tetris clone (with extra vibes) made in Unity', 'The Conway\'s Game of Life made with Javascript', 'Check out my itch.io!','I made an AR installation for the Kyoto Art Center...','And also for Art Gallery Miyauchi in Hiroshima'],
    ['Generating Gray codes for weak orders in constant amortized time', 'Greedy Universal Cycle Constructions for Weak Orders','DBLP online bibliography'],
    ['Linkedin', 'Click to email me!']],
    link: [['','https://github.com/MarsdenJacques','/'],
    ['/#Websites','/#Games','/#Research'],
    ['https://hiroshimageisen.netlify.app/','https://marsdensqlnotesapp.netlify.app','https://marsdenjacques.github.io/'],
    ['/','https://marsdenjacques.github.io/2d-game-of-life/','https://marsdenjacques.itch.io/','',''],
    ['https://www.sciencedirect.com/science/article/pii/S0012365X20301783?via%3Dihub','https://drive.google.com/file/d/1nZP3B6fD0kmuakXtf6rMIdP8ZzX9VdqV/view','https://dblp.org/pid/257/1379.html'],
    ['https://www.linkedin.com/in/marsdenjacques/','mailto:marsdenjacques@gmail.com']]
}
const Japanese = {
    language: '日本語',
    banner: ['概要','作品','ウエブ','ゲーム','研究','コンタクト'],
    blurb: ['テスト','テスト','テスト','テスト','テスト','テスト'],
    images: [[Me,Me],[Me,Me,Me],[Me,Me,Me],[Me,Me,Me],[Me,Me,Me],[Me,Me]],
    imageText: [['テスト','テスト'],['テスト','テスト','テスト'],['テスト','テスト','テスト'],
    ['テスト','テスト','テスト'],['テスト','テスト','テスト'],['テスト','テスト']],
    link: [['','https://github.com/MarsdenJacques','/'],
    ['/#Websites','/#Games','/#Research'],
    ['https://hiroshimageisen.netlify.app/','https://marsdensqlnotesapp.netlify.app','https://marsdenjacques.github.io/'],
    ['/','https://marsdenjacques.github.io/2d-game-of-life/','https://marsdenjacques.itch.io/','',''],
    ['https://www.sciencedirect.com/science/article/pii/S0012365X20301783?via%3Dihub','https://drive.google.com/file/d/1nZP3B6fD0kmuakXtf6rMIdP8ZzX9VdqV/view','https://dblp.org/pid/257/1379.html'],
    ['https://www.linkedin.com/in/marsdenjacques/','mailto:marsdenjacques@gmail.com']]
}

const Language = [English, Japanese]

//make section layout component, put banners in same array, blurbs in same array, etc...

export default Language