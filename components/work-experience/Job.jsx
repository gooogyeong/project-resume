import styled from 'styled-components'
import { CgPin, CgCalendar } from 'react-icons/cg'
import { IoMdLink } from 'react-icons/io'
import Pill from '../Pill'

const Job = (props) => {
  const { jobTitle, links, date, location, responsibilities } = props.job
  return (
    <StyledJob className="job-wrapper block">
      <div className="job__title subtitle">{jobTitle}</div>
      <div className="job__links">
        {links.map(({ href, name }, idx) => (
          <a href={href} target="_blank" rel="noreferrer" key={idx}><b>{href ? <IoMdLink class="link"/> : null}{name}</b></a>
        ))}
      </div>
      <div className="dates-location-wrapper">
        <div>
          <CgCalendar/>
          <span>{date}</span>
        </div>
        <div>
          <CgPin/>
          <span>{location}</span>
        </div>
      </div>
      <ul>
        {responsibilities.map((res, idx) => {
          return (
            <li key={idx}>
              <div className="resp__desc">
                <span>{res.desc}</span>
                {res.stacks.map(stack => <Pill key={stack} text={stack}/>)}
              </div>
              {/*<div key={idx} className="pill-wrapper">{res.stacks.map(stack => <Pill key={stack} text={stack}/>)}</div>*/}
            </li>
          )
        })}
      </ul>
    </StyledJob>
  )
}

const StyledJob = styled.div`
  text-align: left;

  svg {
    color: #CCCCCC;
    margin-right: 0.4rem;
  }

  ul {
    li {
      .resp__desc {
        margin-right: 0.8rem;
        line-height: 2.8rem;
      }

      .pill {
        font-size: 1.4rem;
        margin-left: 0.8rem;
        padding: 0.2rem 0.4rem;
      }
    }
  }

  .job {
    &__links {
      a, b {
        display: block;
        padding-left: 0.4rem;
        font-size: 2rem;
        margin: 0.4rem 0 1rem;
      }
    }

    &__date-location-wrapper {
      padding-left: 0.4rem;
      font-size: 2rem;
      margin: 0.4rem 0;
    }

    &__date-location-wrapper {
      margin: 0.8rem 0;
      font-size: 1.6rem;
    }
  }
`

export default Job
