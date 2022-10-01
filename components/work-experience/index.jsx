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
          desc: 'Developing framework-independent web component to be used across multiple admin web apps',
          stacks: ['JavaScript', 'HTML', 'CSS', 'yarn workspaces']
        },
        {
          desc: 'Setup storybook and added stories of color palette, reusable components for consistent design system throughout multiple admin web apps',
          stacks: ['Storybook']
        },
        {
          desc: 'Migrated 50+ CRUD menus of AngularJS admin web app to new framework',
          stacks: ['Vue.js']
        },
        {
          desc: 'Componentized every UI element that is used more than 2 times. which was repeated every time it is used in legacy code. Increased reusability of code and development and debugging efficiency',
          stacks: ['Vue.js', 'Typescript', 'VueX']
        },
        {
          desc: 'Added html editor to AngularJS admin web app to create, update, and delete WebView announcements to users of company\'s own app',
          stacks: ['Vue.js']
        },
        {
          desc: 'Added new APIs to Node.js server to retrieve data of users using newly released feature',
          stacks: ['AngularJS']
        },
        {
          desc: 'Added new APIs to retrieve user data depending on use status of newly release service',
          stacks: ['node.js', 'Express.js']
        },
        {
          desc: 'Optimized build time of Vue.js app by half, from 6 min to 3 min, by code splitting, and faciliating treeshaking via replacing CommonJS npm modules with ES6 modules',
          stacks: []
        },
        {
          desc: 'Added test cases with Jest to test data consistency of migrated data',
          stacks: ['Jest']
        }
      ]
    },
    {
      jobTitle: 'Freelancer Web Developer',
      company: { name: 'level19.io', href: 'https://level19.io' },
      date: 'Jun 2022 - Aug 2022',
      location: 'remote',
      responsibilities: [
        { desc: 'Developed reusable, framework-independent web component', stacks: ['HTML', 'CSS', 'JavaScript'] },
        { desc: 'Developed 3D animation', stacks: ['three.js'] },
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
