import userDatabase from "../database/mysqldb.js";

export const getAllUser=async(req,res)=>{
    let sql="SELECT * FROM userdata;";

  await userDatabase.execute(sql,(err,result)=>{
    if(err) console.log(err);
      try {
         res.status(200).json(result);
      }catch(err) {
        res.status(503).json({"err":err.message});
      }
    })
}

export const getUser=async(req,res)=>{

}

export const addUser=async(req,res)=>{
    const {Name,occupation,Location}=req.body;
    const created_at=new Date();
let sql=`INSERT INTO userdata (Name, occupation, Location,created_at) VALUES (?,?,?,?);`
userDatabase.query(sql,[Name,occupation,Location,created_at],(err,result)=>{
 if (err) throw err;

 res.status(200).json(result);
})
}