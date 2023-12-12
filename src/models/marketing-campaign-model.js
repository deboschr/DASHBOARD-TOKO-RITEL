import { DataTypes } from "sequelize";
import { sequelize } from "../../config/connection-database.js";

export const MarketingCampaignModel = sequelize.define(
	"marketing_campaign",
	{
		ID: {
			type: DataTypes.INTEGER,
			primaryKey: true,
		},
		Year_Birth: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		Education: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		Marital_Status: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		Income: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		Kidhome: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		Teenhome: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		Dt_Customer: {
			type: DataTypes.DATEONLY,
			allowNull: false,
		},
		Recency: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		Complain: {
			type: DataTypes.TINYINT,
			allowNull: false,
		},
		NumDealsPurchases: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		NumWebPurchases: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		NumCatalogPurchases: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		NumStorePurchases: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		NumWebVisitsMonth: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		MntWines: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		MntFruits: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		MntMeatProducts: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		MntFishProducts: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		MntSweetProducts: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		MntGoldProds: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		AcceptedCmp1: {
			type: DataTypes.TINYINT,
			allowNull: false,
		},
		AcceptedCmp2: {
			type: DataTypes.TINYINT,
			allowNull: false,
		},
		AcceptedCmp3: {
			type: DataTypes.TINYINT,
			allowNull: false,
		},
		AcceptedCmp4: {
			type: DataTypes.TINYINT,
			allowNull: false,
		},
		AcceptedCmp5: {
			type: DataTypes.TINYINT,
			allowNull: false,
		},
		Response: {
			type: DataTypes.TINYINT,
			allowNull: false,
		},
	},
	{
		tableName: "marketing_campaign",
		timestamps: false,
	}
);
