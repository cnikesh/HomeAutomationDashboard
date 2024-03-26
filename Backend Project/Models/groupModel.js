module.exports = (Sequelize, DataTypes) => {

    const Group = Sequelize.define("group",{
        GroupName:{
            type: DataTypes.STRING,
            allowNull: false
        },
        description:{
            type: DataTypes.TEXT
        }
    })

    return Group;
}