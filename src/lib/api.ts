import axios from "axios";
import axiosInstance from "./axios";

export async function post<T>(endpoint: string, data: T){
  try{
    const response = await axiosInstance.post(endpoint,data);
    return response.data;
  } catch (error){
    if(axios.isAxiosError(error) && error.response){
      throw error.response.data;
    } else{
      throw new Error('An unknown error occurred');
    }
  }
}