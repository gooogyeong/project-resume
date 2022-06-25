import styled from 'styled-components'
import { CgPin, CgCalendar } from 'react-icons/cg'

const EducationItem = (props) => {
  const {
    degree,
    fieldOfStudy,
    school,
    dates,
    location
  } = props.education
  return (
    <StyledEducationItem className="block">
      <div className="education__degree">{degree}</div>
      <div className="education__field">{fieldOfStudy}</div>
      <a href={school.href}><b>{school.name}</b></a>
      <div className="dates-location-wrapper">
        <div><CgCalendar/>{dates}</div>
        <div><CgPin/>{location}</div>
      </div>
    </StyledEducationItem>
  )
}

const StyledEducationItem = styled.div`
  text-align: left;

  a {
    text-decoration: none;
  }

  svg {
    color: #CCCCCC;
  }

  .education {
    &__degree, &__field {
      font-size: 1.8rem;
      padding-bottom: 0.4rem;
    }
  }
`

export default EducationItem
