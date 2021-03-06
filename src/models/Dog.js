const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Dog', {
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    height: {
      type: DataTypes.STRING,
      allowNull:false
    },
    weight:{
      type:DataTypes.STRING,
      allowNull:false,
    },
    longevity: {
      type: DataTypes.STRING,
      allowNull:true
    },
    createdDB:{
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    }
  });
};
