import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Post = sequelize.define(
  "post",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.TEXT,
    },
    descripcion: {
      type: DataTypes.TEXT,
    },
  },
  {
    timestamps: false,
  }
);