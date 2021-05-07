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

router.get("/api/workouts", (req, res) => {
    workout.find({}) //do i need -1 length here or just in api.js?
    .then((dbworkout)=>{
        res.json(dbworkout);
    })
    .catch(err => {
        res.json(err);
    })
  
});

router.get("/api/workouts/range", (req, res) => {
    workout.find({}) 
    .then((dbworkout)=>{
        res.json(dbworkout);
    })
    .catch(err => {
        res.json(err);
    })
  
});

// is this the same as workout.js line 22?
// db.scores.aggregate( [
//     {
//       $addFields: {
//         totalWorkouts: { $sum: "$workouts" } ,
//         totalQuiz: { $sum: "$quiz" }
//       }
//     },
//     {
//       $addFields: { totalScore:
//         { $add: [ "$totalHomework", "$totalQuiz", "$extraCredit" ] } }
//     }
//  ] )

module.exports = router;
