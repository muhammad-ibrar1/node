
module.exports = (sequelize, DataTypes) => {


  const User = sequelize.define('User', {
      id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
      },
      name: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: false,
      },
      email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
      },
      working_hour: {
        type: DataTypes.INTEGER,
        allowNull: true,
        unique: false,
      },
      shift_start_time: {
        type: DataTypes.TIME,
        allowNull: true,
        unique: false,
      },
      shift_end_time: {
        type: DataTypes.TIME,
        allowNull: true,
        unique: false,
      },
      managerId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },

  });


  User.associate = (models) => {
    User.belongsTo(models.Role);
  };
  
  User.belongsTo(User, { as: 'Manager', foreignKey: 'managerId' });
  User.hasMany(User, { as: 'Subordinates', foreignKey: 'managerId' });

  User.associate = function(models) {
    User.belongsToMany(models.Product, { through: models.UserProduct, constraints: false });
  };

  return User;
};
