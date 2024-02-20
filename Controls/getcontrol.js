const Sandbox = require("../Dbmodule/sandbox");

exports.getsBlackCofferData = async (req, res, next) => {
  try {
    const data = await Sandbox.find();
    res.status(200).json(data);
  }catch (error) {
    console.log(error);
    res.status(200).json([]);
  }
};