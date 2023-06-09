import { styled } from "..";

export const AnalyticsContainer = styled('div', {
  marginTop: '35px',
  marginLeft: '100px',

  
  '@media (max-width: 994px)': {
    marginTop: '0px',
    marginLeft: '0px'
  }
})
export const Header = styled('section', {
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'column',
  alignItems: 'center',

  div: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    span: {
      color: '$gray100',
      fontSize: '$md'
    }
  },
  span: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '$gray400',
    fontSize: '$ss'
  },

  "&::after": {
    content: "''",
    display: "block",
    width: 32,
    height: 4,
    background: "$gradient-horizontal",
    borderRadius: "50px",
    marginTop: 40
  },

  
  '@media (max-width: 994px)': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '90px',
    marginTop: '20px'
  }

})
export const Avatar = styled('img', {
  borderRadius: "100%",
  objectFit: "cover",
  width: "80px",
  height: "80px",
  border: '3px solid $gray500'
})
export const Content = styled('div', {
  
  '@media (max-width: 994px)': {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    marginLeft: '100px',
  }
})
export const Informations = styled('div', {
  display: 'flex',
  alignItems: 'center',
  paddingTop: '50px',
  div: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',

    span: {
      color: '$gray200',
      fontSize:'$sm',
    },

    p: {
      color: '$gray300',
      fontSize:'$ss',
      //paddingTop: '5px',
    },
  },
  svg: {
    marginRight: "12px",
    color: '$green100',
  },
})
export const Border = styled('div', {
  // borderLeft: "1px solid $gray700",
})