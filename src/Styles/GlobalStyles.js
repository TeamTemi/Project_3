
import { createGlobalStyle } from "styled-components";
import themeList from '../data/themeList'

const GlobalStyles = createGlobalStyle`
.heading1, .paragragh1, .sitepar, .service, .our, .servicepar, .siteheading, .review, .comment, .five, .name, 
 .blogpar, .blog, .drumheading, .drumpara, .sitepara, .hamburger svg, .wideheading, .widepar, .img-containerco, .btnseeAll {
color: ${({ theme: { theme } }) =>
    theme === themeList.light ? 'black' :
      'white'};
}

a, .header_btn:hover  {
  color : ${({ theme: { theme } }) =>
    theme === themeList.light ? '' :
      'white'};
}

.line2  {
  color : ${({ theme: { theme } }) =>
    theme === themeList.light ? '' :
      'black'};
}



.btn1:hover, .ourhappy{
  color : ${({ theme: { theme } }) =>
    theme === themeList.light ? '' :
      'white'};
}

.btn1:hover{
  background : ${({ theme: { theme } }) =>
    theme === themeList.light ? '' :
      'none'};
}

.btnseeAll  {
  border-color : ${({ theme: { theme } }) =>
    theme === themeList.light ? '' :
      '#7bc0e3'}; 
}


.stylee  {
  box-shadow: ${({ theme: { theme } }) =>
    theme === themeList.light ? '' :
      ''}; 
}


.portfolio, .section3flex, .btnopt  {
  color : ${({ theme: { theme } }) =>
    theme === themeList.light ? '' :
      '#60e1cb'};
}


.testimonial {
  color : ${({ theme: { theme } }) =>
    theme === themeList.light ? 'black' :
      '#60e1cb'};
}

 a:hover, a.active{
  font-weight : ${({ theme: { theme } }) =>
    theme === themeList.light ? '' :
      'bolder'};
}

a:hover{
  color : ${({ theme: { theme } }) =>
    theme === themeList.light ? 'black' :
      'white'};
}

.testimonial {
  color : ${({ theme: { theme } }) =>
    theme === themeList.light ? 'black' :
      '#60e1cb'};
}

.comment {
  box-shadow : ${({ theme: { theme } }) =>
    theme === themeList.light ? '' :
      'none'};
}

.comment {
  border-radius : ${({ theme: { theme } }) =>
    theme === themeList.light ? '' :
      '5px'};
}

.section2, .team-section1, .wrep{
  background-color: ${({ theme: { theme } }) =>
    theme === themeList.light ? '#e9fbf8' :
      '#171923'};
  }

.site, .drum, .sit {
  background-color: ${({ theme: { theme } }) =>
    theme === themeList.light ? '#fdfdff' :
      '#2d3748'};
    }

  .box, .wcard {
   background-color: ${({ theme: { theme } }) =>
    theme === themeList.light ? '#fdfdff' :
      '#2d3748'};
  }

  .section7, .section4 {
  background-color: ${({ theme: { theme } }) =>
    theme === themeList.light ? '' :
      '#171923'};
 }

 .logo-container {
  background-color: ${({ theme: { theme } }) =>
    theme === themeList.light ? '' :
      '#edeeee'};
  }

    .subsection4heading, .subsection4text, .contentpar, .ss4par, .ss4head{
      color: ${({ theme: { theme } }) =>
    theme === themeList.light ? '' :
      '#edeeee'};
      }

      .green {
      display: ${({ theme: { theme } }) =>
    theme === themeList.light ? '' : 'none'};
     }
     
     .search input[type=text] {
      background-color: ${({ theme: { theme } }) =>
    theme === themeList.light ? '' : 'white'};
     }



     @media only screen and (max-width: 875px) {
      
    }
     
    
    {
      color: ${({ theme: { theme } }) =>
    theme === themeList.light ? '' : 'white'};
     }

  body {
         background-color: ${({ theme: { theme } }) =>
    theme === themeList.light
      ? 'white'
      : '#1a202c'};
    }
`;

export default GlobalStyles;