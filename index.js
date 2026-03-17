import { Hono } from "hono"
let app = new Hono()


let mainPage = async() => {
  let res = await fetch("https://clash-of-centranif-web.pages.dev/")
  let result;
  if (!res.ok) {
    return "Gagal Mengambil File";
  } 
  
  result = await res.text()
  return result;
}

app.get("/", async(c) => {
  return c.html(await mainPage())
})

export default app;