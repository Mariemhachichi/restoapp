const Plat = require("../model/platModel");

module.exports ={
/**ADD**/
    addPlat: async( req,res) => {
        const titre = req.body.titre;
        const desc = req.body.desc;
        const prix = req.body.prix;
        try{
           const plat = new Plat({
                titre,
                desc,
                prix,
            });
            plat.save();
        res.json(plat);
        }catch(error){
            console.error(error.message);
        }
    },
/**GET**/
    getPlat:async(req,res)=>{
    try{
        const plat = await Plat.find()
        res.json(plat);
    }catch(error){
        console.error(error.message)
    }
},
/**DELETE**/
    deletePlat:async(req,res)=>{
    try{
        const plat = await Plat.findByIdAndDelete(req.params.id);
        res.json(plat)
    }catch(error){
        console.error(error.message)
    }
    },
/**UPDATE**/
    updatePlat:async(req,res)=>{
        try{
            const plat = await Plat.findByIdAndUpdate(
                req.params.id,
                req.body,
                {new:true}
                );
            res.json(plat);
        }catch(error){
            console.error(error.message);
        }
    },
};