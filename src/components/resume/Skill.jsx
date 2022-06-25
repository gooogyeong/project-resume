import styled from 'styled-components'
import Pill from '../shared/Pill'

const Skill = () => {
  const stacks = ['Vue.js', 'React.js', 'Vanilla JS', 'Git', 'Notion', 'Firebase']
  return (
    <StyledSkill>
      <div className="title">Skills</div>
      <div className="block">
        <div className="skill__category">Web Development</div>
        <ul className="stack">
          <li>
            {stacks.map((stack, idx) => <Pill key={idx} text={stack}/>)}
          </li>
        </ul>
      </div>
      <div className="skill__category">Language</div>
      <div className="block">
        <ul>
          <li>English (Full Professional)</li>
          <li>German (Limited Working)</li>
          <li>Korean (Native)</li>
        </ul>
      </div>
    </StyledSkill>
  )
}

const StyledSkill = styled.div`
  text-align: left;

  .skill {
    &__category {
      font-size: 1.8rem;
    }
  }

  ul.stack {
    padding-inline-start: 0;

    li {
      display: flex;
      flex-wrap: wrap;
      gap: 0.8rem 0.4rem;
      padding-right: 0.8rem;

      .pill {
        font-weight: bold;
        border-width: 2px;
      }
    }
  }
`

export default Skill
