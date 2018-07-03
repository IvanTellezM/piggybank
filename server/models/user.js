module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    // Giving the Author model a name of type STRING
    username: DataTypes.STRING,
    password: DataTypes.INTEGER,
    balance: DataTypes.INTEGER
  });

  User.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    User.hasMany(models.Transaction, {
      onDelete: "cascade"
    });
  };

  return User;
};
