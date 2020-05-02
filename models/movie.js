module.exports = function(sequelize, DataTypes) {
  var Movies = sequelize.define("Movies", {
    // Giving the Author model a name of type STRING
    name: DataTypes.STRING,
    imdbID: DataTypes.STRING,

    genre: DataTypes.STRING,
    releaseDate : DataTypes.STRING,
    runtime: DataTypes.STRING,
    poster: DataTypes.STRING,
    type: DataTypes.STRING,

    uTellyUpdated: DataTypes.DATE,
    uTellyID: DataTypes.STRING,
    uTellyPicture: DataTypes.STRING,
    uTellyLocations: DataTypes.TEXT,
    views:{
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    } 
  });

  Movies.associate = function (models) {
    Movies.belongsToMany(models.User, { through: "UserMovies" });
  };

  return Movies;
};
