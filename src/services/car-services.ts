import { CollectionReference } from "firebase-admin/firestore";
import { connectDb } from "../connectDb";
import { Car } from "../models/car"

interface CarService {
    addNewCar(car: Car): Car;
    getAllCars(): Promise<Car[] | null>;
    getCarById(carId: string): Car
}

const carCollection = connectDb().collection('car') as CollectionReference<Car>

const getAllCars = async (): Promise<Car[] | null> => {

    // const cars: Car[] = [];
    // const car1: Car = {make: "Ford", model: "F-150", year: 2020 }
    // const car2 = {make: "Ford", model: "Fiesta"} as Car

    // cars.push(car1, car2)
    try {
    const result = await carCollection.get()
    const cars = result.docs.map(doc => {
        const car: Car = doc.data();
        car.id = doc.id
      return car;
    })
    return cars
    } catch(error){

    return null;
}
    
}



export const carService: CarService = { getAllCars } as CarService