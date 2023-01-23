import userDatabase from "../database/mysqldb.js";
var sql = "SELECT * FROM userdata;";
let insert = `INSERT INTO userdata (Name, occupation, Location,created_at) VALUES (?,?,?,?);`;
export const getAllUser = async (req, res) => {
  await userDatabase.execute(sql, (err, result) => {
    if (err) console.log(err);
    try {
      res.status(200).json(result);
    } catch (err) {
      res.status(503).json({ err: err.message });
    }
  });
};

export const getUser = async (req, res) => {
    const {userid}=req.params;
    userDatabase.execute(sql,(err,result)=>{
        if(err) throw err;

        result.map(({id,Name,occupation,Location})=>{
           if(id===Number(userid)) {
            res.status(200).json({
                id,Name,occupation,Location
            })
           }else {
            res.status(404).json({"err":"not found"});
           }
        })
    })
};

export const addUser = async (req, res) => {
  const { Name, occupation, Location } = req.body;
  const created_at = new Date();

  userDatabase.query(
    insert,
    [Name, occupation, Location, created_at],
    (err, result) => {
      if (err) throw err;

      res.status(200).json(result);
    }
  );
};
