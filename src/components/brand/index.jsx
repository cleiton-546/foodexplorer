import { Container } from './style'

export function Brand({ title, typeUser, ...rest}) {
  return(
    <Container> 
          <div>
            <svg width="43" height="48" viewBox="0 0 43 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path id="Polygon 1" d="M21.5706 0.216553L42.9737 12.0919V35.8426L21.5706 47.7179L0.167517 35.8426V12.0919L21.5706 0.216553Z" fill="#065E7C"/>
           </svg>
          <h1>{title}</h1>
          </div>
          <p>{typeUser}</p>
    </Container>       
  )  
} 