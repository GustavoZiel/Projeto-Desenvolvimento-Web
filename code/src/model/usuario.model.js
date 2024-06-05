import { Model, DataTypes } from 'sequelize'
import sequelize from '../db/db.js'
import Pet from './pet.model.js'

class Usuario extends Model { }
Usuario.init({
    Nome_Conta: { type: DataTypes.STRING, primaryKey: true },
    Senha:{ type: DataTypes.STRING, allowNull: false },
    Nome_usuario: { type: DataTypes.STRING, allowNull: false },
    Data_nascimento: { type: DataTypes.DATE, allowNull: false },
    Cidade: { type: DataTypes.STRING, allowNull: false },
    Estado: { type: DataTypes.STRING, allowNull: false },
    Endereço: { type: DataTypes.STRING, allowNull: false },
    Preferências: { type: DataTypes.STRING, allowNull: false },
    Sobre: { type: DataTypes.STRING, allowNull: true },
    Foto: { type: DataTypes.STRING, allowNull: false },
    Num_tel: { type: DataTypes.STRING, allowNull: false },
    Site: { type: DataTypes.STRING, allowNull: true},
    Instagram: { type: DataTypes.STRING, allowNull: true },
    Facebook: { type: DataTypes.STRING, allowNull: true },
    Twitter: { type: DataTypes.STRING, allowNull: true },
    Whatsapp: { type: DataTypes.STRING, allowNull: true }
}, { sequelize: sequelize, timestamps: false })

Usuario.belongsToMany(Pet, { through: 'UsuarioPet' });
Pet.belongsToMany(Usuario, { through: 'UsuarioPet' });

export default Usuario