const express = require('express')
const router = express.Router();
const db = require('../db');


//http://localhost:4000/facilities/fetch_all_facilities             -Get-200
router.get("/fetch_all_facilities", async (req, resp) => {
  const dbdata = await db.promise().query('SELECT * FROM cars')
  // resp.send("Please do not worry Hanuman Ji is Here...!! for fetch_all_facilities for you")
  console.log(dbdata[0])
  resp.status(200).json(dbdata[0])
})
// http://localhost:4000/facilities/fetch_facility_byid/10         -Get-200
router.get("/fetch_facility_byid/:id", async (req, resp) => {
  const id = req.params.id
  const dbdata = await db.promise().query(`SELECT * FROM cars where id=${id}`)
  // resp.send("Please do not worry Hanuman Ji is Here...!! for fetch_facility_byid/:id  for you")
  resp.status(200).json(dbdata[0])
})
// http://localhost:4000/facilities/update_facility/10       -put-200
router.put("/update_facility/:id", async (req, resp) => {
  const id = req.params.id
  const dbdata = await db.promise().query(`SELECT * FROM cars where id=${id}`)
  // resp.send("Please do not worry Hanuman Ji is Here...!! for update_facility/:id  for you")
  resp.status(200).json(dbdata[0])
})
// http://localhost:4000/facilities/add_facility        -post-200
router.post("/add_facility", async (req, resp) => {
  const data = req.body()
  const dbdata = await db.promise().query(`SELECT * FROM cars where id=${id}`)
  // resp.send("Please do not worry Hanuman Ji is Here...!! for add_facility  for you")
  resp.status(200).json(dbdata[0])
})
// http://localhost:4000/facilities/remove_facility/10      -delete-200
router.delete("/remove_facility/:id", async (req, resp) => {
  const id = req.params.id
  const dbdata = await db.promise().query(`DELETE FROM cars where id=${id}`)
  resp.send("Please do not worry Hanuman Ji is Here...!! remove_facility/:id  deleted successfull")
  // resp.status(200).json(dbdata[0][0])
})



module.exports = router;