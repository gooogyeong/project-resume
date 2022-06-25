import styled from 'styled-components'
import { createElement } from 'react'
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import profilePic from '../../public/img/profile.jpg'

function Summary () {
  return (
    <StyledSummary className="summary-wrapper">
      <div className="title">Minkyung Lee</div>
      <img src={profilePic}/>
      <div className="subtitle">Web Frontend Developer</div>
      <ul>
        {contacts.map((contact, idx) => {
          return (
            <li key={idx} className="contact-wrapper">
              {createElement(contact.icon, { size: '1.6rem' })}
              {contact.href ?
                <a
                  href="contact.href"
                  target="_blank"
                  className="contact"
                >
                  {contact.name}
                </a> :
                <span className="contact">{contact.value}</span>}
            </li>
          )
        })}
      </ul>
    </StyledSummary>
  )
}

const StyledSummary = styled.div`
  text-align: left;
  padding-bottom: 0.8rem;
  //border: 2px solid red;
  
  img {
    max-width: 100%;
    width: 16rem;
    margin: 1.6rem 0;
    border-radius: 100%;
  }

  ul {
    padding-inline-start: 0 !important;
  }

  .contact-wrapper {
    display: flex;
    align-items: center;

    a {
      text-decoration: none;
    }

    .contact {
      font-weight: bold;
    }
  }
`

const contacts = [
  {
    name: 'Email',
    href: '',
    value: 'gooogyeong@gmail.com',
    icon: BsGithub
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/minkyung-lee-926a3a199/',
    icon: BsLinkedin
  },
  {
    name: 'GitHub',
    href: 'https://www.linkedin.com/in/minkyung-lee-926a3a199?jobid=1234&lipi=urn%3Ali%3Apage%3Ad_jobs_easyapply_pdfgenresume%3B2y9cvZDLQ52UT6Mu8KyZcw%3D%3D&licu=urn%3Ali%3Acontrol%3Ad_jobs_easyapply_pdfgenresume-v02_profile',
    icon: BsGithub
  }
]

export default Summary
