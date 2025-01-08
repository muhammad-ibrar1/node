module.exports = (sequelize, DataTypes) => {
    const UserProduct = sequelize.define('UserProduct', {
        ProductId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        UserId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    }, {
        timestamps: false,
    });

    return UserProduct;
};