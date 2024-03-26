const db = require("../Models");

//Create main model

const Device = db.devices;

//CRUD

//Create
const addDevice = async (req, res) => {
  let data = {
    deviceName: req.body.deviceName,
    deviceType: req.body.deviceType,
    group: req.body.group,
    deviceStatus: req.body.deviceStatus,
    description: req.body.description,
  };

  const device = await Device.create(data);
  res.status(200).send(device);
};

// Read all

const getAllDevices = async (req, res) => {
  let devices = await Device.findAll({});
  res.status(200).send(devices);
};

// Read one

const getOneDevice = async (req, res) => {
  let id = req.params.id;
  let device = await Device.findOne({ where: { id: id } });
  res.status(200).send(device);
};

// Update

const updateDevice = async (req, res) => {
  let id = req.params.id;

  const device = await Device.update(req.body, { where: { id: id } });

  res.status(200).send(device);
};

// 5. Delete

const deleteDevice = async (req, res) => {
  let id = req.params.id;

  await Device.destroy({ where: { id: id } });

  res.status(200).send("Product is deleted !");
};

const getDevicesByGroup = async (req, res) => {
  let id = req.params.id;
  let devices = await Device.findAll({
    where: { group: id },
  });
  const groupedDevices = devices.reduce((acc, device) => {
    const { deviceType } = device;

    acc[deviceType] = acc[deviceType] || {
      typeName: deviceType,
      devices: [],
    };
    
    acc[deviceType].devices.push(device);

    return acc;
  }, {});

  const formattedData = Object.values(groupedDevices);
  res.status(200).send(formattedData);
};

module.exports = {
  addDevice,
  getAllDevices,
  getOneDevice,
  updateDevice,
  deleteDevice,
  getDevicesByGroup,
};
