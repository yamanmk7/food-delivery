  // price rating
  const affordable = 1
  const fairPrice = 2
  const expensive = 3
  import images from "../constans/images"

const restaurantData = [
    
    {
        id: 1,
        name: " Burger",
        rating: 4.8,
        categories: [5, 7],
        price: "$39",
        photo: images.burgerRestaurant,
        duration: "30 - 45 min",
        location: {
            latitude: 1.5347282806345879,
            longitude: 110.35632207358996,
        },
        courier: {
            avatar: images.avatar1,
            name: "yaman"
        },
        menu: [
            {
                menuId: 1,
                name: "Crispy Chicken Burger",
                photo: images.crispyChickenBurger,
                description: "Burger with crispy chicken, cheese and lettuce",
                calories: 200,
                price: 10
            },
            {
                menuId: 2,
                name: "Crispy Chicken Burger with Honey Mustard",
                photo: images.honeyMustardChickenBurger,
                description: "Crispy Chicken Burger with Honey Mustard Coleslaw",
                calories: 250,
                price: 15
            },
            {
                menuId: 3,
                name: "Crispy Baked French Fries",
                photo: images.bakedFries,
                description: "Crispy Baked French Fries",
                calories: 194,
                price: 8
            }
        ]
    },
    {
        id: 2,
        name: " Pizza",
        rating: 4.8,
        categories: [2, 4, 6],
        price: "$39",
        photo: images.pizzaRestaurant,
        duration: "15 - 20 min",
        location: {
            latitude: 1.556306570595712,
            longitude: 110.35504616746915,
        },
        courier: {
            avatar: images.avatar2,
            name: "mohamd"
        },
        menu: [
            {
                menuId: 4,
                name: "Hawaiian Pizza",
                photo: images.hawaiianPizza,
                description: "Canadian bacon, homemade pizza crust, pizza sauce",
                calories: 250,
                price: 15
            },
            {
                menuId: 5,
                name: "Tomato & Basil Pizza",
                photo: images.pizza,
                description: "Fresh tomatoes, aromatic basil pesto and melted bocconcini",
                calories: 250,
                price: 20
            },
            {
                menuId: 6,
                name: "Tomato Pasta",
                photo: images.tomatoPasta,
                description: "Pasta with fresh tomatoes",
                calories: 100,
                price: 10
            },
            {
                menuId: 7,
                name: "Mediterranean Chopped Salad ",
                photo: images.salad,
                description: "Finely chopped lettuce, tomatoes, cucumbers",
                calories: 100,
                price: 10
            }
        ]
    },
    {
        id: 3,
        name: " Hotdogs",
        rating: 4.8,
        categories: [3],
        price: "$39",
        photo: images.hotDog,
        duration: "20 - 25 min",
        location: {
            latitude: 1.5238753474714375,
            longitude: 110.34261833833622,
        },
        courier: {
            avatar: images.avatar3,
            name: "jamal"
        },
        menu: [
            {
                menuId: 8,
                name: "Chicago Style Hot Dog",
                photo: images.hotDogRestaurant,
                description: "Fresh tomatoes, all beef hot dogs",
                calories: 100,
                price: 20
            }
        ]
    },
    {
        id: 4,
        name: " Sushi",
        rating: 4.8,
        categories: [8],
        price: "$39",
        photo: images.sushi,
        duration: "10 - 15 min",
        location: {
            latitude: 1.5578068150528928,
            longitude: 110.35482523764315,
        },
        courier: {
            avatar: images.avatar4,
            name: "Ahmad"
        },
        menu: [
            {
                menuId: 9,
                name: "Sushi sets",
                photo: images.sushi,
                description: "Fresh salmon, sushi rice, fresh juicy avocado",
                calories: 100,
                price: 50
            }
        ]
    },
    {
        id: 5,
        name: " Cuisine",
        rating: 4.8,
        categories: [1, 2],
        price: "$39",
        photo: images.noodleShop,
        duration: "15 - 20 min",
        location: {
            latitude: 1.558050496260768,
            longitude: 110.34743759630511,
        },
        courier: {
            avatar: images.avatar4,
            name: "yazan"
        },
        menu: [
            {
                menuId: 10,
                name: "Kolo Mee",
                photo: images.kolo_mee,
                description: "Noodles with char siu",
                calories: 200,
                price: 5
            },
            {
                menuId: 11,
                name: "Sarawak Laksa",
                photo: images.sarawakLaksa,
                description: "Vermicelli noodles, cooked prawns",
                calories: 300,
                price: 8
            },
            {
                menuId: 12,
                name: "Nasi Lemak",
                photo: images.nasiLemak,
                description: "A traditional Malay rice dish",
                calories: 300,
                price: 8
            },
            {
                menuId: 13,
                name: "Nasi Briyani with Mutton",
                photo: images.nasiBriyaniMutton,
                description: "A traditional Indian rice dish with mutton",
                calories: 300,
                price: 8
            },

        ]
    },
    {

        id: 6,
        name: " Dessets",
        rating: 4.9,
        categories: [9, 10],
        price: "$39",
        photo: images.kekLapis,
        duration: "35 - 40 min",
        location: {
            latitude: 1.5573478487252896,
            longitude: 110.35568783282145,
        },
        courier: {
            avatar: images.avatar1,
            name: "Soul"
        },
        menu: [
            {
                menuId: 12,
                name: "Teh C Peng",
                photo: images.teh_c_peng,
                description: "Three Layer Teh C Peng",
                calories: 100,
                price: 2
            },
            {
                menuId: 13,
                name: "ABC Ice Kacang",
                photo: images.iceKacang,
                description: "Shaved Ice with red beans",
                calories: 100,
                price: 3
            },
            {
                menuId: 14,
                name: "Kek Lapis",
                photo: images.kekLapis,
                description: "Layer cakes",
                calories: 300,
                price: 20
            }
        ]

    }


]

export default restaurantData;