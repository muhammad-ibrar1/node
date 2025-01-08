
module.exports = (sequelize, DataTypes) => {
    const Role = sequelize.define('Role', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
    });

    Role.associate = (models) => {
        Role.hasMany(models.User);
    };


    // sequelize.sync({ force: true }).then(async () => {
    //     const manager = await Role.bulkCreate([{ name: 'Manager' },{ name: 'Software - Engineer' },{ name: 'Senior Software - Engineer' }]);
    //     return 
    // });
    
    return Role;
};
