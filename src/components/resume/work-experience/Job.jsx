import styled from 'styled-components'
import { CgPin, CgCalendar } from 'react-icons/cg'
import Pill from '../../shared/Pill'

const Job = (props) => {
  const { jobTitle, company, date, location, responsibilities } = props.job
  return (
    <StyledJob className="job-wrapper block">
      <div className="job__title subtitle">{jobTitle}</div>
      {company.href
        ? <a href={company.href} target="_blank" className="job__company-name"><i><b>{company.name}</b></i></a>
        : <b className="job__company-name">{company.name}</b>}
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
        &:first-child {
          border: 2px solid red !important;
          //margin-left: 0.8rem;
        }
        &:not(:last-child) {
          //margin-right: 0.4rem;
        }
      }
      //.resp__desc {
      //  margin-bottom: 0.4rem;
      //}
      //.pill-wrapper {
      //  display: flex;
      //  gap: 0.4rem;
      //  font-size: 1.4rem;
      //}
    }
  }

  .job {
    &__company-name, &__date-location-wrapper {
      padding-left: 0.4rem;
    }

    &__date-location-wrapper {
      margin: 0.8rem 0;
    }
  }
`

export default Job
