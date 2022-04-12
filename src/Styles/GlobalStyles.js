
import { createGlobalStyle } from "styled-components";
import themeList from '../data/themeList'

const GlobalStyles = createGlobalStyle`
.heading1, .paragragh1, .sitepar, .service, .our, .servicepar, .siteheading, .review, .comment, .five, .name, 
 .blogpar, .blog, .drumheading, .drumpara, .sitepara, .hamburger svg, .wideheading, .widepar, .img-containerco, .btnseeAll {
color: ${({ theme: { theme } }) =>
    theme === themeList.light ? 'black' :
      'white'};
}

a, .header_btn:hover {
  color : ${({ theme: { theme } }) =>
    theme === themeList.light ? '' :
      'white'};
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
      '#1a202c'};
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

  .section7 {
  background-color: ${({ theme: { theme } }) =>
    theme === themeList.light ? '' :
      'black'};
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
     
     .backgroun {
      display: ${({ theme: { theme } }) =>
    theme === themeList.light ? '' : 'none'};
     }
     .section3img{
      background-color: ${({ theme: { theme } }) =>
    theme === themeList.light ? '' : '#319795'};
     }

     .clients-section1 {
      background-image: ${({ theme: { theme } }) =>
    theme === themeList.light ? '' : 'none'};
     }
     .clients-section1{
      background-color: ${({ theme: { theme } }) =>
    theme === themeList.light ? '' : '#319795'};
     }
     .clchead, .clcpar{
      color: ${({ theme: { theme } }) =>
    theme === themeList.light ? '' : 'white'};
     }

     .section5 {
      background-image: ${({ theme: { theme } }) =>
    theme === themeList.light ? '' : 'none'};
     }
     .section5{
      background-color: ${({ theme: { theme } }) =>
    theme === themeList.light ? '' : '#319795'};
     }
     .sect5heading, .sect5par{
      color: ${({ theme: { theme } }) =>
    theme === themeList.light ? '' : 'white'};
     }

     .page-footer {
      background-image: ${({ theme: { theme } }) =>
    theme === themeList.light ? '' : 'none'};
     }
     .page-footer {
      background-color: ${({ theme: { theme } }) =>
    theme === themeList.light ? '' : '#319795'};
     }

    .logo h1, .parto li, .parto h3, .social, .ftpar{
      color: ${({ theme: { theme } }) =>
    theme === themeList.light ? '' : 'white'};
     }

     .service-section1 {
      background-image: ${({ theme: { theme } }) =>
    theme === themeList.light ? '' : 'none'};
     }
     .service-section1 {
      background-color: ${({ theme: { theme } }) =>
    theme === themeList.light ? '' : '#319795'};
     }
     .sschead, .sscpar{
      color: ${({ theme: { theme } }) =>
    theme === themeList.light ? '' : 'white'};
     }

     .team-section1 {
      background-image: ${({ theme: { theme } }) =>
    theme === themeList.light ? '' : 'none'};
     }
     .team-section1 {
      background-color: ${({ theme: { theme } }) =>
    theme === themeList.light ? '' : '#319795'};
     }
     .tmchead, .tmcpar{
      color: ${({ theme: { theme } }) =>
    theme === themeList.light ? '' : 'white'};
     }

    


     .news-section1 {
      background-image: ${({ theme: { theme } }) =>
    theme === themeList.light ? '' : 'none'};
     }
     .news-section1 {
      background-color: ${({ theme: { theme } }) =>
    theme === themeList.light ? '' : '#319795'};
     }
     .nwchead, .nwcpar{
      color: ${({ theme: { theme } }) =>
    theme === themeList.light ? '' : 'white'};
     }

      .kev, .kevi {
      background-color: ${({ theme: { theme } }) =>
    theme === themeList.light ? '' : '#319795'};
     }


























     
     .clcont{
      : ${({ theme: { theme } }) =>
    theme === themeList.light ? '' : 'black'};
     }


     {
      color: ${({ theme: { theme } }) =>
    theme === themeList.light ? '' : 'white'};
     }

  body, .section4 {
         background-color: ${({ theme: { theme } }) =>
    theme === themeList.light
      ? 'white'
      : '#171923'};
    }
`;

export default GlobalStyles;