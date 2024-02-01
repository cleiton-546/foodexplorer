import { useState, useEffect } from "react"
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/bundle'
import 'swiper/css/navigation'

import {  Navigation } from 'swiper/modules';

import { Header } from "../../components/header"
import { Footer } from "../../components/footer"
import { Card } from "../../components/card"

import { api } from "../../services/api"

import { Container, Nav} from "./style"
import { useNavigate } from "react-router-dom"

 

export function Home() {
    const [search, setSearch] = useState("");
    const [meals, setMeals] = useState([]);
    const [ ingredients, setIngredients] = useState([])

    const navigate = useNavigate(); 
  
    function handleDetails(id) {
        navigate(`/details/${id}`)
    }

    function handleEdit(id) {
        navigate(`/edit/${id}`)
    }


    useEffect(() => {
        async function fetchMeals() {
             const response = await api.get(`/meals?title=${search}`);
             setMeals(response.data)
        }   
        
        fetchMeals();
    }, [search ]);

    useEffect(() => {
      async function fetchIngredient() {
        const response = await api.get(`/ingredients?name=${search}`);
        setIngredients(response.data)
      }
      fetchIngredient()
    }, [search]);

    return (
    <Container>
        <Header onChange={(e) => setSearch(e.target.value)} />
        <main>
        
        <Nav>
            <div className="container">
                 <img src="https://i.postimg.cc/C1z2dbhs/food.png" alt="" />                      
                
                <div className="description">
                   <h2>Sabores inigualáveis</h2>
                   <p>Sinta o cuidado do preparo com ingredientes selecionados</p> 
                </div>
            </div>
        </Nav>
            <div className="gradient"> 
              <h2>Refeições</h2>
                
               {
                meals.filter(meal => meal.category == "Refeição").length > 0 && 
                  <Swiper
                    navigation={true}
                    slidesPerView={4}
                    spaceBetween={200}
                    loop={true}
                    
                    modules={[Navigation]}
                    className="mySwiper"                  
                  
                  >
                    {
                        meals.filter(meal => meal.category === "Refeição").map(meal => (
                        <SwiperSlide
                        key={String(meal.id)}
                        >
                            <Card
                            data={meal}
                            onClickDetails={handleDetails}
                            onClickEdit={handleEdit}
                            
                            />
                        </SwiperSlide>
                        ))
                    }
                  </Swiper>
               }


               <h2>Sobremesas</h2> 
               {               
                meals.filter(meal => meal.category == "Sobremesas").length > 0 && 
                  <Swiper
                    navigation={true}
                    slidesPerView={4}
                    spaceBetween={200}
                    loop={true}
                    
                    modules={[Navigation]}
                    className="mySwiper"                  
                  
                  >
                    {
                        meals.filter(meal => meal.category === "Sobremesas").map((item, index) => (
                        <SwiperSlide
                        key={String(index)}
                        >
                            <Card
                            data={item}
                            />
                        </SwiperSlide>
                        ))
                    }
                  </Swiper>
               }

               <h2>Bebidas</h2>                
               {               
                meals.filter(meal => meal.category == "Bebidas").length > 0 && 
                  <Swiper
                    navigation={true}
                    slidesPerView={4}
                    spaceBetween={200}
                    loop={true}
                    
                    modules={[Navigation]}
                    className="mySwiper"                  
                  
                  >
                    {
                        meals.filter(meal => meal.category === "Bebidas").map((item, index) => (
                        <SwiperSlide
                        key={String(index)}
                        >
                            <Card
                            data={item}
                            />
                        </SwiperSlide>
                        ))
                    }
                  </Swiper>
               }

            </div>
        </main>    

        <Footer />
    </Container>
    ) 

} 