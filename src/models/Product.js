
module.exports = (sequelize, DataTypes) => {

    const Product = sequelize.define('Product', {
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
    });

   Product.associate = function(models) {
        Product.belongsToMany(models.User, { through: models.UserProduct, constraints: false });
    };

    return Product;
  };
  