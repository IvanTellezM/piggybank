module.exports = function(sequelize, DataTypes) {
  var Transaction = sequelize.define("Transaction", {
    title: {
      title: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1]
    },
    amount: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    time: {
      type: DataType.NOW
    }
  });

  Transaction.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    Transaction.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Transaction;
};
