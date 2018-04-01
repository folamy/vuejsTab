module.exports = (sequlize, DataTypes) => 
  sequlize.define('User', {
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: DataTypes.STRING
  })