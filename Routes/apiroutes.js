const router = require("express").Router();
const workout = require("../Models/workout.js")


router.post("/api/workouts", (req, res) => {
    //INSERT DATA 
  workout.create(req.body)
  .then(dbworkout=>{
      res.json(dbworkout);
  })
  .catch(err => {
      res.json(err);
  })
});

router.put("/api/workouts/:_id", (req, res) => {
    workout.updateOne(
        //where clause 
        { _id: req.params._id },
        //data array of objects 
         {$push:{exercises:req.body}},
         //running validators in my db 
          {new: true, runValidators: true}
          )
    .then(dbworkout=>{
        res.json(dbworkout);
    })
    .catch(err => {
        res.json(err);
    })
});

router.get("/api/workouts", async (req, res) => {
   
    
      try{
        const dbworkout = await workout.aggregate([
            {
              $addFields: {
                totalDuration: { $sum: "$exercises.duration" },
              },
            },
          ]);

        res.json(dbworkout); 
      }
      catch(err) {
        res.json(err); 
      } 

    
  
});

router.get("/api/workouts/range",async (req, res) => {
    try{
        const dbworkout = await workout.aggregate([
            {
              $addFields: {
                totalDuration: { $sum: "$exercises.duration" },
              },
            },
          ]).limit(7);

        res.json(dbworkout); 
      }
      catch(err) {
        res.json(err); 
      } 
  
});



module.exports = router;
