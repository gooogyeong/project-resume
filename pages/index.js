import styled from 'styled-components'
import Summary from '../components/Summary.jsx'
import Education from '../components/education/index.jsx'
import Skill from '../components/Skill.jsx'
import WorkExperience from '../components/work-experience/index.jsx'
import Pill from '../components/Pill.jsx'
import { IoMdLink } from 'react-icons/io'

function Resume () {
  return (
    <StyledResume>
      <div className="resume__left">
        <Summary/>
        <Education/>
        <Skill/>
      </div>
      <div className="resume__right">
        <div>
          <div className="title">About me</div>
          <div>
            <div style={{ fontSize: '1.6rem', 'marginBottom': '2rem' }}>Hello, I am Minkyung Lee, applying for a Frontend Developer position at
              Momenterie.<br/>
              For following reasons, I find myself a fit for this position!
            </div>
            <div className="subtitle">Qualification<br/></div>
            <ul>
              <li style={{ lineHeight: '2.4rem' }}>I have 2+ years of professional experience as a web frontend developer and wrote most of the codes in <Pill text='Vue.js'/>.<br/>
                I migrated AngularJS app to Vue2 and now I&apos;m developing new B2B app in Vue3.
              </li>
              <li style={{ lineHeight: '2.4rem' }}>I have professional experience making web editors.<br/>
                At work, I built an AngularJS web editor, with which admins create notice pages in HTML. Those notices are updated on a daily basis, inserted as a
                WebView into company&apos;s own Android & iOS app.<br/>
                During side project, I made another web editor in React. With this editor, authors of the project created posts
                that include various media, such as image, video, footnote, link, etc. (<a href="https://modern-grotesque-times.web.app/write/guest"><IoMdLink style={{ color: '#CCCCCC' }}/> web editor for guest writer</a>)
              </li>
            </ul>
            <div className="subtitle">Culture</div>
            <ul>
              <li style={{ lineHeight: '2.4rem' }}>I was happy to know that the head of engineering wrote the job description. I&apos;ve always wanted to be
                part
                of a team with lead or senior frontend developers, whom I can ask if there&apos;s a better way to do things.
              </li>
            </ul>
            <div className="subtitle">Product</div>
            <ul>
              <li style={{ lineHeight: '2.4rem' }}>I was thrilled about the idea that if I join Momenterie, what I develop will be used by end
                users.<br/>
                I&apos;ve always wanted to be challenged and learn from real user experiences and go beyond the scope of
                admins, colleague developers and qa team.
              </li>
            </ul>
          </div>
        </div>
        <WorkExperience/>
      </div>
    </StyledResume>
  )
}

const StyledResume = styled.div`
  display: flex;
  min-width: 100vw;

  .title {
    font-weight: bold;
    text-transform: uppercase;
    font-size: 2.4rem;
    text-align: left;
    padding: 0.8rem 0;
    margin-bottom: 2rem;
  }

  .subtitle {
    margin-bottom: 1rem;
    font-size: 2rem;
    padding: 0.4rem 0;
  }

  ul {
    padding-inline-start: 2rem;

    li {
      font-size: 1.6rem;
      line-height: 2rem;

      &:not(:last-child) {
        margin-bottom: 0.8rem;
      }

      //line-height: 2.8rem;
    }
  }

  a {
    color: inherit;
    font-weight: bold;
    //text-decoration: none;
    &:visited {
      color: inherit;
      //text-decoration: none;
    }
  }


  .dates-location-wrapper {
    display: flex;
    padding: 0.8rem 0 0;

    & > div {
      display: flex;
      align-items: center;

      &:not(:last-child) {
        margin-right: 0.8rem;
      }
    }
  }

  .block {
    &:not(:last-child) {
      margin-bottom: 2rem;
    }
  }

  .resume__left, .resume__right {
    min-height: 100vh;
    padding-left: 3.2rem;

    & > div {
      margin-bottom: 2rem;
    }
  }

  .resume__right {
    padding-right: 3.2rem;

    & > div {
      padding: 0 3.2rem;
    }
  }

  .resume__left {
    flex-basis: 25%;
    max-width: 25%;
    background-color: #F8F8F8;
  }

  .resume__right {
    flex-basis: 75%;
  }
`

export default Resume
