// export function getRepository(modelName: string) {
//   const DBModel = db.models[modelName];
//   const cancelQueryError = 'CancelQueryError';

//   const get = async (data: Optional<FindOneArgsType<M>, 'rejectOnEmpty'>) => {
//     return DBModel.findOne({ ...data, rejectOnEmpty: false });
//   };

//   const getAll = async (data: FindAllArgsType<M>) => {
//     return DBModel.findAll({ ...data });
//   };

//   const create = async (data: CreateArgsType<M>, options?: CreateOneOptionsType<M>) => {
//     return DBModel.create({ ...data, updated_at: new Date() }, { ...options, returning: true });
//   };

//   const getCount = async (options?: CountArgsType<M>) => {
//     return DBModel.count(options);
//   };

//   const bulkCreate = async (data: BulkCreateArgsType<M>, options?: BulkCreateOptionsType<M>) => {
//     return DBModel.bulkCreate(data, options);
//   };

//   const update = async (data: UpdateOneArgsType<M>, options?: Optional<UpdateOneOptionsType<M>, 'returning'>) => {
//     return DBModel.update(
//       {
//         ...data,
//         updated_at: new Date(),
//       },
//       {
//         returning: true,
//         individualHooks: true,
//         ...options,
//       },
//     );
//   };

//   const upsert = async (data: CreateArgsType<M>, options?: UpsertOptionsType<M>) => {
//     return DBModel.upsert(data, { returning: true, ...options });
//   };

//   const deleteData = async (options: DeleteArgsType<M>) => {
//     return DBModel.destroy(options);
//   };

//   const restore = async (options: RestoreArgsType<M>) => {
//     return DBModel.restore(options);
//   };

//   const getAllData = async (options?: FindAndCountAllArgsType<M>) => {
//     return DBModel.findAndCountAll({ ...options, distinct: true });
//   };


//   return {
//     DBModel,
//     get,
//     getAll,
//     getCount,
//     getAllData,
//     create,
//     update,
//     deleteData,
//     restore,
//     upsert,
//     bulkCreate,
//   };
// }