const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

// Se exporta una función que toma como argumento sequelize
// Instancia de Sequelize que se utiliza para establecer la conexión con la base de datos.

module.exports = (sequelize) => {
  // Defino el modelo
  // Primer argumento nombre del modelo
  // Segundo argumento objeto para describir las columnas de la tabla y sus propiedades
  sequelize.define('Videogame', {
    id: {
      type: DataTypes.UUID, // Identificador unico
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4 // Generar aleatoriamente por defecto en cada registro
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    platforms: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    background_image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    released: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    rating: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  }, { timestamps: false } // Se utiliza para desactivar las marcas automaticas createdAt y updatedAt
  );
};
