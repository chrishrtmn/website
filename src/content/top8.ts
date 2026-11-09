export interface Top8Entry {
  name: string;
  note: string;
  url?: string;
  photo?: string;
  placeholder?: boolean;
}

export interface Top8Comment {
  name: string;
  date: string;
  text: string;
}

const tbd: Top8Entry = { name: 'tbd', note: '', placeholder: true };

export const top8: Top8Entry[] = [{ name: 'Tom', note: 'always #1', photo: '/top8/tom.jpg' }, tbd, tbd, tbd, tbd, tbd, tbd, tbd];

export const profileSong: { title: string; artist: string; url?: string } | null = null;

export const profile = {
  mood: 'shipping',
  headline: 'Product engineer. Breaking layouts since 2005.',
  hereFor: 'Networking, Friends',
  hometown: 'Kent, Ohio',
  occupation: 'Product engineer',
  memberSince: '2005',
  counterBase: 1_337,
};

export const comments: Top8Comment[] = [
  {
    name: 'Todd',
    date: '6/1/2020',
    text: "I worked with Chris for almost a year. He always was professional and really displayed all his talents, and more, as a Front End Developer. His knowledge of HTML, CSS, jQuery and Sass is impressive and he would be an amazing asset to someone's team.",
  },
  {
    name: 'Eric',
    date: '4/27/2020',
    text: 'Chris is a talented UI developer. As his manager for more than a year, Chris was a pleasure to work with and was well liked among his peers. He takes a lot of pride in his work and pays close attention to detail, characteristics that are critical to the role. Chris would make a great asset to any software development team.',
  },
  {
    name: 'Phil',
    date: '4/20/2020',
    text: 'We were fortunate to have Chris on our team. He is thorough, professional and works very hard to help his team succeed. He brought a level of creativity and attention to detail to his development work that helped take us to another level with our website offerings. We value people that work well in a team setting, and Chris exemplified that with his attitude and willingness to take on work. He would be a great asset to any website development team.',
  },
  {
    name: 'Jeremy',
    date: '3/28/2018',
    text: 'Chris is an extremely competent frontend web developer, fully up to speed on the latest tools and techniques. He was largely responsible for coding the UI for our flagship website publishing platforms, utilized by dozens of content editors and viewed by millions of visitors. Chris would be a valuable addition to any development team.',
  },
  {
    name: 'Fay',
    date: '3/27/2018',
    text: "Chris possesses outstanding dedication, experience and knowledge as a front-end developer and a UI/UX team lead. As a developer, you can count on him to get jobs done with proven quality and turnaround time. As a UI/UX team lead, he's always willing to provide guidance and share knowledge with his teammates whenever possible. His ability to take on new challenges, handle multiple workloads, and deliver results under tight timelines makes him a very reliable employee that anyone would want to have. It's been a pleasure working with him!",
  },
  {
    name: 'Anthony',
    date: '3/26/2018',
    text: "Chris is a consummate pro and highly talented front-end developer. Our product team presented Chris with many challenges while building out several publishing platforms (60+ event websites, close to 20 media sites, and an e-learning platform), and he always delivered. He's excellent with communication and feedback, pleasant and responsive to requests, and eager to get the job done right. A pleasure to work with.",
  },
  {
    name: 'Steve',
    date: '3/26/2018',
    text: 'Dedicated, experienced and professional. Chris is an outstanding developer and technical lead. He works very well with all members of the team and is able to quickly turn mock-ups and design ideas into functioning code. His responsiveness and organizational skills create a harmonious relationship with project managers and product owners. I have no hesitation in recommending him and know that he will fit into any team, large or small.',
  },
  {
    name: 'Rick',
    date: '5/25/2016',
    text: "Chris is a great front-end developer and team lead. He's willing and able to work directly with his team to help troubleshoot issues and provide solutions while also taking on a significant amount of front end work himself. He's able to take vague requirements, produce something great, and be patient with stakeholder feedback. Fantastic colleague and pleasure to work with.",
  },
  {
    name: 'Will',
    date: '8/9/2013',
    text: 'Chris constantly provides quality work in a responsive manner. He holds all the qualities you look for when hiring a contractor. His deep knowledge of the Drupal system, and how to solve complex issues, has been a valuable asset to our team. As well as his personable manner and eagerness to solve challenges in creative ways, makes him the right person for your job.',
  },
  {
    name: 'Katelyn',
    date: '8/28/2012',
    text: 'Chris is one of the most responsive and dedicated people that I have worked with. He is extremely dependable and responsive. His positive attitude and attention to detail ensures that all of his projects are expertly executed. He is a great developer, who works well in a team, as well as independently. Chris is highly liked by all of his colleagues, and I would strongly recommend him for any developer position.',
  },
  {
    name: 'John',
    date: '8/21/2012',
    text: "I've known Chris for several years now. Chris is a very talented themer who can get the job done with a very high level of efficiency and quality. Talent aside, Chris is awesome to work with. He has one of the most positive dispositions of anyone I've ever worked with. I can truly say that working with Chris is a true pleasure.",
  },
  {
    name: 'Kathy',
    date: '8/21/2012',
    text: "There are some people who you can count on when you know things need to be done thoroughly and quickly. Chris is that guy. I could count on Chris to jump on a project and just get it done. One thing I was really thankful for was his ability to nail cross-browser testing right on the head. Not only would he be detailed in reviewing sites across browsers, but he'd also provide the fix that was needed. That is a huge help! I appreciate Chris's attention to detail, flexibility to jump right into a project and his helpful attitude.",
  },
  {
    name: 'Alex',
    date: '5/20/2012',
    text: 'Chris is easy going, flexible and well skilled in Drupal development. Good team player with a constant positive, optimistic approach.',
  },
  {
    name: 'Anne',
    date: '2/10/2012',
    text: 'Chris is responsive, solution focused and excellent with clients. Always available to answer questions and find solutions, I knew I could count on Chris to get the work done. He has an array of skills ranging from Drupal theming, development and mobile. At the end of the day Chris is never short of being awesome!',
  },
  {
    name: 'Glenn',
    date: '11/7/2010',
    text: 'Chris has worked with us for a number of years and has an excellent attitude, an insatiable desire to learn, is self-motivated and industrious and has a great work ethic.',
  },
  {
    name: 'Rick',
    date: '7/12/2010',
    text: 'I had the pleasure of working with Chris for a number of years. During that time Chris grew professionally and in his technical skills. He was a go-to developer for Drupal projects that needed extra care and attention in theming. At all times Chris was a team player who put his all into his work.',
  },
];

export const UNLOCK_KEY = 'top8';
export const UNLOCK_EVENT = 'top8:unlock';
