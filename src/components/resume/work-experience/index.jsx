import styled from 'styled-components'
import Job from './Job'

function Index () {

  const jobs = [
    {
      jobTitle: 'Junior Web Frontend Developer',
      company: {
        name: 'Modu Company Inc.',
        href: ''
      },
      date: 'Aug 2020 - current',
      location: 'Seoul, South Korea',
      responsibilities: [
        {
          desc: 'Migrated 50+ CRUD menus of AngularJS admin web app to new framework',
          stacks: ['Vue.js']
        },
        {
          desc: 'Componentized every UI element that is used more than 2 times. which was repeated every time it is used in legacy code. Increased reusability of code and development and debugging efficiency',
          stacks: ['Vue.js', 'Typescript', 'VueX']
        },
        {
          desc: 'Added html editor in admin web app and WebView pages in mobile apps to create, update, delete and show new announcements for mobile app users of company\'s own',
          stacks: ['Vue.js']
        },
        {
          desc: 'Added new menus to admin web app to read, update user data that are using newly released service',
          stacks: ['AngularJS']
        },
        {
          desc: 'Added new APIs to retrieve user data depending on use status of newly release service',
          stacks: ['node.js', 'Express.js']
        },
        {
          desc: 'Optimized Vue.js project code build, reducing build time by half from 6 min to 3 min via code splitting, replacing CommonJS npm moduels with ES6 modules, to facilitate treeshaking',
          stacks: []
        },
        {
          desc: 'Tested data consistency of migrated data',
          stacks: ['Jest']
        }
      ]
    },
    {
      jobTitle: 'Freelancer Web Developer',
      company: { name: 'level19.io', href: 'https://level19.io' },
      date: 'Jun 2020 - current',
      location: 'remote',
      responsibilities: [
        { desc: 'Developing UI/UX of a corporate landing page', stacks: ['HTML', 'CSS', 'Vanilla JS'] },
        { desc: 'Hosting', stacks: ['AWS S3', 'AWS CloudFront', 'AWS Route 53', 'GoDaddy domain'] }
      ]
    },
    {
      jobTitle: 'Freelancer Web Developer',
      company: { name: 'moderngrotesquetimes.com', href: 'https://moderngrotesquetimes.com' },
      date: 'May 2021 - Sep 2021',
      location: 'remote',
      responsibilities: [
        {
          desc: 'Developed UI/UX of website as a part of art project to post art critics and web novels',
          stacks: ['React.js', 'Typescript', 'MobX']
        },
        {
          desc: 'Designed DB architecture, APIs to create, update, search, read posts',
          stacks: ['Firebase Firestore', 'Firebase Function', 'Algolia']
        },
        {
          desc: 'Added web editor to create, update posts containing html markups, foot notes, images, videos',
          stacks: ['React.js', 'Typescript', 'TipTap']
        },
        {
          desc: 'Added login for authors to get access to web editor',
          stacks: ['Firebase Authentication']
        },
        {
          desc: 'Added newsletter subscription menu',
          stacks: ['Stibee']
        },
        {
          desc: 'Hosting',
          stacks: ['Firebase Hosting', 'Gabia domain']
        }
      ]
    },
    {
      jobTitle: 'Freelancer Web Developer',
      company: { name: 'yeouidotour.com', href: 'https://yeouidotour.com' },
      date: 'Jul 2021 - Aug 2021',
      location: 'remote',
      responsibilities: [
        {
          desc: 'Developed UI/UX of website as a part of art project exhibited at Seoul Museum of Art (https://sema.seoul.go.kr/kr/whatson/exhibition/detail)',
          stacks: ['React.js']
        },
        { desc: 'Added styled map with gps pins', stacks: ['Mapbox GL JS'] },
        { desc: 'Hosting', stacks: ['Firebase Hosting', 'Cafe24 domain'] }
      ]
    },
    {
      jobTitle: 'Freelancer Web Developer',
      company: { name: 'greentester.co.kr', href: 'http://greentester.co.kr' },
      date: 'Apr 2021 - May 2021',
      location: 'remote',
      responsibilities: [
        { desc: 'Developed UI/UX of a corporate landing page', stacks: ['Vue.js'] }
      ]
    },
    {
      jobTitle: 'Intern Web Developer',
      company: { name: 'Colavoground', href: '' },
      date: 'Jun 2022 - current',
      location: 'Seoul, South Korea',
      // intro: 'At Colavoground, one of partners of Codestates Bootcamp, I  had a great opportunity to experience hands-on development right after my education.\nHere, I...',
      responsibilities: [
        { desc: 'Developed a web link page for users to make appointment with hair dresser using corporate mobile app', stacks: ['React.js', 'Typescript', 'Firebase Realtime database'] }
      ]
    }
  ]

  return (
    <StyledWorkExperience
      className="work-experience-wrapper"
    >
      <div className="title">Work Experience</div>
      {jobs.map((job, idx) => <Job key={idx} job={job}/>)}
    </StyledWorkExperience>
  )
}

const StyledWorkExperience = styled.div`
`

export default Index
