export const initialState = {
    additionalPrice: 0,
    car: {
      price: 26395, 
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
  };

export const mainReducer = (state, action) => {


    switch(action.type) {
        case 'add':
            let addPrice = state.additionalPrice + action.item.price;

            return {
                ...state,
                additionalPrice: addPrice,
                car: {   
                    ...state.car,
                    features: [...state.car.features, state.additionalFeatures[action.item.id-1]]
                }
            }
        case 'remove':
            let reducePrice = state.additionalPrice - action.item.price;

            return {
                ...state,
                additionalPrice: reducePrice,
                car: {
                    ...state.car,
                    features: state.car.features.filter((item) => item.id !== action.item.id)
                }
                
            }
        default:
            return state;
    }
}