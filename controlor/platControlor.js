const PLATS = require('../model/platModel')

module.exports ={
/**ADD**/
    addPlat:async(req,res)=>{
        const titre = req.body.titre
        const desc = req.body.desc
        const prix = req.body.prix
        try{
            plats = new PLATS({
                titre,desc,prix
            })
        await plats.save()
        res.json(plats)
        }catch(error){
            console.log(error.message)
        }
    },
/**GET**/
    getPlat:async(req,res)=>{
    try{
        plats = await PLATS.find()
        res.json(plats)
    }catch(error){
        console.log(error.message)
    }
},
/**DELETE**/
    deletePlat:async(req,res)=>{
    try{
        const plats = await PLATS.findByIdAndDelete(req.params.id)
        res.json(plats)
    }catch(error){
        console.log(error.message)
    }
    },
/**UPDATE**/
    updatePlat:async(req,res)=>{
        try{
            const plats = await PLATS.findByIdAndUpdate(req.params.id,req.body,{
                new:true
            })
            res.json(plats)
        }catch(error){
            console.log(error.message)
        }
    }
}