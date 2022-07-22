const mongoose = require("mongoose");


mongoose.connect("mongodb+srv://tara_fine_skills:Tara1181@fineskills.3y4dtrm.mongodb.net/?retryWrites=true&w=majority",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log("database has been connected success bros and sis.........");
}).catch(()=>{
    console.log("database not connot and error is "+ error);
})