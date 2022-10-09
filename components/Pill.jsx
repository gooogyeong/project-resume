import styled from 'styled-components'

const Pill = ({ text }) => {
  const pillStyle = getPillStyle(text)
  return (
    <StyledPill
      className="pill"
      style={pillStyle}
    >
      {text}
    </StyledPill>
  )
}

const StyledPill = styled.span`
  border: 1px solid;
  border-radius: 1.6rem;
  padding: 0.4rem 0.8rem;
  white-space: nowrap;
`

const getPillStyle = (text) => {
  const defaultStyle = {
    fontWeight: 500,
    borderWidth: '1.5px'
  }
  switch (text) {
    case 'Vue.js':
      return {
        ...defaultStyle,
        backgroundColor: '#4BAD7E',
        color: 'white',
        borderColor: '#404F61'
      }
    case 'Vue Test Utils':
      return {
        ...defaultStyle,
        backgroundColor: 'white',
        borderColor: '#404F61'
      }
    case 'React.js':
      return {
        ...defaultStyle,
        backgroundColor: '#5ED2F3',
        borderColor: '#16181D',
        color: 'white',
      }
    case 'AngularJS':
      return {
        ...defaultStyle,
        color: '#BD032D'
      }
    case 'Git':
      return {
        backgroundColor: 'black',
        color: 'white'
      }
    case 'Firebase':
      return {
        ...defaultStyle,
        backgroundColor: '#FFCA2B',
        borderColor: '#FFCA2B',
        color: '#F5820D'
      }
    case 'Storybook':
      return {
        borderColor: '#FE4685',
        color: '#FE4685'
      }
  }
  if (text.includes('Vue')) {
    return {
      ...defaultStyle,
      color: '#404F61'
    }
  } else if (text.includes('Firebase')) {
    return {
      ...defaultStyle,
      color: '#F5820D'
    }
  }
}

export default Pill
