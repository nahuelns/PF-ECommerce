const {Router} = require("express");
const getEmbarVenta = require("./getEmbarcacionesVenta");
const getEmbarRenta = require("./getEmbarcacionesRenta");
const getAccesorios = require("./getAccesorios");
const getAccesoriosId = require("./getAccesoriosId");
const getEmbarVentaId = require("./getEmbarcacionesVentaid");
const getEmbarRentaId = require("./getEmbarcacionesRentaId");
const getTodo = require("./getTodo");
const getTodoId = require("./getTodoId");
const postEmbarcacionesRenta = require("./postEmbarcacionesRentas");
const postEmbarcacionesV = require("./postEmbarcacionesVentas");
const postAccesorios = require("./postAccesorios");

let router = Router();

router.use("/embarcacionesv", getEmbarVenta)
router.use("/embarcacionesvId", getEmbarVentaId)
router.use("/embarcacionesr", getEmbarRenta)
router.use("/embarcacionesrId", getEmbarRentaId)
router.use("/accesorios", getAccesorios)
router.use("/accesorio", getAccesoriosId)
router.use("/todos", getTodo)
router.use("/todo", getTodoId)
router.use("/embarcacionesR",postEmbarcacionesRenta)
router.use("/embrarcacionesV",postEmbarcacionesV)
router.use("/accesorio",postAccesorios)



module.exports= router;