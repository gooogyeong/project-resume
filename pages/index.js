import styled from 'styled-components'
import Summary from '../components/Summary.jsx'
import Education from '../components/education/index.jsx'
import Skill from '../components/Skill.jsx'
import WorkExperience from '../components/work-experience/index.jsx'

function Resume () {
  return (
    <StyledResume>
      <div className="resume__left">
        <Summary/>
        <Education/>
        <Skill/>
      </div>
      <div className="resume__right">
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
  }

  .subtitle {
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
