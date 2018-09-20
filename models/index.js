const BottleTypes = require("./BottleTypesModel.js");
const Boxes = require("./BoxesModel.js");
const BrandedTypes = require("./BrandedTypesModel.js");
const Brands = require("./BrandsModel.js");
const Color = require("./ColorModel.js");
const Customers = require("./CustomersModel.js");
const FillLevels = require("./FillLevelsModel.js");
const FlavourMixes = require("./FlavourMixesModel");
const FlavourMixOrders = require("./FlavourMixOrdersModel");
const Flavours = require("./FlavoursModel.js");
const highestBatch = require("./highestBatchModel.js");
const Inventory = require("./InventoryModel.js");
const Labelling = require("./LabellingModel.js");
const Labels = require("./LabelsModel.js");
const Lids = require("./LidsModel.js");
const Log = require("./LogModel.js");
const Machines = require("./MachinesModel.js");
const Misc = require("./MiscModel.js");
const Mixing = require("./MixingModel.js");
const MixingTeam = require("./MixingTeamModel.js");
const Orders = require("./OrdersModel.js");
const Packages = require("./PackagesModel.js");
const Packaging = require("./PackagingModel.js");
const PremixColoring = require("./PremixColoringModel.js");
const PremixesTypes = require("./PremixesTypesModel.js");
const Printing = require("./PrintingModel.js");
const Production = require("./ProductionModel.js");
const Recipes = require("./RecipesModel.js");
const References = require("./ReferencesModel.js");
const SchedulesBreaks = require("./Schedules BreaksModel.js");
const SchedulesReference = require("./Schedules ReferenceModel");
const Schedules = require("./SchedulesModel.js");
const Shipping = require("./ShippingModel.js");
const UnbrandedTypes = require("./UnbrandedTypesModel.js");

module.exports = {
  BottleTypes,
  Boxes,
  BrandedTypes,
  Brands,
  Color,
  Customers,
  FillLevels,
  Flavours,
  FlavourMixes,
  FlavourMixOrders,
  highestBatch,
  Inventory,
  Labels,
  Labelling,
  Lids,
  Log,
  Machines,
  Misc,
  Mixing,
  MixingTeam,
  Orders,
  Packages,
  Packaging,
  PremixesTypes,
  PremixColoring,
  Printing,
  Production,
  Recipes,
  References,
  SchedulesBreaks,
  SchedulesReference,
  Schedules,
  Shipping,
  UnbrandedTypes
};
