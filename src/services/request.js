import axios from "axios"
import { medusaUrl } from "./config"

let baseURL = "https://servocamsbackend.herokuapp.com/"

export default function medusaRequest(method, path = "", payload = {}) {
  const options = {
    method,
    withCredentials: true,
    url: path,
    data: payload,
    json: true,
  }
  return client(options)
}
