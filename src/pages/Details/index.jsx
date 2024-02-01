import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"

import { Container } from "./style" 

import { api } from "../../services/api"

import { Header } from "../../components/header"
import { Footer } from "../../components/footer"
import { Back } from "../../components/back"
import { Ingredient } from "../../components/ingredient"
import { Button } from "../../components/button"




export function Details() {
    const [data, setData] = useState(null)

    const params = useParams()
    const navigate = useNavigate()
    
    const imgURL = data && `${api.defaults.baseURL}/files/${data.img}`

    function handleBack() {
        navigate(-1)
    }

    function handleEdit() {
        navigate(`/edit/${data.id}`)
    }

    useEffect(() => { 
      async function fetchNote() {
        const response = await api.get(`/meals/${params.id}`);
        setData(response.data);
        
      }
      fetchNote() 
    }, [] );  
      
    return(
        <Container>
            <Header />

            { 
            data&&
            <main>
                <Back 
                onClick={handleBack}
                />
                
                <div className="container">
                    <img src={imgURL}  alt="" />
                    
                    <div className="content">
                        <h2>{data.title}</h2>
                        <h4>{data.description}</h4>
                        { data.ingredients&&
                        <div className="ingredients">
                            {
                             data.ingredients.map(ingredient => (
                                <Ingredient
                                key={String(ingredient.id)}
                                title={ingredient.name}
                                
                                />

                             ))   
                            }
                        </div>
                        }
                        <div className="button">
                            <Button
                            onClick={handleEdit}
                            title="Editar prato"/>
                        </div>
                    </div>
                </div>     

            </main>
            }


            <Footer/>
        </Container>
    )
}