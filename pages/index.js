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
