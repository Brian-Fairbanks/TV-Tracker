module.exports = function(sequelize, DataTypes) {
    var Movies = sequelize.define("Movies", {
        // Giving the Author model a name of type STRING
        name: DataTypes.STRING,
        imdbID: DataTypes.STRING,

        uTellyUpdated: DataTypes.DATE,
        uTellyID: DataTypes.STRING,
        uTellyPicture: DataTypes.STRING,
        uTellyLocations: DataTypes.TEXT,
    });

    // Movies.associate = function (models) {
    //     // Associating Author with Posts
    //     // When an Author is deleted, also delete any associated Posts
    //     Movies.hasMany(models.Account, {
    //         onDelete: "cascade"
    //     });
    // };

    return Movies;
};
