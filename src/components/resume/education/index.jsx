import styled from 'styled-components'
import EducationItem from './EducationItem'

const Education = () => {
  const educations = [
    {
      degree: 'Bootcamp',
      fieldOfStudy: 'Web Development',
      school: { name: 'Codestates', href: 'https://codestates.com/#/courses/immersive' },
      dates: 'Dec 2019 - Apr 2020',
      location: 'remote'
    },
    {
      degree: 'Master of Arts',
      fieldOfStudy: 'Philosophy, Aesthetics',
      school: { name: 'Seoul National University', href: 'https://meehak.snu.ac.kr/' },
      dates: 'Sep 2016 - Feb 2020',
      location: 'Seoul, South Korea'
    },
    {
      degree: 'Bachelor of Arts',
      fieldOfStudy: 'Philosophy',
      school: { name: 'Ewha Womans University', href: 'https://ewha.ac.kr/ewhaen/academics/liberal-arts.do' },
      dates: 'Mar 2012 - Aug 2015',
      location: 'Seoul, South Korea'
    },
    {
      degree: 'Exchange Student',
      fieldOfStudy: 'Philosophy',
      school: {
        name: 'Freie Universität Berlin',
        href: 'https://www.fu-berlin.de/en/studium/international/studium_fu/auslandssemester/index.html'
      },
      dates: 'Sep 2014 - Mar 2015',
      location: 'Berlin, Germany'
    }
  ]
  return (
    <StyledEducation>
      <div className="title">Education</div>
      {educations.map((education, idx) => <EducationItem key={idx} education={education}/>)}
    </StyledEducation>
  )
}

const StyledEducation = styled.div`
`

export default Education
