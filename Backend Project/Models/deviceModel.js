module.exports = (Sequelize, DataTypes) => {

    const Device = Sequelize.define("device",{
        deviceName:{
            type: DataTypes.STRING,
            allowNull: false
        },
        deviceType: {
            type: DataTypes.STRING,
            allowNull: false
        },
        group:{
            type: DataTypes.INTEGER
        },
        deviceStatus:{
            type: DataTypes.STRING,
            allowNull: false
        },
        description:{
            type: DataTypes.TEXT
        }
    })

    return Device;
}