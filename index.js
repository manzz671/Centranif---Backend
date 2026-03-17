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

app.get("/scripts/scriptone", async(c) => {
  let url = "https://raw.githubusercontent.com/manzz671/Clash-Of-Centranif.web/refs/heads/main/scripts/script.js"
  let res = await fetch(url, {method: "GET"})
  let result = await res.text()
  return c.text(result, 200, {
    "Content-Type": "application/javascript"
  })
})

app.get("/", async(c) => {
  let res = await fetch("/scripts/scriptone", {method: "GET"})
  let result = await res.text()
  return c.html(await result)
})

export default app;
